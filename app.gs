function doGet(e) {

  const kode = e.parameter.kode;

  const deploymentId = "<YOUR_DEPLOYMENT_ID>";

  const spreadsheet = SpreadsheetApp.openById(
    "<SHEET_ID>"
  );

  const sheets = spreadsheet.getSheets();

  let result = null;

  // SEARCH ALL SHEETS
  for (let s = 0; s < sheets.length; s++) {

    const sheet = sheets[s];

    const data = sheet.getDataRange().getValues();

    if (data.length < 2) continue;

    const headers = data[0];

    const kodeIndex = 1; // COLUMN B

    for (let i = 1; i < data.length; i++) {

      const row = data[i];

      if (String(row[kodeIndex]).trim() == String(kode).trim()) {

        result = {};

        headers.forEach((h, index) => {
          result[h] = row[index];
        });

        result["NAMA_SHEET"] = sheet.getName();

        break;
      }
    }

    if (result) break;
  }

  // IF NOT FOUND
  if (!result) {

    return HtmlService.createHtmlOutput(`
      <h2 style="font-family:Arial;padding:30px;">
        Data tidak ditemukan
      </h2>
    `);

  }

  // QR URL
  const qrTarget =
    "https://script.google.com/macros/s/" +
    deploymentId +
    "/exec?kode=" +
    encodeURIComponent(result["KODE BARANG"]);

  // QR IMAGE
  const qrImage =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(qrTarget);

  // HTML PAGE
  return HtmlService.createHtmlOutput(`
    <html>

      <head>

        <title>Data Inventaris</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <style>

          body{
            font-family:Arial;
            background:#f4f4f4;
            padding:20px;
          }

          .card{
            background:white;
            padding:30px;
            border-radius:15px;
            max-width:700px;
            margin:auto;
            box-shadow:0 2px 10px rgba(0,0,0,0.1);
          }

          h1{
            text-align:center;
            margin-top:0;
            margin-bottom:30px;
          }

          .row{
            margin-bottom:15px;
            font-size:20px;
            line-height:1.5;
          }

          .label{
            font-weight:bold;
          }

          hr{
            margin-top:25px;
            margin-bottom:25px;
          }

          .qr-section{
            text-align:center;
          }

          .qr-text{
            margin-bottom:20px;
            font-size:24px;
          }

          .btn{
            display:inline-block;
            margin-top:20px;
            padding:14px 24px;
            background:black;
            color:white;
            text-decoration:none;
            border-radius:10px;
            font-size:18px;
          }

          img{
            border:1px solid #ddd;
            padding:10px;
            border-radius:10px;
            background:white;
          }

        </style>

      </head>

      <body>

        <div class="card">

          <h1>
            ${result["NAMA BARANG"] || "-"}
          </h1>

          <div class="row">
            <span class="label">Sheet:</span>
            ${result["NAMA_SHEET"] || "-"}
          </div>

          <div class="row">
            <span class="label">Kode Barang:</span>
            ${result["KODE BARANG"] || "-"}
          </div>

          <div class="row">
            <span class="label">Spesifikasi:</span>
            ${result["SPESIFIKASI"] || "-"}
          </div>

          <div class="row">
            <span class="label">Jumlah:</span>
            ${result["JUMLAH"] || "-"}
          </div>

          <div class="row">
            <span class="label">Sumber Perolehan:</span>
            ${result["SUMBER PEROLEHAN"] || "-"}
          </div>

          <div class="row">
            <span class="label">Tahun:</span>
            ${result["TAHUN PEROLEHAN"] || "-"}
          </div>

          <div class="row">
            <span class="label">Tempat:</span>
            ${result["TEMPAT"] || "-"}
          </div>

          <div class="row">
            <span class="label">Keterangan:</span>
            ${result["KETERANGAN"] || "-"}
          </div>

          <hr>

          <div class="qr-section">

            <div class="qr-text">
              ${result["TEXT QR"] || "-"}
            </div>

            <img
              src="${qrImage}"
              width="250"
              height="250"
            >

            <br>

            <a
              class="btn"
              href="${qrImage}"
              download="${result["KODE BARANG"]}.png"
              target="_blank"
            >
              Download QR Code
            </a>

          </div>

        </div>

      </body>

    </html>
  `);

}