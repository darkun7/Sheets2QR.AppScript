# Sheets2QR.AppScript

Show dynamic inventory information from Google Sheets using Google Apps Script and QR Codes.

Static QR Code → Dynamic Google Sheets Data.

---

# Features

* Read data from Google Sheets
* Search inventory by `KODE BARANG`
* Search across multiple sheets/tabs
* Display inventory information dynamically
* Generate QR Code automatically
* Download QR Code button
* Mobile friendly
* No hosting required

---

# Example Flow

QR Code contains:

```text
https://script.google.com/macros/s/DEPLOYMENT_ID/exec?kode=BRG001
```

When scanned:

* Script searches Google Sheets
* Finds matching `KODE BARANG`
* Shows latest inventory data

---

# Required Configuration

Before deployment, change these values inside `app.gs`.

## 1. Change Deployment ID

Find:

```javascript
const deploymentId = "<YOUR_DEPLOYMENT_ID>";
```

Replace with your deployment ID:

```javascript
const deploymentId = "AKfycbxxxxxxxxxxxx";
```

Example deployment URL:

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxx/exec
```

Deployment ID is:

```text
AKfycbxxxxxxxxxxxx
```

---

## 2. Change Spreadsheet ID

Find:

```javascript
const spreadsheet = SpreadsheetApp.openById(
  "<SHEET_ID>"
);
```

Replace with your Google Spreadsheet ID:

```javascript
const spreadsheet = SpreadsheetApp.openById(
  "1ZxcfL6P1KqRYqBKQlMW1lYb94Wxgel18kdatyMymidE"
);
```

Example Spreadsheet URL:

```text
https://docs.google.com/spreadsheets/d/1ZxcfL6P1KqRYqBKQlMW1lYb94Wxgel18kdatyMymidE/edit
```

Spreadsheet ID is:

```text
1ZxcfL6P1KqRYqBKQlMW1lYb94Wxgel18kdatyMymidE
```

---

# Deployment Guide (English)

## Step 1 — Open Google Apps Script

Inside Google Sheets:

```text
Extensions → Apps Script
```

---

## Step 2 — Paste Code

Replace default code with `app.gs`.

---

## Step 3 — Save Project

Click:

```text
Save Project
```

---

## Step 4 — Deploy Web App

Click:

```text
Deploy → New Deployment
```

Choose:

* Type: `Web App`
* Execute as: `Me`
* Access: `Anyone`

Then click:

```text
Deploy
```

---

## Step 5 — Authorize

Google will ask permission:

* Review permissions
* Select account
* Advanced
* Go to project
* Allow

---

## Step 6 — Copy Deployment URL

Example:

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxx/exec
```

---

# How To Update Script WITHOUT Changing Deployment URL

IMPORTANT:

DO NOT create a new deployment every time.

Wrong:

```text
Deploy → New Deployment
```

This creates a new deployment URL and breaks old QR Codes.

---

## Correct Update Method

Use:

```text
Deploy → Manage Deployments
```

Then:

1. Click edit/pencil icon
2. Create New Version
3. Click Deploy

Your deployment URL stays the same.

All existing QR Codes will continue working.

---

# Spreadsheet Format

Example columns:

| NO | KODE BARANG | NAMA BARANG | SPESIFIKASI | JUMLAH | TEMPAT | KETERANGAN | TEXT QR |
| -- | ----------- | ----------- | ----------- | ------ | ------ | ---------- | ------- |

Column B (`KODE BARANG`) is used for QR search.

---

# Example QR

```text
https://script.google.com/macros/s/DEPLOYMENT_ID/exec?kode=BRG001
```

---

# Panduan Deployment (Bahasa Indonesia)

## Langkah 1 — Buka Google Apps Script

Di dalam Google Sheets:

```text
Extensions → Apps Script
```

---

## Langkah 2 — Paste Kode

Ganti kode default dengan isi `app.gs`.

---

## Langkah 3 — Simpan Project

Klik:

```text
Save Project
```

---

## Langkah 4 — Deploy Web App

Klik:

```text
Deploy → New Deployment
```

Pilih:

* Type: `Web App`
* Execute as: `Me`
* Access: `Anyone`

Lalu klik:

```text
Deploy
```

---

## Langkah 5 — Authorize

Google akan meminta izin:

* Review permissions
* Pilih akun
* Advanced
* Go to project
* Allow

---

## Langkah 6 — Copy Deployment URL

Contoh:

```text
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxx/exec
```

---

# Cara Update Script TANPA Mengubah Link Deployment

PENTING:

JANGAN gunakan:

```text
Deploy → New Deployment
```

karena akan membuat URL baru dan QR lama rusak.

---

## Cara Yang Benar

Gunakan:

```text
Deploy → Manage Deployments
```

Lalu:

1. Klik icon edit/pencil
2. Create New Version
3. Klik Deploy

URL deployment tetap sama.

Semua QR lama tetap berfungsi.

---

# Struktur Spreadsheet

Contoh kolom:

| NO | KODE BARANG | NAMA BARANG | SPESIFIKASI | JUMLAH | TEMPAT | KETERANGAN | TEXT QR |
| -- | ----------- | ----------- | ----------- | ------ | ------ | ---------- | ------- |

Kolom B (`KODE BARANG`) digunakan untuk pencarian QR.

---

# Contoh QR

```text
https://script.google.com/macros/s/DEPLOYMENT_ID/exec?kode=BRG001
```
