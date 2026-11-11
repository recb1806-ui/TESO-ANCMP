// =========================================================================================
// PASO C: MÓDULO INDEPENDIENTE "RENDIR MIS VIÁTICOS" (rendicion_viaticos.js)
// Directiva GFIN/DIR-01 Versión 10 + Resolución N° 000038-2025-MP-FN-GG-OGFIN
// Incluye registro de comprobantes por columna, control de DJ (30% Nac. / 20% Ext.),
// cuadre exacto de devolución e impresión limpia de los Anexos 02, 03, 04, 05 y 06 con Logo ANC.
// =========================================================================================

window.RENDICION_VIATICOS_STATE = {
  planillaActiva: {
    codigo_planilla: "PV-2026-001",
    tipo_comision: "NACIONAL_FUERA_DF", // 'NACIONAL_FUERA_DF', 'INTERNO_ADC_DF', 'SIN_VIATICOS_MISMO_DIA', 'INTERNACIONAL_USD'
    dni_comisionado: "45000001",
    nombres_comisionado: "Especialista de Control ANC-MP",
    cargo_comisionado: "Fiscal Provincial de Control / Especialista",
    dependencia: "Oficina de Administración y Finanzas",
    ciudad_destino: "Arequipa",
    fecha_inicio: new Date().toISOString().slice(0, 10),
    fecha_fin: new Date().toISOString().slice(0, 10),
    dias_comision: 2,
    // Montos otorgados según Planilla Anexo 01 / 07
    otorgado_viaticos_neto: 640.00, // Alojamiento, alimentación y movilidad
    otorgado_pasajes_terrestres: 0.00,
    otorgado_tua_corpac: 0.00,
    otorgado_pasajes_aereos: 0.00,
    otorgado_combustible: 0.00,
    otorgado_peaje: 0.00,
    otorgado_otros: 0.00,
    monto_total_otorgado: 640.00,
    porcentaje_max_dj: 30.0,
    tope_max_dj_soles: 192.00
  },
  comprobantes: [],
  djConceptos: {
    alojamiento: 0.00,
    alimentacion: 0.00,
    movilidad_local: 40.00,
    movilidad_embarque: 120.00
  },
  nroReciboCajaDevolucion: "RC-001-2026",
  nroMemoDevolucion: "MEMO-001-2026-ANC"
};

document.addEventListener("DOMContentLoaded", () => {
  inicializarModuloRendicionViaticos();
});

window.inicializarModuloRendicionViaticos = function() {
  cargarPlanillaSeleccionadaParaRendir();
  renderizarModuloRendicionViaticos();
};

