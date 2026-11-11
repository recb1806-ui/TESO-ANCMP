// =========================================================================================
// MOTOR DE IMPRESIÓN LIMPIA Y FORMATOS OFICIALES EXACTOS (motor_anexos.js)
// UE 012: AUTORIDAD NACIONAL DE CONTROL DEL MINISTERIO PÚBLICO (ANC-MP)
// Imprime ÚNICAMENTE el Anexo Oficial con el Logo de la ANC-MP en una ventana limpia,
// sin arrastrar menús ni formularios de la aplicación y sin acumular vistas abajo.
// =========================================================================================

window.LOGO_ANC_SVG_INLINE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="58" height="58">
  <rect width="512" height="512" rx="88" fill="#0F172A"/>
  <rect x="20" y="20" width="472" height="472" rx="72" fill="none" stroke="#D97706" stroke-width="14"/>
  <path d="M256 76 L290 130 L222 130 Z" fill="#F59E0B"/>
  <rect x="248" y="125" width="16" height="145" fill="#F59E0B"/>
  <path d="M136 160 H376" stroke="#F59E0B" stroke-width="14" stroke-linecap="round"/>
  <path d="M156 160 L120 230 H192 Z" fill="none" stroke="#F59E0B" stroke-width="8"/>
  <path d="M112 230 Q156 260 200 230 Z" fill="#D97706"/>
  <path d="M356 160 L320 230 H392 Z" fill="none" stroke="#F59E0B" stroke-width="8"/>
  <path d="M312 230 Q356 260 400 230 Z" fill="#D97706"/>
  <rect x="196" y="266" width="120" height="18" rx="8" fill="#D97706"/>
  <text x="256" y="362" font-family="Arial, sans-serif" font-size="96" font-weight="900" fill="#FFFFFF" text-anchor="middle">ANC</text>
  <text x="256" y="412" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#F59E0B" text-anchor="middle">MINISTERIO PÚBLICO</text>
  <text x="256" y="448" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#CBD5E1" text-anchor="middle">UE 012</text>
