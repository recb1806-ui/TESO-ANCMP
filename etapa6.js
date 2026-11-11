// =========================================================================================
// ETAPA 6 (PASO D3 OPTIMIZADO): VISTA PROPIA "ARQUEO DE CAJA" (ANEXOS 02, 14, 15 Y 16)
// + PANEL ADMINISTRADOR NACIONAL CON IMPRESIÓN LIMPIA (motor_anexos.js) - UE 012: ANC-MP
// =========================================================================================

window.ARQUEO_DENOMINACIONES = {
  monedas: [
    { val: 0.05, label: "S/ 0.05", cant: 0 },
    { val: 0.10, label: "S/ 0.10", cant: 0 },
    { val: 0.20, label: "S/ 0.20", cant: 0 },
    { val: 0.50, label: "S/ 0.50", cant: 0 },
    { val: 1.00, label: "S/ 1.00", cant: 0 },
    { val: 2.00, label: "S/ 2.00", cant: 0 },
    { val: 5.00, label: "S/ 5.00", cant: 0 }
  ],
  billetes: [
    { val: 10.00, label: "S/ 10.00", cant: 0 },
    { val: 20.00, label: "S/ 20.00", cant: 0 },
    { val: 50.00, label: "S/ 50.00", cant: 0 },
    { val: 100.00, label: "S/ 100.00", cant: 0 },
    { val: 200.00, label: "S/ 200.00", cant: 0 }
  ]
};

window.ADMIN_STATE = {
  tabActiva: "GASTOS_CAJA",
  filtroDependencia: "TODAS",
  filtroEstado: "TODOS",
  busquedaTexto: "",
  gastosConsolidados: [],
  viaticosConsolidados: []
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarVistaArqueoIndependiente();
  renderizarModuloAdministrador();
});