function cargarPlanillaSeleccionadaParaRendir() {
  try {
    const selStr = localStorage.getItem("anc_rendicion_seleccionada_v1");
    if (selStr) {
      const sel = JSON.parse(selStr);
      const sol = sel.solicitud || {};
      const item = sel.comisionadoItem || {};
      const com = item.com || {};
      const calc = item.calc || {};

      const pctDJ = sol.tipo_comision === "INTERNACIONAL_USD" ? 20.0 : 30.0;
      const viatNeto = Number(calc.netoViatico || 640.00);

      window.RENDICION_VIATICOS_STATE.planillaActiva = {
        codigo_planilla: sol.codigo_planilla || "PV-2026-001",
        tipo_comision: sol.tipo_comision || "NACIONAL_FUERA_DF",
        dni_comisionado: com.dni || "45000001",
        nombres_comisionado: com.nombres || "Comisionado ANC-MP",
        cargo_comisionado: com.cargo || "Especialista ANC-MP",
        dependencia: sol.nombre_dependencia || "Sede Central ANC-MP",
        ciudad_destino: sol.destino_comision || "Arequipa",
        fecha_inicio: (sol.fecha_hora_salida || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
        fecha_fin: (sol.fecha_hora_retorno || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
        dias_comision: Number(sol.dias_viatico_reconocidos || 1),
        otorgado_viaticos_neto: viatNeto,
        otorgado_pasajes_terrestres: Number(com.pasajes_terrestres || 0),
        otorgado_tua_corpac: 0.00,
        otorgado_pasajes_aereos: 0.00,
        otorgado_combustible: Number(com.combustible || 0),
        otorgado_peaje: Number(com.peajes || 0),
        otorgado_otros: Number(com.otros_vehiculo || 0),
        monto_total_otorgado: Number(calc.totalRecibir || viatNeto),
        porcentaje_max_dj: pctDJ,
        tope_max_dj_soles: Number(((viatNeto * pctDJ) / 100).toFixed(2))
      };

      window.RENDICION_VIATICOS_STATE.djConceptos.movilidad_local = Number(calc.movLocalTotal || 0);
      window.RENDICION_VIATICOS_STATE.djConceptos.movilidad_embarque = Number(calc.movEmbarqueTotal || 0);
    }
  } catch (e) {
    console.warn("Aviso cargando planilla para rendición:", e);
  }
}

function renderizarModuloRendicionViaticos() {
  const cont = document.getElementById("contenedor-modulo-rendicion-viaticos");
  if (!cont) return;

  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const comisionesGuardadas = JSON.parse(localStorage.getItem("anc_viaticos_local_v1") || "[]");

  // Construir selector rápido de comisionados disponibles en comisiones creadas
  const opcionesComisionados = [];
  comisionesGuardadas.forEach((sol, idxS) => {
    (sol.comisionados || []).forEach((it, idxC) => {
      const clave = `${idxS}_${idxC}`;
      const seleccionado = (sol.codigo_planilla === pa.codigo_planilla && it.com.dni === pa.dni_comisionado) ? "selected" : "";
      opcionesComisionados.push(
        `<option value="${clave}" ${seleccionado}>[${sol.codigo_planilla}] ${it.com.nombres} (${sol.destino_comision} - Total: S/ ${Number(it.calc.totalRecibir).toFixed(2)})</option>`
      );
    });
  });

  cont.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
      <div>
        <h2 style="font-size:1.28rem; font-weight:900; color:#0F172A;">📑 Rendir mis Viáticos y Asignaciones</h2>
        <p style="font-size:0.82rem; color:#475569; font-weight:600;">
          Cuadre automático de comprobantes y generación exacta de los Anexos 02, 03, 04, 05 y 06 (Directiva V.10)
        </p>
      </div>
      <span class="badge-semaforo badge-verde">Plazo: 10 días hábiles Nac. / 15 días Ext.</span>
    </div>

    <!-- ALERTA NORMATIVA EXPRESA DE PROHIBICIÓN DE PROPINAS -->
    <div style="background:#FEF2F2; border:1.5px solid #EF4444; border-radius:12px; padding:10px 12px; margin-bottom:14px; font-size:0.79rem; color:#991B1B;">
      🚫 <strong>Resolución N° 000038-2025-MP-FN-GG-OGFIN (Numeral 5.2.9.4.c):</strong> No se reconocerán gastos por el otorgamiento de <strong>propinas</strong> contenidos en comprobantes de consumo, alojamiento o movilidad. Emitir facturas/boletas a RUC <strong>${window.ANC_STATE?.config?.ruc_institucional || '20131370301'}</strong>.
    </div>

    <!-- PASO 1: SELECCIONAR PLANILLA CREADA O EDITAR DATOS DEL COMISIONADO -->
    <div style="background:#F8FAFC; border:2px solid #CBD5E1; border-radius:16px; padding:14px; margin-bottom:16px;">
      <h3 style="font-size:0.95rem; font-weight:900; color:#0F172A; margin-bottom:8px;">
        👤 1. Seleccionar Planilla Asignada o Configurar Datos del Comisionado
      </h3>

      ${opcionesComisionados.length > 0 ? `
        <div style="margin-bottom:10px;">
          <label style="display:block; font-size:0.73rem; font-weight:800; color:#92400E; margin-bottom:3px;">CARGAR DESDE COMISIONES CREADAS EN LA APP:</label>
          <select id="rend-select-planilla-previa" onchange="alElegirPlanillaPreviaRendicion()" style="width:100%; padding:10px; border-radius:9px; border:2px solid #D97706; font-weight:800; font-size:0.84rem; background:#FFFBEB;">
            ${opcionesComisionados.join("")}
          </select>
        </div>
      ` : ""}

      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:8px;">
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">N° PLANILLA:</label>
          <input type="text" id="rend-codigo-planilla" value="${pa.codigo_planilla}" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:800; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">DNI COMISIONADO:</label>
          <input type="text" id="rend-dni" value="${pa.dni_comisionado}" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">MODALIDAD:</label>
          <select id="rend-tipo-comision" onchange="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:800; font-size:0.8rem;">
            <option value="NACIONAL_FUERA_DF" ${pa.tipo_comision === 'NACIONAL_FUERA_DF' ? 'selected' : ''}>Nacional (DJ máx 30%)</option>
            <option value="INTERNO_ADC_DF" ${pa.tipo_comision === 'INTERNO_ADC_DF' ? 'selected' : ''}>Interno ADC (DJ máx 30%)</option>
            <option value="SIN_VIATICOS_MISMO_DIA" ${pa.tipo_comision === 'SIN_VIATICOS_MISMO_DIA' ? 'selected' : ''}>Sin Viáticos Anexo 07</option>
            <option value="INTERNACIONAL_USD" ${pa.tipo_comision === 'INTERNACIONAL_USD' ? 'selected' : ''}>Exterior (DJ máx 20%)</option>
          </select>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:8px; margin-bottom:8px;">
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">APELLIDOS Y NOMBRES:</label>
          <input type="text" id="rend-nombres" value="${pa.nombres_comisionado}" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">CARGO:</label>
          <input type="text" id="rend-cargo" value="${pa.cargo_comisionado}" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">CIUDAD COMISIÓN:</label>
          <input type="text" id="rend-ciudad" value="${pa.ciudad_destino}" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:8px;">
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#334155;">FECHA DEL:</label>
          <input type="date" id="rend-fecha-ini" value="${pa.fecha_inicio}" onchange="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:7px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#334155;">FECHA AL:</label>
          <input type="date" id="rend-fecha-fin" value="${pa.fecha_fin}" onchange="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:7px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#065F46;">VIÁTICO OTORGADO (S/):</label>
          <input type="number" id="rend-otorgado-viatico" value="${pa.otorgado_viaticos_neto.toFixed(2)}" step="10" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:7px; border-radius:8px; border:1.5px solid #10B981; font-weight:900; font-size:0.84rem; background:#ECFDF5;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#1E40AF;">OTRAS ASIG. (S/):</label>
          <input type="number" id="rend-otorgado-otras" value="${(pa.otorgado_pasajes_terrestres + pa.otorgado_combustible + pa.otorgado_peaje + pa.otorgado_otros).toFixed(2)}" step="10" oninput="actualizarCabeceraPlanillaRendicion()" style="width:100%; padding:7px; border-radius:8px; border:1.5px solid #3B82F6; font-weight:900; font-size:0.84rem; background:#EFF6FF;" />
        </div>
      </div>
    </div>

    <!-- PASO 2: AGREGAR COMPROBANTES DE PAGO (FACTURAS, BOLETAS, BOLETOS DE VIAJE) -->
    <div style="background:#FFFFFF; border:2px solid #10B981; border-radius:16px; padding:14px; margin-bottom:16px;">
      <h3 style="font-size:0.95rem; font-weight:900; color:#0F172A; margin-bottom:10px;">
        🧾 2. Registrar Boletas, Facturas y Boletos de Viaje (Anexo 04 - Rendición Documentaria)
      </h3>

      <div style="display:grid; grid-template-columns:1fr 1.4fr 1.2fr; gap:8px; margin-bottom:8px;">
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">FECHA EMISIÓN:</label>
          <input type="date" id="comp-rend-fecha" value="${pa.fecha_inicio}" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">PROVEEDOR / ESTABLECIMIENTO:</label>
          <input type="text" id="comp-rend-proveedor" placeholder="Ej: Hotel / Restaurante / Cruz del Sur" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">N° DE COMPROBANTE (F/BV/Boleto):</label>
          <input type="text" id="comp-rend-numero" placeholder="Ej: F001-002341" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.82rem;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1.5fr 1fr 1fr; gap:8px; align-items:end; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">COLUMNA DEL ANEXO 04:</label>
          <select id="comp-rend-columna" style="width:100%; padding:9px; border-radius:8px; border:2px solid #10B981; font-weight:800; font-size:0.83rem; background:#ECFDF5;">
            <option value="HOSPEDAJE">1. Viáticos: Hospedaje (Obligatorio)</option>
            <option value="ALIMENTACION">2. Viáticos: Alimentación (Sin propinas)</option>
            <option value="MOVILIDAD">3. Viáticos: Movilidad con comprobante</option>
            <option value="PASAJES">4. Otras Asignaciones: Pasajes Terrestres</option>
            <option value="COMBUSTIBLE">5. Otras Asignaciones: Combustible</option>
            <option value="PEAJE">6. Otras Asignaciones: Peaje</option>
            <option value="OTROS">7. Otras Asignaciones: Seguro de Viaje / Otros</option>
          </select>
        </div>
        <div>
          <label style="display:block; font-size:0.72rem; font-weight:800; color:#334155;">IMPORTE (S/ SIN PROPINA):</label>
          <input type="number" id="comp-rend-importe" value="85.00" step="0.50" min="0" style="width:100%; padding:9px; border-radius:8px; border:2px solid #0F172A; font-weight:900; font-size:0.9rem;" />
        </div>
        <button type="button" onclick="agregarComprobanteRendicionViatico()" style="background:#10B981; color:#FFFFFF; border:none; border-radius:9px; padding:10px; font-size:0.83rem; font-weight:900; cursor:pointer;">
          + Añadir Comprobante
        </button>
      </div>

      <table class="anc-list-table">
        <thead>
          <tr>
            <th>N° / FECHA</th>
            <th>PROVEEDOR Y COMPROBANTE</th>
            <th>COLUMNA ANEXO 04</th>
            <th>IMPORTE (S/)</th>
          </tr>
        </thead>
        <tbody id="tbody-comprobantes-rendicion"></tbody>
      </table>
    </div>

    <!-- PASO 3: DECLARACIÓN JURADA (ANEXO 02 NACIONAL / ANEXO 03 EXTERIOR) -->
    <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:16px; padding:14px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
        <h3 style="font-size:0.95rem; font-weight:900; color:#78350F;">
          ✍️ 3. Declaración Jurada (Anexo 02 Nacional / Anexo 03 Exterior)
        </h3>
        <span id="badge-tope-dj-rendicion" class="badge-semaforo badge-amarillo">Tope DJ: S/ 0.00</span>
      </div>
      <p style="font-size:0.78rem; color:#92400E; margin-bottom:10px;">
        Aplica para movilidad local, movilidad de embarque (aeropuerto/terrapuerto) o lugares donde no es posible obtener comprobantes SUNAT, hasta el <strong>30% nacional</strong> (D.S. 007-2013-EF) o <strong>20% exterior</strong>.
      </p>

      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#78350F;">1. ALOJAMIENTO (DJ):</label>
          <input type="number" id="dj-rend-aloj" value="${window.RENDICION_VIATICOS_STATE.djConceptos.alojamiento}" step="5" min="0" oninput="recalcularCuadreRendicionViaticos()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #D97706; font-weight:800; background:#FFF;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#78350F;">2. ALIMENTACIÓN (DJ):</label>
          <input type="number" id="dj-rend-alim" value="${window.RENDICION_VIATICOS_STATE.djConceptos.alimentacion}" step="5" min="0" oninput="recalcularCuadreRendicionViaticos()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #D97706; font-weight:800; background:#FFF;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#78350F;">3. MOV. LOCAL (DJ):</label>
          <input type="number" id="dj-rend-mov-loc" value="${window.RENDICION_VIATICOS_STATE.djConceptos.movilidad_local}" step="2" min="0" oninput="recalcularCuadreRendicionViaticos()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #D97706; font-weight:800; background:#FFF;" />
        </div>
        <div>
          <label style="display:block; font-size:0.7rem; font-weight:800; color:#78350F;">4. MOV. EMBARQUE (DJ):</label>
          <input type="number" id="dj-rend-mov-emb" value="${window.RENDICION_VIATICOS_STATE.djConceptos.movilidad_embarque}" step="5" min="0" oninput="recalcularCuadreRendicionViaticos()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #D97706; font-weight:800; background:#FFF;" />
        </div>
      </div>
    </div>

    <!-- PASO 4: CUADRE AUTOMÁTICO AL CÉNTIMO Y GENERACIÓN DE LOS ANEXOS 02, 03, 04, 05 Y 06 -->
    <div id="panel-cuadre-final-rendicion" style="margin-bottom:14px;"></div>

    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
      <button type="button" onclick="imprimirAnexoRendicionViaticos('PAQUETE_COMPLETO')" style="grid-column:span 2; background:#0F172A; color:#F59E0B; border:2px solid #F59E0B; border-radius:12px; padding:13px; font-size:0.9rem; font-weight:900; cursor:pointer;">
        🖨️ Imprimir Paquete Completo Cuadrado (Anexos 04 + 02/03 + 05 + 06 en PDF)
      </button>
      <button type="button" onclick="imprimirAnexoRendicionViaticos('ANEXO_04')" style="background:#10B981; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        📄 Anexo 04: Rendición Documentaria
      </button>
      <button type="button" onclick="imprimirAnexoRendicionViaticos('ANEXO_02_03')" style="background:#D97706; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        ✍️ Anexo 02 / 03: Declaración Jurada
      </button>
      <button type="button" onclick="imprimirAnexoRendicionViaticos('ANEXO_05')" style="background:#3B82F6; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        💵 Anexo 05: Recibo de Caja (Devolución)
      </button>
      <button type="button" onclick="imprimirAnexoRendicionViaticos('ANEXO_06')" style="background:#475569; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        📊 Anexo 06: Análisis de Rendición
      </button>
      <button type="button" onclick="exportarRendicionViaticosExcel()" style="grid-column:span 2; background:#0284C7; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.8rem; font-weight:900; cursor:pointer;">
        📥 Exportar Rendición Documentaria a Excel (CSV)
      </button>
    </div>
  `;

  recalcularCuadreRendicionViaticos();
}

window.alElegirPlanillaPreviaRendicion = function() {
  const val = document.getElementById("rend-select-planilla-previa")?.value;
  if (!val) return;
  const [idxS, idxC] = val.split("_").map(Number);
  const comisiones = JSON.parse(localStorage.getItem("anc_viaticos_local_v1") || "[]");
  const sol = comisiones[idxS];
  if (sol && sol.comisionados && sol.comisionados[idxC]) {
    localStorage.setItem("anc_rendicion_seleccionada_v1", JSON.stringify({
      idxSol: idxS,
      idxCom: idxC,
      codigo_planilla: sol.codigo_planilla,
      solicitud: sol,
      comisionadoItem: sol.comisionados[idxC]
    }));
    cargarPlanillaSeleccionadaParaRendir();
    renderizarModuloRendicionViaticos();
  }
};

window.actualizarCabeceraPlanillaRendicion = function() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  pa.codigo_planilla = document.getElementById("rend-codigo-planilla")?.value || "PV-2026-001";
  pa.dni_comisionado = document.getElementById("rend-dni")?.value || "";
  pa.tipo_comision = document.getElementById("rend-tipo-comision")?.value || "NACIONAL_FUERA_DF";
  pa.nombres_comisionado = document.getElementById("rend-nombres")?.value || "";
  pa.cargo_comisionado = document.getElementById("rend-cargo")?.value || "";
  pa.ciudad_destino = document.getElementById("rend-ciudad")?.value || "";
  pa.fecha_inicio = document.getElementById("rend-fecha-ini")?.value || "";
  pa.fecha_fin = document.getElementById("rend-fecha-fin")?.value || "";
  pa.otorgado_viaticos_neto = Number(document.getElementById("rend-otorgado-viatico")?.value || 0);
  const otras = Number(document.getElementById("rend-otorgado-otras")?.value || 0);
  pa.otorgado_pasajes_terrestres = otras;
  pa.monto_total_otorgado = Number((pa.otorgado_viaticos_neto + otras).toFixed(2));
  pa.porcentaje_max_dj = pa.tipo_comision === "INTERNACIONAL_USD" ? 20.0 : (pa.tipo_comision === "SIN_VIATICOS_MISMO_DIA" ? 100.0 : 30.0);
  pa.tope_max_dj_soles = Number(((pa.otorgado_viaticos_neto * pa.porcentaje_max_dj) / 100).toFixed(2));

  recalcularCuadreRendicionViaticos();
};

window.agregarComprobanteRendicionViatico = function() {
  const fecha = document.getElementById("comp-rend-fecha")?.value || new Date().toISOString().slice(0, 10);
  const proveedor = document.getElementById("comp-rend-proveedor")?.value.trim() || "Proveedor / Establecimiento";
  const numero = document.getElementById("comp-rend-numero")?.value.trim() || "F001-0001";
  const col = document.getElementById("comp-rend-columna")?.value || "ALIMENTACION";
  const imp = Number(document.getElementById("comp-rend-importe")?.value || 0);

  if (imp <= 0) {
    alert("⚠️ Ingrese un importe válido mayor a S/ 0.00 (Recuerde no incluir propinas según Res. N° 000038-2025-MP-FN-GG-OGFIN).");
    return;
  }

  window.RENDICION_VIATICOS_STATE.comprobantes.push({
    id: Date.now(),
    fecha,
    proveedor,
    numero,
    columna: col,
    hospedaje: col === "HOSPEDAJE" ? imp : 0,
    alimentacion: col === "ALIMENTACION" ? imp : 0,
    movilidad: col === "MOVILIDAD" ? imp : 0,
    pasajes: col === "PASAJES" ? imp : 0,
    combustible: col === "COMBUSTIBLE" ? imp : 0,
    peaje: col === "PEAJE" ? imp : 0,
    otros: col === "OTROS" ? imp : 0,
    total: imp
  });

  document.getElementById("comp-rend-proveedor").value = "";
  document.getElementById("comp-rend-numero").value = "";
  recalcularCuadreRendicionViaticos();
};

window.eliminarComprobanteRendicion = function(idComp) {
  window.RENDICION_VIATICOS_STATE.comprobantes = window.RENDICION_VIATICOS_STATE.comprobantes.filter(c => c.id !== idComp);
  recalcularCuadreRendicionViaticos();
};

function obtenerResumenCalculadoRendicion() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const comps = window.RENDICION_VIATICOS_STATE.comprobantes;

  const djAloj = Number(document.getElementById("dj-rend-aloj")?.value || 0);
  const djAlim = Number(document.getElementById("dj-rend-alim")?.value || 0);
  const djMovLoc = Number(document.getElementById("dj-rend-mov-loc")?.value || 0);
  const djMovEmb = Number(document.getElementById("dj-rend-mov-emb")?.value || 0);

  window.RENDICION_VIATICOS_STATE.djConceptos = {
    alojamiento: djAloj,
    alimentacion: djAlim,
    movilidad_local: djMovLoc,
    movilidad_embarque: djMovEmb
  };

  const sumDoc = {
    hospedaje: comps.reduce((a, b) => a + b.hospedaje, 0),
    alimentacion: comps.reduce((a, b) => a + b.alimentacion, 0),
    movilidad: comps.reduce((a, b) => a + b.movilidad, 0),
    pasajes: comps.reduce((a, b) => a + b.pasajes, 0),
    combustible: comps.reduce((a, b) => a + b.combustible, 0),
    peaje: comps.reduce((a, b) => a + b.peaje, 0),
    otros: comps.reduce((a, b) => a + b.otros, 0)
  };
  sumDoc.totalDocumentado = Number((sumDoc.hospedaje + sumDoc.alimentacion + sumDoc.movilidad + sumDoc.pasajes + sumDoc.combustible + sumDoc.peaje + sumDoc.otros).toFixed(2));

  const totalDJ = Number((djAloj + djAlim + djMovLoc + djMovEmb).toFixed(2));
  const totalRendidoGeneral = Number((sumDoc.totalDocumentado + totalDJ).toFixed(2));
  const saldoDevolucion = Number((pa.monto_total_otorgado - totalRendidoGeneral).toFixed(2));
  const excedeDJ = totalDJ > (pa.tope_max_dj_soles + 0.01);
  const sinHospedaje = (pa.tipo_comision === "NACIONAL_FUERA_DF" || pa.tipo_comision === "INTERNO_ADC_DF") && (sumDoc.hospedaje + djAloj) === 0;

  return {
    sumDoc,
    djAloj,
    djAlim,
    djMovLoc,
    djMovEmb,
    totalDJ,
    totalRendidoGeneral,
    saldoDevolucion,
    excedeDJ,
    sinHospedaje
  };
}

window.recalcularCuadreRendicionViaticos = function() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const comps = window.RENDICION_VIATICOS_STATE.comprobantes;
  const r = obtenerResumenCalculadoRendicion();

  const tbody = document.getElementById("tbody-comprobantes-rendicion");
  if (tbody) {
    if (comps.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#64748B; padding:12px;">Aún no has agregado comprobantes. Usa los campos de arriba para registrar tus facturas o boletas.</td></tr>`;
    } else {
      tbody.innerHTML = comps.map((c, idx) => `
        <tr>
          <td><strong>#${String(idx + 1).padStart(2, "0")}</strong><br/><small>${c.fecha}</small></td>
          <td><strong>${c.proveedor}</strong><br/><small>N° ${c.numero}</small></td>
          <td><span class="badge-semaforo badge-verde" style="font-size:0.7rem;">${c.columna}</span></td>
          <td>
            <strong>${window.fmtSoles(c.total)}</strong>
            <button type="button" onclick="eliminarComprobanteRendicion(${c.id})" style="margin-left:6px; background:#FEE2E2; color:#991B1B; border:none; border-radius:5px; padding:2px 6px; font-size:0.7rem; font-weight:800; cursor:pointer;">✕</button>
          </td>
        </tr>
      `).join("");
    }
  }

  const badgeDJ = document.getElementById("badge-tope-dj-rendicion");
  if (badgeDJ) {
    badgeDJ.textContent = `DJ: ${window.fmtSoles(r.totalDJ)} / Tope ${pa.porcentaje_max_dj}%: ${window.fmtSoles(pa.tope_max_dj_soles)}`;
    badgeDJ.className = `badge-semaforo ${r.excedeDJ ? 'badge-rojo' : 'badge-verde'}`;
  }

  const panelCuadre = document.getElementById("panel-cuadre-final-rendicion");
  if (panelCuadre) {
    const devPositiva = r.saldoDevolucion > 0 ? r.saldoDevolucion : 0;
    panelCuadre.innerHTML = `
      <div style="background:#0F172A; color:#F8FAFC; border-radius:16px; padding:14px 16px;">
        <div style="font-size:0.78rem; font-weight:900; color:#F59E0B; text-transform:uppercase; margin-bottom:8px;">
          📊 4. Resumen Cuadrado de la Rendición (Anexo 04 y Anexo 06)
        </div>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px; text-align:center; background:rgba(255,255,255,0.06); padding:10px; border-radius:12px;">
          <div>
            <div style="font-size:0.68rem; color:#94A3B8;">MONTO RECIBIDO</div>
            <div style="font-size:1rem; font-weight:900; color:#FFF;">${window.fmtSoles(pa.monto_total_otorgado)}</div>
          </div>
          <div>
            <div style="font-size:0.68rem; color:#94A3B8;">RENDICIÓN DOC.</div>
            <div style="font-size:1rem; font-weight:900; color:#6EE7B7;">${window.fmtSoles(r.sumDoc.totalDocumentado)}</div>
          </div>
          <div>
            <div style="font-size:0.68rem; color:#94A3B8;">DECL. JURADA</div>
            <div style="font-size:1rem; font-weight:900; color:${r.excedeDJ ? '#FCA5A5' : '#FCD34D'};">${window.fmtSoles(r.totalDJ)}</div>
          </div>
          <div>
            <div style="font-size:0.68rem; color:#94A3B8;">DEVOLUCIÓN (ANEXO 05)</div>
            <div style="font-size:1rem; font-weight:900; color:#38BDF8;">${window.fmtSoles(devPositiva)}</div>
          </div>
        </div>
        ${r.excedeDJ ? `<div style="margin-top:8px; color:#FCA5A5; font-size:0.78rem; font-weight:800;">⚠️ Alerta: La Declaración Jurada (${window.fmtSoles(r.totalDJ)}) supera el tope legal del ${pa.porcentaje_max_dj}% (${window.fmtSoles(pa.tope_max_dj_soles)}).</div>` : ""}
        ${r.sinHospedaje ? `<div style="margin-top:6px; color:#FCD34D; font-size:0.78rem; font-weight:700;">📌 Nota Numeral 5.2.7: No se han registrado comprobantes de Hospedaje. Recuerde que de no sustentar alojamiento se descuenta S/ 80.00/día (Nacional) o S/ 40.00/día (ADC).</div>` : ""}
      </div>
    `;
  }
};