</svg>`;

window.MotorAnexosANC = {
  // Abre una ventana emergente limpia o iframe dedicado SOLO con el formato oficial de la Directiva
  imprimirDocumentoOficial(tituloVentana, htmlContenido, orientacion = "portrait") {
    const estilosBase = `
      @page { size: A4 ${orientacion}; margin: 12mm 14mm; }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: Arial, Helvetica, sans-serif;
        color: #000000;
        background: #FFFFFF;
        font-size: 11px;
        line-height: 1.35;
      }
      .hoja-oficial {
        width: 100%;
        page-break-after: always;
      }
      .hoja-oficial:last-child {
        page-break-after: auto;
      }
      .encabezado-directiva {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 12px;
      }
      .encabezado-directiva td {
        border: 1.5px solid #000;
        padding: 6px 8px;
        vertical-align: middle;
      }
      .titulo-anexo-num {
        text-align: center;
        font-size: 13px;
        font-weight: 900;
        margin: 8px 0 2px 0;
        text-transform: uppercase;
      }
      .titulo-anexo-nombre {
        text-align: center;
        font-size: 12.5px;
        font-weight: 900;
        text-decoration: underline;
        margin-bottom: 12px;
        text-transform: uppercase;
      }
      table.tabla-directiva {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
      }
      table.tabla-directiva th, table.tabla-directiva td {
        border: 1px solid #000;
        padding: 5px 6px;
        font-size: 10.5px;
        vertical-align: middle;
      }
      table.tabla-directiva th {
        background-color: #E2E8F0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-weight: 900;
        text-transform: uppercase;
      }
      .fila-subtotal {
        background-color: #F1F5F9 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-weight: bold;
      }
      .fila-total-general {
        background-color: #FEF3C7 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        font-weight: 900;
        font-size: 11.5px;
      }
      .bloque-firmas {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        margin-top: 46px;
        text-align: center;
        page-break-inside: avoid;
      }
      .linea-firma {
        width: 30%;
        border-top: 1.5px solid #000;
        padding-top: 5px;
        font-size: 10px;
      }
      .notas-pie {
        font-size: 9.2px;
        line-height: 1.32;
        border: 1px solid #000;
        padding: 7px 9px;
        margin-top: 8px;
        text-align: justify;
      }
      .barra-acciones-vista {
        background: #0F172A;
        color: #FFFFFF;
        padding: 10px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
        border-bottom: 3px solid #D97706;
      }
      .btn-print-top {
        background: #F59E0B;
        color: #0F172A;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: 900;
        cursor: pointer;
        font-size: 12px;
      }
      @media print {
        .barra-acciones-vista { display: none !important; }
      }
    `;

    const docHTML = `<!DOCTYPE html>
      <html lang="es-PE">
      <head>
        <meta charset="UTF-8"/>
        <title>${tituloVentana}</title>
        <style>${estilosBase}</style>
      </head>
      <body>
        <div class="barra-acciones-vista">
          <div><strong>UE 012: ANC-MP</strong> • Vista Previa de Impresión Oficial (${tituloVentana})</div>
          <div style="display:flex; gap:8px;">
            <button class="btn-print-top" onclick="window.print()">🖨️ Imprimir / Guardar PDF</button>
            <button class="btn-print-top" style="background:#334155; color:#FFF;" onclick="window.close()">✕ Cerrar</button>
          </div>
        </div>
        ${htmlContenido}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 250);
          };
        <\/script>
      </body>
      </html>`;

    const win = window.open("", "_blank", "width=920,height=780,scrollbars=yes");
    if (win) {
      win.document.open();
      win.document.write(docHTML);
      win.document.close();
    } else {
      // Fallback mediante iframe oculto si el navegador bloquea popups
      let iframe = document.getElementById("iframe-impresion-anc");
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "iframe-impresion-anc";
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "0";
        document.body.appendChild(iframe);
      }
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(docHTML);
      doc.close();
    }
  },

  // Genera el cuadro de cabecera idéntico a las Directivas del MP pero con el Logo de la ANC-MP
  cabeceraDirectivaHTML(codigoDoc, nombreDirectiva, versionDoc) {
    return `
      <table class="encabezado-directiva">
        <tr>
          <td style="width:24%; text-align:center;">
            <div style="display:flex; align-items:center; justify-content:center; gap:8px;">
              ${window.LOGO_ANC_SVG_INLINE}
              <div style="text-align:left; font-size:9.5px; font-weight:900; line-height:1.15;">
                AUTORIDAD NACIONAL<br/>DE CONTROL<br/><span style="font-size:8.5px; font-weight:700;">MINISTERIO PÚBLICO<br/>UE 012: ANC-MP</span>
              </div>
            </div>
          </td>
          <td style="width:52%; text-align:center;">
            <div style="font-size:9.5px; font-weight:bold; border-bottom:1px solid #000; padding-bottom:3px; margin-bottom:4px;">
              DOCUMENTO INTERNO
            </div>
            <div style="font-size:11px; font-weight:900; text-transform:uppercase;">
              DIRECTIVA<br/>${nombreDirectiva}
            </div>
          </td>
          <td style="width:24%; font-size:10px;">
            <div><strong>Código:</strong> ${codigoDoc}</div>
            <div><strong>Versión:</strong> ${versionDoc}</div>
            <div><strong>Fecha:</strong> ${new Date().toLocaleDateString("es-PE")}</div>
          </td>
        </tr>
      </table>
    `;
  },

  // Exportador universal a Excel (CSV UTF-8 con separador ';' para Microsoft Excel en español)
  exportarExcelCSV(nombreArchivo, cabeceras, filasDatos) {
    const escapar = (val) => {
      const s = String(val ?? "").replace(/"/g, '""');
      return `"${s}"`;
    };
    const lineas = [
      cabeceras.map(escapar).join(";"),
      ...filasDatos.map(fila => fila.map(escapar).join(";"))
    ];
    const contenido = "\uFEFF" + lineas.join("\r\n");
    const blob = new Blob([contenido], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo.endsWith(".csv") ? nombreArchivo : `${nombreArchivo}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
