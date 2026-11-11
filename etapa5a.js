// =========================================================================================
// ETAPA 5A (PASO D1): MÓDULO DE CAJA CHICA, CALCULADORA RÁPIDA, TARIFARIO ANEXO 09
// Y GENERADOR LIMPIO DE ANEXOS EXACTOS INDIVIDUALES Y DE RENDICIÓN (CON LOGO ANC-MP)
// Directiva Manejo de la Caja Chica V.08 (OGFIN/DIR-01) - UE 012: ANC-MP
// =========================================================================================

window.CAJA_CATALOGOS = {
  // Anexo 09: Formato de Tarifa Única - Sede Central (44 destinos de Lima/Callao + Reglas Especiales)
  tarifarioAnexo09: [
    { item: 1, distrito: "Ancón", dia: 30.00, noche: 32.00 },
    { item: 2, distrito: "Ate - Vitarte", dia: 26.00, noche: 28.00 },
    { item: 3, distrito: "Barranco", dia: 20.00, noche: 22.00 },
    { item: 4, distrito: "Breña", dia: 16.00, noche: 18.00 },
    { item: 5, distrito: "El Callao (Bellavista, La Perla, La Punta, Carmen de la Legua)", dia: 25.00, noche: 27.00 },
    { item: 6, distrito: "Carabayllo", dia: 28.00, noche: 30.00 },
    { item: 7, distrito: "Cercado de Lima", dia: 14.00, noche: 16.00 },
    { item: 8, distrito: "Chaclacayo", dia: 38.00, noche: 40.00 },
    { item: 9, distrito: "Chorrillos", dia: 24.00, noche: 26.00 },
    { item: 10, distrito: "Chosica (Lurigancho)", dia: 44.00, noche: 46.00 },
    { item: 11, distrito: "Cieneguilla", dia: 33.00, noche: 35.00 },
    { item: 12, distrito: "Comas", dia: 28.00, noche: 30.00 },
    { item: 13, distrito: "El Agustino", dia: 16.00, noche: 18.00 },
    { item: 14, distrito: "Huachipa (Centro Poblado)", dia: 26.00, noche: 28.00 },
    { item: 15, distrito: "Independencia", dia: 22.00, noche: 24.00 },
    { item: 16, distrito: "Jesús María", dia: 16.00, noche: 18.00 },
    { item: 17, distrito: "La Molina", dia: 25.00, noche: 27.00 },
    { item: 18, distrito: "La Victoria", dia: 16.00, noche: 18.00 },
    { item: 19, distrito: "Lince", dia: 16.00, noche: 18.00 },
    { item: 20, distrito: "Los Olivos", dia: 22.00, noche: 24.00 },
    { item: 21, distrito: "Lurín", dia: 34.00, noche: 36.00 },
    { item: 22, distrito: "Magdalena del Mar", dia: 18.00, noche: 20.00 },
    { item: 23, distrito: "Miraflores", dia: 20.00, noche: 22.00 },
    { item: 24, distrito: "Pachacámac", dia: 34.00, noche: 36.00 },
    { item: 25, distrito: "Pucusana", dia: 38.00, noche: 40.00 },
    { item: 26, distrito: "Pueblo Libre", dia: 16.00, noche: 18.00 },
    { item: 27, distrito: "Puente Piedra", dia: 28.00, noche: 30.00 },
    { item: 28, distrito: "Punta Negra", dia: 38.00, noche: 40.00 },
    { item: 29, distrito: "Rímac", dia: 16.00, noche: 18.00 },
    { item: 30, distrito: "San Bartolo", dia: 38.00, noche: 40.00 },
    { item: 31, distrito: "San Borja", dia: 20.00, noche: 22.00 },
    { item: 32, distrito: "San Isidro", dia: 19.00, noche: 21.00 },
    { item: 33, distrito: "San Juan de Lurigancho", dia: 22.00, noche: 24.00 },
    { item: 34, distrito: "San Juan de Miraflores", dia: 25.00, noche: 27.00 },
    { item: 35, distrito: "San Luis", dia: 20.00, noche: 22.00 },
    { item: 36, distrito: "San Martín de Porres", dia: 20.00, noche: 22.00 },
    { item: 37, distrito: "San Miguel", dia: 20.00, noche: 22.00 },
    { item: 38, distrito: "Santa Anita", dia: 24.00, noche: 26.00 },
    { item: 39, distrito: "Santiago de Surco", dia: 24.00, noche: 26.00 },
    { item: 40, distrito: "Surquillo", dia: 20.00, noche: 22.00 },
    { item: 41, distrito: "Ventanilla", dia: 36.00, noche: 38.00 },
    { item: 42, distrito: "Villa El Salvador", dia: 30.00, noche: 32.00 },
    { item: 43, distrito: "Villa María del Triunfo", dia: 30.00, noche: 32.00 },
    { item: 44, distrito: "Aeropuerto Internacional Jorge Chávez", dia: 38.00, noche: 38.00 },
    { item: 45, distrito: "Nota 4: Desde Callao, Lima Este, Norte o Sur al resto de Lima", dia: 28.00, noche: 30.00 },
    { item: 46, distrito: "Nota 5: Edecanes, Jefe de Escolta y Seguridad (Promedio tramo)", dia: 25.00, noche: 25.00 }
  ],

  categoriasGasto: [
    {
      id: "Alimentos",
      icono: "🍽️",
      color: "#10B981",
      tipoBienServicio: "BIEN",
      subrubros: [
        { codigo: "CC-ALI-01", nombre: "Alimentos por +4h adicionales / Turno (Máx. S/ 24.00 - Solo Administrativos)", especifica: "2.3.1.1.1.1", topeFijo: 24.00, bloqGastosOp: true, detrac: null },
        { codigo: "CC-ALI-02", nombre: "Alimentos para Reuniones de Trabajo (Máx. 10% UIT mensual - Indicar tema)", especifica: "2.3.1.1.1.1", pctUit: 10.0, bloqGastosOp: false, detrac: null },
        { codigo: "CC-ALI-03", nombre: "Agua en Bidones / Mesa (Sin proceso de selección - 20% UIT / 8 UIT anual)", especifica: "2.3.1.1.1.1", pctUit: 20.0, bloqGastosOp: false, detrac: null },
        { codigo: "CC-ENS-01", nombre: "Enseres de Cocina (Máx. S/ 700.00 mensual y 0.5 UIT anual)", especifica: "2.3.1.99.1.99", topeFijo: 700.00, bloqGastosOp: false, detrac: null }
      ]
    },
    {
      id: "Movilidad",
      icono: "🚕",
      color: "#3B82F6",
      tipoBienServicio: "SERVICIO",
      subrubros: [
        { codigo: "CC-MOV-01", nombre: "Movilidad Local por Diligencia / +4h (Tarifario Anexo 09 - DJ Anexo 08)", especifica: "2.3.2.1.2.99", esTarifario: true, bloqGastosOp: true, detrac: null },
        { codigo: "CC-MOV-02", nombre: "Pasajes Aéreos Excepcionales (Comisión reservada/inopinada con V°B° Finanzas)", especifica: "2.3.2.1.2.1", pctUit: 20.0, bloqGastosOp: false, detrac: null }
      ]
    },
    {
      id: "Combustible",
      icono: "⛽",
      color: "#F97316",
      tipoBienServicio: "BIEN",
      subrubros: [
        { codigo: "CC-COM-01", nombre: "Combustible y Lubricantes Vehículo Oficial (Exige Placa y Kilometraje)", especifica: "2.3.1.3.1.1", pctUit: 20.0, exigePlaca: true, detrac: null },
        { codigo: "CC-REP-01", nombre: "Repuestos Vehiculares, Llantas y Baterías urgentes (Sin stock almacén)", especifica: "2.3.1.6.1.1", pctUit: 20.0, exigePlaca: true, detrac: null }
      ]
    },
    {
      id: "Materiales",
      icono: "📎",
      color: "#8B5CF6",
      tipoBienServicio: "BIEN",
      subrubros: [
        { codigo: "CC-MAT-01", nombre: "Útiles de Oficina urgentes (Exige PECOSA sin stock en Almacén)", especifica: "2.3.1.5.1.2", pctUit: 20.0, exigePecosa: true, detrac: null },
        { codigo: "CC-MAT-02", nombre: "Tóner y Tintas de Impresora (Exige PECOSA sin stock en Almacén)", especifica: "2.3.1.5.1.2", pctUit: 20.0, exigePecosa: true, detrac: null },
        { codigo: "CC-MAT-03", nombre: "Materiales de Limpieza y Desinfectantes (Sin servicio contratado)", especifica: "2.3.1.5.3.1", pctUit: 20.0, exigePecosa: false, detrac: null },
        { codigo: "CC-MAT-04", nombre: "Material Eléctrico, Iluminación y USB/Discos (Exige V°B° Técnico)", especifica: "2.3.1.5.4.1", pctUit: 20.0, exigePecosa: false, detrac: null },
        { codigo: "CC-MAT-05", nombre: "Ferretería e Implementos de Protección Personal (EPP)", especifica: "2.3.1.5.99.99", pctUit: 20.0, exigePecosa: false, detrac: null },
        { codigo: "CC-MED-01", nombre: "Suministros Médicos para Botiquín (Alcohol, algodón, gasas - 4 UIT anual)", especifica: "2.3.1.8.1.2", pctUit: 20.0, exigePecosa: false, detrac: null },
        { codigo: "CC-OTB-01", nombre: "Diario El Peruano (1 UIT anual) / Símbolos Patrios y Suscripciones (4 UIT)", especifica: "2.3.1.99.1.3", pctUit: 20.0, exigePecosa: false, detrac: null }
      ]
    },
    {
      id: "Mantenimiento",
      icono: "🛠️",
      color: "#EC4899",
      tipoBienServicio: "SERVICIO",
      subrubros: [
        { codigo: "CC-MAN-01", nombre: "Reparación de SS.HH., Aire Acondicionado, Mobiliario y Equipos de Oficina", especifica: "2.3.2.4.7.1", pctUit: 20.0, detrac: { cod: "020", tasa: 10.0, desc: "Mantenimiento y reparación de bienes muebles (10%)" } },
        { codigo: "CC-MAN-02", nombre: "Mantenimiento Vehicular, SOAT, Revisión Técnica y Lavado (Separar repuesto/mano de obra)", especifica: "2.3.2.4.5.1", pctUit: 20.0, exigePlaca: true, detrac: { cod: "020", tasa: 10.0, desc: "Mantenimiento y reparación de bienes muebles (10%)" } }
      ]
    },
    {
      id: "Servicios",
      icono: "📑",
      color: "#0EA5E9",
      tipoBienServicio: "SERVICIO",
      subrubros: [
        { codigo: "CC-MEN-01", nombre: "Servicio de Mensajería Urgente (Priorizando notificación electrónica Ley 32068)", especifica: "2.3.2.2.3.1", pctUit: 20.0, detrac: null },
        { codigo: "CC-OTS-01", nombre: "Transporte de Carga, Bienes y Muestras (20% UIT / 8 UIT anual)", especifica: "2.3.2.7.11.2", pctUit: 20.0, detrac: { cod: "027", tasa: 4.0, desc: "Transporte de bienes por vía terrestre (4%)" } },
        { codigo: "CC-OTS-02", nombre: "Estiba, Peaje, Gastos Notariales/SUNARP, Recarga Extintores, Cortinas", especifica: "2.3.2.7.11.99", pctUit: 20.0, detrac: { cod: "021", tasa: 10.0, desc: "Movimiento de carga / Otros servicios (10%)" } },
        { codigo: "CC-OTS-03", nombre: "Florería Protocolar / Defunciones (Tope: 2 UIT Sede Central / 0.5 UIT ADC)", especifica: "2.3.1.99.1.99", pctUit: 20.0, detrac: null },
        { codigo: "CC-OTS-04", nombre: "Servicio de Lavandería de Cortinas y Banderolas (2 UIT anual)", especifica: "2.3.2.7.11.99", pctUit: 20.0, detrac: { cod: "037", tasa: 12.0, desc: "Demás servicios gravados con IGV (12%)" } },
        { codigo: "CC-OTS-05", nombre: "Servicio de Fotocopiado de Expedientes (Sin fotocopiadora operativa - 8 UIT)", especifica: "2.3.2.2.4.4", pctUit: 20.0, detrac: { cod: "022", tasa: 12.0, desc: "Otros servicios empresariales (12%)" } },
        { codigo: "CC-OTS-06", nombre: "Impresiones (Banners), Carátulas y Empastados (4 UIT anual)", especifica: "2.3.2.2.4.4", pctUit: 20.0, detrac: { cod: "022", tasa: 12.0, desc: "Otros servicios empresariales (12%)" } },
        { codigo: "CC-OTS-07", nombre: "Servicio de Traducciones e Intérpretes Oficiales (3 UIT anual)", especifica: "2.3.2.7.11.99", pctUit: 20.0, detrac: { cod: "022", tasa: 12.0, desc: "Otros servicios empresariales (12%)" } },
        { codigo: "CC-OTS-08", nombre: "Certificado Digital RENIEC (Gestionado con OTI - 8 UIT anual)", especifica: "2.3.2.7.2.99", pctUit: 20.0, detrac: null }
      ]
    }
  ]
};

