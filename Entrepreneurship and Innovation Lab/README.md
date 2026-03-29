# 🚀 Entrepreneurship & Innovation Lab
## Offline Experiential Learning Studio

**Developed by:** Mateen Yousuf  
**Role:** Teacher, School Education Department, Kashmir  
**Alignment:** NEP 2020 | NCF 2023 | JKBOSE Curriculum

---

## 📁 File Structure

```
entrepreneurship-innovation-lab/
├── index.html          ← Main app (entire application)
├── manifest.json       ← PWA manifest
├── service-worker.js   ← Offline caching
├── author.jpg          ← Author photo (your photo)
└── README.md           ← This file
```

---

## 🌟 Features

| Module | Description |
|--------|-------------|
| 📚 Policy Foundation | 13 academic pages (NEP 2020, experiential learning, ethics, finance) |
| 💡 Idea Generation Lab | Interactive worksheet generator (6+ domains) |
| 🧩 Design Thinking | 5-step workspace with save-to-portfolio |
| 📋 Business Plan Builder | Auto-generates plan + SWOT + financials |
| 💰 Financial Literacy | P&L, Break-Even, Revenue Chart, Budgeting |
| 📊 Market Simulation | Live sliders with profit/risk/sustainability scores |
| 🎯 Skill Tracker | Radar chart with LocalStorage persistence |
| 🗂️ Portfolio Manager | Save, view, export JSON, print |

---

## 💻 How to Run Locally

### Option 1 — VS Code Live Server (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension
3. Open the project folder in VS Code
4. Right-click `index.html` → **Open with Live Server**
5. App opens at `http://127.0.0.1:5500`

### Option 2 — Python Simple Server
```bash
# Python 3
python -m http.server 8080
# Open http://localhost:8080
```

### Option 3 — Double-click (limited)
- Simply open `index.html` in Chrome/Edge
- ⚠️ Service Worker won't work without a server, but all other features will

---

## 🌐 Deploy for Free (Online)

### GitHub Pages (Recommended — Free)
1. Create a GitHub account at github.com
2. Create a new repository (e.g., `einnovation-lab`)
3. Upload all 4 files to the repository
4. Go to **Settings → Pages → Source: main branch → Save**
5. Your app is live at: `https://yourusername.github.io/einnovation-lab`

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire project folder onto the Netlify dashboard
3. App is live instantly with a free URL

### Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository → Deploy
3. Free, fast, global CDN

---

## 📱 PWA Installation (Add to Home Screen)

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap the **three-dot menu (⋮)**
3. Tap **"Add to Home screen"**
4. Tap **"Add"** — app installs like a native app!

### iOS (Safari)
1. Open in Safari
2. Tap the **Share button (□↑)**
3. Tap **"Add to Home Screen"**
4. Tap **"Add"**

---

## 📦 APK Conversion Guide (Android App)

### Method 1 — PWA Builder (Easiest, No Coding Required)
1. **Deploy to GitHub Pages** (see above)
2. Go to [pwabuilder.com](https://pwabuilder.com)
3. Enter your app URL → Click **Start**
4. Click **Android** → **Generate Package**
5. Download the `.apk` or `.aab` file
6. Transfer to Android phone via USB/WhatsApp
7. Enable **"Install from Unknown Sources"** in phone Settings
8. Install the APK!

### Method 2 — Android Studio WebView (Advanced)
1. Install [Android Studio](https://developer.android.com/studio)
2. Create a new **Empty Activity** project
3. In `activity_main.xml`, add a `WebView` that fills screen
4. Copy your app folder to `app/src/main/assets/`
5. In `MainActivity.java`, load: `webView.loadUrl("file:///android_asset/index.html")`
6. Enable JavaScript: `webView.getSettings().setJavaScriptEnabled(true)`
7. Enable DOM Storage: `webView.getSettings().setDomStorageEnabled(true)`
8. Build → **Generate Signed APK**

### Method 3 — Capacitor (Recommended for Full App)
```bash
npm install -g @capacitor/cli
npx cap init "E&I Lab" "com.kashmir.einnovationlab"
npx cap add android
# Copy index.html to www/ folder
npx cap sync android
npx cap open android
# Build → Generate Signed Bundle/APK in Android Studio
```

---

## 🔒 Privacy & Data
- **All data stored locally** on the student's device (LocalStorage)
- **No server, no cloud, no login** required
- **No tracking, no analytics** — complete privacy
- Students own their data entirely

---

## 🏫 Classroom Deployment Guide

### Share via USB/Bluetooth
1. Copy the 4 files to a USB drive
2. Distribute to student devices
3. Each student opens `index.html` in Chrome

### Share via School LAN
1. Run Python server on teacher's laptop: `python -m http.server 8080`
2. Find laptop's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Students open `http://[TEACHER_IP]:8080` in their browser

### Share via QR Code
1. Deploy to GitHub Pages
2. Generate QR code for the URL at [qr-code-generator.com](https://qr-code-generator.com)
3. Print QR code on board — students scan with phones

---

## 📜 License & Credits

**Author:** Mateen Yousuf  
**Institution:** School Education Department, Jammu & Kashmir  
**Purpose:** Educational use in Kashmiri secondary schools  
**Policy Alignment:** NEP 2020, NCF 2023, JKBOSE  

This application is developed for educational purposes. Free to use, adapt, and distribute for non-commercial educational use.

---

*"Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats*