// =========================================================================================
// 1. MÓDULO INDEPENDIENTE: ARQUEO DE CAJA (BOTÓN PROPIO EN EL MENÚ PRINCIPAL)
// Genera exactamente los Anexos 14, 15, 02 y 16 de la Directiva de Caja Chica V.08
// =========================================================================================
window.renderizarVistaArqueoIndependiente = function() {
  const cont = document.getElementById("contenedor-modulo-arqueo-caja");
  if (!cont) return;

  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { unidad_id: 12, codigo_dependencia: "AP-OAF", nombre_dependencia: "Oficina de Administración y Finanzas", presupuesto_caja_chica: 15000, saldo_caja_chica: 15000, usuario_nombre: "Encargado Único" };
  const misGastos = (window.CAJA_STATE?.gastosRegistrados || []).filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );
  const docsRendidosSoles = misGastos.filter(g => g.modalidad_fondo !== "VALE_PROVISIONAL").reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const valesProvSoles = misGastos.filter(g => g.modalidad_fondo === "VALE_PROVISIONAL").reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);

  cont.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
      <div>
        <h2 style="font-size:1.25rem; font-weight:900; color:#0F172A;">🔍 Arqueo de Caja Chica y Viáticos</h2>
        <p style="font-size:0.82rem; color:#475569; font-weight:600;">
          Directiva de Caja Chica V.08 (Numeral 5.2.1.6) • Dependencia: <strong>[${p.codigo_dependencia}] ${p.nombre_dependencia}</strong>
        </p>
      </div>
      <span class="badge-semaforo badge-verde">Anexos 02, 14, 15 y 16</span>
    </div>

    <!-- DATOS GENERALES DEL ACTA DE ARQUEO (ANEXO 16) -->
    <div style="background:#F8FAFC; border:2px solid #CBD5E1; border-radius:14px; padding:12px; margin-bottom:14px;">
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:8px;">
        <div>
          <label style="font-size:0.7rem; font-weight:800; color:#334155;">1. FONDO ASIGNADO (S/):</label>
          <input type="number" id="arq-ind-asignado" value="${Number(p.presupuesto_caja_chica || 15000).toFixed(2)}" oninput="recalcularArqueoIndependiente()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #0F172A; font-weight:900;" />
        </div>
        <div>
          <label style="font-size:0.7rem; font-weight:800; color:#334155;">4. VALES PROV. (ANEXO 02):</label>
          <input type="number" id="arq-ind-vales" value="${valesProvSoles.toFixed(2)}" oninput="recalcularArqueoIndependiente()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #D97706; font-weight:800;" />
        </div>
        <div>
          <label style="font-size:0.7rem; font-weight:800; color:#334155;">5. DOCS. RENDIDOS (ANEXO 15):</label>
          <input type="number" id="arq-ind-docs" value="${docsRendidosSoles.toFixed(2)}" oninput="recalcularArqueoIndependiente()" style="width:100%; padding:8px; border-radius:8px; border:1.5px solid #3B82F6; font-weight:800;" />
        </div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <div>
          <label style="font-size:0.7rem; font-weight:800; color:#334155;">FUNCIONARIO / SERVIDOR QUE EFECTÚA EL ARQUEO:</label>
          <input type="text" id="arq-ind-auditor" value="Representante de Contabilidad / Tesorería / Administración" style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;" />
        </div>
        <div>
          <label style="font-size:0.7rem; font-weight:800; color:#334155;">EXPLICACIÓN DE DIFERENCIA / COMENTARIOS:</label>
          <input type="text" id="arq-ind-obs" value="Arqueo inopinado conforme a los fondos asignados." style="width:100%; padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;" />
        </div>
      </div>
    </div>

    <!-- CONTADOR DE MONEDAS Y BILLETES (ANEXO 14: RELACIÓN DE DINERO EN EFECTIVO) -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
      <div style="background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:14px; padding:10px;">
        <div style="font-size:0.8rem; font-weight:900; color:#0F172A; margin-bottom:6px;">🪙 MONEDAS (Anexo 14)</div>
        ${window.ARQUEO_DENOMINACIONES.monedas.map((m, i) => `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; font-size:0.78rem;">
            <strong>${m.label}</strong>
            <input type="number" id="mon-cant-${i}" value="${m.cant}" min="0" oninput="recalcularArqueoIndependiente()" style="width:68px; padding:4px; text-align:center; border-radius:6px; border:1px solid #94A3B8; font-weight:800;" />
            <span id="mon-sub-${i}" style="width:70px; text-align:right; font-weight:700;">S/ 0.00</span>
          </div>
        `).join("")}
      </div>

      <div style="background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:14px; padding:10px;">
        <div style="font-size:0.8rem; font-weight:900; color:#0F172A; margin-bottom:6px;">💵 BILLETES (Anexo 14)</div>
        ${window.ARQUEO_DENOMINACIONES.billetes.map((b, i) => `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; font-size:0.78rem;">
            <strong>${b.label}</strong>
            <input type="number" id="bil-cant-${i}" value="${b.cant}" min="0" oninput="recalcularArqueoIndependiente()" style="width:68px; padding:4px; text-align:center; border-radius:6px; border:1px solid #94A3B8; font-weight:800;" />
            <span id="bil-sub-${i}" style="width:75px; text-align:right; font-weight:700;">S/ 0.00</span>
          </div>
        `).join("")}
        <button type="button" onclick="autocompletarBilletesConSaldoCaja()" style="width:100%; margin-top:6px; background:#ECFDF5; color:#065F46; border:1px solid #10B981; border-radius:8px; padding:6px; font-size:0.72rem; font-weight:800; cursor:pointer;">
          ⚡ Cuadrar Billetes con Saldo Actual (${window.fmtSoles(p.saldo_caja_chica)})
        </button>
      </div>
    </div>

    <div id="panel-resumen-arqueo-ind" style="margin-bottom:14px;"></div>

    <!-- BOTONES DE IMPRESIÓN LIMPIA DE LOS ANEXOS DE ARQUEO (CON LOGO ANC-MP) -->
    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
      <button type="button" onclick="imprimirAnexoArqueoOficial('PAQUETE_ARQUEO')" style="grid-column:span 2; background:#0F172A; color:#F59E0B; border:2px solid #F59E0B; border-radius:12px; padding:13px; font-size:0.88rem; font-weight:900; cursor:pointer;">
        🖨️ Imprimir Expediente Completo de Arqueo (Anexos 16 + 14 + 15 + 02 en PDF)
      </button>
      <button type="button" onclick="imprimirAnexoArqueoOficial('ANEXO_16')" style="background:#7C3AED; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        📄 Anexo 16: Acta de Arqueo
      </button>
      <button type="button" onclick="imprimirAnexoArqueoOficial('ANEXO_14')" style="background:#10B981; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        🪙 Anexo 14: Relación de Efectivo
      </button>
      <button type="button" onclick="imprimirAnexoArqueoOficial('ANEXO_15')" style="background:#3B82F6; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        📑 Anexo 15: Documentos Rendidos
      </button>
      <button type="button" onclick="imprimirAnexoArqueoOficial('ANEXO_02')" style="background:#D97706; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        ⏳ Anexo 02: Control Vales Prov.
      </button>
    </div>
  `;

  autocompletarBilletesConSaldoCaja();
};

window.autocompletarBilletesConSaldoCaja = function() {
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { saldo_caja_chica: 15000 };
  let resto = Math.max(0, Number(p.saldo_caja_chica || 0));

  for (let i = window.ARQUEO_DENOMINACIONES.billetes.length - 1; i >= 0; i--) {
    const val = window.ARQUEO_DENOMINACIONES.billetes[i].val;
    const cant = Math.floor(resto / val);
    resto = Number((resto - cant * val).toFixed(2));
    const el = document.getElementById(`bil-cant-${i}`);
    if (el) el.value = cant;
  }
  for (let j = window.ARQUEO_DENOMINACIONES.monedas.length - 1; j >= 0; j--) {
    const val = window.ARQUEO_DENOMINACIONES.monedas[j].val;
    const cant = Math.floor((resto + 0.001) / val);
    resto = Number((resto - cant * val).toFixed(2));
    const el = document.getElementById(`mon-cant-${j}`);
    if (el) el.value = cant;
  }
  recalcularArqueoIndependiente();
};

function obtenerDatosCalculadosArqueo() {
  let totMonedas = 0;
  window.ARQUEO_DENOMINACIONES.monedas.forEach((m, i) => {
    const c = Number(document.getElementById(`mon-cant-${i}`)?.value || 0);
    m.cant = c;
    const sub = Number((c * m.val).toFixed(2));
    totMonedas += sub;
    const lbl = document.getElementById(`mon-sub-${i}`);
    if (lbl) lbl.textContent = `S/ ${sub.toFixed(2)}`;
  });

  let totBilletes = 0;
  window.ARQUEO_DENOMINACIONES.billetes.forEach((b, i) => {
    const c = Number(document.getElementById(`bil-cant-${i}`)?.value || 0);
    b.cant = c;
    const sub = Number((c * b.val).toFixed(2));
    totBilletes += sub;
    const lbl = document.getElementById(`bil-sub-${i}`);
    if (lbl) lbl.textContent = `S/ ${sub.toFixed(2)}`;
  });

  const efectivoTotal = Number((totMonedas + totBilletes).toFixed(2));
  const asignado = Number(document.getElementById("arq-ind-asignado")?.value || 0);
  const vales = Number(document.getElementById("arq-ind-vales")?.value || 0);
  const docs = Number(document.getElementById("arq-ind-docs")?.value || 0);
  const totalArqueado = Number((efectivoTotal + vales + docs).toFixed(2));
  const diferencia = Number((totalArqueado - asignado).toFixed(2));

  return { totMonedas, totBilletes, efectivoTotal, asignado, vales, docs, totalArqueado, diferencia };
}

window.recalcularArqueoIndependiente = function() {
  const d = obtenerDatosCalculadosArqueo();
  const panel = document.getElementById("panel-resumen-arqueo-ind");
  if (!panel) return;
  const exacto = Math.abs(d.diferencia) < 0.01;

  panel.innerHTML = `
    <div style="background:${exacto ? '#ECFDF5' : '#FEF2F2'}; border:2px solid ${exacto ? '#10B981' : '#EF4444'}; border-radius:14px; padding:12px; font-size:0.82rem;">
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px; font-weight:800; color:#0F172A;">
        <span>Efectivo Contado (Anexo 14): ${window.fmtSoles(d.efectivoTotal)}</span>
        <span>Docs. + Vales: ${window.fmtSoles(d.docs + d.vales)}</span>
        <span>Total Arqueado: ${window.fmtSoles(d.totalArqueado)}</span>
      </div>
      <div style="margin-top:6px; font-weight:900; color:${exacto ? '#065F46' : '#991B1B'};">
        ${exacto ? '✓ CONCILIACIÓN EXACTA (Diferencia: S/ 0.00)' : `⚠️ DIFERENCIA EN ARQUEO: ${window.fmtSoles(d.diferencia)} (Fondo Asignado: ${window.fmtSoles(d.asignado)})`}
      </div>
    </div>
  `;
};

window.imprimirAnexoArqueoOficial = function(tipo) {
  const p = window.ANC_STATE.perfilActivo;
  const d = obtenerDatosCalculadosArqueo();
  const auditor = document.getElementById("arq-ind-auditor")?.value || "Auditor Contabilidad / Tesorería";
  const obs = document.getElementById("arq-ind-obs")?.value || "Sin observaciones.";
  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "MANEJO DE LA CAJA CHICA DEL MINISTERIO PÚBLICO", "08");
  const fechaHoy = new Date().toLocaleDateString("es-PE");
  const horaHoy = new Date().toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });

  const misGastos = (window.CAJA_STATE?.gastosRegistrados || []).filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );

  // ANEXO 14 EXACTO (Página 51 Directiva V.08)
  const htmlAnexo14 = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 14</div>
      <div class="titulo-anexo-nombre">FORMATO DE RELACIÓN DE DINERO EN EFECTIVO</div>
      <p style="margin-bottom:10px;"><strong>Dependencia / ADC:</strong> ${p.nombre_dependencia} • En la ciudad de ${p.sede_ubicacion}, a las ${horaHoy} horas del día ${fechaHoy}:</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
        <table class="tabla-directiva">
          <thead><tr><th>MONEDAS (Denominación)</th><th style="text-align:center;">Cantidad</th><th style="text-align:right;">Importe S/</th></tr></thead>
          <tbody>
            ${window.ARQUEO_DENOMINACIONES.monedas.map(m => `<tr><td>${m.label}</td><td style="text-align:center;">${m.cant}</td><td style="text-align:right;">${(m.cant * m.val).toFixed(2)}</td></tr>`).join("")}
            <tr class="fila-subtotal"><td colspan="2">SUBTOTAL MONEDAS S/</td><td style="text-align:right;">${d.totMonedas.toFixed(2)}</td></tr>
          </tbody>
        </table>
        <table class="tabla-directiva">
          <thead><tr><th>BILLETES (Denominación)</th><th style="text-align:center;">Cantidad</th><th style="text-align:right;">Importe S/</th></tr></thead>
          <tbody>
            ${window.ARQUEO_DENOMINACIONES.billetes.map(b => `<tr><td>${b.label}</td><td style="text-align:center;">${b.cant}</td><td style="text-align:right;">${(b.cant * b.val).toFixed(2)}</td></tr>`).join("")}
            <tr class="fila-subtotal"><td colspan="2">SUBTOTAL BILLETES S/</td><td style="text-align:right;">${d.totBilletes.toFixed(2)}</td></tr>
            <tr class="fila-total-general"><td colspan="2">TOTAL GENERAL EFECTIVO S/</td><td style="text-align:right;">${window.fmtSoles(d.efectivoTotal)}</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bloque-firmas"><div class="linea-firma"><strong>Funcionario / Servidor que efectúa el arqueo</strong><br/>${auditor}</div><div class="linea-firma"><strong>Encargado Único de Caja Chica</strong><br/>${p.usuario_nombre}</div></div>
    </div>
  `;

  // ANEXO 15 EXACTO (Página 52 Directiva V.08)
  const htmlAnexo15 = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 15</div>
      <div class="titulo-anexo-nombre">FORMATO DE RELACIÓN DE DOCUMENTOS RENDIDOS</div>
      <p style="margin-bottom:8px;"><strong>Dependencia / ADC:</strong> [${p.codigo_dependencia}] ${p.nombre_dependencia} • Fecha: ${fechaHoy}</p>
      <table class="tabla-directiva">
        <thead><tr><th style="width:6%;">N°</th><th style="width:12%;">FECHA</th><th style="width:18%;">CLASE / N° DOC.</th><th style="width:48%;">Detalle del Gasto</th><th style="width:16%; text-align:right;">Importe S/</th></tr></thead>
        <tbody>
          ${misGastos.map((g, i) => `<tr><td style="text-align:center;">${i + 1}</td><td style="text-align:center;">${g.fecha_emision}</td><td>${g.tipo_comprobante} ${g.serie_numero_comprobante}</td><td>${g.razon_social_proveedor} — ${g.concepto_detalle}</td><td style="text-align:right;">${Number(g.monto_total_soles).toFixed(2)}</td></tr>`).join("")}
          <tr class="fila-total-general"><td colspan="4" style="text-align:right;">Total Documentos Rendidos S/</td><td style="text-align:right;">${window.fmtSoles(d.docs)}</td></tr>
        </tbody>
      </table>
      <div class="bloque-firmas"><div class="linea-firma"><strong>Funcionario / Servidor que efectúa el arqueo</strong><br/>${auditor}</div><div class="linea-firma"><strong>Encargado Único del manejo de la Caja Chica</strong><br/>${p.usuario_nombre}</div></div>
    </div>
  `;

  // ANEXO 02 EXACTO (Página 39 Directiva V.08)
  const valesLista = misGastos.filter(g => g.modalidad_fondo === "VALE_PROVISIONAL" || g.tipo_comprobante?.includes("Vale"));
  const htmlAnexo02 = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 02</div>
      <div class="titulo-anexo-nombre">FORMATO CONTROL DE EMISIÓN DE VALES PROVISIONALES</div>
      <table class="tabla-directiva">
        <thead><tr><th>Fecha de Emisión</th><th>N° de Vale Provisional</th><th>Nombre de la persona receptora</th><th style="text-align:right;">Importe S/</th><th>Funcionario que autorizó</th><th>Tiempo transcurrido</th><th>N° comprobante rendido</th><th style="text-align:right;">Importe rendición S/</th></tr></thead>
        <tbody>
          ${valesLista.length === 0 ? `<tr><td colspan="8" style="text-align:center;">Sin vales provisionales pendientes a la fecha del arqueo.</td></tr>` : valesLista.map(v => `<tr><td>${v.fecha_emision}</td><td>${v.serie_numero_comprobante}</td><td>${v.razon_social_proveedor}</td><td style="text-align:right;">${Number(v.monto_total_soles).toFixed(2)}</td><td>Administración / OAF</td><td>< 48 horas</td><td>En trámite</td><td style="text-align:right;">${Number(v.monto_total_soles).toFixed(2)}</td></tr>`).join("")}
        </tbody>
      </table>
      <div class="bloque-firmas"><div class="linea-firma"><strong>Encargado Único de la Caja Chica</strong><br/>${p.usuario_nombre}</div><div class="linea-firma"><strong>Oficina de Tesorería / Administración</strong><br/>${p.nombre_dependencia}</div></div>
    </div>
  `;

  // ANEXO 16 EXACTO (Página 53 Directiva V.08)
  const htmlAnexo16 = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 16</div>
      <div class="titulo-anexo-nombre">FORMATO ACTA DE ARQUEO DE LA CAJA CHICA / VIÁTICOS</div>
      <p style="font-size:11px; line-height:1.55; margin-bottom:12px;">
        En la ciudad de <strong>${p.sede_ubicacion}</strong>, a las <strong>${horaHoy}</strong> horas del día <strong>${fechaHoy}</strong>, reunidos en la oficina de <strong>[${p.codigo_dependencia}] ${p.nombre_dependencia}</strong>, se procedió a realizar el Arqueo de Fondos conforme al siguiente detalle:
      </p>
      <table class="tabla-directiva">
        <tbody>
          <tr><td style="width:65%;"><strong>1. Fondo asignado con Resolución:</strong></td><td style="width:15%; text-align:center;">Res. Apertura</td><td style="width:20%; text-align:right; font-weight:bold;">${window.fmtSoles(d.asignado)}</td></tr>
          <tr><td><strong>2. Resolución de ampliación de Fondos:</strong></td><td style="text-align:center;">-</td><td style="text-align:right;">S/ 0.00</td></tr>
          <tr><td><strong>3. Recuento de dinero en efectivo:</strong></td><td style="text-align:center;">Anexo 14</td><td style="text-align:right;">${window.fmtSoles(d.efectivoTotal)}</td></tr>
          <tr><td><strong>4. Vales provisionales:</strong></td><td style="text-align:center;">Anexo 02</td><td style="text-align:right;">${window.fmtSoles(d.vales)}</td></tr>
          <tr><td><strong>5. Relación de documentos rendidos:</strong></td><td style="text-align:center;">Anexo 15</td><td style="text-align:right;">${window.fmtSoles(d.docs)}</td></tr>
          <tr><td><strong>6. Documentos para reembolso:</strong></td><td style="text-align:center;">-</td><td style="text-align:right;">S/ 0.00</td></tr>
          <tr><td><strong>7. Otros:</strong></td><td style="text-align:center;">-</td><td style="text-align:right;">S/ 0.00</td></tr>
          <tr class="fila-subtotal"><td colspan="2">Total rendición / arqueado (3 + 4 + 5 + 6 + 7):</td><td style="text-align:right;">${window.fmtSoles(d.totalArqueado)}</td></tr>
          <tr class="fila-total-general"><td colspan="2">Diferencia:</td><td style="text-align:right;">${window.fmtSoles(d.diferencia)}</td></tr>
        </tbody>
      </table>
      <div class="notas-pie" style="margin-top:12px;">
        <strong>Explicaciones de la diferencia (Motivo) / Comentarios:</strong> ${obs}
      </div>
      <p style="margin-top:12px; font-size:10.5px;">Siendo las ${horaHoy} horas del mismo día se dio por terminado el arqueo, firmándose en señal de conformidad.</p>
      <div class="bloque-firmas"><div class="linea-firma"><strong>Funcionario / Servidor que efectúa el arqueo</strong><br/>${auditor}</div><div class="linea-firma"><strong>Encargado Único del manejo de la Caja Chica</strong><br/>${p.usuario_nombre}</div></div>
    </div>
  `;

  const mapa = { "ANEXO_16": htmlAnexo16, "ANEXO_14": htmlAnexo14, "ANEXO_15": htmlAnexo15, "ANEXO_02": htmlAnexo02 };
  const htmlFinal = mapa[tipo] || (htmlAnexo16 + htmlAnexo14 + htmlAnexo15 + htmlAnexo02);
  window.MotorAnexosANC.imprimirDocumentoOficial(`Arqueo_Caja_${p.codigo_dependencia}`, htmlFinal, "portrait");
};

// =========================================================================================
// 2. PANEL EXCLUSIVO DEL ADMINISTRADOR NACIONAL (CONSOLIDADO MULTI-SEDE Y 34 ADC)
// =========================================================================================
window.desbloquearPanelAdminConPin = function() {
  const pin = document.getElementById("admin-input-pin-acceso")?.value.trim();
  if (pin === String(window.ANC_STATE?.config?.pin_administrador || "2026")) {
    window.ANC_STATE.perfilActivo.rol_sistema = "ADMINISTRADOR";
    localStorage.setItem("anc_mp_perfil_v1", JSON.stringify(window.ANC_STATE.perfilActivo));
    if (typeof window.actualizarCabeceraYMenu === "function") window.actualizarCabeceraYMenu();
    renderizarModuloAdministrador();
    cargarConsolidadoNacionalAdmin();
  } else {
    alert("❌ PIN incorrecto (Por defecto: 2026).");
  }
};

window.cargarConsolidadoNacionalAdmin = async function() {
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { rol_sistema: "OPERADOR" };
  if (p.rol_sistema !== "ADMINISTRADOR") {
    renderizarModuloAdministrador();
    return;
  }
  const localGastos = JSON.parse(localStorage.getItem("anc_gastos_caja_local_v1") || "[]");
  const resG = await window.SupabaseANC.request("anc_gastos_caja_encargos", "GET", "order=id.desc&limit=300");
  window.ADMIN_STATE.gastosConsolidados = enriquecerConDependencia((resG.data && resG.data.length > 0) ? resG.data : localGastos);

  const localViat = JSON.parse(localStorage.getItem("anc_viaticos_local_v1") || "[]");
  const resV = await window.SupabaseANC.request("anc_viaticos_solicitudes", "GET", "order=id.desc&limit=200");
  window.ADMIN_STATE.viaticosConsolidados = enriquecerConDependencia((resV.data && resV.data.length > 0) ? resV.data : localViat);

  actualizarKPIsYTablasAdmin();
};

function enriquecerConDependencia(lista) {
  const unidades = window.ANC_STATE?.unidades || [];
  return lista.map(item => {
    const u = unidades.find(x => Number(x.id) === Number(item.unidad_organica_id) || x.codigo === item.codigo_dependencia);
    return {
      ...item,
      codigo_dependencia: item.codigo_dependencia || (u ? u.codigo : "ANC-SEDE"),
      nombre_dependencia: item.nombre_dependencia || (u ? u.nombre_dependencia : "Unidad Orgánica ANC-MP"),
      es_adc: u ? Boolean(u.es_adc) : false
    };
  });
}

function renderizarModuloAdministrador() {
  const cont = document.getElementById("contenedor-modulo-admin");
  if (!cont) return;
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { rol_sistema: "OPERADOR" };

  if (p.rol_sistema !== "ADMINISTRADOR") {
    cont.innerHTML = `
      <div style="text-align:center; padding:22px 12px;">
        <h2 style="font-size:1.25rem; font-weight:900; color:#0F172A; margin-bottom:8px;">🔐 Acceso Administrador Nacional ANC-MP</h2>
        <p style="font-size:0.84rem; color:#475569; margin-bottom:14px;">Exclusivo para OCA / OAF (Abastecimiento, Contabilidad y Tesorería).</p>
        <div style="max-width:280px; margin:0 auto;">
          <input type="password" id="admin-input-pin-acceso" value="2026" style="width:100%; padding:11px; border-radius:10px; border:2px solid #D97706; text-align:center; font-size:1.1rem; font-weight:900; margin-bottom:10px;" />
          <button type="button" onclick="desbloquearPanelAdminConPin()" style="width:100%; background:#0F172A; color:#F59E0B; border:none; border-radius:10px; padding:12px; font-weight:900; cursor:pointer;">🛡️ Desbloquear Consolidado</button>
        </div>
      </div>
    `;
    return;
  }

  const unidades = window.ANC_STATE?.unidades || [];
  cont.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <h2 style="font-size:1.22rem; font-weight:900; color:#0F172A;">📊 Panel Administrador y Auditoría Nacional</h2>
      <button type="button" onclick="cargarConsolidadoNacionalAdmin()" style="background:#0F172A; color:#F59E0B; border:none; border-radius:8px; padding:7px 12px; font-size:0.76rem; font-weight:800; cursor:pointer;">🔄 Refrescar</button>
    </div>

    <div id="admin-kpis-nacionales" style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin-bottom:12px;"></div>

    <div style="background:#F8FAFC; border:1.5px solid #CBD5E1; border-radius:12px; padding:10px; margin-bottom:12px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:8px;">
        <select id="admin-filtro-dep" onchange="aplicarFiltrosAdmin()" style="padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;">
          <option value="TODAS">-- Todas las Dependencias y 34 ADC --</option>
          <option value="SOLO_SEDE">🏢 Solo Sede Central</option>
          <option value="SOLO_ADC">🏛️ Solo 34 ADC Regiones</option>
          ${unidades.map(u => `<option value="${u.codigo}">[${u.codigo}] ${u.nombre_dependencia}</option>`).join("")}
        </select>
        <select id="admin-filtro-estado" onchange="aplicarFiltrosAdmin()" style="padding:8px; border-radius:8px; border:1px solid #94A3B8; font-weight:700; font-size:0.8rem;">
          <option value="TODOS">-- Todos los Estados --</option>
          <option value="APROBADO">✓ Aprobados</option>
          <option value="OBSERVADO">⚠️ Observados</option>
        </select>
      </div>
      <input type="text" id="admin-input-busqueda" oninput="aplicarFiltrosAdmin()" placeholder="🔍 Filtrar por RUC, proveedor, locador, específica o comprobante..." style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #D97706; font-size:0.82rem; font-weight:700;" />
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
      <button type="button" onclick="exportarConsolidadoExcelCSV()" style="background:#10B981; color:#FFF; border:none; border-radius:9px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">📥 Exportar Consolidado (Excel CSV)</button>
      <button type="button" onclick="imprimirReporteConsolidadoAdminPDF()" style="background:#0F172A; color:#F59E0B; border:1.5px solid #F59E0B; border-radius:9px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">🖨️ Reporte Nacional Auditoría (PDF)</button>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; margin-bottom:12px;">
      <button type="button" id="btn-adm-tab-caja" onclick="cambiarTabAdmin('GASTOS_CAJA')" style="background:#0F172A; color:#F59E0B; border:1px solid #0F172A; border-radius:8px; padding:8px; font-size:0.74rem; font-weight:900; cursor:pointer;">🧾 Caja y Encargos</button>
      <button type="button" id="btn-adm-tab-viat" onclick="cambiarTabAdmin('VIATICOS_NAC')" style="background:#FFF; color:#0F172A; border:1px solid #CBD5E1; border-radius:8px; padding:8px; font-size:0.74rem; font-weight:800; cursor:pointer;">✈️ Planillas Viáticos</button>
      <button type="button" id="btn-adm-tab-uit" onclick="cambiarTabAdmin('CONTROL_UIT')" style="background:#FFF; color:#0F172A; border:1px solid #CBD5E1; border-radius:8px; padding:8px; font-size:0.74rem; font-weight:800; cursor:pointer;">📐 Topes Anuales UIT</button>
    </div>

    <div id="admin-contenedor-tabla-principal"></div>
  `;
  cargarConsolidadoNacionalAdmin();
}

