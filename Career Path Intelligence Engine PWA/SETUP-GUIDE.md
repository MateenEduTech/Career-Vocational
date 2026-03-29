# Career Path Intelligence Engine — Setup Guide

## 📁 Folder Structure
```
jkbose-class9-science-app/
├── index.html         ← Main app (all HTML + CSS + JS)
├── manifest.json      ← PWA install config
├── service-worker.js  ← Offline caching engine
└── author.jpg         ← Author photo (place here)
```

---

## 1️⃣ HOW TO SAVE THE FILES

1. Create a folder on your computer named exactly: `jkbose-class9-science-app`
2. Place all 4 files inside this folder
3. Rename the author's photo to `author.jpg` and put it in the folder

---

## 2️⃣ HOW TO RUN LOCALLY

### Option A — VS Code Live Server (Recommended)
1. Install VS Code from https://code.visualstudio.com
2. Install the "Live Server" extension
3. Open the `jkbose-class9-science-app` folder in VS Code
4. Right-click `index.html` → **Open with Live Server**
5. App opens at `http://127.0.0.1:5500`

### Option B — Python Local Server
```bash
cd jkbose-class9-science-app
python -m http.server 8080
```
Then open: `http://localhost:8080`

### Option C — Direct Browser (Limited)
- Double-click `index.html` to open
- Note: Service Worker won't activate on `file://` protocol
- All core features still work

---

## 3️⃣ HOW TO HOST FOR FREE

### Option A — GitHub Pages (Recommended)
1. Create a free account at https://github.com
2. Create a new repository named `career-path-app`
3. Upload all 4 files to the repository
4. Go to Settings → Pages → Source: `main` branch → `/root`
5. Your app will be live at: `https://yourusername.github.io/career-path-app`

### Option B — Netlify (Easiest)
1. Go to https://netlify.com → Sign up free
2. Drag and drop the entire `jkbose-class9-science-app` folder
3. Netlify gives you a live URL instantly (e.g. `https://your-app.netlify.app`)
4. Custom domain available for free

### Option C — Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Connect your GitHub repo or upload directly
3. Fast global CDN, completely free

---

## 📲 INSTALL AS MOBILE APP

Once hosted online, open the URL on any Android phone in Chrome:
- Tap the **Install** banner at the bottom
- Or tap the 3-dot menu → "Add to Home Screen"

The app will install like a native app with offline support.

---

## ✨ APP FEATURES SUMMARY

- **20-question adaptive assessment** across 5 categories
- **Weighted scoring algorithm** mapping to 8 career paths
- **Top 3 career recommendations** with % match scores
- **Detailed roadmaps** — subjects, exam prep, career paths
- **LocalStorage** — saves all results, history persists
- **PWA** — installable, works fully offline after first load
- **Animated star background**, smooth screen transitions
- **Mobile-first** responsive design

---

*Developed by Dr. Mateen Yousuf — School Education Department, J&K*