// =========================================================================================
// CONSTRUCTORES EXACTOS DE LOS ANEXOS 02, 03, 04, 05 Y 06 (DIRECTIVA VIÁTICOS V.10)
// =========================================================================================

function construirHTMLAnexo04Exacto() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const comps = window.RENDICION_VIATICOS_STATE.comprobantes;
  const r = obtenerResumenCalculadoRendicion();
  const devEfectivo = Math.max(0, r.saldoDevolucion);

  // Rellenar mínimo 12 filas visuales como el Anexo 04 de la página 38 de la Directiva V.10
  const filasComprobantes = [];
  const totalFilas = Math.max(12, comps.length);
  for (let i = 0; i < totalFilas; i++) {
    const c = comps[i];
    filasComprobantes.push(`
      <tr>
        <td style="text-align:center;">${String(i + 1).padStart(2, "0")}</td>
        <td style="text-align:center;">${c ? c.fecha : "&nbsp;"}</td>
        <td>${c ? c.proveedor : "&nbsp;"}</td>
        <td style="text-align:center;">${c ? c.numero : "&nbsp;"}</td>
        <td style="text-align:right;">${c && c.hospedaje ? c.hospedaje.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.alimentacion ? c.alimentacion.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.movilidad ? c.movilidad.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.pasajes ? c.pasajes.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.combustible ? c.combustible.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.peaje ? c.peaje.toFixed(2) : ""}</td>
        <td style="text-align:right;">${c && c.otros ? c.otros.toFixed(2) : ""}</td>
        <td style="text-align:right; font-weight:bold;">${c ? c.total.toFixed(2) : ""}</td>
      </tr>
    `);
  }

  return `
    <div class="hoja-oficial">
      ${window.MotorAnexosANC.cabeceraDirectivaHTML("GFIN/DIR-01", "NORMAS PARA LA ENTREGA DE FONDOS POR VIÁTICOS Y ASIGNACIONES PARA LA REALIZACIÓN DE COMISIONES DE SERVICIOS", "10")}
      <div class="titulo-anexo-num">ANEXO 04</div>
      <div class="titulo-anexo-nombre">RENDICIÓN DOCUMENTARIA DE VIÁTICOS Y ASIGNACIONES POR COMISIÓN DE SERVICIOS</div>

      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px; margin-bottom:10px;">
        <div style="flex:1; font-size:10.5px; line-height:1.5;">
          Yo, <strong>${pa.nombres_comisionado}</strong>, identificado(a) con DNI N° <strong>${pa.dni_comisionado}</strong>, en el cargo de <strong>${pa.cargo_comisionado}</strong> (${pa.dependencia}), manifiesto haber efectuado los gastos en la comisión de servicios llevada a cabo en la ciudad de <strong>${pa.ciudad_destino}</strong> del <strong>${pa.fecha_inicio}</strong> al <strong>${pa.fecha_fin}</strong>, según <strong>PLANILLA DE VIÁTICO N° ${pa.codigo_planilla}</strong>, que a continuación se detallan y sustentan con la documentación que se adjunta al presente:
        </div>
        <table class="tabla-directiva" style="width:230px; margin-bottom:0;">
          <tr><td><strong>Monto Otorgado:</strong></td><td style="text-align:right;">${window.fmtSoles(pa.monto_total_otorgado)}</td></tr>
          <tr><td><strong>Monto Rendido:</strong></td><td style="text-align:right;">${window.fmtSoles(r.totalRendidoGeneral)}</td></tr>
          <tr><td><strong>Devolución:</strong></td><td style="text-align:right;">${window.fmtSoles(devEfectivo)}</td></tr>
          <tr class="fila-subtotal"><td><strong>Saldo:</strong></td><td style="text-align:right;">S/ 0.00</td></tr>
        </table>
      </div>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th rowspan="2" style="width:4%;">N°</th>
            <th rowspan="2" style="width:9%;">Fecha</th>
            <th rowspan="2" style="width:20%;">Proveedor</th>
            <th rowspan="2" style="width:11%;">N° de Comprobante de pago</th>
            <th colspan="3" style="text-align:center;">Viáticos</th>
            <th colspan="4" style="text-align:center;">Otras Asignaciones</th>
            <th rowspan="2" style="width:9%; text-align:right;">Total (S/)</th>
          </tr>
          <tr>
            <th style="width:7%;">Hospedaje</th>
            <th style="width:7%;">Alimentación</th>
            <th style="width:7%;">Movilidad</th>
            <th style="width:7%;">Pasajes Terrestres</th>
            <th style="width:7%;">Combustible</th>
            <th style="width:6%;">Peaje</th>
            <th style="width:6%;">Seguro / Otros</th>
          </tr>
        </thead>
        <tbody>
          ${filasComprobantes.join("")}
          <tr class="fila-subtotal">
            <td colspan="4" style="text-align:right;">DECLARACIÓN JURADA (Anexo 02 / Anexo 03)</td>
            <td style="text-align:right;">${r.djAloj.toFixed(2)}</td>
            <td style="text-align:right;">${r.djAlim.toFixed(2)}</td>
            <td style="text-align:right;">${(r.djMovLoc + r.djMovEmb).toFixed(2)}</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">${r.totalDJ.toFixed(2)}</td>
          </tr>
          <tr class="fila-subtotal">
            <td colspan="4" style="text-align:right;">SUB TOTAL RENDICIÓN DE GASTOS (S/)</td>
            <td style="text-align:right;">${(r.sumDoc.hospedaje + r.djAloj).toFixed(2)}</td>
            <td style="text-align:right;">${(r.sumDoc.alimentacion + r.djAlim).toFixed(2)}</td>
            <td style="text-align:right;">${(r.sumDoc.movilidad + r.djMovLoc + r.djMovEmb).toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.pasajes.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.combustible.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.peaje.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.otros.toFixed(2)}</td>
            <td style="text-align:right;">${r.totalRendidoGeneral.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="4" style="text-align:right;"><strong>MONTO ASIGNADO (S/)</strong></td>
            <td colspan="3" style="text-align:center;">Viáticos: ${window.fmtSoles(pa.otorgado_viaticos_neto)}</td>
            <td colspan="4" style="text-align:center;">Otras Asignaciones: ${window.fmtSoles(pa.monto_total_otorgado - pa.otorgado_viaticos_neto)}</td>
            <td style="text-align:right; font-weight:bold;">${pa.monto_total_otorgado.toFixed(2)}</td>
          </tr>
          <tr class="fila-total-general">
            <td colspan="11" style="text-align:right;">SALDO / DEVOLUCIÓN EN EFECTIVO (S/)</td>
            <td style="text-align:right;">${devEfectivo.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:24px;">
        <table class="tabla-directiva" style="width:260px; margin-bottom:0;">
          <thead><tr><th colspan="2">TOTAL RENDICIÓN DE GASTOS</th></tr></thead>
          <tbody>
            <tr><td>Monto Recibido</td><td style="text-align:right;">${window.fmtSoles(pa.monto_total_otorgado)}</td></tr>
            <tr><td>Monto Rendido</td><td style="text-align:right;">${window.fmtSoles(r.totalRendidoGeneral)}</td></tr>
            <tr><td>Devolución</td><td style="text-align:right;">${window.fmtSoles(devEfectivo)}</td></tr>
            <tr class="fila-total-general"><td>Total Cuadrado</td><td style="text-align:right;">${window.fmtSoles(r.totalRendidoGeneral + devEfectivo)}</td></tr>
          </tbody>
        </table>

        <div style="text-align:center; width:42%; border-top:1.5px solid #000; padding-top:6px;">
          <strong>Firma del Comisionado (Digital o Manual)</strong><br/>
          Nombre: ${pa.nombres_comisionado}<br/>
          DNI N°: ${pa.dni_comisionado} • Fecha: ${new Date().toLocaleDateString("es-PE")}
        </div>
      </div>
    </div>
  `;
}

