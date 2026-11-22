<div align="center">

# 💊 MedTrack Inventory

**Medicine expiry tracker with CNOPS / CNSS reimbursement status and a built-in database of 5,917 medicines.**

![Medicines](https://img.shields.io/badge/medicines-5%2C917-0d9488?style=for-the-badge)
![Languages](https://img.shields.io/badge/languages-EN%20%7C%20FR%20%7C%20AR%20%7C%20Darija-6366f1?style=for-the-badge)
![Offline](https://img.shields.io/badge/works-offline-10b981?style=for-the-badge)
![Platform](https://img.shields.io/badge/Android%20%2B%20Web-3ddc84?style=for-the-badge&logo=android&logoColor=white)

### [🌐 Open the app](https://yiojg.github.io/medtrack/) &nbsp;·&nbsp; [📱 Download the APK](../../releases)

</div>

---

## ✨ Features

- 📅 **Expiry tracking:** every medicine is marked *Valid*, *Expiring soon* (under 90 days) or *Expired*.
- 🗄️ **CNOPS database:** the full 2014 CNOPS reference built in, with real 13-digit barcodes, active ingredient (DCI), dosage, form, pack size and price.
- 🔎 **Smart autocomplete:** type a brand name, ingredient or barcode, and the name, barcode and refund status fill in automatically.
- ▥ **Barcode scanning:** use the phone camera or a USB / Bluetooth handheld scanner. Scan a barcode to find it in your list or add it.
- 💚 **Refund status:** shows whether each medicine is reimbursable by CNOPS / CNSS (70% or not reimbursed).
- 📤 **CSV import / export:** open your list in Excel with barcodes kept as exact text (no `6.118E+12`).
- 🌍 **4 languages:** English, Français, العربية and الدارجة, with full right-to-left support.
- 🔒 **Private:** all data stays on your device, in your browser storage. Nothing is sent anywhere.
- 📴 **Offline:** after the first visit, the app works without internet.

## 🚀 Use it

| Option | How |
|---|---|
| **Website** | Open https://yiojg.github.io/medtrack/ |
| **Install like an app** | In Chrome on Android, tap ⋮ then **Add to Home screen** |
| **Android APK** | Open the **Actions** tab, run **Build APK**, and download `MedTrack-apk` |

## 🛠️ Build the APK yourself

The APK is built automatically by GitHub Actions using Capacitor.

1. Open the **Actions** tab.
2. Choose **Build APK**, then **Run workflow**.
3. Download **MedTrack-apk** from the finished run and install `app-debug.apk`.

Local build (Node 20, JDK 17, Android SDK):

```bash
npm install
npm run prepare-web
npx cap add android
npx cap sync android
cd android && ./gradlew assembleDebug
```

## 🗂️ Project files

| File | Purpose |
|---|---|
| `index.html` | The whole app, including the medicine database |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Make the site installable and offline |
| `prepare.js`, `package.json`, `capacitor.config.json` | Android packaging |
| `.github/workflows/build-apk.yml` | Cloud APK build |

## ⚠️ Disclaimer

MedTrack is an inventory helper, **not medical advice**. Reimbursement data comes from the 2014 CNOPS reference list, so newer medicines are missing and prices or rates may have changed. Always check current official sources.

---

<div align="center">

Made with 💚 by **AKKAOUI RAYANE**

</div>