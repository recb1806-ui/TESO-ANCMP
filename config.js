// =========================================================================================
// CONFIGURACIÓN DE CONEXIÓN A SUPABASE Y PARÁMETROS BASE - UE 012: ANC-MP
// =========================================================================================

window.ANC_CONFIG = {
  SUPABASE_URL: "https://qjviccudobbdqazopzqd.supabase.co",
  SUPABASE_KEY: "sb_publishable_LAUPvK1XqLvJr87WaSg01A_lFAgYXBn",
  ENTIDAD: "UE 012: Autoridad Nacional de Control del Ministerio Público (ANC-MP)",
  RUC_INSTITUCIONAL: "20131370301",
  ANIO_FISCAL: 2026,
  VALOR_UIT: 5350.00,
  PORCENTAJE_TOPE_COMPROBANTE: 20.0, // 20% UIT = S/ 1,070.00
  TOPE_VIATICOS_CAJA_CHICA: 2000.00, // R.D. 008-2024-EF/52.01
  TIPO_CAMBIO_USD: 3.750,
  PIN_ADMIN: "2026"
};

// Cliente ligero REST para Supabase (Compatible con llaves anon/publishable sin dependencias pesadas)
window.SupabaseANC = {
  async request(table, method = "GET", queryParams = "", body = null) {
    const url = `${window.ANC_CONFIG.SUPABASE_URL}/rest/v1/${table}${queryParams ? "?" + queryParams : ""}`;
    const headers = {
      "apikey": window.ANC_CONFIG.SUPABASE_KEY,
      "Authorization": `Bearer ${window.ANC_CONFIG.SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "return=representation"
    };
    try {
      const options = { method, headers };
      if (body && (method === "POST" || method === "PATCH")) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        const errText = await response.text();
        console.warn(`Aviso Supabase [${table}]:`, errText);
        return { data: null, error: errText };
      }
      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      console.warn(`Modo Offline / Sin conexión en [${table}]:`, err.message);
      return { data: null, error: err.message };
    }
  }
};