function construirHTMLAnexo02o03Exacto() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const r = obtenerResumenCalculadoRendicion();
  const esExterior = pa.tipo_comision === "INTERNACIONAL_USD";

  return `
    <div class="hoja-oficial">
      ${window.MotorAnexosANC.cabeceraDirectivaHTML("GFIN/DIR-01", "NORMAS PARA LA ENTREGA DE FONDOS POR VIÁTICOS Y ASIGNACIONES PARA LA REALIZACIÓN DE COMISIONES DE SERVICIOS", "10")}
      <div class="titulo-anexo-num">${esExterior ? "ANEXO 03" : "ANEXO 02"}</div>
      <div class="titulo-anexo-nombre">
        ${esExterior
          ? "DECLARACIÓN JURADA DE VIÁTICOS Y ASIGNACIONES POR COMISIÓN DE SERVICIOS EN EL EXTERIOR DEL PAÍS"
          : "DECLARACIÓN JURADA DE VIÁTICOS / NO VIÁTICOS Y ASIGNACIONES POR COMISIÓN DE SERVICIOS EN EL TERRITORIO NACIONAL"}
      </div>

      <p style="font-size:11.5px; line-height:1.65; text-align:justify; margin:16px 0;">
        Yo, <strong>${pa.nombres_comisionado}</strong>, identificado(a) con DNI n.° <strong>${pa.dni_comisionado}</strong>, en el cargo de <strong>${pa.cargo_comisionado}</strong> de la Unidad Ejecutora 012: Autoridad Nacional de Control del Ministerio Público (${pa.dependencia}), <strong>DECLARO BAJO JURAMENTO</strong> haber efectuado la Comisión de Servicios a la ciudad de <strong>${pa.ciudad_destino}</strong> los días del <strong>${pa.fecha_inicio}</strong> al <strong>${pa.fecha_fin}</strong>, en cumplimiento del numeral 71.3 del artículo 71° de la Directiva n.° 001-2007-EF/77.15, modificada por Resolución Directoral n.° 017-2007-EF/77.15, por los siguientes conceptos e importes en los cuales no ha sido posible obtener comprobantes de pago reconocidos por la SUNAT:
      </p>

      <table class="tabla-directiva" style="margin:18px 0;">
        <thead>
          <tr>
            <th style="width:12%; text-align:center;">N° DE ORDEN</th>
            <th style="width:20%; text-align:center;">FECHA</th>
            <th style="width:48%;">DETALLE / CONCEPTO SUSTENTADO</th>
            <th style="width:20%; text-align:right;">IMPORTE (S/)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">1</td>
            <td style="text-align:center;">${pa.fecha_inicio} al ${pa.fecha_fin}</td>
            <td>Alojamiento (Zonas sin emisión de comprobantes)</td>
            <td style="text-align:right;">${r.djAloj.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="text-align:center;">2</td>
            <td style="text-align:center;">${pa.fecha_inicio} al ${pa.fecha_fin}</td>
            <td>Alimentación (Zonas rurales / sin emisión de comprobantes)</td>
            <td style="text-align:right;">${r.djAlim.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="text-align:center;">3</td>
            <td style="text-align:center;">${pa.fecha_inicio} al ${pa.fecha_fin}</td>
            <td>Movilidad Local (Desplazamientos internos durante la comisión)</td>
            <td style="text-align:right;">${r.djMovLoc.toFixed(2)}</td>
          </tr>
          <tr>
            <td style="text-align:center;">4</td>
            <td style="text-align:center;">${pa.fecha_inicio} / ${pa.fecha_fin}</td>
            <td>Movilidad de Embarque (Traslado hacia y desde el Aeropuerto / Terrapuerto)</td>
            <td style="text-align:right;">${r.djMovEmb.toFixed(2)}</td>
          </tr>
          <tr class="fila-total-general">
            <td colspan="3" style="text-align:right;">TOTAL DECLARACIÓN JURADA S/</td>
            <td style="text-align:right;">${window.fmtSoles(r.totalDJ)}</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:11px; margin-top:14px;">
        EN FE DE LO CUAL FIRMO LA PRESENTE DECLARACIÓN EN LA CIUDAD DE LIMA, EL ${new Date().toLocaleDateString("es-PE")}.
      </p>

      <div class="bloque-firmas" style="margin-top:65px;">
        <div class="linea-firma" style="width:45%;">
          <strong>Firma del Comisionado (Digital o Manual)</strong><br/>
          Nombre: ${pa.nombres_comisionado}<br/>
          DNI n.°: ${pa.dni_comisionado}
        </div>
      </div>

      <div class="notas-pie" style="margin-top:34px;">
        <strong>Nota (Anexo 02 / Anexo 03 Directiva V.10):</strong> El documento que se suscribe para sustentar los gastos solo es usado cuando no es posible obtener comprobantes de pago reconocidos y emitidos de conformidad con lo dispuesto por la SUNAT, en el lugar de la comisión de servicio donde no existen restaurantes, hoteles o empresas de transportes formales que otorguen los citados comprobantes, así como para la movilidad local y de embarque. Dicha Declaración Jurada será presentada sólo hasta el ${pa.porcentaje_max_dj}% del monto asignado por concepto de viáticos (${window.fmtSoles(pa.tope_max_dj_soles)}), según Decreto Supremo n.° 007-2013-EF.
      </div>
    </div>
  `;
}