window.cambiarTabAdmin = function(nuevaTab) {
  window.ADMIN_STATE.tabActiva = nuevaTab;
  const mapa = { "GASTOS_CAJA": "btn-adm-tab-caja", "VIATICOS_NAC": "btn-adm-tab-viat", "CONTROL_UIT": "btn-adm-tab-uit" };
  Object.entries(mapa).forEach(([t, id]) => {
    const el = document.getElementById(id);
    if (el) { el.style.background = t === nuevaTab ? "#0F172A" : "#FFF"; el.style.color = t === nuevaTab ? "#F59E0B" : "#0F172A"; }
  });
  actualizarKPIsYTablasAdmin();
};

window.aplicarFiltrosAdmin = function() {
  window.ADMIN_STATE.filtroDependencia = document.getElementById("admin-filtro-dep")?.value || "TODAS";
  window.ADMIN_STATE.filtroEstado = document.getElementById("admin-filtro-estado")?.value || "TODOS";
  window.ADMIN_STATE.busquedaTexto = (document.getElementById("admin-input-busqueda")?.value || "").toLowerCase().trim();
  actualizarKPIsYTablasAdmin();
};

function obtenerListasFiltradasAdmin() {
  const fDep = window.ADMIN_STATE.filtroDependencia;
  const fEst = window.ADMIN_STATE.filtroEstado;
  const q = window.ADMIN_STATE.busquedaTexto;

  const gastos = window.ADMIN_STATE.gastosConsolidados.filter(g => {
    const okDep = fDep === "TODAS" || (fDep === "SOLO_SEDE" && !g.es_adc) || (fDep === "SOLO_ADC" && g.es_adc) || g.codigo_dependencia === fDep;
    const okEst = fEst === "TODOS" || (g.estado_auditoria || "APROBADO") === fEst;
    const txt = `${g.codigo_dependencia} ${g.nombre_dependencia} ${g.ruc_dni_proveedor} ${g.razon_social_proveedor} ${g.especifica_gasto} ${g.serie_numero_comprobante} ${g.concepto_detalle}`.toLowerCase();
    return okDep && okEst && (!q || txt.includes(q));
  });

  const viaticos = window.ADMIN_STATE.viaticosConsolidados.filter(v => {
    const okDep = fDep === "TODAS" || (fDep === "SOLO_SEDE" && !v.es_adc) || (fDep === "SOLO_ADC" && v.es_adc) || v.codigo_dependencia === fDep;
    const okEst = fEst === "TODOS" || (v.estado_solicitud || "APROBADO") === fEst;
    const txt = `${v.codigo_planilla} ${v.codigo_dependencia} ${v.nombre_dependencia} ${v.destino_comision} ${v.motivo_comision}`.toLowerCase();
    return okDep && okEst && (!q || txt.includes(q));
  });

  return { gastos, viaticos };
}

