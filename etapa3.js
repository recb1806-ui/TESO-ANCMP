// =========================================================================================
// ETAPA 3: GESTOR DE ESTADO GLOBAL, MENÚ LATERAL, CABECERA DINÁMICA Y CONFIGURACIÓN (ROF + UIT)
// =========================================================================================

window.ANC_STATE = {
  config: {
    id: 1,
    anio_fiscal: 2026,
    valor_uit: 5350.00,
    porcentaje_tope_caja_chica: 20.00,
    tope_viaticos_caja_chica: 2000.00,
    tipo_cambio_usd: 3.750,
    ruc_institucional: "20131370301",
    pin_administrador: "2026"
  },
  unidades: [],
  perfilActivo: {
    unidad_id: 12,
    codigo_dependencia: "AP-OAF",
    categoria_rof: "B.2 Órganos de Apoyo",
    nombre_dependencia: "Oficina de Administración y Finanzas",
    es_adc: false,
    sede_ubicacion: "Lima - Sede Central",
    presupuesto_caja_chica: 15000.00,
    saldo_caja_chica: 15000.00,
    presupuesto_viaticos: 12000.00,
    saldo_viaticos: 12000.00,
    usuario_nombre: "Especialista Administrativo ANC",
    usuario_dni: "45000001",
    regimen_vinculo: "D.L. 728",
    percibe_gastos_operativos: false,
    rol_sistema: "OPERADOR" // 'OPERADOR' o 'ADMINISTRADOR'
  }
};