function construirHTMLAnexo05Exacto() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const r = obtenerResumenCalculadoRendicion();
  const devEfectivo = Math.max(0, r.saldoDevolucion);

  return `
    <div class="hoja-oficial">
      ${window.MotorAnexosANC.cabeceraDirectivaHTML("GFIN/DIR-01", "NORMAS PARA LA ENTREGA DE FONDOS POR VIÁTICOS Y ASIGNACIONES PARA LA REALIZACIÓN DE COMISIONES DE SERVICIOS", "10")}
      <div class="titulo-anexo-num">ANEXO 05</div>
      <div class="titulo-anexo-nombre">RECIBO DE CAJA</div>

      <div style="border:2px solid #000; padding:22px; margin-top:16px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:bold; margin-bottom:18px;">
          <span>RECIBO DE CAJA N° ${window.RENDICION_VIATICOS_STATE.nroReciboCajaDevolucion}</span>
          <span>IMPORTE DEVUELTO: ${window.fmtSoles(devEfectivo)}</span>
        </div>

        <table class="tabla-directiva" style="margin-bottom:18px;">
          <tr>
            <td style="width:30%;"><strong>Se recibió del comisionado:</strong></td>
            <td>${pa.nombres_comisionado}</td>
          </tr>
          <tr>
            <td><strong>Cargo / Dependencia:</strong></td>
            <td>${pa.cargo_comisionado} (${pa.dependencia})</td>
          </tr>
          <tr>
            <td><strong>D.N.I. N°:</strong></td>
            <td>${pa.dni_comisionado}</td>
          </tr>
          <tr>
            <td><strong>La cantidad de:</strong></td>
            <td><strong>${window.fmtSoles(devEfectivo)}</strong></td>
          </tr>
          <tr>
            <td><strong>Por concepto de:</strong></td>
            <td>Devolución en efectivo de menor gasto / saldo no utilizado de la Planilla de Viáticos N° ${pa.codigo_planilla} (Comisión a ${pa.ciudad_destino} del ${pa.fecha_inicio} al ${pa.fecha_fin}).</td>
          </tr>
        </table>

        <div style="text-align:right; margin-top:14px; font-size:11px;">
          Fecha de recepción: ${new Date().toLocaleDateString("es-PE")}
        </div>

        <div class="bloque-firmas" style="margin-top:65px;">
          <div class="linea-firma" style="width:42%;">
            <strong>ENTREGUÉ CONFORME (COMISIONADO)</strong><br/>
            ${pa.nombres_comisionado} • DNI: ${pa.dni_comisionado}
          </div>
          <div class="linea-firma" style="width:42%;">
            <strong>RECIBÍ CONFORME (FIRMA Y SELLO ENCARGADO DE CAJA CHICA / TESORERÍA)</strong><br/>
            UE 012: ANC-MP
          </div>
        </div>
      </div>
    </div>
  `;
}