window.CAJA_STATE = {
  categoriaActiva: "Alimentos",
  subrubroActivo: "CC-ALI-01",
  tipoComprobante: "Factura Electrónica",
  cantidad: 1,
  horarioMovilidad: "DIA",
  gastosRegistrados: []
};

document.addEventListener("DOMContentLoaded", () => {
  inicializarVistaYModalCajaChica();
  cargarDatosModuloCaja();
});

window.cargarDatosModuloCaja = async function() {
  await sincronizarGastosCajaSupabase();
  renderizarListadoGastosCajaChica();
};

function inicializarVistaYModalCajaChica() {
  const secCaja = document.getElementById("view-caja-chica");
  if (secCaja) {
    secCaja.innerHTML = `
      <div class="content-surface-card">
        <!-- Botón Circular Central (+) idéntico a la Captura 1 -->
        <div class="add-circle-container">
          <button type="button" class="btn-circle-plus" onclick="abrirModalGastoRapido()">+</button>
          <p class="add-circle-caption">
            Toca el círculo (+) para adicionar un nuevo gasto, comprobante, Vale Provisional o DJ de Movilidad a tu Unidad Orgánica / ADC
          </p>
        </div>

        <!-- Barra de Resumen Financiero de la Caja Chica de la Dependencia -->
        <div id="resumen-financiero-caja-activa" style="background:#0F172A; color:#F8FAFC; border-radius:14px; padding:12px 14px; margin-bottom:14px; font-size:0.83rem;"></div>

        <!-- Botones de Reportes Consolidados de la Dependencia (Se abren en ventana limpia sin acumular abajo) -->
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; margin-bottom:14px;">
          <button type="button" onclick="imprimirRendicionAnexo13CajaPDF()" style="background:#F59E0B; color:#0F172A; border:2px solid #0F172A; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
            🖨️ Anexo 13: Rendición de Caja Chica (PDF)
          </button>
          <button type="button" onclick="imprimirLibroCajaAnexo17PDF()" style="background:#0F172A; color:#F59E0B; border:1.5px solid #F59E0B; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
            📘 Anexo 17: Libro Caja Mecanizado (PDF)
          </button>
          <button type="button" onclick="imprimirConsolidadoDJMovilidadAnexo08PDF()" style="background:#3B82F6; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
            🚕 Anexo 08: Planilla DJ Movilidad (PDF)
          </button>
          <button type="button" onclick="exportarRendicionCajaDependenciaExcel()" style="background:#10B981; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.78rem; font-weight:900; cursor:pointer;">
            📥 Exportar Rendición a Excel (CSV)
          </button>
        </div>

        <!-- Tabla de Gastos Registrados con Botones de Formato Individual Exacto por cada Gasto -->
        <table class="anc-list-table">
          <thead>
            <tr>
              <th>CONTROL / RUBRO</th>
              <th>PROVEEDOR / LOCADOR Y DETALLE</th>
              <th>IMPORTE Y FORMATOS INDIVIDUALES</th>
            </tr>
          </thead>
          <tbody id="tabla-gastos-preview"></tbody>
        </table>
      </div>
    `;
  }

  const modalBody = document.querySelector("#modal-gasto-rapido .modal-body-content");
  if (modalBody) {
    modalBody.innerHTML = `
      <!-- Panel Oscuro de Calculadora Rápida (Idéntico a Captura 4) -->
      <div class="dark-calc-panel">
        <div class="calc-label-top">PRECIO POR UNIDAD / COMPROBANTE</div>
        <div class="calc-amount-row">
          <input type="number" id="input-calc-monto" class="calc-amount-input" value="24.00" step="0.50" min="0" oninput="recalcularModalCajaEnVivo()" />
          <div class="calc-currency-tag">PEN<br />/ S/</div>
        </div>

        <div class="calc-subbox">
          <div class="calc-subbox-title">TIPO DE DOCUMENTO SUSTENTATORIO</div>
          <div class="chips-row" id="chips-comprobante">
            <button type="button" class="chip-option active" onclick="seleccionarChipComprobante('Factura Electrónica')">Factura</button>
            <button type="button" class="chip-option" onclick="seleccionarChipComprobante('Boleta de Venta')">Boleta</button>
            <button type="button" class="chip-option" onclick="seleccionarChipComprobante('Ticket')">Ticket</button>
            <button type="button" class="chip-option" onclick="seleccionarChipComprobante('DJ Movilidad Local (Anexo 08)')">DJ Anexo 08</button>
            <button type="button" class="chip-option" onclick="seleccionarChipComprobante('Recibo por Honorarios (Locador)')">R.H.E. (Locador)</button>
            <button type="button" class="chip-option" onclick="seleccionarChipComprobante('Vale Provisional (Anexo 01)')">Vale Prov. (48h)</button>
          </div>
        </div>

        <div class="calc-grid-2col">
          <div class="calc-subbox" style="margin-bottom:0;">
            <div class="calc-subbox-title">CANTIDAD / TRAMOS</div>
            <div class="qty-stepper">
              <button type="button" class="btn-step" onclick="cambiarCantidadModalCaja(-1)">−</button>
              <strong style="font-size:1.25rem;" id="lbl-cantidad-modal">1</strong>
              <button type="button" class="btn-step" onclick="cambiarCantidadModalCaja(1)">+</button>
            </div>
          </div>
          <div class="calc-subbox" style="margin-bottom:0; border-color: rgba(16,185,129,0.5);">
            <div class="calc-subbox-title" style="color:#6EE7B7;" id="lbl-titulo-tope-modal">TOPE MÁX. (S/)</div>
            <div style="font-size:1.25rem; font-weight:900; color:#6EE7B7; margin-top:4px;" id="lbl-tope-modal">1,070.00</div>
            <div style="font-size:0.72rem; color:#CBD5E1; margin-top:2px;">Total: <strong id="lbl-total-calculado-modal" style="color:#FBBF24;">S/ 24.00</strong></div>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:800; color:#475569;">
        <span>CATEGORÍAS DE GASTO</span>
        <span style="color:#10B981;" id="lbl-cat-activa-nombre">ALIMENTOS Y BEBIDAS</span>
      </div>

      <div class="category-circles-grid" id="grid-iconos-categorias-caja" style="grid-template-columns:repeat(3, 1fr);"></div>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:0.75rem; font-weight:800; color:#0F172A; margin-bottom:4px;">
          GRUPO O RUBRO ESPECÍFICO (DIRECTIVA CAJA CHICA V.08):
        </label>
        <select id="caja-select-subrubro" onchange="alCambiarSubrubroModalCaja()" style="width:100%; padding:11px; border-radius:10px; border:2px solid #10B981; font-weight:800; font-size:0.84rem; background:#ECFDF5; color:#0F172A;"></select>
      </div>

      <!-- BLOQUE ESPECIAL 1: TARIFARIO ÚNICO ANEXO 09 (44 Distritos Día / Noche) -->
      <div id="bloque-tarifario-anexo09" style="display:none; background:#EFF6FF; border:2px solid #3B82F6; border-radius:14px; padding:12px; margin-bottom:12px;">
        <div style="font-size:0.78rem; font-weight:900; color:#1E3A8A; margin-bottom:8px;">
          🚕 Tarifario Único de Movilidad Local - Sede Central (Anexo 09 - 44 Destinos):
        </div>
        <div style="display:grid; grid-template-columns:2fr 1fr; gap:8px;">
          <div>
            <label style="display:block; font-size:0.72rem; font-weight:800; color:#1E3A8A; margin-bottom:3px;">DISTRITO DE DESTINO (LIMA/CALLAO):</label>
            <select id="caja-select-distrito-anexo09" onchange="aplicarTarifaAnexo09()" style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #60A5FA; font-weight:800; font-size:0.83rem;">
              ${window.CAJA_CATALOGOS.tarifarioAnexo09.map(d => `<option value="${d.item}">#${d.item} ${d.distrito} (Día S/${d.dia} | Noche S/${d.noche})</option>`).join("")}
            </select>
          </div>
          <div>
            <label style="display:block; font-size:0.72rem; font-weight:800; color:#1E3A8A; margin-bottom:3px;">HORARIO:</label>
            <select id="caja-select-horario-mov" onchange="aplicarTarifaAnexo09()" style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #60A5FA; font-weight:800; font-size:0.83rem;">
              <option value="DIA">☀️ Día (<19:00h)</option>
              <option value="NOCHE">🌙 Noche (>=19:00h)</option>
            </select>
          </div>
        </div>
      </div>

      <!-- BLOQUE ESPECIAL 2: REQUISITOS PREVIOS (PECOSA SIN STOCK / PLACA Y KILOMETRAJE) -->
      <div id="bloque-requisito-pecosa" style="display:none; background:#FFFBEB; border:1.5px solid #F59E0B; border-radius:12px; padding:10px; margin-bottom:12px;">
        <label style="display:block; font-size:0.74rem; font-weight:900; color:#92400E; margin-bottom:4px;">
          📦 N° DE PECOSA DE ALMACÉN QUE ACREDITA FALTA DE STOCK (Obligatorio Numeral 5.2.1.3.3):
        </label>
        <input type="text" id="caja-input-pecosa" placeholder="Ej: PECOSA N° 0045-2026-ANC-ABAST (Sin Stock)" style="width:100%; padding:9px; border-radius:8px; border:1px solid #D97706; font-weight:700; font-size:0.84rem;" />
      </div>

      <div id="bloque-requisito-vehiculo" style="display:none; background:#FFFBEB; border:1.5px solid #F59E0B; border-radius:12px; padding:10px; margin-bottom:12px;">
        <div style="font-size:0.74rem; font-weight:900; color:#92400E; margin-bottom:6px;">
          🚓 Datos Obligatorios en el Anverso de la Factura (Numeral 5.2.1.3.2):
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <input type="text" id="caja-input-placa" placeholder="N° Placa de Rodaje (Ej: EGW-451)" style="padding:9px; border-radius:8px; border:1px solid #D97706; font-weight:700; font-size:0.83rem;" />
          <input type="text" id="caja-input-km" placeholder="Kilometraje (Ej: 42,150 km)" style="padding:9px; border-radius:8px; border:1px solid #D97706; font-weight:700; font-size:0.83rem;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:10px;">
        <div>
          <label style="display:block; font-size:0.73rem; font-weight:800; color:#334155; margin-bottom:3px;">SERIE Y N° COMPROBANTE:</label>
          <input type="text" id="caja-serie-num" value="F001-000452" style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.84rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.73rem; font-weight:800; color:#334155; margin-bottom:3px;">RUC / DNI PROVEEDOR O LOCADOR:</label>
          <input type="text" id="caja-ruc-prov" value="20501234567" maxlength="11" style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.84rem;" />
        </div>
      </div>

      <div style="margin-bottom:10px;">
        <label style="display:block; font-size:0.73rem; font-weight:800; color:#334155; margin-bottom:3px;" id="lbl-razon-social-prov">
          RAZÓN SOCIAL DEL PROVEEDOR / NOMBRE DEL LOCADOR (PROVEEDOR DE SERVICIOS):
        </label>
        <input type="text" id="caja-razon-social" value="Importaciones y Suministros S.A.C." style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.84rem;" />
      </div>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:0.73rem; font-weight:800; color:#334155; margin-bottom:3px;">
          DETALLE / MOTIVO DEL GASTO (O TEMA TRATADO EN REUNIÓN / DIRECCIÓN DESTINO):
        </label>
        <input type="text" id="caja-concepto-detalle" value="Atención urgente no programable para operatividad del despacho" style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.84rem;" />
      </div>

      <div id="panel-alertas-tributarias-caja" style="margin-bottom:14px;"></div>

      <button type="button" id="btn-guardar-gasto-caja" onclick="guardarGastoCajaChica()" style="width:100%; background:#10B981; color:#FFFFFF; border:none; border-radius:14px; padding:14px; font-size:0.98rem; font-weight:900; cursor:pointer; box-shadow:0 4px 12px rgba(16,185,129,0.3);">
        ✓ Registrar Gasto en Caja Chica
      </button>
    `;

    renderizarIconosCategoriasCaja();
    poblarSubrubrosCategoriaActiva();
  }
}

function renderizarIconosCategoriasCaja() {
  const grid = document.getElementById("grid-iconos-categorias-caja");
  if (!grid) return;

  grid.innerHTML = window.CAJA_CATALOGOS.categoriasGasto.map(cat => {
    const activo = cat.id === window.CAJA_STATE.categoriaActiva ? "active" : "";
    return `
      <div class="cat-circle-item ${activo}" onclick="seleccionarCategoriaCaja('${cat.id}')">
        <div class="cat-circle-icon" style="background:${cat.color}; color:#FFF;">${cat.icono}</div>
        <span class="cat-circle-label">${cat.id}</span>
      </div>
    `;
  }).join("");
}

window.seleccionarCategoriaCaja = function(catId) {
  window.CAJA_STATE.categoriaActiva = catId;
  const lbl = document.getElementById("lbl-cat-activa-nombre");
  if (lbl) lbl.textContent = catId.toUpperCase();
  renderizarIconosCategoriasCaja();
  poblarSubrubrosCategoriaActiva();
};

function poblarSubrubrosCategoriaActiva() {
  const sel = document.getElementById("caja-select-subrubro");
  if (!sel) return;
  const catObj = window.CAJA_CATALOGOS.categoriasGasto.find(c => c.id === window.CAJA_STATE.categoriaActiva) || window.CAJA_CATALOGOS.categoriasGasto[0];
  sel.innerHTML = catObj.subrubros.map(s => `<option value="${s.codigo}">[${s.especifica}] ${s.nombre}</option>`).join("");
  window.CAJA_STATE.subrubroActivo = catObj.subrubros[0].codigo;
  alCambiarSubrubroModalCaja();
}

window.alCambiarSubrubroModalCaja = function() {
  const cod = document.getElementById("caja-select-subrubro")?.value;
  window.CAJA_STATE.subrubroActivo = cod;

  const sub = obtenerObjetoSubrubroActual();
  const bTarifario = document.getElementById("bloque-tarifario-anexo09");
  const bPecosa = document.getElementById("bloque-requisito-pecosa");
  const bVehiculo = document.getElementById("bloque-requisito-vehiculo");

  if (bTarifario) bTarifario.style.display = sub?.esTarifario ? "block" : "none";
  if (bPecosa) bPecosa.style.display = sub?.exigePecosa ? "block" : "none";
  if (bVehiculo) bVehiculo.style.display = sub?.exigePlaca ? "block" : "none";

  if (sub?.esTarifario) {
    seleccionarChipComprobante("DJ Movilidad Local (Anexo 08)");
    aplicarTarifaAnexo09();
  } else if (sub?.codigo === "CC-ALI-01") {
    document.getElementById("input-calc-monto").value = "24.00";
  }

  recalcularModalCajaEnVivo();
};

function obtenerObjetoSubrubroActual() {
  for (const cat of window.CAJA_CATALOGOS.categoriasGasto) {
    const enc = cat.subrubros.find(s => s.codigo === window.CAJA_STATE.subrubroActivo);
    if (enc) return { ...enc, tipoBienServicio: cat.tipoBienServicio };
  }
  return { ...window.CAJA_CATALOGOS.categoriasGasto[0].subrubros[0], tipoBienServicio: "BIEN" };
}

window.aplicarTarifaAnexo09 = function() {
  const itemNum = Number(document.getElementById("caja-select-distrito-anexo09")?.value || 7);
  const horario = document.getElementById("caja-select-horario-mov")?.value || "DIA";
  window.CAJA_STATE.horarioMovilidad = horario;

  const destObj = window.CAJA_CATALOGOS.tarifarioAnexo09.find(d => d.item === itemNum) || window.CAJA_CATALOGOS.tarifarioAnexo09[6];
  const montoTarifa = horario === "NOCHE" ? destObj.noche : destObj.dia;

  const inputMonto = document.getElementById("input-calc-monto");
  if (inputMonto) inputMonto.value = montoTarifa.toFixed(2);

  document.getElementById("caja-serie-num").value = `DJ-MOV-00${window.CAJA_STATE.gastosRegistrados.length + 1}`;
  document.getElementById("caja-ruc-prov").value = window.ANC_STATE?.perfilActivo?.usuario_dni || "45000001";
  document.getElementById("caja-razon-social").value = window.ANC_STATE?.perfilActivo?.usuario_nombre || "Servidor Comisionado ANC-MP";
  document.getElementById("caja-concepto-detalle").value = `Diligencia administrativa oficial a ${destObj.distrito}`;

  recalcularModalCajaEnVivo();
};

window.seleccionarChipComprobante = function(tipo) {
  window.CAJA_STATE.tipoComprobante = tipo;
  document.querySelectorAll("#chips-comprobante .chip-option").forEach(btn => {
    const txt = btn.textContent;
    const coincide = (tipo.includes("Factura") && txt === "Factura") ||
                     (tipo.includes("Boleta") && txt === "Boleta") ||
                     (tipo.includes("Ticket") && txt === "Ticket") ||
                     (tipo.includes("DJ") && txt.includes("DJ")) ||
                     (tipo.includes("Honorarios") && txt.includes("R.H.E.")) ||
                     (tipo.includes("Vale") && txt.includes("Vale"));
    btn.classList.toggle("active", coincide);
  });

  const lblProv = document.getElementById("lbl-razon-social-prov");
  if (lblProv) {
    lblProv.textContent = tipo.includes("Honorarios")
      ? "APELLIDOS Y NOMBRES DEL LOCADOR / PROVEEDOR DE SERVICIOS (SIN VÍNCULO LABORAL):"
      : "RAZÓN SOCIAL DEL PROVEEDOR / RECEPTOR:";
  }
  recalcularModalCajaEnVivo();
};

window.cambiarCantidadModalCaja = function(delta) {
  window.CAJA_STATE.cantidad = Math.max(1, window.CAJA_STATE.cantidad + delta);
  const lbl = document.getElementById("lbl-cantidad-modal");
  if (lbl) lbl.textContent = window.CAJA_STATE.cantidad;
  recalcularModalCajaEnVivo();
};

window.recalcularModalCajaEnVivo = function() {
  const cfg = window.ANC_STATE ? window.ANC_STATE.config : { valor_uit: 5350, porcentaje_tope_caja_chica: 20 };
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { percibe_gastos_operativos: false };
  const sub = obtenerObjetoSubrubroActual();

  const precioUnit = Number(document.getElementById("input-calc-monto")?.value || 0);
  const cant = window.CAJA_STATE.cantidad;
  const totalSoles = Number((precioUnit * cant).toFixed(2));

  let topePermitido = Number((cfg.valor_uit * (cfg.porcentaje_tope_caja_chica / 100)).toFixed(2));
  let etiquetaTope = "TOPE 20% UIT (S/)";

  if (sub?.topeFijo) {
    topePermitido = sub.codigo === "CC-ALI-01" ? (24.00 * cant) : sub.topeFijo;
    etiquetaTope = sub.codigo === "CC-ALI-01" ? `TOPE S/24 x ${cant}` : "TOPE MENSUAL (S/)";
  } else if (sub?.pctUit && sub.pctUit !== 20.0) {
    topePermitido = Number((cfg.valor_uit * (sub.pctUit / 100)).toFixed(2));
    etiquetaTope = `TOPE ${sub.pctUit}% UIT (S/)`;
  }

  const lblTitTope = document.getElementById("lbl-titulo-tope-modal");
  const lblValTope = document.getElementById("lbl-tope-modal");
  const lblTotCalc = document.getElementById("lbl-total-calculado-modal");

  if (lblTitTope) lblTitTope.textContent = etiquetaTope;
  if (lblValTope) lblValTope.textContent = topePermitido.toLocaleString("es-PE", { minimumFractionDigits: 2 });
  if (lblTotCalc) lblTotCalc.textContent = window.fmtSoles(totalSoles);

  const panelAlertas = document.getElementById("panel-alertas-tributarias-caja");
  const btnGuardar = document.getElementById("btn-guardar-gasto-caja");
  if (!panelAlertas || !btnGuardar) return;

  const mensajes = [];
  let bloqueado = false;

  if (p.percibe_gastos_operativos && sub?.bloqGastosOp) {
    bloqueado = true;
    mensajes.push(`🚫 <strong>BLOQUEO NORMATIVO (RFN N° 190-2022-MP-FN):</strong> El perfil activo percibe Gastos Operativos. No procede Alimentos S/ 24.00 ni Movilidad Local por Caja Chica.`);
  }

  if (totalSoles > topePermitido) {
    bloqueado = true;
    mensajes.push(`🚫 <strong>EXCEDE TOPE PERMITIDO (${window.fmtSoles(topePermitido)}):</strong> Supera el límite máximo por comprobante de la Directiva V.08.`);
  }

  const tipoComp = window.CAJA_STATE.tipoComprobante;
  let montoRetIgv = 0, montoRet4ta = 0, montoDetrac = 0;

  if (tipoComp.includes("Factura") && totalSoles > 700.00) {
    montoRetIgv = Number((totalSoles * 0.03).toFixed(2));
    mensajes.push(`⚠️ <strong>RETENCIÓN IGV 3% (Numeral 5.2.1.2.1):</strong> Factura > S/ 700.00 aplica retención del 3% = <strong>${window.fmtSoles(montoRetIgv)}</strong>.`);
  }

  if (tipoComp.includes("Factura") && totalSoles > 700.00 && sub?.detrac) {
    montoDetrac = Number((totalSoles * (sub.detrac.tasa / 100)).toFixed(2));
    mensajes.push(`🏦 <strong>DETRACCIÓN SUNAT ANEXO 03 (Cód. ${sub.detrac.cod} - ${sub.detrac.tasa}%):</strong> Descuento Banco de la Nación: <strong>${window.fmtSoles(montoDetrac)}</strong>.`);
  }

  if (tipoComp.includes("Honorarios") && totalSoles > 1500.00) {
    montoRet4ta = Number((totalSoles * 0.08).toFixed(2));
    mensajes.push(`⚠️ <strong>RETENCIÓN 8% 4TA CATEGORÍA (Locador):</strong> Supera S/ 1,500.00 -> Retener <strong>${window.fmtSoles(montoRet4ta)}</strong> salvo Suspensión de 4ta.`);
  }

  if (totalSoles > 100.00 && !sub?.esTarifario) {
    mensajes.push(`📋 <strong>IMPORTE > S/ 100.00 (Numeral 5.2.1.1.1):</strong> Al guardar podrás imprimir su Formato Individual Anexo 04 y 05 (Bienes) o Anexo 06 y 07 (Servicios).`);
  }

  const netoPagar = Math.max(0, Number((totalSoles - Math.max(montoRetIgv, montoDetrac) - montoRet4ta).toFixed(2)));

  panelAlertas.innerHTML = `
    <div style="background:${bloqueado ? '#FEF2F2' : '#F8FAFC'}; border:1.5px solid ${bloqueado ? '#EF4444' : '#CBD5E1'}; border-radius:12px; padding:10px 12px; font-size:0.78rem; color:#1E293B; line-height:1.4;">
      ${mensajes.map(m => `<div style="margin-bottom:4px;">${m}</div>`).join("")}
      <div style="margin-top:6px; padding-top:6px; border-top:1px dashed #94A3B8; font-weight:900; color:#0F172A; display:flex; justify-content:space-between;">
        <span>NETO A ENTREGAR / PAGAR EN EFECTIVO:</span>
        <span style="color:#059669; font-size:0.92rem;">${window.fmtSoles(netoPagar)}</span>
      </div>
    </div>
  `;

  btnGuardar.disabled = bloqueado;
  btnGuardar.style.opacity = bloqueado ? "0.45" : "1";
  btnGuardar.textContent = bloqueado ? "🚫 Gasto Bloqueado por Tope / Norma" : `✓ Registrar Gasto (${window.fmtSoles(totalSoles)})`;
};

window.guardarGastoCajaChica = async function() {
  const cfg = window.ANC_STATE.config;
  const p = window.ANC_STATE.perfilActivo;
  const sub = obtenerObjetoSubrubroActual();

  const precioUnit = Number(document.getElementById("input-calc-monto").value || 0);
  const cant = window.CAJA_STATE.cantidad;
  const totalSoles = Number((precioUnit * cant).toFixed(2));

  if (totalSoles <= 0) {
    alert("⚠️ Ingrese un importe mayor a S/ 0.00.");
    return;
  }

  if (sub?.exigePecosa && !document.getElementById("caja-input-pecosa").value.trim()) {
    alert("⚠️ REQUISITO OBLIGATORIO (Numeral 5.2.1.3.3): Debe ingresar el N° de PECOSA sin stock en Almacén.");
    return;
  }

  if (sub?.exigePlaca && (!document.getElementById("caja-input-placa").value.trim() || !document.getElementById("caja-input-km").value.trim())) {
    alert("⚠️ REQUISITO OBLIGATORIO (Numeral 5.2.1.3.2): Debe consignar N° de Placa y Kilometraje del vehículo oficial.");
    return;
  }

  const tipoComp = window.CAJA_STATE.tipoComprobante;
  const aplicaRetIgv = tipoComp.includes("Factura") && totalSoles > 700.00 && !sub?.detrac;
  const montoRetIgv = aplicaRetIgv ? Number((totalSoles * 0.03).toFixed(2)) : 0;

  const aplicaDetrac = tipoComp.includes("Factura") && totalSoles > 700.00 && Boolean(sub?.detrac);
  const pctDetrac = aplicaDetrac ? sub.detrac.tasa : 0;
  const montoDetrac = aplicaDetrac ? Number((totalSoles * (pctDetrac / 100)).toFixed(2)) : 0;

  const aplicaRet4ta = tipoComp.includes("Honorarios") && totalSoles > 1500.00;
  const montoRet4ta = aplicaRet4ta ? Number((totalSoles * 0.08).toFixed(2)) : 0;

  const netoPagar = Number((totalSoles - montoRetIgv - montoDetrac - montoRet4ta).toFixed(2));

  const itemDist = Number(document.getElementById("caja-select-distrito-anexo09")?.value || 7);
  const destObj = window.CAJA_CATALOGOS.tarifarioAnexo09.find(d => d.item === itemDist);

  const nuevoGasto = {
    anio_fiscal: cfg.anio_fiscal,
    mes_ejecucion: `Año ${cfg.anio_fiscal}`,
    unidad_organica_id: p.unidad_id,
    modalidad_fondo: tipoComp.includes("Vale") ? "VALE_PROVISIONAL" : "CAJA_CHICA",
    tipo_comprobante: tipoComp,
    serie_numero_comprobante: document.getElementById("caja-serie-num").value.trim() || "S/N",
    fecha_emision: new Date().toISOString().slice(0, 10),
    ruc_dni_proveedor: document.getElementById("caja-ruc-prov").value.trim() || "00000000",
    razon_social_proveedor: document.getElementById("caja-razon-social").value.trim() || "Proveedor / Locador",
    concepto_detalle: `[${sub.codigo}] ${document.getElementById("caja-concepto-detalle").value.trim()}`,
    especifica_gasto: sub.especifica,
    categoria_presupuestal: p.es_adc ? "0086. Mejora de los Servicios del Sistema de Justicia Penal" : "9001. Acciones Centrales",
    moneda: "PEN",
    precio_unitario: precioUnit,
    cantidad: cant,
    monto_total_soles: totalSoles,
    aplica_retencion_igv_3pct: aplicaRetIgv,
    monto_retencion_igv: montoRetIgv,
    aplica_retencion_4ta_8pct: aplicaRet4ta,
    monto_retencion_4ta: montoRet4ta,
    aplica_detraccion: aplicaDetrac,
    porcentaje_detraccion: pctDetrac,
    monto_detraccion: montoDetrac,
    neto_pagar_proveedor: netoPagar,
    nro_pecosa_sin_stock: sub?.exigePecosa ? document.getElementById("caja-input-pecosa").value.trim() : null,
    placa_vehiculo: sub?.exigePlaca ? document.getElementById("caja-input-placa").value.trim() : null,
    kilometraje_vehiculo: sub?.exigePlaca ? document.getElementById("caja-input-km").value.trim() : null,
    distrito_movilidad_anexo09: sub?.esTarifario && destObj ? destObj.distrito : null,
    horario_movilidad: sub?.esTarifario ? window.CAJA_STATE.horarioMovilidad : null,
    usuario_registro: p.usuario_nombre,
    estado_auditoria: "APROBADO"
  };

  const res = await window.SupabaseANC.request("anc_gastos_caja_encargos", "POST", "", nuevoGasto);
  const idGenerado = (res.data && res.data.length > 0) ? res.data[0].id : Date.now();

  p.saldo_caja_chica = Math.max(0, Number((p.saldo_caja_chica - totalSoles).toFixed(2)));
  await window.SupabaseANC.request(
    "anc_unidades_organicas",
    "PATCH",
    `codigo=eq.${encodeURIComponent(p.codigo_dependencia)}`,
    { saldo_caja_chica_actual: p.saldo_caja_chica }
  );

  const regConMeta = {
    ...nuevoGasto,
    id: idGenerado,
    codigo_dependencia: p.codigo_dependencia,
    nombre_dependencia: p.nombre_dependencia,
    categoria_icono: window.CAJA_STATE.categoriaActiva,
    codigo_rubro: sub.codigo,
    tipoBienServicio: sub.tipoBienServicio
  };

  window.CAJA_STATE.gastosRegistrados.unshift(regConMeta);
  const localGuardados = JSON.parse(localStorage.getItem("anc_gastos_caja_local_v1") || "[]");
  localGuardados.unshift(regConMeta);
  localStorage.setItem("anc_gastos_caja_local_v1", JSON.stringify(localGuardados));

  if (typeof window.actualizarCabeceraYMenu === "function") window.actualizarCabeceraYMenu();
  cerrarModalGastoRapido();
  renderizarListadoGastosCajaChica();
  navegarVista("caja-chica");
};

async function sincronizarGastosCajaSupabase() {
  const localGuardados = JSON.parse(localStorage.getItem("anc_gastos_caja_local_v1") || "[]");
  const res = await window.SupabaseANC.request("anc_gastos_caja_encargos", "GET", "order=id.desc&limit=80");
  if (res.data && res.data.length > 0) {
    window.CAJA_STATE.gastosRegistrados = res.data;
  } else {
    window.CAJA_STATE.gastosRegistrados = localGuardados;
  }
}

function renderizarListadoGastosCajaChica() {
  const tbody = document.getElementById("tabla-gastos-preview");
  const panelRes = document.getElementById("resumen-financiero-caja-activa");
  if (!tbody) return;

  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { unidad_id: 12, nombre_dependencia: "Sede Central", presupuesto_caja_chica: 15000, saldo_caja_chica: 15000 };

  const misGastos = window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );

  const totalEjecutado = misGastos.reduce((acc, item) => acc + Number(item.monto_total_soles || 0), 0);

  if (panelRes) {
    panelRes.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <strong style="color:#FBBF24;">🏛️ ${p.nombre_dependencia}</strong><br/>
          <span>Comprobantes registrados: <strong>${misGastos.length}</strong> • Ejecutado en rendición: <strong>${window.fmtSoles(totalEjecutado)}</strong></span>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.75rem; color:#94A3B8;">SALDO EN EFECTIVO DISPONIBLE:</span><br/>
          <strong style="font-size:1.15rem; color:#6EE7B7;">${window.fmtSoles(p.saldo_caja_chica)}</strong>
        </div>
      </div>
    `;
  }

  const pillCorr = document.getElementById("pill-correlativo");
  if (pillCorr) pillCorr.textContent = `#0${misGastos.length + 1}`;

  if (misGastos.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align:center; color:#64748B; padding:20px;">
          Aún no hay gastos registrados en esta dependencia. Toca el botón circular <strong>(+)</strong> arriba para añadir el primero.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = misGastos.map((g, index) => {
    const esMov = g.tipo_comprobante?.includes("DJ") || Boolean(g.distrito_movilidad_anexo09);
    const esVale = g.modalidad_fondo === "VALE_PROVISIONAL" || g.tipo_comprobante?.includes("Vale");
    const esBien = (g.especifica_gasto || "").startsWith("2.3.1");

    return `
      <tr>
        <td>
          <span class="badge-semaforo badge-verde">✓ #${misGastos.length - index}</span>
          <div style="font-size:0.76rem; font-weight:900; color:#0F172A; margin-top:4px;">${g.especifica_gasto}</div>
          <small style="color:#475569;">${g.fecha_emision || ''}</small>
        </td>
        <td>
          <strong>${g.razon_social_proveedor}</strong> (RUC/DNI: ${g.ruc_dni_proveedor})<br/>
          <small style="color:#0284C7; font-weight:800;">${g.tipo_comprobante} N° ${g.serie_numero_comprobante}</small><br/>
          <small>${g.concepto_detalle}</small>
          ${g.nro_pecosa_sin_stock ? `<br/><small style="color:#B45309; font-weight:700;">📦 ${g.nro_pecosa_sin_stock}</small>` : ""}
          ${g.placa_vehiculo ? `<br/><small style="color:#0284C7; font-weight:700;">🚓 Placa: ${g.placa_vehiculo} (${g.kilometraje_vehiculo})</small>` : ""}
        </td>
        <td>
          <div style="font-size:1rem; font-weight:900; color:#0F172A; margin-bottom:6px;">
            ${window.fmtSoles(g.monto_total_soles)}
          </div>
          <!-- Botones de Formato Individual Exacto por Comprobante -->
          <div style="display:flex; flex-direction:column; gap:4px;">
            ${esMov ? `
              <button type="button" onclick="imprimirFormatoIndividualGastoCaja(${index}, 'ANEXO_08')" style="background:#3B82F6; color:#FFF; border:none; border-radius:6px; padding:5px 8px; font-size:0.7rem; font-weight:800; cursor:pointer;">
                🖨️ Anexo 08 (DJ Movilidad)
              </button>
            ` : ""}
            ${esVale ? `
              <button type="button" onclick="imprimirFormatoIndividualGastoCaja(${index}, 'ANEXO_01')" style="background:#D97706; color:#FFF; border:none; border-radius:6px; padding:5px 8px; font-size:0.7rem; font-weight:800; cursor:pointer;">
                🖨️ Anexo 01 (Vale Prov.)
              </button>
            ` : ""}
            ${esBien ? `
              <button type="button" onclick="imprimirFormatoIndividualGastoCaja(${index}, 'ANEXO_04_05')" style="background:#0F172A; color:#F59E0B; border:none; border-radius:6px; padding:5px 8px; font-size:0.7rem; font-weight:800; cursor:pointer;">
                🖨️ Anexos 04 y 05 (Bienes)
              </button>
            ` : `
              <button type="button" onclick="imprimirFormatoIndividualGastoCaja(${index}, 'ANEXO_06_07')" style="background:#0F172A; color:#6EE7B7; border:none; border-radius:6px; padding:5px 8px; font-size:0.7rem; font-weight:800; cursor:pointer;">
                🖨️ Anexos 06 y 07 (Servicios)
              </button>
            `}
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// =========================================================================================
// GENERADORES EXACTOS DE LOS ANEXOS INDIVIDUALES Y GRUPALES DE CAJA CHICA (DIRECTIVA V.08)
// =========================================================================================

window.imprimirFormatoIndividualGastoCaja = function(idxEnLista, tipoAnexo) {
  const p = window.ANC_STATE.perfilActivo;
  const misGastos = window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );
  const g = misGastos[idxEnLista];
  if (!g) return;

  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "MANEJO DE LA CAJA CHICA DEL MINISTERIO PÚBLICO", "08");
  let html = "";

  if (tipoAnexo === "ANEXO_01") {
    // ANEXO 01 EXACTO: FORMATO VALE PROVISIONAL (Página 38 Directiva V.08)
    html = `
      <div class="hoja-oficial">
        ${cab}
        <div class="titulo-anexo-num">ANEXO 01</div>
        <div class="titulo-anexo-nombre">FORMATO VALE PROVISIONAL</div>
        <div style="border:2px solid #000; padding:20px; margin-top:12px;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:bold; margin-bottom:16px;">
            <span>VALE PROVISIONAL N° ${g.serie_numero_comprobante}</span>
            <span>S/ ${Number(g.monto_total_soles).toFixed(2)}</span>
          </div>
          <p style="font-size:11.5px; line-height:1.7; margin-bottom:16px;">
            Recibí del encargado del manejo de la Caja Chica de <strong>${p.nombre_dependencia}</strong> la cantidad de <strong>${window.fmtSoles(g.monto_total_soles)}</strong>.<br/>
            <strong>Por concepto de:</strong> ${g.concepto_detalle}
          </p>
          <table class="tabla-directiva" style="margin-bottom:18px;">
            <tr>
              <td><strong>Nombre del Usuario:</strong> ${g.razon_social_proveedor || p.usuario_nombre}</td>
              <td><strong>Cargo / Unidad:</strong> ${p.nombre_dependencia}</td>
              <td><strong>D.N.I.:</strong> ${g.ruc_dni_proveedor || p.usuario_dni}</td>
            </tr>
          </table>
          <div style="text-align:right; margin-bottom:35px;">Fecha: ${g.fecha_emision}</div>
          <div class="bloque-firmas">
            <div class="linea-firma"><strong>USUARIO</strong><br/>FIRMA</div>
            <div class="linea-firma"><strong>OTES / OGFIN / ADMINISTRACIÓN</strong><br/>(o el que haga sus veces) Autorizado</div>
            <div class="linea-firma"><strong>ENCARGADO ÚNICO</strong><br/>FIRMA</div>
          </div>
          <div class="notas-pie" style="margin-top:26px;">
            <strong>Nota (Anexo 01 Directiva V.08):</strong> Los gastos efectuados deben justificarse documentadamente dentro de las 48 horas, computados en días hábiles, de la entrega correspondiente. Artículo 9, numeral 9.1 de la Directiva N° 003-2024-EF/52.06, aprobada con Resolución Directoral N° 008-2024-EF/52.01. En caso de incumplimiento se me establezca responsabilidad económica y se descuente de mis remuneraciones.
          </div>
        </div>
      </div>
    `;
  } else if (tipoAnexo === "ANEXO_08") {
    // ANEXO 08 EXACTO: FORMATO DE DECLARACIÓN JURADA DE MOVILIDAD LOCAL (Página 45 Directiva V.08)
    html = construirHTMLAnexo08Movilidad([g]);
  } else if (tipoAnexo === "ANEXO_04_05") {
    // ANEXOS 04 Y 05 EXACTOS: SOLICITUD DE BIENES Y RECEPCIÓN SATISFACTORIA DE BIENES (Páginas 41 y 42 Directiva V.08)
    html = `
      <div class="hoja-oficial">
        ${cab}
        <div class="titulo-anexo-num">ANEXO 04</div>
        <div class="titulo-anexo-nombre">FORMATO DE SOLICITUD DE BIENES</div>
        <div style="border:1.5px solid #000; padding:14px; margin-bottom:22px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span><strong>Sr. Administrador / Oficina de Administración y Finanzas UE 012: ANC-MP</strong></span>
            <span><strong>Fecha:</strong> ${g.fecha_emision}</span>
          </div>
          <div style="margin-bottom:10px;"><strong>Área Usuaria Solicitante:</strong> [${p.codigo_dependencia}] ${p.nombre_dependencia}</div>
          <p style="margin-bottom:8px;">Por medio de la presente se solicita atender con los siguiente(s) bienes:</p>
          <table class="tabla-directiva">
            <thead>
              <tr>
                <th style="width:16%; text-align:center;">CANTIDAD</th>
                <th style="width:64%;">DESCRIPCIÓN DEL BIEN</th>
                <th style="width:20%; text-align:right;">IMPORTE (S/)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align:center;">${g.cantidad || 1}</td>
                <td>${g.concepto_detalle} (${g.tipo_comprobante} ${g.serie_numero_comprobante} - ${g.razon_social_proveedor})</td>
                <td style="text-align:right;">${window.fmtSoles(g.monto_total_soles)}</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:8px;"><strong>MOTIVO DE LA SOLICITUD:</strong> Atención urgente y no programable para operatividad funcional (${g.nro_pecosa_sin_stock || 'Conforme a Directiva V.08'}).</div>
          <div class="bloque-firmas" style="margin-top:42px;">
            <div class="linea-firma" style="width:42%;"><strong>AUTORIZADO: ADMINISTRADOR / OAF</strong><br/>(FIRMA Y SELLO)</div>
            <div class="linea-firma" style="width:42%;"><strong>Firma del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
          </div>
        </div>

        <div class="titulo-anexo-num">ANEXO 05</div>
        <div class="titulo-anexo-nombre">FORMATO DE RECEPCIÓN SATISFACTORIA DE BIENES</div>
        <div style="border:1.5px solid #000; padding:14px;">
          <div style="text-align:right; margin-bottom:8px;"><strong>Fecha:</strong> ${g.fecha_emision}</div>
          <p style="margin-bottom:8px;">Por medio de la presente se da <strong>CONFORMIDAD</strong> por la recepción satisfactoria de lo(s) siguientes bienes:</p>
          <table class="tabla-directiva">
            <thead>
              <tr>
                <th style="width:16%; text-align:center;">CANTIDAD</th>
                <th style="width:84%;">DESCRIPCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align:center;">${g.cantidad || 1}</td>
                <td>${g.concepto_detalle} — Comprobante: ${g.tipo_comprobante} ${g.serie_numero_comprobante} (${window.fmtSoles(g.monto_total_soles)})</td>
              </tr>
            </tbody>
          </table>
          <div class="bloque-firmas" style="margin-top:42px;">
            <div class="linea-firma" style="width:50%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
          </div>
        </div>
      </div>
    `;
  } else {
    // ANEXOS 06 Y 07 EXACTOS: SOLICITUD DE SERVICIOS Y CONFORMIDAD DE SERVICIOS (Páginas 43 y 44 Directiva V.08)
    html = `
      <div class="hoja-oficial">
        ${cab}
        <div class="titulo-anexo-num">ANEXO 06</div>
        <div class="titulo-anexo-nombre">FORMATO DE SOLICITUD DE SERVICIOS</div>
        <div style="border:1.5px solid #000; padding:14px; margin-bottom:22px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span><strong>Sr. Administrador / Oficina de Administración y Finanzas UE 012: ANC-MP</strong></span>
            <span><strong>Fecha:</strong> ${g.fecha_emision}</span>
          </div>
          <div style="margin-bottom:10px;"><strong>Área Usuaria Solicitante:</strong> [${p.codigo_dependencia}] ${p.nombre_dependencia}</div>
          <p style="margin-bottom:8px;">Por medio de la presente solicitamos se sirvan brindarnos el servicio de:</p>
          <div style="border:1px solid #000; padding:10px; margin-bottom:10px; min-height:48px;">
            ${g.concepto_detalle} — Proveedor/Locador: <strong>${g.razon_social_proveedor}</strong> (RUC/DNI: ${g.ruc_dni_proveedor}) por el importe de <strong>${window.fmtSoles(g.monto_total_soles)}</strong>.
          </div>
          <div><strong>MOTIVO DE LA SOLICITUD:</strong> Requerimiento urgente de inmediata atención conforme a la Directiva de Caja Chica V.08.</div>
          <div class="bloque-firmas" style="margin-top:42px;">
            <div class="linea-firma" style="width:42%;"><strong>AUTORIZADO POR: ADMINISTRADOR / OAF</strong><br/>(FIRMA Y SELLO)</div>
            <div class="linea-firma" style="width:42%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
          </div>
        </div>

        <div class="titulo-anexo-num">ANEXO 07</div>
        <div class="titulo-anexo-nombre">FORMATO DE CONFORMIDAD DE SERVICIOS</div>
        <div style="border:1.5px solid #000; padding:14px;">
          <div style="text-align:right; margin-bottom:8px;"><strong>Fecha:</strong> ${g.fecha_emision}</div>
          <p style="margin-bottom:8px;">Por medio del presente, se otorga la <strong>CONFORMIDAD DEL SERVICIO</strong>, por los trabajos recibidos a satisfacción, que a continuación se detalla:</p>
          <div style="border:1px solid #000; padding:10px; min-height:52px;">
            Servicio ejecutado a conformidad: ${g.concepto_detalle} — Sustentado con ${g.tipo_comprobante} N° ${g.serie_numero_comprobante} por ${window.fmtSoles(g.monto_total_soles)}.
          </div>
          <div class="bloque-firmas" style="margin-top:42px;">
            <div class="linea-firma" style="width:50%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
          </div>
        </div>
      </div>
    `;
  }

  window.MotorAnexosANC.imprimirDocumentoOficial(`${tipoAnexo}_${g.serie_numero_comprobante}`, html, "portrait");
};

function construirHTMLAnexo08Movilidad(listaMovs) {
  const p = window.ANC_STATE.perfilActivo;
  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "MANEJO DE LA CAJA CHICA DEL MINISTERIO PÚBLICO", "08");
  const totalMov = listaMovs.reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);

  return `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 08</div>
      <div class="titulo-anexo-nombre">FORMATO DE DECLARACIÓN JURADA DE MOVILIDAD LOCAL (Caja Chica)</div>

      <p style="font-size:11px; line-height:1.5; margin-bottom:10px;">
        Recibí de la Unidad Ejecutora 012: Autoridad Nacional de Control del Ministerio Público la cantidad de <strong>${window.fmtSoles(totalMov)}</strong> para efectuar la comisión de servicio / diligencia administrativa autorizada por el Jefe de la Unidad Orgánica y/o Administrador según detalle:
      </p>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th rowspan="2" style="width:10%; text-align:center;">FECHA</th>
            <th colspan="3" style="text-align:center;">DE (ORIGEN)</th>
            <th rowspan="2" style="width:6%; text-align:center;">D / N (*)</th>
            <th colspan="3" style="text-align:center;">A (DESTINO)</th>
            <th rowspan="2" style="width:12%; text-align:right;">IMPORTE (S/)</th>
          </tr>
          <tr>
            <th style="width:12%;">ORIGEN</th>
            <th style="width:14%;">DIRECCIÓN / MOTIVO</th>
            <th style="width:12%;">DISTRITO</th>
            <th style="width:12%;">DESTINO</th>
            <th style="width:12%;">DIRECCIÓN</th>
            <th style="width:10%;">DISTRITO (ANEXO 09)</th>
          </tr>
        </thead>
        <tbody>
          ${listaMovs.map(m => `
            <tr>
              <td style="text-align:center;">${m.fecha_emision}</td>
              <td>Sede ANC-MP</td>
              <td>${m.concepto_detalle}</td>
              <td>${p.sede_ubicacion}</td>
              <td style="text-align:center; font-weight:bold;">${m.horario_movilidad === 'NOCHE' ? 'N' : 'D'}</td>
              <td>Diligencia Oficial</td>
              <td>Jurisdicción Destino</td>
              <td>${m.distrito_movilidad_anexo09 || 'Cercado de Lima'}</td>
              <td style="text-align:right; font-weight:bold;">${Number(m.monto_total_soles).toFixed(2)}</td>
            </tr>
          `).join("")}
          <tr class="fila-total-general">
            <td colspan="8" style="text-align:right;">TOTAL S/</td>
            <td style="text-align:right;">${window.fmtSoles(totalMov)}</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top:14px; font-size:10.5px;">
        <strong>Datos del Servidor Comisionado:</strong> Nombre: <strong>${p.usuario_nombre}</strong> • Cargo / Dependencia: <strong>${p.nombre_dependencia}</strong> • DNI N°: <strong>${p.usuario_dni}</strong>
      </div>

      <div class="bloque-firmas" style="margin-top:55px;">
        <div class="linea-firma"><strong>Firma del Servidor Comisionado</strong><br/>DNI N° ${p.usuario_dni}</div>
        <div class="linea-firma"><strong>Responsable del Área Usuaria / Jefe Inmediato Superior</strong><br/>${p.nombre_dependencia}</div>
        <div class="linea-firma"><strong>V°B° Administración / Encargado Único Caja Chica</strong><br/>UE 012: ANC-MP</div>
      </div>

      <div class="notas-pie" style="margin-top:22px;">
        <strong>Nota (Anexo 08 Directiva V.08):</strong> (*) D = Día, N = Noche. Se considera horario nocturno a partir de las 19:00 horas. Cada línea corresponde a un trayecto de la Comisión de Servicios conforme al Tarifario Único (Anexo 09).
      </div>
    </div>
  `;
}

window.imprimirConsolidadoDJMovilidadAnexo08PDF = function() {
  const p = window.ANC_STATE.perfilActivo;
  const misGastos = window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );
  const movs = misGastos.filter(g => g.tipo_comprobante?.includes("DJ") || Boolean(g.distrito_movilidad_anexo09));
  const lista = movs.length > 0 ? movs : misGastos.slice(0, 1);
  if (lista.length === 0) {
    alert("⚠️ Registra al menos un gasto o DJ de movilidad para generar el Anexo 08.");
    return;
  }
  const html = construirHTMLAnexo08Movilidad(lista);
  window.MotorAnexosANC.imprimirDocumentoOficial(`Anexo08_DJ_Movilidad_${p.codigo_dependencia}`, html, "landscape");
};

// ANEXO 13 EXACTO: FORMATO DE RENDICIÓN DE LA CAJA CHICA DEL DISTRITO FISCAL / SEDE CENTRAL (Página 50 Directiva V.08)
window.imprimirRendicionAnexo13CajaPDF = function() {
  const p = window.ANC_STATE.perfilActivo;
  const misGastos = window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );
  const totalRend = misGastos.reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const saldoActual = Number(p.saldo_caja_chica || 0);
  const saldoAnterior = Number((saldoActual + totalRend).toFixed(2));

  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "MANEJO DE LA CAJA CHICA DEL MINISTERIO PÚBLICO", "08");

  const html = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 13</div>
      <div class="titulo-anexo-nombre">FORMATO DE RENDICIÓN DE LA CAJA CHICA (${p.nombre_dependencia.toUpperCase()})</div>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th rowspan="2" style="width:4%;">N°</th>
            <th colspan="3" style="text-align:center;">DOCUMENTO</th>
            <th rowspan="2" style="width:18%;">PROVEEDOR / LOCADOR</th>
            <th rowspan="2" style="width:9%;">RUC / DNI</th>
            <th rowspan="2" style="width:22%;">DETALLE DEL GASTO</th>
            <th rowspan="2" style="width:8%;">Específica de Gasto</th>
            <th style="width:8%; text-align:center;">Acciones Centrales (9001)</th>
            <th style="width:8%; text-align:center;">Justicia Penal / ADC (0086)</th>
            <th rowspan="2" style="width:9%; text-align:right;">Total por específicas (S/)</th>
          </tr>
          <tr>
            <th style="width:7%;">Fecha</th>
            <th style="width:7%;">Clase</th>
            <th style="width:8%;">N°</th>
            <th style="text-align:center;">Gestión Adm.</th>
            <th style="text-align:center;">Control ADC</th>
          </tr>
        </thead>
        <tbody>
          ${misGastos.map((g, i) => `
            <tr>
              <td style="text-align:center;">${i + 1}</td>
              <td style="text-align:center;">${g.fecha_emision}</td>
              <td style="text-align:center;">${(g.tipo_comprobante || "").slice(0, 10)}</td>
              <td style="text-align:center;">${g.serie_numero_comprobante}</td>
              <td>${g.razon_social_proveedor}</td>
              <td style="text-align:center;">${g.ruc_dni_proveedor}</td>
              <td>${g.concepto_detalle}</td>
              <td style="text-align:center; font-weight:bold;">${g.especifica_gasto}</td>
              <td style="text-align:right;">${!p.es_adc ? Number(g.monto_total_soles).toFixed(2) : "0.00"}</td>
              <td style="text-align:right;">${p.es_adc ? Number(g.monto_total_soles).toFixed(2) : "0.00"}</td>
              <td style="text-align:right; font-weight:bold;">${Number(g.monto_total_soles).toFixed(2)}</td>
            </tr>
          `).join("")}
          <tr class="fila-total-general">
            <td colspan="8" style="text-align:right;">Total General S/</td>
            <td style="text-align:right;">${!p.es_adc ? totalRend.toFixed(2) : "0.00"}</td>
            <td style="text-align:right;">${p.es_adc ? totalRend.toFixed(2) : "0.00"}</td>
            <td style="text-align:right;">${window.fmtSoles(totalRend)}</td>
          </tr>
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:18px;">
        <table class="tabla-directiva" style="width:320px; margin-bottom:0;">
          <thead><tr><th colspan="2">MOVIMIENTO DEL DINERO EN EFECTIVO</th></tr></thead>
          <tbody>
            <tr><td>Saldo Anterior / Apertura S/</td><td style="text-align:right;">${window.fmtSoles(saldoAnterior)}</td></tr>
            <tr><td>Importe de la presente Rendición S/</td><td style="text-align:right;">- ${window.fmtSoles(totalRend)}</td></tr>
            <tr class="fila-total-general"><td>SALDO ACTUAL EN EFECTIVO S/</td><td style="text-align:right;">${window.fmtSoles(saldoActual)}</td></tr>
          </tbody>
        </table>

        <div class="bloque-firmas" style="width:60%; margin-top:0;">
          <div class="linea-firma" style="width:45%;"><strong>Oficina de Tesorería / Administrador / Responsable Unidad</strong><br/>${p.nombre_dependencia}</div>
          <div class="linea-firma" style="width:45%;"><strong>Encargado Único del manejo de la Caja Chica</strong><br/>${p.usuario_nombre}</div>
        </div>
      </div>
    </div>
  `;

  window.MotorAnexosANC.imprimirDocumentoOficial(`Anexo13_Rendicion_Caja_${p.codigo_dependencia}`, html, "landscape");
};

// ANEXO 17 EXACTO: FORMATO DE LIBRO CAJA (Página 54 Directiva V.08)
window.imprimirLibroCajaAnexo17PDF = function() {
  const p = window.ANC_STATE.perfilActivo;
  const misGastos = [...window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  )].reverse();

  const totalEgresos = misGastos.reduce((a, b) => a + Number(b.monto_total_soles || 0), 0);
  const montoApertura = Number((Number(p.saldo_caja_chica || 0) + totalEgresos).toFixed(2));
  let saldoAcumulado = montoApertura;

  const cab = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "MANEJO DE LA CAJA CHICA DEL MINISTERIO PÚBLICO", "08");

  const html = `
    <div class="hoja-oficial">
      ${cab}
      <div class="titulo-anexo-num">ANEXO 17</div>
      <div class="titulo-anexo-nombre">FORMATO DE LIBRO CAJA (${p.nombre_dependencia.toUpperCase()})</div>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th colspan="3" style="text-align:center;">INGRESOS (b)</th>
            <th colspan="3" style="text-align:center;">EGRESOS (c)</th>
            <th rowspan="2" style="width:14%; text-align:right;">SALDO EN EFECTIVO (d)<br/>S/</th>
          </tr>
          <tr>
            <th style="width:10%;">FECHA (a)</th>
            <th style="width:22%;">CONCEPTO</th>
            <th style="width:11%; text-align:right;">IMPORTE S/</th>
            <th style="width:10%;">FECHA</th>
            <th style="width:22%;">CONCEPTO / COMPROBANTE</th>
            <th style="width:11%; text-align:right;">IMPORTE S/</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">02/01/${window.ANC_STATE.config.anio_fiscal}</td>
            <td><strong>Apertura / Reposición de la Caja Chica</strong></td>
            <td style="text-align:right; font-weight:bold;">${montoApertura.toFixed(2)}</td>
            <td style="text-align:center;">-</td>
            <td>Saldo inicial habilitado</td>
            <td style="text-align:right;">0.00</td>
            <td style="text-align:right; font-weight:bold;">${montoApertura.toFixed(2)}</td>
          </tr>
          ${misGastos.map(g => {
            saldoAcumulado = Number((saldoAcumulado - Number(g.monto_total_soles || 0)).toFixed(2));
            return `
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td style="text-align:center;">${g.fecha_emision}</td>
                <td>Por ${g.concepto_detalle} según ${g.tipo_comprobante} N° ${g.serie_numero_comprobante}</td>
                <td style="text-align:right;">${Number(g.monto_total_soles).toFixed(2)}</td>
                <td style="text-align:right; font-weight:bold;">${saldoAcumulado.toFixed(2)}</td>
              </tr>
            `;
          }).join("")}
          <tr class="fila-total-general">
            <td colspan="2" style="text-align:right;">TOTAL INGRESOS S/</td>
            <td style="text-align:right;">${montoApertura.toFixed(2)}</td>
            <td colspan="2" style="text-align:right;">TOTAL EGRESOS S/</td>
            <td style="text-align:right;">${totalEgresos.toFixed(2)}</td>
            <td style="text-align:right;">${window.fmtSoles(saldoAcumulado)}</td>
          </tr>
        </tbody>
      </table>

      <div class="bloque-firmas">
        <div class="linea-firma" style="width:42%;"><strong>Oficina de Tesorería / Administrador</strong><br/>${p.nombre_dependencia}</div>
        <div class="linea-firma" style="width:42%;"><strong>Encargado Único del manejo de la Caja Chica</strong><br/>${p.usuario_nombre}</div>
      </div>
    </div>
  `;

  window.MotorAnexosANC.imprimirDocumentoOficial(`Anexo17_Libro_Caja_${p.codigo_dependencia}`, html, "landscape");
};

window.exportarRendicionCajaDependenciaExcel = function() {
  const p = window.ANC_STATE.perfilActivo;
  const misGastos = window.CAJA_STATE.gastosRegistrados.filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );
  const cab = ["NRO", "DEPENDENCIA", "FECHA", "TIPO_COMPROBANTE", "SERIE_NUMERO", "RUC_DNI", "PROVEEDOR_O_LOCADOR", "ESPECIFICA", "DETALLE_GASTO", "IMPORTE_TOTAL_SOLES", "RETENCION_IGV", "DETRACCION", "RETENCION_4TA", "NETO_PAGADO"];
  const filas = misGastos.map((g, i) => [
    i + 1,
    p.nombre_dependencia,
    g.fecha_emision,
    g.tipo_comprobante,
    g.serie_numero_comprobante,
    g.ruc_dni_proveedor,
    g.razon_social_proveedor,
    g.especifica_gasto,
    g.concepto_detalle,
    Number(g.monto_total_soles || 0).toFixed(2),
    Number(g.monto_retencion_igv || 0).toFixed(2),
    Number(g.monto_detraccion || 0).toFixed(2),
    Number(g.monto_retencion_4ta || 0).toFixed(2),
    Number(g.neto_pagar_proveedor || 0).toFixed(2)
  ]);
  window.MotorAnexosANC.exportarExcelCSV(`Rendicion_Caja_Chica_${p.codigo_dependencia}.csv`, cab, filas);
};
