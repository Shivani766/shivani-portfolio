# Shivani Diwakar — Portfolio

A professional developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
shivani-portfolio/
├── index.html                 ← Entry HTML (loads fonts + mounts React)
├── vite.config.js             ← Vite configuration
├── tailwind.config.js         ← Tailwind config (custom colors, fonts, animations)
├── postcss.config.js          ← PostCSS (required for Tailwind)
├── package.json               ← Dependencies & scripts
└── src/
    ├── main.jsx               ← React entry point (mounts App into #root)
    ├── App.jsx                ← Root component (renders Home page)
    ├── index.css              ← Global styles + Tailwind directives
    ├── pages/
    │   └── Home.jsx           ← Assembles all section components
    └── components/
        ├── Navbar.jsx         ← Fixed nav with mobile hamburger menu
        ├── Hero.jsx           ← Landing section with terminal card
        ├── About.jsx          ← Bio, skills, personal info
        ├── Projects.jsx       ← 3 project cards
        ├── Experience.jsx     ← Timeline + education
        ├── Contact.jsx        ← Contact form with useState
        └── Footer.jsx         ← Footer with links and social icons
```

---

## 🛠 Tech Stack

| Tool         | Purpose                         |
|--------------|---------------------------------|
| React 18     | UI components                   |
| Vite 5       | Lightning-fast dev server       |
| Tailwind CSS | Utility-first styling           |
| PostCSS      | CSS processing (for Tailwind)   |

---

## 🎨 Customization

### Change your info:
- **Name / role / bio** → `src/components/Hero.jsx`, `About.jsx`
- **Personal info (email, GitHub)** → `src/components/About.jsx` → `PERSONAL_INFO` array
- **Projects** → `src/components/Projects.jsx` → `PROJECTS` array
- **Experience** → `src/components/Experience.jsx` → `EXPERIENCES` array
- **Contact links** → `src/components/Contact.jsx` + `Footer.jsx`

### Change colors:
Edit `tailwind.config.js` → `theme.extend.colors`

---

## 📬 Connect the Contact Form
The form currently logs to the console. To make it send real emails:
1. Create a free account at [EmailJS](https://www.emailjs.com) or [Formspree](https://formspree.io)
2. Replace the `console.log` in `Contact.jsx → handleSubmit` with their API call

---

## 🚢 Deploy

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com
```