function construirHTMLAnexo06Exacto() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const r = obtenerResumenCalculadoRendicion();
  const devEfectivo = Math.max(0, r.saldoDevolucion);
  const recViat = Number((r.sumDoc.hospedaje + r.sumDoc.alimentacion + r.sumDoc.movilidad + r.totalDJ).toFixed(2));

  return `
    <div class="hoja-oficial">
      ${window.MotorAnexosANC.cabeceraDirectivaHTML("GFIN/DIR-01", "NORMAS PARA LA ENTREGA DE FONDOS POR VIÁTICOS Y ASIGNACIONES PARA LA REALIZACIÓN DE COMISIONES DE SERVICIOS", "10")}
      <div class="titulo-anexo-num">ANEXO 06</div>
      <div class="titulo-anexo-nombre">ANÁLISIS DE RENDICIÓN DE VIÁTICOS Y ASIGNACIONES POR COMISIÓN DE SERVICIOS</div>

      <table class="tabla-directiva" style="margin-bottom:12px;">
        <tr>
          <td style="width:55%;"><strong>APELLIDOS Y NOMBRES:</strong> ${pa.nombres_comisionado}</td>
          <td style="width:45%;"><strong>PLANILLA N°:</strong> ${pa.codigo_planilla}</td>
        </tr>
        <tr>
          <td><strong>DEPENDENCIA:</strong> ${pa.dependencia}</td>
          <td><strong>CARGO:</strong> ${pa.cargo_comisionado}</td>
        </tr>
        <tr>
          <td><strong>LUGAR DE COMISIÓN:</strong> ${pa.ciudad_destino}</td>
          <td><strong>PERIODO:</strong> DESDE ${pa.fecha_inicio} HASTA ${pa.fecha_fin}</td>
        </tr>
      </table>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th style="width:56%;">1) OTORGAMIENTO DE VIÁTICOS Y ASIGNACIONES</th>
            <th style="width:22%; text-align:right;">OTORGADOS (S/)</th>
            <th style="width:22%; text-align:right;">RECONOCIDOS (S/)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a) ALOJAMIENTO, ALIMENTACIÓN Y MOVILIDAD LOCAL / EMBARQUE</td>
            <td style="text-align:right;">${pa.otorgado_viaticos_neto.toFixed(2)}</td>
            <td style="text-align:right;">${recViat.toFixed(2)}</td>
          </tr>
          <tr>
            <td>b) PASAJES TERRESTRES / FLUVIAL / ACÉMILA</td>
            <td style="text-align:right;">${pa.otorgado_pasajes_terrestres.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.pasajes.toFixed(2)}</td>
          </tr>
          <tr>
            <td>c) TUA CORPAC</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">0.00</td>
          </tr>
          <tr>
            <td>d) PASAJES AÉREOS</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right;">0.00</td>
          </tr>
          <tr>
            <td>e) COMBUSTIBLE</td>
            <td style="text-align:right;">${pa.otorgado_combustible.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.combustible.toFixed(2)}</td>
          </tr>
          <tr>
            <td>f) PEAJE</td>
            <td style="text-align:right;">${pa.otorgado_peaje.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.peaje.toFixed(2)}</td>
          </tr>
          <tr>
            <td>g) OTROS</td>
            <td style="text-align:right;">${pa.otorgado_otros.toFixed(2)}</td>
            <td style="text-align:right;">${r.sumDoc.otros.toFixed(2)}</td>
          </tr>
          <tr class="fila-subtotal">
            <td>TOTAL OTORGADO VS. RECONOCIDO (S/)</td>
            <td style="text-align:right;">${pa.monto_total_otorgado.toFixed(2)}</td>
            <td style="text-align:right;">${r.totalRendidoGeneral.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <table class="tabla-directiva">
        <thead>
          <tr><th colspan="2">2) RENDICIÓN DE GASTOS POR COMISIÓN DE SERVICIOS</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="width:75%;">a) RENDICIÓN DOCUMENTADA DE GASTOS (Anexo 04)</td>
            <td style="width:25%; text-align:right;">${window.fmtSoles(r.sumDoc.totalDocumentado)}</td>
          </tr>
          <tr>
            <td>b) DECLARACIÓN JURADA DE GASTOS (Anexo 02 / Anexo 03)</td>
            <td style="text-align:right;">${window.fmtSoles(r.totalDJ)}</td>
          </tr>
          <tr class="fila-subtotal">
            <td>TOTAL RENDIDO (a + b)</td>
            <td style="text-align:right;">${window.fmtSoles(r.totalRendidoGeneral)}</td>
          </tr>
        </tbody>
      </table>

      <table class="tabla-directiva">
        <thead>
          <tr><th colspan="2">3) RESUMEN Y 4) DEVOLUCIÓN</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="width:75%;">a) VIÁTICOS Y ASIGNACIONES OTORGADOS</td>
            <td style="width:25%; text-align:right;">${window.fmtSoles(pa.monto_total_otorgado)}</td>
          </tr>
          <tr>
            <td>b) VIÁTICOS Y ASIGNACIONES RECONOCIDOS</td>
            <td style="text-align:right;">${window.fmtSoles(r.totalRendidoGeneral)}</td>
          </tr>
          <tr class="fila-total-general">
            <td>DEVOLUCIÓN EN EFECTIVO SEGÚN RECIBO DE CAJA N° ${window.RENDICION_VIATICOS_STATE.nroReciboCajaDevolucion}</td>
            <td style="text-align:right;">${window.fmtSoles(devEfectivo)}</td>
          </tr>
        </tbody>
      </table>

      <div class="bloque-firmas" style="margin-top:55px;">
        <div class="linea-firma" style="width:40%;">
          <strong>ENCARGADO DE REVISIÓN (CAJA CHICA / ADMINISTRACIÓN)</strong><br/>
          ${pa.dependencia}
        </div>
        <div class="linea-firma" style="width:40%;">
          <strong>V°B° UNIDAD DE CONTABILIDAD / TESORERÍA</strong><br/>
          UE 012: ANC-MP
        </div>
      </div>
    </div>
  `;
}

