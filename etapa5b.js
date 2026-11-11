// =========================================================================================
// ETAPA 5B (PASO D2): EVALUADOR BAJO DEMANDA DE CAJA CHICA Y TOPES UIT + EVALUADOR DE
// FONDOS POR ENCARGO CON GENERADOR LIMPIO DE FORMATOS OFICIALES PDF (DIRECTIVA V.06)
// Directiva Caja Chica V.08 + Directiva Fondos por Encargo V.06 - UE 012: ANC-MP
// =========================================================================================

window.EVALUADOR_CATALOGO = [
  // 1. BIENES Y SERVICIOS PERMITIDOS EN CAJA CHICA (CON Y SIN REQUISITO PREVIO)
  {
    codigo: "CC-ALI-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "🍽️",
    nombre: "Alimentos y Bebidas (Personal Administrativo en turno / +4h adicionales)",
    keywords: "almuerzo cena refrigerio comida sobretiempo horas adicionales turno administrativo",
    especifica: "2.3.1.1.1.1", tipoTopeComp: "FIJO", valorTopeComp: 24.00,
    topeAnualUitSede: null, topeAnualUitAdc: null,
    requisito: "Máximo S/ 24.00 por servidor administrativo que acredite +4 horas adicionales en Registro de Asistencia con autorización de su jefe inmediato. PROHIBIDO para Fiscales que perciben Gastos Operativos (RFN N° 190-2022-MP-FN).",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.1 (a, b, d)"
  },
  {
    codigo: "CC-ALI-02", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "☕",
    nombre: "Alimentos Menores para Reuniones de Trabajo / Actividades Oficiales",
    keywords: "reunion trabajo bocaditos cafe galletas agua atencion oficial",
    especifica: "2.3.1.1.1.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 10.0,
    topeAnualUitSede: 1.20, topeAnualUitAdc: 1.20,
    requisito: "Tope mensual del 10% de la UIT vigente. Es obligatorio indicar en el anverso del comprobante el tema tratado en la reunión de trabajo y firma del responsable.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.1 (e, g)"
  },
  {
    codigo: "CC-ALI-03", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "💧",
    nombre: "Compra de Agua en Bidones / Mesa (Sin proceso de selección vigente)",
    keywords: "agua bidon garrafon bebida hidratacion",
    especifica: "2.3.1.1.1.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Procede en Unidades Orgánicas o ADC que no cuenten con proceso de selección vigente. Tope: 20% UIT por comprobante y hasta 8 UIT al año.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.1 (h)"
  },
  {
    codigo: "CC-COM-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "⛽",
    nombre: "Combustible, Carburantes y Lubricantes (Vehículos Oficiales / Grupos Electrógenos)",
    keywords: "gasolina petroleo diesel glp lubricante aceite vehiculo oficial grupo electrogeno",
    especifica: "2.3.1.3.1.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Exige consignar obligatoriamente en el anverso de la Factura el N° de Placa de rodaje y Kilometraje, firmado por el conductor, Encargado Único y Administrador.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.2 (a, b, c)"
  },
  {
    codigo: "CC-MAT-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "📎",
    nombre: "Materiales y Útiles de Oficina Menores y Urgentes",
    keywords: "papel bond lapiceros folders archivadores utiles oficina papeleria",
    especifica: "2.3.1.5.1.2", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Exige adjuntar obligatoriamente el Pedido de Comprobante de Salida (PECOSA) presentado al Almacén que indique la FALTA DE DISPONIBILIDAD (sin stock).",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.3 (a)"
  },
  {
    codigo: "CC-MAT-02", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "🖨️",
    nombre: "Compra de Tóner y Tintas para Impresoras",
    keywords: "toner tinta cartucho impresora impresion",
    especifica: "2.3.1.5.1.2", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Exige adjuntar PECOSA del Almacén que acredite falta de disponibilidad (sin stock) y que no haya sido abastecido por Abastecimiento/Logística.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.3 (f)"
  },
  {
    codigo: "CC-MAT-03", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "🧹",
    nombre: "Materiales de Limpieza, Desinfectantes, Ferretería y EPP",
    keywords: "lejia detergente desinfectante limpieza candado cerradura llave ferreteria epp mascarilla guantes",
    especifica: "2.3.1.5.3.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Limpieza procede cuando no sea proporcionado por empresa contratada. Comparte tope anual de 8 UIT del rubro Materiales y Útiles.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.3 (b, d, e)"
  },
  {
    codigo: "CC-MAT-04", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "💡",
    nombre: "Material Eléctrico, Iluminación y Dispositivos de Almacenamiento (USB / Discos)",
    keywords: "foco luminaria cable enchufe usb memoria disco externo informatico electricidad",
    especifica: "2.3.1.5.4.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Los comprobantes de pago deben refrendarse en el anverso con el V°B° del personal técnico a cargo de efectuar los trabajos.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.3 (c)"
  },
  {
    codigo: "CC-OTB-01", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "📰",
    nombre: "Compra del Diario Oficial 'El Peruano' y Diario Local (Sedes sin Internet)",
    keywords: "diario el peruano periodico normas legales",
    especifica: "2.3.1.99.1.3", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 1.00, topeAnualUitAdc: 1.00,
    requisito: "Procede para Jefatura/Presidencia y despachos que no cuenten con internet. Tope máximo anual: 1 UIT.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.4"
  },
  {
    codigo: "CC-OTB-02", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "🇵🇪",
    nombre: "Suscripción Digital de Diarios, Símbolos Patrios, Distintivos y Condecoraciones",
    keywords: "bandera escudo estandarte medalla solapin suscripcion diario imagen",
    especifica: "2.3.1.99.1.99", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 4.00, topeAnualUitAdc: 4.00,
    requisito: "Excepcional para Alta Dirección e Imagen Institucional. Tope máximo anual: 4 UIT.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.4"
  },
  {
    codigo: "CC-REP-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "🛞",
    nombre: "Repuestos Vehiculares, Accesorios, Llantas y Baterías (Excepcional)",
    keywords: "repuesto filtro llanta neumatico bateria auto camioneta vehiculo",
    especifica: "2.3.1.6.1.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Para mantenimiento no programable de vehículos oficiales cuando no sean proporcionados por el Almacén. Tope: 20% UIT por comprobante y 8 UIT anual.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.5"
  },
  {
    codigo: "CC-ENS-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "☕",
    nombre: "Adquisición de Enseres de Cocina",
    keywords: "taza vaso plato cubiertos termo hervidor menaje cocina enseres",
    especifica: "2.3.1.99.1.99", tipoTopeComp: "FIJO", valorTopeComp: 700.00,
    topeAnualUitSede: 0.50, topeAnualUitAdc: 0.50,
    requisito: "Tope máximo de S/ 700.00 mensual por comprobante de pago y hasta media (0.5) UIT al año en Sede Central y cada ADC.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.6"
  },
  {
    codigo: "CC-MED-01", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "🩹",
    nombre: "Suministros Médicos para Botiquín (Alcohol, Algodón, Agua Oxigenada)",
    keywords: "botiquin alcohol algodon gasa agua oxigenada vendas primeros auxilios",
    especifica: "2.3.1.8.1.2", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 4.00, topeAnualUitAdc: 4.00,
    requisito: "Para abastecer botiquines de las Unidades Orgánicas y ADC a nivel nacional. Tope máximo anual: 4 UIT.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.7"
  },
  {
    codigo: "CC-MOV-01", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "🚕",
    nombre: "Movilidad Local por Diligencias Administrativas / +4h Adicionales (Anexo 08 y 09)",
    keywords: "taxi movilidad local diligencia notificacion desplazamiento urbano anexo 09",
    especifica: "2.3.2.1.2.99", tipoTopeComp: "TARIFARIO", valorTopeComp: 46.00,
    topeAnualUitSede: null, topeAnualUitAdc: null,
    requisito: "Sustentado con DJ Anexo 08 según Tarifario Único Anexo 09 en Lima/Callao. PROHIBIDO para Fiscales con Gastos Operativos (RFN 190-2022-MP-FN).",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.8 (b, c)"
  },
  {
    codigo: "CC-MEN-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "✉️",
    nombre: "Servicio de Mensajería y Remisión de Documentos Urgentes",
    keywords: "courier mensajeria envio valija serpost olva documentos notificacion",
    especifica: "2.3.2.2.3.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Siempre que no exista servicio contratado vigente y priorizando notificaciones electrónicas (Ley N° 32068). Tope: 20% UIT comprobante / 8 UIT anual.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.10"
  },
  {
    codigo: "CC-MAN-01", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "🛠️",
    nombre: "Mantenimiento y Reparaciones (SS.HH., Aire Acondicionado, Vehículos, SOAT, Mobiliario, Equipos)",
    keywords: "gasfiteria bano aire acondicionado taller vehicular soat revision tecnica impresora fotocopiadora mueble",
    especifica: "2.3.2.4.7.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "En vehículos detallar por separado valor de repuesto y mano de obra. Tope: 20% UIT por comprobante y 8 UIT anual por cada inciso. Verificar detracción 10% (Cód. 020) si > S/ 700.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.11 (a-f)"
  },
  {
    codigo: "CC-OTS-01", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "🚚",
    nombre: "Transporte de Carga, Estiba, Peajes, SUNARP, Notariales, Extintores, Cortinas y Fotocopiado",
    keywords: "flete carga mudanza estiba grua peaje sunarp notaria extintor fumigacion cortinas fotocopia",
    especifica: "2.3.2.7.11.99", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 8.00, topeAnualUitAdc: 8.00,
    requisito: "Cada rubro cuenta con tope de 20% UIT por comprobante y máximo 8 UIT al año en Sede Central y cada ADC.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.12 (a, b, e)"
  },
  {
    codigo: "CC-OTS-03", modalidad: "CAJA_CHICA", semaforo: "AMARILLO", icono: "💐",
    nombre: "Florería y Jardinería (Protocolo, Festividades Religiosas, Fallecimientos)",
    keywords: "flores arreglo floral corona misa capilla protocolo defuncion",
    especifica: "2.3.1.99.1.99", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 2.00, topeAnualUitAdc: 0.50,
    requisito: "Tope anual diferenciado: Hasta 2 UIT al año en Sede Central y máximo 0.5 UIT (Media UIT) al año en cada ADC.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.12 (c)"
  },
  {
    codigo: "CC-OTS-04", modalidad: "CAJA_CHICA", semaforo: "VERDE", icono: "🧺",
    nombre: "Servicio de Lavandería (2 UIT), Traducciones (3 UIT) e Impresiones/Empastados (4 UIT)",
    keywords: "lavanderia cortinas banderola traduccion interprete impresion banner empastado caratula",
    especifica: "2.3.2.7.11.99", tipoTopeComp: "PCT_UIT", valorTopeComp: 20.0,
    topeAnualUitSede: 4.00, topeAnualUitAdc: 4.00,
    requisito: "Lavandería máx. 2 UIT anual; Traducciones máx. 3 UIT anual; Impresiones/Banners/Empastados máx. 4 UIT anual.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.12 (d, f, g)"
  },

  // 2. MODALIDAD DE FONDOS POR ENCARGO (Directiva de Encargos V.06 - OGFIN/DIR-01)
  {
    codigo: "ENC-GEN-01", modalidad: "ENCARGO", semaforo: "AMARILLO", icono: "🏛️",
    nombre: "Fondo por Encargo: Eventos, Capacitaciones, Acondicionamiento de Locales, Fotocopiadoras o Tasas Municipales",
    keywords: "encargo evento taller capacitacion expositor acondicionamiento local mantenimiento fotocopiadora licencia municipal",
    especifica: "2.3.2.7.10.1", tipoTopeComp: "PCT_UIT", valorTopeComp: 1000.0,
    topeAnualUitSede: 10.00, topeAnualUitAdc: 10.00,
    requisito: "Tope máx. 10 UIT (Expositores locadores máx. 3 UIT). Si >= 1 UIT exige 3 cotizaciones detalladas, Cuadro Comparativo e informe técnico. Rendición en 3 días hábiles. PROHIBIDO otorgar a personal CAS (D.L. 1057) o locadores.",
    baseLegal: "Directiva Encargos V.06 - Numerales 5.1.2, 5.1.7, 5.2.1 y 5.2.4"
  },

  // 3. PROHIBICIONES EXPRESAS (SEMÁFORO ROJO - BLOQUEADO AUTOMÁTICAMENTE)
  {
    codigo: "PRO-BAS-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🚫",
    nombre: "Pago de Servicios Básicos (Recibos de Agua, Luz, Teléfono, Internet)",
    keywords: "luz agua telefono internet recibo sedapal enel movistar claro servicio basico",
    especifica: "2.3.2.2.1.1", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: Queda prohibida la atención de Servicios Básicos por Caja Chica (R.D. N° 008-2024-EF/52.01 y Numeral 5.2.1.3.9 Directiva V.08).",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.3.9"
  },
  {
    codigo: "PRO-ACT-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🪑",
    nombre: "Muebles, Escritorios, Sillas, Impresoras, Computadoras, Cámaras o Activos Inventariables",
    keywords: "escritorio silla sillon estante armario impresora computadora laptop camara proyector mueble activo fijo",
    especifica: "2.6.3.2.1.1", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: Prohibido comprar o confeccionar muebles, sillas, impresoras, cámaras o activos fijos con Caja Chica o Encargos por ser bienes inventariables.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.9.2 y 5.2.1.9.5 / Encargos 5.2.1.d"
  },
  {
    codigo: "PRO-MOT-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🔧",
    nombre: "Reparación de Motores de Vehículos > 1/4 UIT (0.25 UIT) o Vehículos Particulares",
    keywords: "motor bajada motor rectificacion vehiculo particular",
    especifica: "2.3.2.4.5.1", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: Prohibido reparar motores de vehículos que superen 1/4 (25%) de la UIT vigente o atender vehículos particulares.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.9.4 y 5.2.1.9.6"
  },
  {
    codigo: "PRO-OBR-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🧱",
    nombre: "Obras de Infraestructura (Reparación de Veredas, Cambio Total de Pisos, Fachadas)",
    keywords: "obra vereda cambio piso enchapado fachada construccion",
    especifica: "2.6.2.2.1.1", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: Prohibido realizar trabajos de veredas, cambio total de pisos o enchapado de fachada que correspondan al rubro de Obras.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.9.3"
  },
  {
    codigo: "PRO-AGA-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🎂",
    nombre: "Agasajos por Fechas Festivas (Día de la Madre, Padre, Secretaria, Fiestas Patrias, Navidad)",
    keywords: "agasajo fiesta brindis torta regalo dia madre padre secretaria navidad",
    especifica: "2.3.1.1.1.1", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: Prohibido afectar recursos públicos para celebraciones o agasajos por fechas festivas.",
    baseLegal: "Directiva Caja Chica V.08 - Numeral 5.2.1.9.7"
  },
  {
    codigo: "PRO-PRO-01", modalidad: "PROHIBIDO", semaforo: "ROJO", icono: "🚫",
    nombre: "Reconocimiento de Propinas en Comprobantes de Consumo, Alojamiento o Movilidad",
    keywords: "propina tip recargo consumo restaurante hotel taxi",
    especifica: "2.3.2.1.2.2", tipoTopeComp: "BLOQUEADO", valorTopeComp: 0,
    topeAnualUitSede: 0, topeAnualUitAdc: 0,
    requisito: "PROHIBIDO POR NORMA: No se reconocen gastos por el otorgamiento de propinas contenidos en comprobantes de consumo, alojamiento o movilidad.",
    baseLegal: "Resolución N° 000038-2025-MP-FN-GG-OGFIN"
  }
];