// Catálogo ROF de respaldo inmediato (R.J. N° 0413-2025-ANC-MP-J) por si aún no se carga de red
const ROF_FALLBACK = [
  { id: 1, codigo: "AD-JEF", categoria_rof: "A. Órganos de Alta Dirección", nombre_dependencia: "Jefatura Nacional de la ANC-MP", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 10000, saldo_caja_chica_actual: 10000, presupuesto_viaticos_mensual: 25000, saldo_viaticos_actual: 25000 },
  { id: 2, codigo: "AD-OCA", categoria_rof: "A. Órganos de Alta Dirección", nombre_dependencia: "Oficina Central Administrativa (OCA)", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 8000, saldo_caja_chica_actual: 8000, presupuesto_viaticos_mensual: 15000, saldo_viaticos_actual: 15000 },
  { id: 3, codigo: "AD-UCT", categoria_rof: "A. Órganos de Alta Dirección", nombre_dependencia: "Unidad de Cooperación Técnica", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2500, saldo_caja_chica_actual: 2500, presupuesto_viaticos_mensual: 5000, saldo_viaticos_actual: 5000 },
  { id: 4, codigo: "AS-OAJ", categoria_rof: "B.1 Órganos de Asesoramiento", nombre_dependencia: "Oficina de Asesoría Jurídica", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3000, saldo_caja_chica_actual: 3000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 5, codigo: "AS-OPP", categoria_rof: "B.1 Órganos de Asesoramiento", nombre_dependencia: "Oficina de Planeamiento y Presupuesto", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3500, saldo_caja_chica_actual: 3500, presupuesto_viaticos_mensual: 5000, saldo_viaticos_actual: 5000 },
  { id: 6, codigo: "AS-UPM", categoria_rof: "B.1 Órganos de Asesoramiento", nombre_dependencia: "Unidad de Planeamiento y Modernización", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2000, saldo_caja_chica_actual: 2000, presupuesto_viaticos_mensual: 3000, saldo_viaticos_actual: 3000 },
  { id: 7, codigo: "AS-UPR", categoria_rof: "B.1 Órganos de Asesoramiento", nombre_dependencia: "Unidad de Presupuesto", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2000, saldo_caja_chica_actual: 2000, presupuesto_viaticos_mensual: 3000, saldo_viaticos_actual: 3000 },
  { id: 8, codigo: "AP-OGRH", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Oficina de Gestión de Recursos Humanos", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 9, codigo: "AP-UARH", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Administración de Recursos Humanos", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2500, saldo_caja_chica_actual: 2500, presupuesto_viaticos_mensual: 2500, saldo_viaticos_actual: 2500 },
  { id: 10, codigo: "AP-URPB", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Remuneraciones, Pensiones y Beneficios", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2000, saldo_caja_chica_actual: 2000, presupuesto_viaticos_mensual: 2000, saldo_viaticos_actual: 2000 },
  { id: 11, codigo: "AP-UBDH", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Bienestar y Desarrollo Humano", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3000, saldo_caja_chica_actual: 3000, presupuesto_viaticos_mensual: 2500, saldo_viaticos_actual: 2500 },
  { id: 12, codigo: "AP-OAF", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Oficina de Administración y Finanzas", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 15000, saldo_caja_chica_actual: 15000, presupuesto_viaticos_mensual: 12000, saldo_viaticos_actual: 12000 },
  { id: 13, codigo: "AP-UAB", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Abastecimiento", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 12000, saldo_caja_chica_actual: 12000, presupuesto_viaticos_mensual: 8000, saldo_viaticos_actual: 8000 },
  { id: 14, codigo: "AP-UCO", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Contabilidad", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 15, codigo: "AP-UTE", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Tesorería (Custodia Caja Chica Sede Central)", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 25000, saldo_caja_chica_actual: 25000, presupuesto_viaticos_mensual: 30000, saldo_viaticos_actual: 30000 },
  { id: 16, codigo: "AP-OTI", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Oficina de Tecnologías de la Información", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 6000, saldo_caja_chica_actual: 6000, presupuesto_viaticos_mensual: 8000, saldo_viaticos_actual: 8000 },
  { id: 17, codigo: "AP-USIS", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Sistemas", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3000, saldo_caja_chica_actual: 3000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 18, codigo: "AP-USRE", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Soporte y Redes", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4500, saldo_caja_chica_actual: 4500, presupuesto_viaticos_mensual: 6000, saldo_viaticos_actual: 6000 },
  { id: 19, codigo: "AP-OGDAC", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Oficina de Gestión Documental y Atención al Ciudadano", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 3500, saldo_viaticos_actual: 3500 },
  { id: 20, codigo: "AP-UMP", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Mesa de Partes", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2000, saldo_caja_chica_actual: 2000, presupuesto_viaticos_mensual: 1500, saldo_viaticos_actual: 1500 },
  { id: 21, codigo: "AP-UAC", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Atención al Ciudadano", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2000, saldo_caja_chica_actual: 2000, presupuesto_viaticos_mensual: 1500, saldo_viaticos_actual: 1500 },
  { id: 22, codigo: "AP-UNOT", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Notificaciones", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4500, saldo_caja_chica_actual: 4500, presupuesto_viaticos_mensual: 3000, saldo_viaticos_actual: 3000 },
  { id: 23, codigo: "AP-UARC", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Archivo Central", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 2500, saldo_caja_chica_actual: 2500, presupuesto_viaticos_mensual: 2000, saldo_viaticos_actual: 2000 },
  { id: 24, codigo: "AP-OCSII", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Oficina de Comunicación Social e Imagen Institucional", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 5000, saldo_caja_chica_actual: 5000, presupuesto_viaticos_mensual: 6000, saldo_viaticos_actual: 6000 },
  { id: 25, codigo: "AP-UACD", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Audiovisuales y Comunicación Digital", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3000, saldo_caja_chica_actual: 3000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 26, codigo: "AP-UPRP", categoria_rof: "B.2 Órganos de Apoyo", nombre_dependencia: "Unidad de Prensa, Protocolo y Relaciones Públicas", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 3000, saldo_caja_chica_actual: 3000, presupuesto_viaticos_mensual: 4000, saldo_viaticos_actual: 4000 },
  { id: 27, codigo: "LI-DGGF", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección General de Gestión Funcional", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 6000, saldo_caja_chica_actual: 6000, presupuesto_viaticos_mensual: 18000, saldo_viaticos_actual: 18000 },
  { id: 28, codigo: "LI-DPRE", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Prevención", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4500, saldo_caja_chica_actual: 4500, presupuesto_viaticos_mensual: 15000, saldo_viaticos_actual: 15000 },
  { id: 29, codigo: "LI-DFCA", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Fortalecimiento de Capacidades", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 10000, saldo_viaticos_actual: 10000 },
  { id: 30, codigo: "LI-DSCIA", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Supervisión de Concursos e Investigación y Análisis", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 10000, saldo_viaticos_actual: 10000 },
  { id: 31, codigo: "LI-DGPAD", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección General de Procedimiento Administrativo Disciplinario", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 6000, saldo_caja_chica_actual: 6000, presupuesto_viaticos_mensual: 20000, saldo_viaticos_actual: 20000 },
  { id: 32, codigo: "LI-DIPR", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Investigación Preliminar", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 5000, saldo_caja_chica_actual: 5000, presupuesto_viaticos_mensual: 18000, saldo_viaticos_actual: 18000 },
  { id: 33, codigo: "LI-DPDI", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Procedimiento Disciplinario", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4500, saldo_caja_chica_actual: 4500, presupuesto_viaticos_mensual: 12000, saldo_viaticos_actual: 12000 },
  { id: 34, codigo: "LI-DSAN", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección de Sanción", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4000, saldo_caja_chica_actual: 4000, presupuesto_viaticos_mensual: 8000, saldo_viaticos_actual: 8000 },
  { id: 35, codigo: "LI-DGAP", categoria_rof: "C. Órganos de Línea", nombre_dependencia: "Dirección General de Apelaciones", es_adc: false, sede_ubicacion: "Lima - Sede Central", presupuesto_caja_chica_mensual: 4500, saldo_caja_chica_actual: 4500, presupuesto_viaticos_mensual: 8000, saldo_viaticos_actual: 8000 },
  { id: 36, codigo: "ADC-AREQ", categoria_rof: "D. Órganos Desconcentrados (ADC)", nombre_dependencia: "ADC Arequipa (Jefatura y Unidades de Control)", es_adc: true, sede_ubicacion: "Arequipa", presupuesto_caja_chica_mensual: 6500, saldo_caja_chica_actual: 6500, presupuesto_viaticos_mensual: 12000, saldo_viaticos_actual: 12000 },
  { id: 37, codigo: "ADC-CUSC", categoria_rof: "D. Órganos Desconcentrados (ADC)", nombre_dependencia: "ADC Cusco (Jefatura y Unidades de Control)", es_adc: true, sede_ubicacion: "Cusco", presupuesto_caja_chica_mensual: 6000, saldo_caja_chica_actual: 6000, presupuesto_viaticos_mensual: 11000, saldo_viaticos_actual: 11000 },
  { id: 38, codigo: "ADC-LALI", categoria_rof: "D. Órganos Desconcentrados (ADC)", nombre_dependencia: "ADC La Libertad (Jefatura y Unidades de Control)", es_adc: true, sede_ubicacion: "Trujillo", presupuesto_caja_chica_mensual: 6500, saldo_caja_chica_actual: 6500, presupuesto_viaticos_mensual: 11500, saldo_viaticos_actual: 11500 },
  { id: 39, codigo: "ADC-LAMB", categoria_rof: "D. Órganos Desconcentrados (ADC)", nombre_dependencia: "ADC Lambayeque (Jefatura y Unidades de Control)", es_adc: true, sede_ubicacion: "Chiclayo", presupuesto_caja_chica_mensual: 6000, saldo_caja_chica_actual: 6000, presupuesto_viaticos_mensual: 11000, saldo_viaticos_actual: 11000 },
  { id: 40, codigo: "ADC-LIMC", categoria_rof: "D. Órganos Desconcentrados (ADC)", nombre_dependencia: "ADC Lima Centro (Jefatura y Unidades de Control)", es_adc: true, sede_ubicacion: "Lima Centro", presupuesto_caja_chica_mensual: 8000, saldo_caja_chica_actual: 8000, presupuesto_viaticos_mensual: 8000, saldo_viaticos_actual: 8000 }
];

// Formateador de moneda PEN
window.fmtSoles = function(monto) {
  return "S/ " + Number(monto || 0).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Inicialización al cargar la PWA
document.addEventListener("DOMContentLoaded", async () => {
  cargarPerfilDesdeLocalStorage();
  renderizarModuloConfiguracion();
  actualizarCabeceraYMenu();
  await sincronizarDatosEtapa3();
});

function cargarPerfilDesdeLocalStorage() {
  try {
    const guardado = localStorage.getItem("anc_mp_perfil_v1");
    if (guardado) {
      const parsed = JSON.parse(guardado);
      window.ANC_STATE.perfilActivo = { ...window.ANC_STATE.perfilActivo, ...parsed };
    }
    const cfgGuardada = localStorage.getItem("anc_mp_config_v1");
    if (cfgGuardada) {
      window.ANC_STATE.config = { ...window.ANC_STATE.config, ...JSON.parse(cfgGuardada) };
    }
  } catch (e) {
    console.warn("Error leyendo almacenamiento local:", e);
  }
}

function guardarEstadoEnLocalStorage() {
  localStorage.setItem("anc_mp_perfil_v1", JSON.stringify(window.ANC_STATE.perfilActivo));
  localStorage.setItem("anc_mp_config_v1", JSON.stringify(window.ANC_STATE.config));
}

// Sincroniza Configuración UIT y las 69 Unidades Orgánicas / 34 ADC desde Supabase
async function sincronizarDatosEtapa3() {
  const badgeEstado = document.getElementById("badge-conexion-supabase");
  if (badgeEstado) {
    badgeEstado.textContent = "🔄 Sincronizando con Supabase...";
    badgeEstado.className = "badge-semaforo badge-amarillo";
  }

  // 1. Leer anc_configuracion
  const resCfg = await window.SupabaseANC.request("anc_configuracion", "GET", "order=id.asc&limit=1");
  if (resCfg.data && resCfg.data.length > 0) {
    const row = resCfg.data[0];
    window.ANC_STATE.config = {
      id: row.id,
      anio_fiscal: Number(row.anio_fiscal) || 2026,
      valor_uit: Number(row.valor_uit) || 5350.00,
      porcentaje_tope_caja_chica: Number(row.porcentaje_tope_caja_chica) || 20.00,
      tope_viaticos_caja_chica: Number(row.tope_viaticos_caja_chica) || 2000.00,
      tipo_cambio_usd: Number(row.tipo_cambio_usd) || 3.750,
      ruc_institucional: row.ruc_institucional || "20131370301",
      pin_administrador: row.pin_administrador || "2026"
    };
  }

  // 2. Leer las 69 dependencias del ROF desde anc_unidades_organicas
  const resUnidades = await window.SupabaseANC.request("anc_unidades_organicas", "GET", "activo=eq.true&order=id.asc");
  if (resUnidades.data && resUnidades.data.length > 0) {
    window.ANC_STATE.unidades = resUnidades.data;
    if (badgeEstado) {
      badgeEstado.textContent = `✓ Conectado a Supabase (${resUnidades.data.length} Dependencias ROF activas)`;
      badgeEstado.className = "badge-semaforo badge-verde";
    }
  } else {
    window.ANC_STATE.unidades = ROF_FALLBACK;
    if (badgeEstado) {
      badgeEstado.textContent = "⚠️ Modo Local Activo (Ejecuta el SQL de la Etapa 1 en Supabase si aún no lo hiciste)";
      badgeEstado.className = "badge-semaforo badge-amarillo";
    }
  }

  // Actualizar saldos de la unidad activa
  const unidadEncontrada = window.ANC_STATE.unidades.find(
    (u) => Number(u.id) === Number(window.ANC_STATE.perfilActivo.unidad_id) || u.codigo === window.ANC_STATE.perfilActivo.codigo_dependencia
  ) || window.ANC_STATE.unidades[0];

  if (unidadEncontrada) {
    window.ANC_STATE.perfilActivo.unidad_id = unidadEncontrada.id;
    window.ANC_STATE.perfilActivo.codigo_dependencia = unidadEncontrada.codigo;
    window.ANC_STATE.perfilActivo.categoria_rof = unidadEncontrada.categoria_rof;
    window.ANC_STATE.perfilActivo.nombre_dependencia = unidadEncontrada.nombre_dependencia;
    window.ANC_STATE.perfilActivo.es_adc = Boolean(unidadEncontrada.es_adc);
    window.ANC_STATE.perfilActivo.sede_ubicacion = unidadEncontrada.sede_ubicacion;
    window.ANC_STATE.perfilActivo.presupuesto_caja_chica = Number(unidadEncontrada.presupuesto_caja_chica_mensual);
    window.ANC_STATE.perfilActivo.saldo_caja_chica = Number(unidadEncontrada.saldo_caja_chica_actual);
    window.ANC_STATE.perfilActivo.presupuesto_viaticos = Number(unidadEncontrada.presupuesto_viaticos_mensual);
    window.ANC_STATE.perfilActivo.saldo_viaticos = Number(unidadEncontrada.saldo_viaticos_actual);
  }

  guardarEstadoEnLocalStorage();
  actualizarCabeceraYMenu();
  poblarSelectoresConfiguracion();
  if (typeof window.cargarDatosModuloCaja === "function") window.cargarDatosModuloCaja();
  if (typeof window.cargarDatosModuloViaticos === "function") window.cargarDatosModuloViaticos();
}

// Actualiza Cabecera Superior, Drawer y Topes UIT en toda la App
window.actualizarCabeceraYMenu = function() {
  const cfg = window.ANC_STATE.config;
  const p = window.ANC_STATE.perfilActivo;
  const tope20Pct = (cfg.valor_uit * (cfg.porcentaje_tope_caja_chica / 100)).toFixed(2);

  // Subtítulo dinámico de la Cabecera Superior (Estilo Captura 3)
  const sub = document.getElementById("header-subtitle");
  if (sub) {
    const badgeRol = p.rol_sistema === "ADMINISTRADOR" ? "🛡️ ADMIN NACIONAL" : (p.es_adc ? "🏛️ ADC" : "🏢 SEDE CENTRAL");
    sub.innerHTML = `
      Año ${cfg.anio_fiscal} • <strong>${badgeRol}: ${p.nombre_dependencia}</strong><br/>
      👤 ${p.usuario_nombre} (${p.regimen_vinculo}) • 💰 Caja Chica: <strong>${window.fmtSoles(p.saldo_caja_chica)}</strong> | ✈️ Viáticos: <strong>${window.fmtSoles(p.saldo_viaticos)}</strong>
    `;
  }

  // Actualizar etiqueta UIT en el Drawer y en el Modal Calculadora
  const lblUitMenu = document.getElementById("lbl-menu-uit");
  if (lblUitMenu) lblUitMenu.textContent = `S/ ${Number(cfg.valor_uit).toLocaleString("es-PE")}`;

  const lblTopeModal = document.getElementById("lbl-tope-modal");
  if (lblTopeModal) lblTopeModal.textContent = Number(tope20Pct).toLocaleString("es-PE", { minimumFractionDigits: 2 });

  // Resumen en tarjetas de Inicio
  const bannerResumenInicio = document.getElementById("banner-resumen-dependencia");
  if (bannerResumenInicio) {
    bannerResumenInicio.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <div style="font-size:0.75rem; font-weight:800; color:#B45309; text-transform:uppercase;">
            DEPENDENCIA ACTIVA (${p.codigo_dependencia} • ${p.sede_ubicacion})
          </div>
          <div style="font-size:1.02rem; font-weight:900; color:#0F172A;">
            ${p.nombre_dependencia}
          </div>
          <div style="font-size:0.82rem; color:#475569; font-weight:600;">
            UIT ${cfg.anio_fiscal}: <strong>${window.fmtSoles(cfg.valor_uit)}</strong> • Tope 20% Comp.: <strong>${window.fmtSoles(tope20Pct)}</strong> • T.C. USD: <strong>S/ ${Number(cfg.tipo_cambio_usd).toFixed(3)}</strong>
          </div>
        </div>
        <button type="button" onclick="navegarVista('config')" style="background:#0F172A; color:#F59E0B; border:none; border-radius:10px; padding:9px 13px; font-size:0.8rem; font-weight:800; cursor:pointer;">
          ⚙️ Cambiar Sede / UIT
        </button>
      </div>
    `;
  }
};

// Construye la interfaz completa del Módulo de Configuración (Vista #view-config)
function renderizarModuloConfiguracion() {
  const cont = document.getElementById("contenedor-modulo-config");
  if (!cont) return;

  cont.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:16px;">
      <div>
        <h2 style="font-size:1.3rem; font-weight:900; color:#0F172A;">⚙️ Configuración Anual, ROF y Perfil</h2>
        <p style="font-size:0.86rem; color:#475569; font-weight:600;">
          ROF R.J. N° 0413-2025-ANC-MP-J • Directiva Caja Chica V.08 • Viáticos V.10
        </p>
      </div>
      <span id="badge-conexion-supabase" class="badge-semaforo badge-verde">✓ Listo</span>
    </div>

    <!-- BLOQUE 1: UNIDAD ORGÁNICA / ADC Y PERFIL DEL USUARIO -->
    <div style="background:#F8FAFC; border:2px solid #CBD5E1; border-radius:16px; padding:16px; margin-bottom:18px;">
      <h3 style="font-size:1rem; font-weight:900; color:#0F172A; margin-bottom:12px;">
        🏛️ 1. Selección de Unidad Orgánica (Sede Central) o ADC Nacional
      </h3>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:0.78rem; font-weight:800; color:#334155; margin-bottom:4px;">
          FILTRAR POR ÓRGANO DEL ROF ANC-MP:
        </label>
        <select id="cfg-filtro-categoria-rof" onchange="filtrarUnidadesPorCategoria()" style="width:100%; padding:11px; border-radius:10px; border:1.5px solid #94A3B8; font-weight:700; font-size:0.9rem; background:#FFF;">
          <option value="TODAS">-- Mostrar todas las Dependencias y ADC (69 unidades) --</option>
          <option value="A. Órganos de Alta Dirección">A. Órganos de Alta Dirección (Jefatura / OCA)</option>
          <option value="B.1 Órganos de Asesoramiento">B.1 Órganos de Asesoramiento (OAJ / OPP)</option>
          <option value="B.2 Órganos de Apoyo">B.2 Órganos de Apoyo (OAF, Abastecimiento, Contabilidad, Tesorería, RRHH, OTI)</option>
          <option value="C. Órganos de Línea">C. Órganos de Línea (Gestión Funcional, PAD, Apelaciones)</option>
          <option value="D. Órganos Desconcentrados (ADC)">D. Órganos Desconcentrados (Las 34 ADC a Nivel Nacional)</option>
        </select>
      </div>

      <div style="margin-bottom:12px;">
        <label style="display:block; font-size:0.78rem; font-weight:800; color:#334155; margin-bottom:4px;">
          DEPENDENCIA / UNIDAD ORGÁNICA O ADC ACTIVA:
        </label>
        <select id="cfg-select-unidad" onchange="alCambiarUnidadSeleccionada()" style="width:100%; padding:11px; border-radius:10px; border:2px solid #D97706; font-weight:800; font-size:0.92rem; background:#FFFBEB; color:#0F172A;"></select>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            SALDO CAJA CHICA (S/):
          </label>
          <input type="number" id="cfg-saldo-caja" step="10" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #10B981; font-weight:800; font-size:0.95rem; background:#ECFDF5;" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            SALDO VIÁTICOS (S/):
          </label>
          <input type="number" id="cfg-saldo-viaticos" step="10" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #3B82F6; font-weight:800; font-size:0.95rem; background:#EFF6FF;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:2fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            APELLIDOS Y NOMBRES DEL USUARIO / OPERADOR:
          </label>
          <input type="text" id="cfg-usuario-nombre" placeholder="Ej: Juan Pérez" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #94A3B8; font-weight:700;" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            DNI N°:
          </label>
          <input type="text" id="cfg-usuario-dni" maxlength="12" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #94A3B8; font-weight:700;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            RÉGIMEN / MODALIDAD:
          </label>
          <select id="cfg-usuario-regimen" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #94A3B8; font-weight:700;">
            <option value="D.L. 728">Régimen D.L. N° 728 (Plazo Indet./Fijo)</option>
            <option value="Carrera Fiscal (Ley 30483)">Carrera Fiscal (Fiscal de Control)</option>
            <option value="D.L. 276">Régimen D.L. N° 276</option>
            <option value="D.L. 1057 (CAS)">Régimen D.L. N° 1057 (CAS)</option>
            <option value="Locador / Proveedor de Servicios">Locador / Proveedor de Servicios (Tercero)</option>
          </select>
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#334155; margin-bottom:4px;">
            ROL EN EL SISTEMA:
          </label>
          <select id="cfg-usuario-rol" onchange="verificarCambioRolAdmin()" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #0F172A; font-weight:800; background:#F1F5F9;">
            <option value="OPERADOR">👤 Usuario de Unidad Orgánica / ADC</option>
            <option value="ADMINISTRADOR">🛡️ Administrador General (OAF/Abast./Contab./Tesor.)</option>
          </select>
        </div>
      </div>

      <label style="display:flex; align-items:center; gap:8px; font-size:0.83rem; font-weight:700; color:#991B1B; background:#FEF2F2; padding:10px 12px; border-radius:10px; border:1px solid #FCA5A5; margin-bottom:14px; cursor:pointer;">
        <input type="checkbox" id="cfg-gastos-operativos" style="width:18px; height:18px;" />
        <span>¿El usuario es Fiscal que percibe Gastos Operativos? (Bloquea Alimentos S/24 y Movilidad Local DJ según RFN N° 190-2022-MP-FN)</span>
      </label>

      <button type="button" onclick="guardarPerfilYDependencia()" style="width:100%; background:#10B981; color:#FFFFFF; border:none; border-radius:12px; padding:13px; font-size:0.95rem; font-weight:900; cursor:pointer; box-shadow:0 4px 12px rgba(16,185,129,0.3);">
        💾 Activar Dependencia, Saldos y Perfil de Usuario
      </button>
    </div>

    <!-- BLOQUE 2: PARÁMETROS ANUALES (VALOR UIT, TIPO DE CAMBIO USD Y TOPES DINÁMICOS) -->
    <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:16px; padding:16px;">
      <h3 style="font-size:1rem; font-weight:900; color:#78350F; margin-bottom:10px;">
        📐 2. Parámetros Anuales del Ejercicio Fiscal (Cálculo Automático de Topes UIT)
      </h3>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#78350F; margin-bottom:4px;">
            AÑO FISCAL VIGENTE:
          </label>
          <input type="number" id="cfg-anio-fiscal" value="2026" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #D97706; font-weight:800; font-size:0.95rem;" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#78350F; margin-bottom:4px;">
            VALOR DE LA UIT (S/):
          </label>
          <input type="number" id="cfg-valor-uit" step="50" oninput="recalcularTablaTopesUIT()" style="width:100%; padding:10px; border-radius:10px; border:2px solid #D97706; font-weight:900; font-size:1rem; background:#FFFFFF; color:#0F172A;" />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#78350F; margin-bottom:4px;">
            T.C. OFICIAL USD (Bco. Nación):
          </label>
          <input type="number" id="cfg-tc-usd" step="0.005" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #D97706; font-weight:800;" />
        </div>
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:800; color:#78350F; margin-bottom:4px;">
            TOPE VIÁTICOS CAJA CHICA (S/):
          </label>
          <input type="number" id="cfg-tope-viaticos" step="100" style="width:100%; padding:10px; border-radius:10px; border:1.5px solid #D97706; font-weight:800;" />
        </div>
      </div>

      <!-- Tabla en vivo de Topes Normativos según la UIT ingresada -->
      <div id="resumen-topes-uit-dinamico" style="background:#FFFFFF; border:1px solid #FCD34D; border-radius:12px; padding:12px; margin-bottom:14px; font-size:0.82rem;"></div>

      <button type="button" onclick="guardarParametrosUITSupabase()" style="width:100%; background:#0F172A; color:#F59E0B; border:none; border-radius:12px; padding:13px; font-size:0.95rem; font-weight:900; cursor:pointer;">
        🔄 Actualizar UIT y Parámetros en toda la Aplicación y Supabase
      </button>
    </div>
  `;

  poblarSelectoresConfiguracion();
}

function poblarSelectoresConfiguracion() {
  const selectUnidad = document.getElementById("cfg-select-unidad");
  if (!selectUnidad) return;

  const filtroCat = document.getElementById("cfg-filtro-categoria-rof")?.value || "TODAS";
  const lista = window.ANC_STATE.unidades.length > 0 ? window.ANC_STATE.unidades : ROF_FALLBACK;
  const filtradas = filtroCat === "TODAS" ? lista : lista.filter((u) => u.categoria_rof === filtroCat);

  selectUnidad.innerHTML = filtradas.map((u) => {
    const sel = (Number(u.id) === Number(window.ANC_STATE.perfilActivo.unidad_id) || u.codigo === window.ANC_STATE.perfilActivo.codigo_dependencia) ? "selected" : "";
    return `<option value="${u.codigo}" ${sel}>[${u.codigo}] ${u.nombre_dependencia} (${u.sede_ubicacion})</option>`;
  }).join("");

  const p = window.ANC_STATE.perfilActivo;
  const cfg = window.ANC_STATE.config;

  if (document.getElementById("cfg-saldo-caja")) document.getElementById("cfg-saldo-caja").value = p.saldo_caja_chica;
  if (document.getElementById("cfg-saldo-viaticos")) document.getElementById("cfg-saldo-viaticos").value = p.saldo_viaticos;
  if (document.getElementById("cfg-usuario-nombre")) document.getElementById("cfg-usuario-nombre").value = p.usuario_nombre;
  if (document.getElementById("cfg-usuario-dni")) document.getElementById("cfg-usuario-dni").value = p.usuario_dni;
  if (document.getElementById("cfg-usuario-regimen")) document.getElementById("cfg-usuario-regimen").value = p.regimen_vinculo;
  if (document.getElementById("cfg-usuario-rol")) document.getElementById("cfg-usuario-rol").value = p.rol_sistema;
  if (document.getElementById("cfg-gastos-operativos")) document.getElementById("cfg-gastos-operativos").checked = Boolean(p.percibe_gastos_operativos);

  if (document.getElementById("cfg-anio-fiscal")) document.getElementById("cfg-anio-fiscal").value = cfg.anio_fiscal;
  if (document.getElementById("cfg-valor-uit")) document.getElementById("cfg-valor-uit").value = cfg.valor_uit;
  if (document.getElementById("cfg-tc-usd")) document.getElementById("cfg-tc-usd").value = cfg.tipo_cambio_usd;
  if (document.getElementById("cfg-tope-viaticos")) document.getElementById("cfg-tope-viaticos").value = cfg.tope_viaticos_caja_chica;

  recalcularTablaTopesUIT();
}

window.filtrarUnidadesPorCategoria = function() {
  poblarSelectoresConfiguracion();
  alCambiarUnidadSeleccionada();
};

window.alCambiarUnidadSeleccionada = function() {
  const cod = document.getElementById("cfg-select-unidad")?.value;
  const lista = window.ANC_STATE.unidades.length > 0 ? window.ANC_STATE.unidades : ROF_FALLBACK;
  const u = lista.find((item) => item.codigo === cod);
  if (u) {
    document.getElementById("cfg-saldo-caja").value = u.saldo_caja_chica_actual;
    document.getElementById("cfg-saldo-viaticos").value = u.saldo_viaticos_actual;
  }
};

window.verificarCambioRolAdmin = function() {
  const rolSel = document.getElementById("cfg-usuario-rol");
  if (rolSel && rolSel.value === "ADMINISTRADOR") {
    const pin = prompt("🔐 Ingrese el PIN de Administrador General (Por defecto: 2026):", "2026");
    if (pin !== String(window.ANC_STATE.config.pin_administrador)) {
      alert("❌ PIN incorrecto. Se mantiene el rol de Operador de Unidad Orgánica / ADC.");
      rolSel.value = "OPERADOR";
    }
  }
};

window.recalcularTablaTopesUIT = function() {
  const uit = Number(document.getElementById("cfg-valor-uit")?.value || window.ANC_STATE.config.valor_uit);
  const div = document.getElementById("resumen-topes-uit-dinamico");
  if (!div) return;

  div.innerHTML = `
    <div style="font-weight:900; color:#0F172A; margin-bottom:6px;">📊 Equivalencia Automática de Topes con UIT = ${window.fmtSoles(uit)}:</div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:#334155;">
      <div>• <strong>20% UIT (Tope Comprobante):</strong> ${window.fmtSoles(uit * 0.20)}</div>
      <div>• <strong>10% UIT (Reuniones/DJ Enc.):</strong> ${window.fmtSoles(uit * 0.10)}</div>
      <div>• <strong>1/4 UIT (0.25 UIT Motores):</strong> ${window.fmtSoles(uit * 0.25)}</div>
      <div>• <strong>1/2 UIT (0.5 UIT Enseres/Florería ADC):</strong> ${window.fmtSoles(uit * 0.50)}</div>
      <div>• <strong>1 UIT (El Peruano / Cotiz. Encargo):</strong> ${window.fmtSoles(uit * 1)}</div>
      <div>• <strong>2 UIT (Lavandería / Florería Sede):</strong> ${window.fmtSoles(uit * 2)}</div>
      <div>• <strong>3 UIT (Traducciones / Expositores):</strong> ${window.fmtSoles(uit * 3)}</div>
      <div>• <strong>4 UIT (Botiquín / Impresiones):</strong> ${window.fmtSoles(uit * 4)}</div>
      <div>• <strong>8 UIT (Tope Anual Bienes/Servicios):</strong> ${window.fmtSoles(uit * 8)}</div>
      <div>• <strong>10 UIT (Tope Máx. Encargos):</strong> ${window.fmtSoles(uit * 10)}</div>
    </div>
  `;
};

window.guardarPerfilYDependencia = async function() {
  const cod = document.getElementById("cfg-select-unidad").value;
  const lista = window.ANC_STATE.unidades.length > 0 ? window.ANC_STATE.unidades : ROF_FALLBACK;
  const u = lista.find((item) => item.codigo === cod) || lista[0];

  const nuevoSaldoCaja = Number(document.getElementById("cfg-saldo-caja").value) || 0;
  const nuevoSaldoViaticos = Number(document.getElementById("cfg-saldo-viaticos").value) || 0;

  window.ANC_STATE.perfilActivo = {
    unidad_id: u.id,
    codigo_dependencia: u.codigo,
    categoria_rof: u.categoria_rof,
    nombre_dependencia: u.nombre_dependencia,
    es_adc: Boolean(u.es_adc),
    sede_ubicacion: u.sede_ubicacion,
    presupuesto_caja_chica: Number(u.presupuesto_caja_chica_mensual),
    saldo_caja_chica: nuevoSaldoCaja,
    presupuesto_viaticos: Number(u.presupuesto_viaticos_mensual),
    saldo_viaticos: nuevoSaldoViaticos,
    usuario_nombre: document.getElementById("cfg-usuario-nombre").value.trim() || "Operador ANC",
    usuario_dni: document.getElementById("cfg-usuario-dni").value.trim() || "00000000",
    regimen_vinculo: document.getElementById("cfg-usuario-regimen").value,
    percibe_gastos_operativos: document.getElementById("cfg-gastos-operativos").checked,
    rol_sistema: document.getElementById("cfg-usuario-rol").value
  };

  // Actualizar en memoria y en Supabase
  u.saldo_caja_chica_actual = nuevoSaldoCaja;
  u.saldo_viaticos_actual = nuevoSaldoViaticos;
  guardarEstadoEnLocalStorage();
  actualizarCabeceraYMenu();

  await window.SupabaseANC.request(
    "anc_unidades_organicas",
    "PATCH",
    `codigo=eq.${encodeURIComponent(u.codigo)}`,
    { saldo_caja_chica_actual: nuevoSaldoCaja, saldo_viaticos_actual: nuevoSaldoViaticos }
  );

  alert(`✅ Dependencia activa actualizada:
${u.nombre_dependencia}
Rol: ${window.ANC_STATE.perfilActivo.rol_sistema}`);
  navegarVista("inicio");
};

window.guardarParametrosUITSupabase = async function() {
  const anio = Number(document.getElementById("cfg-anio-fiscal").value) || 2026;
  const uit = Number(document.getElementById("cfg-valor-uit").value) || 5350.00;
  const tc = Number(document.getElementById("cfg-tc-usd").value) || 3.750;
  const topeViat = Number(document.getElementById("cfg-tope-viaticos").value) || 2000.00;

  window.ANC_STATE.config.anio_fiscal = anio;
  window.ANC_STATE.config.valor_uit = uit;
  window.ANC_STATE.config.tipo_cambio_usd = tc;
  window.ANC_STATE.config.tope_viaticos_caja_chica = topeViat;

  guardarEstadoEnLocalStorage();
  actualizarCabeceraYMenu();
  recalcularTablaTopesUIT();

  await window.SupabaseANC.request(
    "anc_configuracion",
    "PATCH",
    `id=eq.${window.ANC_STATE.config.id || 1}`,
    {
      anio_fiscal: anio,
      valor_uit: uit,
      tipo_cambio_usd: tc,
      tope_viaticos_caja_chica: topeViat
    }
  );

  alert(`✅ Parámetros actualizados:
• UIT ${anio}: ${window.fmtSoles(uit)}
• Tope 20% por Comprobante: ${window.fmtSoles(uit * 0.20)}
• Tipo de Cambio USD: S/ ${tc.toFixed(3)}`);
};
