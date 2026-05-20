# 🧘‍♂️ Prana Daily: Somatic Practice Portal & Healing Directory

A modern, high-fidelity web companion designed to help learners study and practice **Pranic Healing** safely and systematically, inspired by the teachings of **Grand Master Choa Kok Sui** (*Miracles Through Pranic Healing*). 

This portal features **The Masterclass Hub** for step-by-step physical skills training (Sensing, Scanning, Sweeping, and Projecting energy) and **The Healing Directory** as a searchable "First-Aid" self-treatment handbook—complete with authentic, verbatim textbook passages and citations for learning validation.

---

## ✨ Features

- **🧘‍♀️ The Masterclass Hub:** A 12-chapter interactive syllabus covering hand gateway activation, sensory sensitization, boundaries scanning, auric sweeping, energy disposal, and two-hand prana projection.
- **📖 The Healing Directory:** Categorized step-by-step recipes for self-treatment (Tension Headaches, Fatigue, Muscle Sprains, Indigestion, Fevers) with authentic book citations.
- **🗣️ Meditatively Paced TTS Narration:** Guided somatic cues narrated at an optimized, comfortable **0.70x rate** to allow for slow, rhythmic breathing (6-3-6-3) during practice.
- **🌓 Dynamic Theme Convergence:** Full system-synchronized Light and Dark themes that transition in perfect unison across both the dashboard and active somatic player overlays.
- **🎨 Interactive Visual Guides:** Beautiful inline CSS-animated vector illustrations representing palm energy channels, sweeping lines, and projected energy streams.

---

## 🛠️ Local Development & Build Guide

Follow these steps to run, build, and test the project on your local machine.

### 📋 Prerequisites

Ensure you have the following installed on your operating system:
* **Node.js** (v18.0.0 or higher is recommended)
* **npm** (comes bundled with Node.js)

---

### 1. Installation

Clone or download the repository to your local computer, open your terminal, navigate to the project directory, and install all package dependencies:

```bash
# Navigate to the workspace directory
cd pranic_healing_teaching_app_antigravity

# Install all dependencies
npm install
```

---

### 2. Run the Development Server

Start Vite's ultra-fast local development server to run the application with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once started, the terminal will display the local address. Open your web browser and navigate to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

### 3. Build for Production

To compile, optimize, and bundle the entire application for static web hosting (such as GitHub Pages, Vercel, Netlify, or AWS S3):

```bash
npm run build
```

This will run TypeScript type-checks (`tsc -b`) and trigger the Vite builder. The compiled, minified code will be generated inside the `/dist` directory.

---

### 4. Preview the Production Build Locally

To test and preview the compiled production build locally before uploading it to a hosting provider:

```bash
npm run preview
```

Open the preview link printed in your terminal (usually **[http://localhost:4173](http://localhost:4173)**) to verify that everything loads perfectly.

---

### 5. Linting & Formatting

To run ESLint and scan the codebase for code quality, syntax, or styling issues:

```bash
npm run lint
```

---

## 🚀 Deployment to GitHub Pages

The project has been configured with an automated **CI/CD GitHub Actions Pipeline** located at `.github/workflows/deploy.yml`. 

### Automated Deploy
Every time you push commits to your `master` branch on GitHub:
1. GitHub Actions automatically starts a secure virtual machine.
2. It checks out the source code, sets up Node.js v20, and runs `npm run build`.
3. It deploys the compiled `/dist` directory directly to GitHub Pages.

*Note: In [vite.config.ts](vite.config.ts), we use a dynamic base path property. It resolves assets under the `/pranic_path/` subdirectory in production, but uses root `/` in development for seamless local developer workflows.*