window.MOSTRAR_TODOS_SUPUESTOS_EVAL = false;
window.FILTRO_SEMAFORO_ACTUAL = "NINGUNO";

document.addEventListener("DOMContentLoaded", () => {
  renderizarModuloEvaluadorNormativo();
});

function renderizarModuloEvaluadorNormativo() {
  const cont = document.getElementById("contenedor-modulo-evaluador");
  if (!cont) return;

  const cfg = window.ANC_STATE ? window.ANC_STATE.config : { valor_uit: 5350 };
  const uit = Number(cfg.valor_uit || 5350);

  cont.innerHTML = `
    <div style="margin-bottom:14px;">
      <h2 style="font-size:1.28rem; font-weight:900; color:#0F172A;">🚦 Evaluador de Caja Chica, Topes UIT y Encargos</h2>
      <p style="font-size:0.84rem; color:#475569; font-weight:600;">
        Escribe tu requerimiento para ver el supuesto aplicable o evalúa Fondos por Encargo con reporte oficial en PDF (UIT = ${window.fmtSoles(uit)})
      </p>
    </div>

    <!-- PESTAÑAS INTERNAS DEL EVALUADOR -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; margin-bottom:16px;">
      <button type="button" id="tab-eval-semaforo" onclick="cambiarTabEvaluador('SEMAFORO')" style="background:#0F172A; color:#F59E0B; border:2px solid #0F172A; border-radius:10px; padding:10px 6px; font-size:0.78rem; font-weight:900; cursor:pointer;">
        🚦 ¿En qué gastar? (Buscador UIT)
      </button>
      <button type="button" id="tab-eval-encargos" onclick="cambiarTabEvaluador('ENCARGOS')" style="background:#FFFFFF; color:#0F172A; border:2px solid #CBD5E1; border-radius:10px; padding:10px 6px; font-size:0.78rem; font-weight:800; cursor:pointer;">
        🏛️ Evaluador de Encargos (V.06)
      </button>
      <button type="button" id="tab-eval-anexos" onclick="cambiarTabEvaluador('ANEXOS')" style="background:#FFFFFF; color:#0F172A; border:2px solid #CBD5E1; border-radius:10px; padding:10px 6px; font-size:0.78rem; font-weight:800; cursor:pointer;">
        🚕 Anexo 09 (44) y Detracción (03)
      </button>
    </div>

    <!-- SUB-VISTA 1: BUSCADOR LIMPIO BAJO DEMANDA CON OPCIÓN DE MOSTRAR TODOS LOS SUPUESTOS -->
    <div id="subvista-eval-semaforo">
      <div style="background:#F8FAFC; border:2px solid #CBD5E1; border-radius:14px; padding:14px; margin-bottom:14px;">
        <label style="display:block; font-size:0.76rem; font-weight:900; color:#0F172A; margin-bottom:6px;">
          🔍 BUSCA EL BIEN O SERVICIO A EVALUAR (Se mostrará únicamente la coincidencia encontrada):
        </label>
        <input type="text" id="input-buscador-evaluador" oninput="alEscribirBusquedaEvaluador()" placeholder="Escribe aquí (ej: tóner, agua, silla, taxi, luz, flores, motor, expositor, almuerzo)..." style="width:100%; padding:12px; border-radius:10px; border:2px solid #D97706; font-size:0.92rem; font-weight:700; margin-bottom:10px; background:#FFF;" />

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            <button type="button" onclick="setFiltroSemaforo('VERDE')" class="chip-option" style="background:#10B981; color:#FFF;">🟢 Ver Permitidos</button>
            <button type="button" onclick="setFiltroSemaforo('AMARILLO')" class="chip-option" style="background:#F59E0B; color:#0F172A;">🟡 Con Requisito</button>
            <button type="button" onclick="setFiltroSemaforo('ROJO')" class="chip-option" style="background:#EF4444; color:#FFF;">🔴 Ver Prohibidos</button>
          </div>
          <button type="button" id="btn-toggle-todos-supuestos" onclick="alternarMostrarTodosSupuestos()" style="background:#0F172A; color:#F59E0B; border:none; border-radius:8px; padding:7px 12px; font-size:0.76rem; font-weight:900; cursor:pointer;">
            📋 Mostrar todos los supuestos (${window.EVALUADOR_CATALOGO.length})
          </button>
        </div>
      </div>

      <div id="lista-resultados-evaluador" style="display:flex; flex-direction:column; gap:12px;"></div>
    </div>

    <!-- SUB-VISTA 2: EVALUADOR DE FONDOS POR ENCARGO + GENERACIÓN DE FORMATOS OFICIALES PDF (DIRECTIVA V.06) -->
    <div id="subvista-eval-encargos" style="display:none;">
      <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:16px; padding:16px;">
        <h3 style="font-size:1rem; font-weight:900; color:#78350F; margin-bottom:6px;">
          🏛️ Evaluador de Fondos por Encargo y Generador de Reporte Oficial (Directiva V.06)
        </h3>
        <p style="font-size:0.8rem; color:#92400E; margin-bottom:12px;">
          Evalúa el requerimiento conforme a la Directiva OGFIN/DIR-01 Versión 06 (Tope máx. 10 UIT = ${window.fmtSoles(uit * 10)}) y genera sus formatos oficiales en PDF con el logo de la ANC-MP.
        </p>

        <div style="margin-bottom:10px;">
          <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">SUPUESTO NORMATIVO DEL ENCARGO (NUMERAL 5.2.1):</label>
          <select id="enc-tipo-supuesto" onchange="evaluarSimuladorEncargo()" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #D97706; font-weight:800; font-size:0.84rem; background:#FFF;">
            <option value="CAPACITACION" data-max-uit="10" data-clase="BIEN">1. Bienes/Materiales para eventos de capacitación, talleres JJR o UCAVIT (Máx. 10 UIT)</option>
            <option value="EXPOSITOR" data-max-uit="3" data-clase="SERVICIO">2. Pago de honorarios a Expositores / Locadores de talleres o capacitación (Máx. 3 UIT por expositor)</option>
            <option value="INVESTIGACION" data-max-uit="10" data-clase="SERVICIO">3. Actividades de investigación (Exhumaciones, exámenes forenses) o inauguraciones (Máx. 10 UIT)</option>
            <option value="MANTENIMIENTO_LOCAL" data-max-uit="10" data-clase="SERVICIO">4. Acondicionamiento de locales / Reparación vehicular ante restricción de oferta local (Máx. 10 UIT)</option>
            <option value="FOTOCOPIADORAS" data-max-uit="10" data-clase="SERVICIO">5. Mantenimiento y reparación a todo costo de fotocopiadoras (Máx. 10 UIT anual - Exige 3 cotizaciones)</option>
            <option value="TASAS_ESTUDIOS" data-max-uit="10" data-clase="SERVICIO">6. Derechos municipales, licencias de obra, conexiones agua/luz o estudios de suelos urgentes (Máx. 10 UIT)</option>
            <option value="ACTIVO_FIJO" data-max-uit="0" data-clase="PROHIBIDO">7. Compra de Mobiliario, Equipos o Activos Fijos (PROHIBIDO numeral 5.2.1.d)</option>
          </select>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
          <div>
            <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">MONTO SOLICITADO (S/):</label>
            <input type="number" id="enc-monto-soles" value="6500" step="100" oninput="evaluarSimuladorEncargo()" style="width:100%; padding:10px; border-radius:10px; border:2px solid #0F172A; font-weight:900; font-size:0.95rem;" />
          </div>
          <div>
            <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">RÉGIMEN DEL RESPONSABLE DEL ENCARGO:</label>
            <select id="enc-regimen-resp" onchange="evaluarSimuladorEncargo()" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #0F172A; font-weight:800; font-size:0.83rem;">
              <option value="DL_728_276">Servidor / Fiscal D.L. N° 728 o D.L. N° 276 (Habilitado)</option>
              <option value="CAS_1057">Personal CAS - D.L. N° 1057 (PROHIBIDO Numeral 5.1.7)</option>
              <option value="LOCADOR">Locador / Proveedor de Servicios (PROHIBIDO Numeral 5.1.7)</option>
            </select>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1.3fr 1fr; gap:10px; margin-bottom:10px;">
          <div>
            <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">NOMBRE DEL RESPONSABLE DEL ENCARGO:</label>
            <input type="text" id="enc-nombre-resp" value="${window.ANC_STATE?.perfilActivo?.usuario_nombre || 'Administrador / Responsable ANC'}" style="width:100%; padding:9px; border-radius:9px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.83rem;" />
          </div>
          <div>
            <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">PROVEEDOR / LOCADOR SELECCIONADO:</label>
            <input type="text" id="enc-proveedor" value="Servicios Generales y Técnicos S.A.C." style="width:100%; padding:9px; border-radius:9px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.83rem;" />
          </div>
        </div>

        <div style="margin-bottom:12px;">
          <label style="display:block; font-size:0.74rem; font-weight:800; color:#334155; margin-bottom:3px;">OBJETO Y JUSTIFICACIÓN DEL ENCARGO:</label>
          <input type="text" id="enc-descripcion" value="Servicio de acondicionamiento urgente de ambientes para despacho de control funcional" style="width:100%; padding:9px; border-radius:9px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.84rem;" />
        </div>

        <!-- Dictamen Automático del Evaluador de Encargos -->
        <div id="dictamen-simulador-encargo" style="margin-bottom:12px;"></div>

        <!-- Botones de Guardado y Generación de Reportes / Formatos Oficiales de Encargos (Directiva V.06) -->
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:8px;">
          <button type="button" id="btn-registrar-encargo" onclick="registrarSolicitudEncargo()" style="background:#10B981; color:#FFFFFF; border:none; border-radius:11px; padding:12px; font-size:0.82rem; font-weight:900; cursor:pointer;">
            💾 Guardar Solicitud en Base de Datos
          </button>
          <button type="button" onclick="imprimirReporteEvaluacionEncargoPDF('INFORME_Y_FORMATOS')" style="background:#0F172A; color:#F59E0B; border:2px solid #F59E0B; border-radius:11px; padding:12px; font-size:0.82rem; font-weight:900; cursor:pointer;">
            🖨️ Imprimir Reporte y Formatos de Encargo (PDF)
          </button>
          <button type="button" onclick="imprimirReporteEvaluacionEncargoPDF('FORMATO_1_2_3_4')" style="background:#D97706; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.77rem; font-weight:900; cursor:pointer;">
            📋 Formatos N° 1/2 o N° 3/4 (Solicitud/Conformidad)
          </button>
          <button type="button" onclick="imprimirReporteEvaluacionEncargoPDF('FORMATO_6')" style="background:#3B82F6; color:#FFFFFF; border:none; border-radius:10px; padding:10px; font-size:0.77rem; font-weight:900; cursor:pointer;">
            📑 Formato N° 6: Rendición de Encargo (3 días)
          </button>
        </div>
      </div>
    </div>

    <!-- SUB-VISTA 3: CONSULTA RÁPIDA DEL TARIFARIO ANEXO 09 (44 DISTRITOS) Y DETRACCIONES ANEXO 03 -->
    <div id="subvista-eval-anexos" style="display:none;">
      <div style="background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:16px; padding:14px; margin-bottom:16px;">
        <h3 style="font-size:0.96rem; font-weight:900; color:#0F172A; margin-bottom:8px;">
          🚕 Anexo 09: Tarifario Único de Movilidad Local - Sede Central (44 Distritos Día y Noche)
        </h3>
        <input type="text" id="input-buscar-distrito-anexo09" oninput="filtrarTablaAnexo09()" placeholder="🔍 Buscar distrito de Lima o Callao..." style="width:100%; padding:9px; border-radius:8px; border:1.5px solid #3B82F6; margin-bottom:10px; font-weight:700;" />
        <div style="max-height:280px; overflow-y:auto;">
          <table class="anc-list-table">
            <thead>
              <tr>
                <th>N°</th>
                <th>DISTRITO / DESTINO</th>
                <th>DÍA (<19h)</th>
                <th>NOCHE (>=19h)</th>
              </tr>
            </thead>
            <tbody id="tbody-consulta-anexo09"></tbody>
          </table>
        </div>
      </div>

      <div style="background:#FFFFFF; border:1.5px solid #CBD5E1; border-radius:16px; padding:14px;">
        <h3 style="font-size:0.96rem; font-weight:900; color:#0F172A; margin-bottom:8px;">
          🏦 Anexo 03: Tabla de Bienes y Servicios Sujetos a Detracción SUNAT
        </h3>
        <table class="anc-list-table">
          <thead>
            <tr>
              <th>CÓD.</th>
              <th>TIPO DE BIEN O SERVICIO</th>
              <th>TASA (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>012</strong></td><td>Intermediación laboral y tercerización</td><td><strong>10%</strong></td></tr>
            <tr><td><strong>019</strong></td><td>Arrendamiento de bienes muebles e inmuebles</td><td><strong>10%</strong></td></tr>
            <tr><td><strong>020</strong></td><td>Mantenimiento y reparación de bienes muebles (Vehículos, equipos, mobiliario)</td><td><strong>10%</strong></td></tr>
            <tr><td><strong>021</strong></td><td>Movimiento de carga (Estiba y desestiba)</td><td><strong>10%</strong></td></tr>
            <tr><td><strong>022</strong></td><td>Otros servicios empresariales (Fotocopiado, impresiones, traducciones, asesorías)</td><td><strong>12%</strong></td></tr>
            <tr><td><strong>026</strong></td><td>Servicio de transporte de personas</td><td><strong>10%</strong></td></tr>
            <tr><td><strong>027</strong></td><td>Servicio de transporte de bienes por vía terrestre (Carga)</td><td><strong>4%</strong></td></tr>
            <tr><td><strong>030</strong></td><td>Contratos de construcción / acondicionamiento</td><td><strong>4%</strong></td></tr>
            <tr><td><strong>037</strong></td><td>Demás operaciones gravadas con el IGV (Lavandería y servicios generales)</td><td><strong>12%</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  window.MOSTRAR_TODOS_SUPUESTOS_EVAL = false;
  window.FILTRO_SEMAFORO_ACTUAL = "NINGUNO";
  filtrarCatalogoEvaluador();
  evaluarSimuladorEncargo();
  filtrarTablaAnexo09();
}

window.cambiarTabEvaluador = function(tab) {
  document.getElementById("subvista-eval-semaforo").style.display = tab === "SEMAFORO" ? "block" : "none";
  document.getElementById("subvista-eval-encargos").style.display = tab === "ENCARGOS" ? "block" : "none";
  document.getElementById("subvista-eval-anexos").style.display = tab === "ANEXOS" ? "block" : "none";

  const b1 = document.getElementById("tab-eval-semaforo");
  const b2 = document.getElementById("tab-eval-encargos");
  const b3 = document.getElementById("tab-eval-anexos");

  [b1, b2, b3].forEach(b => {
    if (b) {
      b.style.background = "#FFFFFF";
      b.style.color = "#0F172A";
    }
  });

  const activeBtn = tab === "SEMAFORO" ? b1 : (tab === "ENCARGOS" ? b2 : b3);
  if (activeBtn) {
    activeBtn.style.background = "#0F172A";
    activeBtn.style.color = "#F59E0B";
  }
};

window.alEscribirBusquedaEvaluador = function() {
  window.FILTRO_SEMAFORO_ACTUAL = "NINGUNO";
  filtrarCatalogoEvaluador();
};

window.setFiltroSemaforo = function(color) {
  window.FILTRO_SEMAFORO_ACTUAL = color;
  window.MOSTRAR_TODOS_SUPUESTOS_EVAL = false;
  actualizarTextoBotonTodosSupuestos();
  filtrarCatalogoEvaluador();
};

window.alternarMostrarTodosSupuestos = function() {
  window.MOSTRAR_TODOS_SUPUESTOS_EVAL = !window.MOSTRAR_TODOS_SUPUESTOS_EVAL;
  if (window.MOSTRAR_TODOS_SUPUESTOS_EVAL) {
    window.FILTRO_SEMAFORO_ACTUAL = "TODOS";
  } else {
    window.FILTRO_SEMAFORO_ACTUAL = "NINGUNO";
  }
  actualizarTextoBotonTodosSupuestos();
  filtrarCatalogoEvaluador();
};

function actualizarTextoBotonTodosSupuestos() {
  const btn = document.getElementById("btn-toggle-todos-supuestos");
  if (!btn) return;
  btn.textContent = window.MOSTRAR_TODOS_SUPUESTOS_EVAL
    ? `🔼 Ocultar lista completa`
    : `📋 Mostrar todos los supuestos (${window.EVALUADOR_CATALOGO.length})`;
}

// Buscador bajo demanda: Solo muestra tarjetas cuando hay texto buscado o cuando se pide explícitamente
window.filtrarCatalogoEvaluador = function() {
  const cont = document.getElementById("lista-resultados-evaluador");
  if (!cont) return;

  const q = (document.getElementById("input-buscador-evaluador")?.value || "").toLowerCase().trim();
  const color = window.FILTRO_SEMAFORO_ACTUAL;

  // Si no hay búsqueda escrita y no se pulsó "Mostrar todos los supuestos" ni un semáforo, mantener limpio
  if (!q && !window.MOSTRAR_TODOS_SUPUESTOS_EVAL && color === "NINGUNO") {
    cont.innerHTML = `
      <div style="text-align:center; padding:24px 16px; background:#FFFFFF; border:1.5px dashed #CBD5E1; border-radius:16px; color:#475569;">
        <div style="font-size:1.8rem; margin-bottom:6px;">🔎</div>
        <strong style="color:#0F172A; font-size:0.95rem;">Buscador Normativo Inteligente Listo</strong><br/>
        <span style="font-size:0.82rem;">Escribe arriba el bien o servicio que deseas consultar (ej. <em>tóner, taxi, agua, silla, luz, flores</em>) para mostrar únicamente el supuesto que corresponde, o toca el botón <strong>"📋 Mostrar todos los supuestos"</strong>.</span>
      </div>
    `;
    return;
  }

  const cfg = window.ANC_STATE ? window.ANC_STATE.config : { valor_uit: 5350 };
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { es_adc: false, unidad_id: 12 };
  const uit = Number(cfg.valor_uit || 5350);

  const gastosDep = (window.CAJA_STATE?.gastosRegistrados || []).filter(
    g => Number(g.unidad_organica_id) === Number(p.unidad_id) || g.codigo_dependencia === p.codigo_dependencia
  );

  const filtrados = window.EVALUADOR_CATALOGO.filter(item => {
    const pasaColor = color === "TODOS" || color === "NINGUNO" || item.semaforo === color;
    const texto = `${item.nombre} ${item.keywords} ${item.especifica} ${item.codigo}`.toLowerCase();
    const pasaTexto = !q || texto.includes(q);
    return pasaColor && pasaTexto;
  });

  if (filtrados.length === 0) {
    cont.innerHTML = `<div style="text-align:center; padding:20px; color:#64748B; background:#FFF; border-radius:14px;">No se encontraron supuestos con ese término. Intenta con otra palabra clave o evalúalo en la pestaña de Fondos por Encargo.</div>`;
    return;
  }

  cont.innerHTML = filtrados.map(item => {
    const badgeClass = item.semaforo === "VERDE" ? "badge-verde" : (item.semaforo === "AMARILLO" ? "badge-amarillo" : "badge-rojo");
    const badgeTexto = item.semaforo === "VERDE" ? "🟢 PERMITIDO" : (item.semaforo === "AMARILLO" ? "🟡 CON REQUISITO / CONDICIÓN" : "🔴 PROHIBIDO (BLOQUEADO)");

    let topeCompSoles = 0;
    if (item.tipoTopeComp === "PCT_UIT") topeCompSoles = (uit * (item.valorTopeComp / 100));
    else if (item.tipoTopeComp === "FIJO") topeCompSoles = item.valorTopeComp;
    else if (item.tipoTopeComp === "TARIFARIO") topeCompSoles = 46.00;

    const topeUitAnual = p.es_adc ? item.topeAnualUitAdc : item.topeAnualUitSede;
    const topeAnualSoles = topeUitAnual ? (topeUitAnual * uit) : null;

    const gastadoRubro = gastosDep
      .filter(g => (g.concepto_detalle && g.concepto_detalle.includes(item.codigo)) || g.especifica_gasto === item.especifica)
      .reduce((acc, g) => acc + Number(g.monto_total_soles || 0), 0);

    const pctConsumidoAnual = topeAnualSoles ? Math.min(100, Math.round((gastadoRubro / topeAnualSoles) * 100)) : 0;

    return `
      <div style="background:#FFFFFF; border:2px solid ${item.semaforo === 'ROJO' ? '#FCA5A5' : (item.semaforo === 'AMARILLO' ? '#FCD34D' : '#6EE7B7')}; border-radius:16px; padding:14px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:6px;">
          <div style="font-size:0.96rem; font-weight:900; color:#0F172A;">
            ${item.icono} ${item.nombre}
          </div>
          <span class="badge-semaforo ${badgeClass}">${badgeTexto}</span>
        </div>

        <div style="font-size:0.76rem; font-weight:800; color:#475569; margin-bottom:8px;">
          Código: ${item.codigo} • Específica: <strong>${item.especifica}</strong> • Base Legal: ${item.baseLegal}
        </div>

        <div style="font-size:0.82rem; color:#1E293B; background:#F8FAFC; padding:9px 11px; border-radius:10px; margin-bottom:8px; line-height:1.38;">
          <strong>Regla / Condición Normativa:</strong> ${item.requisito}
        </div>

        ${item.semaforo !== "ROJO" ? `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; font-size:0.78rem; color:#0F172A;">
            <div>
              • <strong>Tope por Comprobante:</strong> ${window.fmtSoles(topeCompSoles)}
              ${topeUitAnual ? ` | <strong>Tope Anual (${p.es_adc ? 'ADC' : 'Sede Central'}):</strong> ${topeUitAnual} UIT (${window.fmtSoles(topeAnualSoles)})` : ""}
            </div>
            ${topeAnualSoles ? `
              <div style="font-weight:800; color:${pctConsumidoAnual > 85 ? '#DC2626' : '#059669'};">
                Consumido: ${window.fmtSoles(gastadoRubro)} (${pctConsumidoAnual}%)
              </div>
            ` : ""}
          </div>
        ` : ""}
      </div>
    `;
  }).join("");
};

// Simulador de Fondos por Encargo (Directiva V.06)
window.evaluarSimuladorEncargo = function() {
  const cfg = window.ANC_STATE ? window.ANC_STATE.config : { valor_uit: 5350 };
  const uit = Number(cfg.valor_uit || 5350);

  const selSupuesto = document.getElementById("enc-tipo-supuesto");
  const monto = Number(document.getElementById("enc-monto-soles")?.value || 0);
  const regimen = document.getElementById("enc-regimen-resp")?.value || "DL_728_276";
  const divDictamen = document.getElementById("dictamen-simulador-encargo");
  const btnReg = document.getElementById("btn-registrar-encargo");
  if (!selSupuesto || !divDictamen || !btnReg) return;

  const supuesto = selSupuesto.value;
  const maxUitSupuesto = Number(selSupuesto.options[selSupuesto.selectedIndex].getAttribute("data-max-uit") || 10);
  const topeSolesSupuesto = maxUitSupuesto * uit;
  const equivUit = Number((monto / uit).toFixed(2));

  const alertas = [];
  let viable = true;

  if (supuesto === "ACTIVO_FIJO") {
    viable = false;
    alertas.push("🚫 <strong>PROHIBIDO (Numeral 5.2.1.d Directiva Encargos V.06):</strong> Con los fondos de 'Encargos' NO se adquieren bienes de Activos Fijos ni compras de mobiliario y equipo aun cuando no califiquen como Activos Fijos.");
  }

  if (regimen !== "DL_728_276") {
    viable = false;
    alertas.push("🚫 <strong>IMPEDIMENTO DE RÉGIMEN (Numeral 5.1.7 Directiva Encargos V.06):</strong> Los Fondos por Encargo se aprueban únicamente a nombre de personal sujeto a los regímenes D.L. N° 276 o D.L. N° 728. <strong>No se entregan fondos por Encargo a personal CAS (D.L. N° 1057) ni a locadores.</strong>");
  }

  if (monto > topeSolesSupuesto && supuesto !== "ACTIVO_FIJO") {
    viable = false;
    alertas.push(`🚫 <strong>EXCEDE TOPE EN UIT (${maxUitSupuesto} UIT = ${window.fmtSoles(topeSolesSupuesto)}):</strong> El monto solicitado (${window.fmtSoles(monto)} = ${equivUit} UIT) supera el límite máximo permitido por la Directiva de Encargos V.06.`);
  }

  if (monto >= uit || supuesto === "FOTOCOPIADORAS") {
    alertas.push(`📋 <strong>EXIGE 3 COTIZACIONES Y CUADRO COMPARATIVO (Numeral 5.2.1.a.iv / 5.2.1.b / 5.2.1.f):</strong> Al ser igual o superior a 1 UIT (${window.fmtSoles(uit)}) o tratarse de mantenimiento de fotocopiadoras, es obligatorio recabar <strong>tres (03) cotizaciones detalladas</strong>, elaborar <strong>Cuadro Comparativo</strong> y contar con características técnicas firmadas por el área técnica.`);
  }

  if (supuesto === "EXPOSITOR" && monto > 1500.00) {
    alertas.push(`⚠️ <strong>RETENCIÓN 8% CUARTA CATEGORÍA (Numeral 5.2.3.c):</strong> Al superar S/ 1,500.00 en el Recibo por Honorarios del expositor (locador/proveedor de servicios), retener el 8% (${window.fmtSoles(monto * 0.08)}) salvo Constancia de Suspensión SUNAT.`);
  }

  alertas.push(`⏳ <strong>PLAZO ESTRICTO DE RENDICIÓN (Numeral 5.2.4.a):</strong> La rendición documentada (Formato N° 06) no debe exceder de los <strong>tres (03) días hábiles</strong> después de concluido el evento, taller o actividad.`);

  divDictamen.innerHTML = `
    <div style="background:${viable ? '#ECFDF5' : '#FEF2F2'}; border:2px solid ${viable ? '#10B981' : '#EF4444'}; border-radius:12px; padding:12px; font-size:0.8rem; color:#0F172A; line-height:1.42;">
      <div style="font-weight:900; font-size:0.9rem; margin-bottom:6px; color:${viable ? '#065F46' : '#991B1B'};">
        ${viable ? `✓ ENCARGO VIABLE (${equivUit} UIT de un máximo de ${maxUitSupuesto} UIT)` : `✕ ENCARGO NO VIABLE / OBSERVADO POR NORMA`}
      </div>
      ${alertas.map(a => `<div style="margin-bottom:5px;">${a}</div>`).join("")}
    </div>
  `;

  btnReg.disabled = !viable;
  btnReg.style.opacity = viable ? "1" : "0.45";
};

// Generador Limpio de los Formatos Oficiales de la Directiva de Fondos por Encargo V.06 (Páginas 13, 14 y 16)
window.imprimirReporteEvaluacionEncargoPDF = function(modoImpresion) {
  const cfg = window.ANC_STATE ? window.ANC_STATE.config : { valor_uit: 5350, anio_fiscal: 2026 };
  const p = window.ANC_STATE ? window.ANC_STATE.perfilActivo : { codigo_dependencia: "ANC", nombre_dependencia: "Sede Central ANC-MP" };
  const uit = Number(cfg.valor_uit || 5350);

  const selSupuesto = document.getElementById("enc-tipo-supuesto");
  const supuestoTexto = selSupuesto ? selSupuesto.options[selSupuesto.selectedIndex].text : "Encargo Interno";
  const claseBienServ = selSupuesto ? selSupuesto.options[selSupuesto.selectedIndex].getAttribute("data-clase") : "SERVICIO";
  const maxUit = Number(selSupuesto ? selSupuesto.options[selSupuesto.selectedIndex].getAttribute("data-max-uit") : 10);

  const monto = Number(document.getElementById("enc-monto-soles")?.value || 0);
  const equivUit = (monto / uit).toFixed(2);
  const respNombre = document.getElementById("enc-nombre-resp")?.value || p.usuario_nombre;
  const provNombre = document.getElementById("enc-proveedor")?.value || "Proveedor / Locador";
  const desc = document.getElementById("enc-descripcion")?.value || "Atención por modalidad de Encargo";
  const fechaHoy = new Date().toLocaleDateString("es-PE");
  const especifica = selSupuesto?.value === "EXPOSITOR" ? "2.3.2.7.10.1" : (claseBienServ === "BIEN" ? "2.3.1.5.1.2" : "2.3.2.4.2.1");

  const cabEnc = window.MotorAnexosANC.cabeceraDirectivaHTML("OGFIN/DIR-01", "NORMAS PARA LA ENTREGA DE FONDOS POR LA MODALIDAD DE ENCARGOS", "06");

  // 1. Formato N° 1 y 2 (Bienes) o Formato N° 3 y 4 (Servicios) - Páginas 13 y 14 Directiva Encargos V.06
  const htmlFormatos1a4 = claseBienServ === "BIEN" ? `
    <div class="hoja-oficial">
      ${cabEnc}
      <div class="titulo-anexo-num">FORMATO N° 1</div>
      <div class="titulo-anexo-nombre">SOLICITUD DE BIENES (MODALIDAD DE ENCARGOS)</div>
      <div style="border:1.5px solid #000; padding:14px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span><strong>Sr. Jefe de la Oficina de Administración y Finanzas / Administrador ADC:</strong></span>
          <span><strong>Fecha:</strong> ${fechaHoy}</span>
        </div>
        <div style="margin-bottom:8px;"><strong>Área Usuaria Solicitante:</strong> [${p.codigo_dependencia}] ${p.nombre_dependencia}</div>
        <div style="margin-bottom:10px;"><strong>Responsable del Manejo del Encargo (D.L. 728 / D.L. 276):</strong> ${respNombre}</div>
        <p style="margin-bottom:8px;">Por medio de la presente se solicita atender bajo la modalidad de ENCARGO (Directiva V.06) los siguientes bienes:</p>
        <table class="tabla-directiva">
          <thead>
            <tr>
              <th style="width:15%; text-align:center;">CANTIDAD</th>
              <th style="width:65%;">DESCRIPCIÓN DEL BIEN / REQUERIMIENTO</th>
              <th style="width:20%; text-align:right;">IMPORTE ESTIMADO (S/)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">01 Global</td>
              <td>${desc}<br/><small>Supuesto Normativo: ${supuestoTexto} (${equivUit} UIT de máx. ${maxUit} UIT)</small></td>
              <td style="text-align:right; font-weight:bold;">${window.fmtSoles(monto)}</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top:8px;"><strong>MOTIVO DE LA SOLICITUD:</strong> Cumplimiento de metas institucionales conforme al numeral 5.2.1 de la Directiva de Encargos V.06.</div>
        <div class="bloque-firmas" style="margin-top:42px;">
          <div class="linea-firma" style="width:42%;"><strong>AUTORIZADO: ADMINISTRADOR / OAF / OCA</strong><br/>(FIRMA Y SELLO)</div>
          <div class="linea-firma" style="width:42%;"><strong>Firma del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
        </div>
      </div>

      <div class="titulo-anexo-num">FORMATO N° 2</div>
      <div class="titulo-anexo-nombre">RECEPCIÓN SATISFACTORIA DE BIENES (ENCARGOS)</div>
      <div style="border:1.5px solid #000; padding:14px;">
        <div style="text-align:right; margin-bottom:8px;"><strong>Fecha:</strong> ${fechaHoy}</div>
        <p style="margin-bottom:8px;">Por medio de la presente se da <strong>CONFORMIDAD</strong> por la recepción satisfactoria de los siguientes bienes adquiridos mediante Encargo:</p>
        <table class="tabla-directiva">
          <thead>
            <tr>
              <th style="width:15%; text-align:center;">CANTIDAD</th>
              <th style="width:85%;">DESCRIPCIÓN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center;">01 Global</td>
              <td>${desc} — Proveedor: ${provNombre} (${window.fmtSoles(monto)})</td>
            </tr>
          </tbody>
        </table>
        <div class="bloque-firmas" style="margin-top:42px;">
          <div class="linea-firma" style="width:50%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
        </div>
      </div>
    </div>
  ` : `
    <div class="hoja-oficial">
      ${cabEnc}
      <div class="titulo-anexo-num">FORMATO N° 3</div>
      <div class="titulo-anexo-nombre">SOLICITUD DE SERVICIOS (MODALIDAD DE ENCARGOS)</div>
      <div style="border:1.5px solid #000; padding:14px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span><strong>Sr. Jefe de la Oficina de Administración y Finanzas / Administrador ADC:</strong></span>
          <span><strong>Fecha:</strong> ${fechaHoy}</span>
        </div>
        <div style="margin-bottom:8px;"><strong>Área Usuaria Solicitante:</strong> [${p.codigo_dependencia}] ${p.nombre_dependencia}</div>
        <div style="margin-bottom:10px;"><strong>Responsable del Manejo del Encargo (D.L. 728 / D.L. 276):</strong> ${respNombre}</div>
        <p style="margin-bottom:8px;">Por medio de la presente solicitamos se sirvan autorizar bajo la modalidad de ENCARGO el servicio de:</p>
        <div style="border:1px solid #000; padding:10px; margin-bottom:10px;">
          <strong>Objeto del Servicio:</strong> ${desc}<br/>
          <strong>Supuesto Normativo (Numeral 5.2.1):</strong> ${supuestoTexto}<br/>
          <strong>Monto Estimado:</strong> ${window.fmtSoles(monto)} (Equivalente a <strong>${equivUit} UIT</strong> — Tope máximo permitido: ${maxUit} UIT)<br/>
          <strong>Requisitos de Transparencia:</strong> ${monto >= uit ? 'Cuenta con tres (03) cotizaciones detalladas, Cuadro Comparativo e Informe Técnico previo.' : 'Menor a 1 UIT (Con RUC habido y activo en SUNAT).'}
        </div>
        <div class="bloque-firmas" style="margin-top:42px;">
          <div class="linea-firma" style="width:42%;"><strong>AUTORIZADO POR: ADMINISTRADOR / OAF / OCA</strong><br/>(FIRMA Y SELLO)</div>
          <div class="linea-firma" style="width:42%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
        </div>
      </div>

      <div class="titulo-anexo-num">FORMATO N° 4</div>
      <div class="titulo-anexo-nombre">CONFORMIDAD DE SERVICIOS (MODALIDAD DE ENCARGOS)</div>
      <div style="border:1.5px solid #000; padding:14px;">
        <div style="text-align:right; margin-bottom:8px;"><strong>Fecha:</strong> ${fechaHoy}</div>
        <p style="margin-bottom:8px;">Por medio del presente, se otorga la <strong>CONFORMIDAD DEL SERVICIO</strong>, por los trabajos recibidos a satisfacción bajo la modalidad de Encargo:</p>
        <div style="border:1px solid #000; padding:10px; min-height:48px;">
          ${desc} — Ejecutado por: <strong>${provNombre}</strong> por el monto de <strong>${window.fmtSoles(monto)}</strong>.
        </div>
        <div class="bloque-firmas" style="margin-top:42px;">
          <div class="linea-firma" style="width:50%;"><strong>Firma y Sello del Responsable del Área Usuaria</strong><br/>${p.nombre_dependencia}</div>
        </div>
      </div>
    </div>
  `;

  // 2. Formato N° 6 Exacto: RENDICIÓN DE FONDOS POR ENCARGO DEL DISTRITO FISCAL Y/O DEPENDENCIA (Página 16 Directiva Encargos V.06)
  const htmlFormato6 = `
    <div class="hoja-oficial">
      ${cabEnc}
      <div class="titulo-anexo-num">FORMATO N° 6</div>
      <div class="titulo-anexo-nombre">RENDICIÓN DE FONDOS POR ENCARGO DEL DISTRITO FISCAL Y/O DEPENDENCIA</div>
      <div style="margin-bottom:8px; font-weight:bold;">Dependencia: [${p.codigo_dependencia}] ${p.nombre_dependencia} • Responsable del Encargo: ${respNombre}</div>

      <table class="tabla-directiva">
        <thead>
          <tr>
            <th rowspan="2" style="width:4%;">N°</th>
            <th colspan="3" style="text-align:center;">DOCUMENTO</th>
            <th rowspan="2" style="width:18%;">PROVEEDOR / LOCADOR</th>
            <th rowspan="2" style="width:10%;">RUC</th>
            <th rowspan="2" style="width:22%;">DETALLE DEL GASTO</th>
            <th rowspan="2" style="width:8%;">Específica de Gasto</th>
            <th style="width:9%; text-align:center;">Acciones Centrales (9001)</th>
            <th style="width:9%; text-align:center;">Justicia Penal / ADC (0086)</th>
            <th rowspan="2" style="width:10%; text-align:right;">Total por específicas (S/)</th>
          </tr>
          <tr>
            <th style="width:7%;">Fecha</th>
            <th style="width:6%;">Clase</th>
            <th style="width:7%;">N°</th>
            <th style="text-align:center;">Gestión Adm.</th>
            <th style="text-align:center;">ADC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">1</td>
            <td style="text-align:center;">${fechaHoy}</td>
            <td style="text-align:center;">${selSupuesto?.value === 'EXPOSITOR' ? 'RHE' : 'FACT'}</td>
            <td style="text-align:center;">001-001</td>
            <td>${provNombre}</td>
            <td style="text-align:center;">-</td>
            <td>${desc}</td>
            <td style="text-align:center; font-weight:bold;">${especifica}</td>
            <td style="text-align:right;">${!p.es_adc ? monto.toFixed(2) : "0.00"}</td>
            <td style="text-align:right;">${p.es_adc ? monto.toFixed(2) : "0.00"}</td>
            <td style="text-align:right; font-weight:bold;">${monto.toFixed(2)}</td>
          </tr>
          <tr class="fila-total-general">
            <td colspan="8" style="text-align:right;">Total General S/</td>
            <td style="text-align:right;">${!p.es_adc ? monto.toFixed(2) : "0.00"}</td>
            <td style="text-align:right;">${p.es_adc ? monto.toFixed(2) : "0.00"}</td>
            <td style="text-align:right;">${window.fmtSoles(monto)}</td>
          </tr>
        </tbody>
      </table>

      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:18px;">
        <table class="tabla-directiva" style="width:320px; margin-bottom:0;">
          <thead><tr><th colspan="2">MOVIMIENTO DEL DINERO EN EFECTIVO (PLAZO MÁX. 3 DÍAS HÁBILES)</th></tr></thead>
          <tbody>
            <tr><td>Monto Transferido con Resolución S/</td><td style="text-align:right;">${window.fmtSoles(monto)}</td></tr>
            <tr><td>Importe de la presente Rendición S/</td><td style="text-align:right;">- ${window.fmtSoles(monto)}</td></tr>
            <tr class="fila-total-general"><td>SALDO A DEVOLVER (HOJA T-6) S/</td><td style="text-align:right;">S/ 0.00</td></tr>
          </tbody>
        </table>

        <div class="bloque-firmas" style="width:60%; margin-top:0;">
          <div class="linea-firma" style="width:45%;"><strong>Administrador del Distrito Fiscal y/o Dependencia</strong><br/>${p.nombre_dependencia}</div>
          <div class="linea-firma" style="width:45%;"><strong>Encargado Único / Responsable del Fondo por Encargo</strong><br/>${respNombre}</div>
        </div>
      </div>
    </div>
  `;

  let htmlFinal = "";
  let orientacion = "portrait";
  if (modoImpresion === "FORMATO_1_2_3_4") {
    htmlFinal = htmlFormatos1a4;
  } else if (modoImpresion === "FORMATO_6") {
    htmlFinal = htmlFormato6;
    orientacion = "landscape";
  } else {
    htmlFinal = htmlFormatos1a4 + htmlFormato6;
  }

  window.MotorAnexosANC.imprimirDocumentoOficial(`Formatos_Encargo_${p.codigo_dependencia}`, htmlFinal, orientacion);
};

window.registrarSolicitudEncargo = async function() {
  const cfg = window.ANC_STATE.config;
  const p = window.ANC_STATE.perfilActivo;
  const monto = Number(document.getElementById("enc-monto-soles").value || 0);
  const supuesto = document.getElementById("enc-tipo-supuesto").value;
  const desc = document.getElementById("enc-descripcion").value.trim() || "Requerimiento por modalidad de Encargo";
  const respNombre = document.getElementById("enc-nombre-resp")?.value || p.usuario_nombre;

  const nuevoEncargo = {
    anio_fiscal: cfg.anio_fiscal,
    mes_ejecucion: `Año ${cfg.anio_fiscal}`,
    unidad_organica_id: p.unidad_id,
    modalidad_fondo: "ENCARGO",
    tipo_comprobante: "Resolución / Solicitud de Encargo",
    serie_numero_comprobante: `ENC-${cfg.anio_fiscal}-${Math.floor(100 + Math.random() * 900)}`,
    fecha_emision: new Date().toISOString().slice(0, 10),
    ruc_dni_proveedor: p.usuario_dni,
    razon_social_proveedor: `Resp. Encargo: ${respNombre}`,
    concepto_detalle: `[ENCARGO - ${supuesto}] ${desc}`,
    especifica_gasto: supuesto === "EXPOSITOR" ? "2.3.2.7.10.1" : "2.3.2.4.2.1",
    categoria_presupuestal: p.es_adc ? "0086. Mejora de los Servicios del Sistema de Justicia Penal" : "9001. Acciones Centrales",
    moneda: "PEN",
    precio_unitario: monto,
    cantidad: 1,
    monto_total_soles: monto,
    aplica_retencion_igv_3pct: false,
    monto_retencion_igv: 0,
    aplica_retencion_4ta_8pct: supuesto === "EXPOSITOR" && monto > 1500,
    monto_retencion_4ta: (supuesto === "EXPOSITOR" && monto > 1500) ? Number((monto * 0.08).toFixed(2)) : 0,
    aplica_detraccion: false,
    porcentaje_detraccion: 0,
    monto_detraccion: 0,
    neto_pagar_proveedor: monto,
    usuario_registro: respNombre,
    estado_auditoria: "APROBADO"
  };

  await window.SupabaseANC.request("anc_gastos_caja_encargos", "POST", "", nuevoEncargo);

  const localGuardados = JSON.parse(localStorage.getItem("anc_gastos_caja_local_v1") || "[]");
  localGuardados.unshift({
    ...nuevoEncargo,
    id: Date.now(),
    codigo_dependencia: p.codigo_dependencia,
    nombre_dependencia: p.nombre_dependencia
  });
  localStorage.setItem("anc_gastos_caja_local_v1", JSON.stringify(localGuardados));

  if (typeof window.cargarDatosModuloCaja === "function") window.cargarDatosModuloCaja();
  alert(`✅ Solicitud de Fondo por Encargo (${window.fmtSoles(monto)}) guardada exitosamente. Toca 'Imprimir Reporte y Formatos de Encargo (PDF)' para obtener los formatos oficiales.`);
};

window.filtrarTablaAnexo09 = function() {
  const tbody = document.getElementById("tbody-consulta-anexo09");
  if (!tbody || !window.CAJA_CATALOGOS) return;

  const q = (document.getElementById("input-buscar-distrito-anexo09")?.value || "").toLowerCase().trim();
  const lista = window.CAJA_CATALOGOS.tarifarioAnexo09.filter(d => !q || d.distrito.toLowerCase().includes(q));

  tbody.innerHTML = lista.map(d => `
    <tr>
      <td><strong>#${d.item}</strong></td>
      <td><strong>${d.distrito}</strong></td>
      <td><span class="badge-semaforo badge-verde">S/ ${d.dia.toFixed(2)}</span></td>
      <td><span class="badge-semaforo badge-amarillo">S/ ${d.noche.toFixed(2)}</span></td>
    </tr>
  `).join("");
};