window.imprimirAnexoRendicionViaticos = function(tipoFormato) {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  let html = "";
  let orientacion = "portrait";

  if (tipoFormato === "ANEXO_04") {
    html = construirHTMLAnexo04Exacto();
    orientacion = "landscape";
  } else if (tipoFormato === "ANEXO_02_03") {
    html = construirHTMLAnexo02o03Exacto();
  } else if (tipoFormato === "ANEXO_05") {
    html = construirHTMLAnexo05Exacto();
  } else if (tipoFormato === "ANEXO_06") {
    html = construirHTMLAnexo06Exacto();
  } else {
    // Paquete completo cuadrado: Anexo 04 + Anexo 02/03 + Anexo 05 + Anexo 06
    html = construirHTMLAnexo04Exacto() + construirHTMLAnexo02o03Exacto() + construirHTMLAnexo05Exacto() + construirHTMLAnexo06Exacto();
  }

  window.MotorAnexosANC.imprimirDocumentoOficial(`Rendicion_${pa.codigo_planilla}_${pa.dni_comisionado}`, html, orientacion);
};

window.exportarRendicionViaticosExcel = function() {
  const pa = window.RENDICION_VIATICOS_STATE.planillaActiva;
  const comps = window.RENDICION_VIATICOS_STATE.comprobantes;
  const r = obtenerResumenCalculadoRendicion();

  const cabeceras = ["NRO_ORDEN", "PLANILLA", "COMISIONADO", "DNI", "FECHA_DOC", "PROVEEDOR", "NRO_COMPROBANTE", "HOSPEDAJE", "ALIMENTACION", "MOVILIDAD", "PASAJES", "COMBUSTIBLE", "PEAJE", "OTROS", "TOTAL_SOLES"];
  const filas = comps.map((c, idx) => [
    idx + 1,
    pa.codigo_planilla,
    pa.nombres_comisionado,
    pa.dni_comisionado,
    c.fecha,
    c.proveedor,
    c.numero,
    c.hospedaje.toFixed(2),
    c.alimentacion.toFixed(2),
    c.movilidad.toFixed(2),
    c.pasajes.toFixed(2),
    c.combustible.toFixed(2),
    c.peaje.toFixed(2),
    c.otros.toFixed(2),
    c.total.toFixed(2)
  ]);

  filas.push([
    "DJ", pa.codigo_planilla, pa.nombres_comisionado, pa.dni_comisionado, pa.fecha_fin,
    "DECLARACIÓN JURADA (ANEXO 02 / 03)", "DJ",
    r.djAloj.toFixed(2), r.djAlim.toFixed(2), (r.djMovLoc + r.djMovEmb).toFixed(2),
    "0.00", "0.00", "0.00", "0.00", r.totalDJ.toFixed(2)
  ]);

  filas.push([
    "TOTAL", pa.codigo_planilla, pa.nombres_comisionado, pa.dni_comisionado, "",
    "SUB TOTAL RENDICIÓN DE GASTOS", "",
    (r.sumDoc.hospedaje + r.djAloj).toFixed(2),
    (r.sumDoc.alimentacion + r.djAlim).toFixed(2),
    (r.sumDoc.movilidad + r.djMovLoc + r.djMovEmb).toFixed(2),
    r.sumDoc.pasajes.toFixed(2),
    r.sumDoc.combustible.toFixed(2),
    r.sumDoc.peaje.toFixed(2),
    r.sumDoc.otros.toFixed(2),
    r.totalRendidoGeneral.toFixed(2)
  ]);

  window.MotorAnexosANC.exportarExcelCSV(`Rendicion_Viaticos_${pa.codigo_planilla}_${pa.dni_comisionado}.csv`, cabeceras, filas);
};