function actualizarKPIsYTablasAdmin() {
  const kpiDiv = document.getElementById("admin-kpis-nacionales");
  const contTabla = document.getElementById("admin-contenedor-tabla-principal");
  if (!kpiDiv || !contTabla) return;

  const uit = Number(window.ANC_STATE?.config?.valor_uit || 5350);
  const { gastos, viaticos } = obtenerListasFiltradasAdmin();

  const totalCaja = gastos.filter(g => g.modalidad_fondo !== "ENCARGO" && g.estado_auditoria !== "OBSERVADO").reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const totalEnc = gastos.filter(g => g.modalidad_fondo === "ENCARGO" && g.estado_auditoria !== "OBSERVADO").reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const totalViat = viaticos.filter(v => v.estado_solicitud !== "OBSERVADO").reduce((a, b) => a + Number(b.monto_total_solicitud || 0), 0);

  kpiDiv.innerHTML = `
    <div style="background:#ECFDF5; border:1px solid #10B981; border-radius:10px; padding:8px 10px;">
      <div style="font-size:0.68rem; font-weight:800; color:#065F46;">CAJA CHICA EJECUTADO</div>
      <div style="font-size:1.1rem; font-weight:900;">${window.fmtSoles(totalCaja)} (${(totalCaja / uit).toFixed(2)} UIT)</div>
    </div>
    <div style="background:#FFFBEB; border:1px solid #F59E0B; border-radius:10px; padding:8px 10px;">
      <div style="font-size:0.68rem; font-weight:800; color:#92400E;">VIÁTICOS Y ENCARGOS</div>
      <div style="font-size:1.1rem; font-weight:900;">${window.fmtSoles(totalViat + totalEnc)}</div>
    </div>
  `;

  const tab = window.ADMIN_STATE.tabActiva;
  if (tab === "GASTOS_CAJA") {
    contTabla.innerHTML = `
      <table class="anc-list-table">
        <thead><tr><th>DEPENDENCIA / ESTADO</th><th>PROVEEDOR / LOCADOR Y DETALLE</th><th>IMPORTE Y ACCIÓN</th></tr></thead>
        <tbody>
          ${gastos.map(g => {
            const obs = g.estado_auditoria === "OBSERVADO";
            return `<tr>
              <td><span class="badge-semaforo ${obs ? 'badge-rojo' : 'badge-verde'}">${obs ? 'OBSERVADO' : 'APROBADO'}</span><br/><strong>[${g.codigo_dependencia}]</strong><br/><small>${g.nombre_dependencia}</small></td>
              <td><strong>${g.razon_social_proveedor}</strong> (${g.ruc_dni_proveedor})<br/><small>${g.tipo_comprobante} ${g.serie_numero_comprobante} • Esp. ${g.especifica_gasto}</small><br/><small>${g.concepto_detalle}</small></td>
              <td><strong>${window.fmtSoles(g.monto_total_soles)}</strong><div style="display:flex; gap:4px; margin-top:4px;"><button onclick="cambiarEstadoAuditoriaGasto(${g.id},'APROBADO')" style="background:#10B981;color:#FFF;border:none;border-radius:5px;padding:3px 6px;font-size:0.68rem;cursor:pointer;">Aprobar</button><button onclick="cambiarEstadoAuditoriaGasto(${g.id},'OBSERVADO')" style="background:#EF4444;color:#FFF;border:none;border-radius:5px;padding:3px 6px;font-size:0.68rem;cursor:pointer;">Observar</button></div></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    `;
  } else if (tab === "VIATICOS_NAC") {
    contTabla.innerHTML = `
      <table class="anc-list-table">
        <thead><tr><th>PLANILLA / DEPENDENCIA</th><th>RUTA Y AUTORIZACIÓN</th><th>TOTAL</th></tr></thead>
        <tbody>
          ${viaticos.map(v => `<tr><td><strong>${v.codigo_planilla}</strong><br/><small>[${v.codigo_dependencia}] ${v.nombre_dependencia}</small></td><td><strong>${v.origen_comision} → ${v.destino_comision}</strong><br/><small>${v.documento_autorizacion} — ${v.motivo_comision}</small></td><td><strong>${window.fmtSoles(v.monto_total_solicitud)}</strong></td></tr>`).join("")}
        </tbody>
      </table>
    `;
  } else {
    const rubros = [
      { n: "Agua en Bidones (5.2.1.3.1.h)", e: "2.3.1.1.1.1", u: 8 },
      { n: "Combustible y Lubricantes (5.2.1.3.2)", e: "2.3.1.3.1.1", u: 8 },
      { n: "Útiles, Tóner y Materiales (5.2.1.3.3)", e: "2.3.1.5.1.2", u: 8 },
      { n: "Mantenimiento y Reparaciones (5.2.1.3.11)", e: "2.3.2.4.7.1", u: 8 }
    ];
    contTabla.innerHTML = `<table class="anc-list-table"><thead><tr><th>RUBRO</th><th>TOPE ANUAL</th><th>EJECUTADO</th></tr></thead><tbody>${rubros.map(r => {
      const ej = gastos.filter(g => g.especifica_gasto === r.e && g.estado_auditoria !== "OBSERVADO").reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
      return `<tr><td><strong>${r.n}</strong> (${r.e})</td><td>${r.u} UIT (${window.fmtSoles(r.u * uit)})</td><td><strong>${window.fmtSoles(ej)}</strong> (${(ej / uit).toFixed(2)} UIT)</td></tr>`;
    }).join("")}</tbody></table>`;
  }
}

window.cambiarEstadoAuditoriaGasto = async function(idGasto, nuevoEstado) {
  let obs = nuevoEstado === "OBSERVADO" ? prompt("Motivo de observación:", "Subsanar sustento") : null;
  await window.SupabaseANC.request("anc_gastos_caja_encargos", "PATCH", `id=eq.${idGasto}`, { estado_auditoria: nuevoEstado, observacion_administrador: obs });
  window.ADMIN_STATE.gastosConsolidados = window.ADMIN_STATE.gastosConsolidados.map(g => Number(g.id) === Number(idGasto) ? { ...g, estado_auditoria: nuevoEstado, observacion_administrador: obs } : g);
  localStorage.setItem("anc_gastos_caja_local_v1", JSON.stringify(window.ADMIN_STATE.gastosConsolidados));
  actualizarKPIsYTablasAdmin();
};

window.exportarConsolidadoExcelCSV = function() {
  const { gastos, viaticos } = obtenerListasFiltradasAdmin();
  const cab = ["TIPO", "DEPENDENCIA", "FECHA", "DOCUMENTO", "RUC_DNI", "PROVEEDOR_LOCADOR", "ESPECIFICA", "DETALLE", "TOTAL_SOLES", "ESTADO"];
  const filas = [
    ...gastos.map(g => [g.modalidad_fondo, g.nombre_dependencia, g.fecha_emision, `${g.tipo_comprobante} ${g.serie_numero_comprobante}`, g.ruc_dni_proveedor, g.razon_social_proveedor, g.especifica_gasto, g.concepto_detalle, Number(g.monto_total_soles || 0).toFixed(2), g.estado_auditoria]),
    ...viaticos.map(v => ["VIATICOS", v.nombre_dependencia, (v.fecha_hora_salida || "").slice(0, 10), v.codigo_planilla, "-", v.destino_comision, "2.3.2.1.2.2", v.motivo_comision, Number(v.monto_total_solicitud || 0).toFixed(2), v.estado_solicitud])
  ];
  window.MotorAnexosANC.exportarExcelCSV("Consolidado_Nacional_ANC_MP.csv", cab, filas);
};

window.imprimirReporteConsolidadoAdminPDF = function() {
  const { gastos, viaticos } = obtenerListasFiltradasAdmin();
  const totG = gastos.reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const totV = viaticos.reduce((a, b) => a + Number(b.monto_total_solicitud || 0), 0);
  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "REPORTE CONSOLIDADO NACIONAL DE AUDITORÍA (CAJA CHICA, VIÁTICOS Y ENCARGOS)", "08");
  const html = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-nombre">CONSOLIDADO NACIONAL DE EJECUCIÓN Y AUDITORÍA - UE 012: ANC-MP</div>
      <table class="tabla-directiva">
        <thead><tr><th>DEPENDENCIA / ADC</th><th>DOCUMENTO</th><th>PROVEEDOR / LOCADOR</th><th>ESPECÍFICA / DETALLE</th><th>ESTADO</th><th style="text-align:right;">IMPORTE (S/)</th></tr></thead>
        <tbody>
          ${gastos.map(g => `<tr><td>[${g.codigo_dependencia}] ${g.nombre_dependencia}</td><td>${g.tipo_comprobante} ${g.serie_numero_comprobante}</td><td>${g.razon_social_proveedor} (${g.ruc_dni_proveedor})</td><td>${g.especifica_gasto} — ${g.concepto_detalle}</td><td>${g.estado_auditoria}</td><td style="text-align:right;">${Number(g.monto_total_soles).toFixed(2)}</td></tr>`).join("")}
          <tr class="fila-subtotal"><td colspan="5" style="text-align:right;">TOTAL CONSOLIDADO CAJA CHICA Y ENCARGOS:</td><td style="text-align:right;">${window.fmtSoles(totG)}</td></tr>
          <tr class="fila-total-general"><td colspan="5" style="text-align:right;">TOTAL CONSOLIDADO PLANILLAS DE VIÁTICOS (${viaticos.length}):</td><td style="text-align:right;">${window.fmtSoles(totV)}</td></tr>
        </tbody>
      </table>
    </div>
  `;
  window.MotorAnexosANC.imprimirDocumentoOficial("Reporte_Nacional_Auditoria_ANC_MP", html, "landscape");
};
