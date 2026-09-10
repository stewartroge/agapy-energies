# Agapy Energies Ltd - Website

Official website for Agapy Energies Ltd, a premier LPG retail and distribution company based in Kampala, Uganda.

## 🚀 Live Demo

Visit: **[https://your-username.github.io/repo-name/](https://your-username.github.io/repo-name/)**

---

## 📋 Features

- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Modern UI** — Clean, professional design with smooth animations
- **WhatsApp Integration** — Floating chat button and form submission via WhatsApp
- **SEO Optimized** — Proper meta tags and semantic HTML
- **Fast Loading** — Built with Vite for optimal performance
- **Auto Deployment** — GitHub Actions workflow for automatic deployment on push

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **Font Awesome** — Additional icons
- **GitHub Pages** — Hosting

---

## 📦 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop (2 minutes)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `dist` folder onto the page

4. Your site is live! Get a URL like `agapy-energies.netlify.app`

#### Method B: Connect GitHub (Auto-deploy on push)

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up/login

2. Click **"Add new site"** → **"Import an existing project"**

3. Connect your GitHub repository

4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click **"Deploy site"**

6. (Optional) Add custom domain:
   - Go to **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter `agapyenergies.co.ug`
   - Follow DNS instructions

#### Features Included:
- ✅ Free HTTPS/SSL certificate
- ✅ Automatic deployments on git push
- ✅ Form submissions (contact form works without backend!)
- ✅ Global CDN for fast loading
- ✅ Custom domain support
- ✅ 100GB free bandwidth/month

---

### Option 2: GitHub Pages

#### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

#### Setup Steps:

1. **Create a new GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on the next push

3. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

#### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist/ folder contains the production build
# You can deploy it using gh-pages or any static hosting service
```

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles & Tailwind config
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#E63946` | CTAs, accents, logo |
| Primary Green | `#70C05B` | Secondary CTAs, eco branding |
| Background | `#FFFFFF` | Main background |
| Light Gray | `#F8F9FA` | Section backgrounds |
| Text Dark | `#2D3436` | Body text |

---

## 📬 Contact Form (Netlify Forms)

The contact form is configured to work with **Netlify Forms** (free tier: 100 submissions/month).

### How it works:
1. Visitors fill out the form on your website
2. Netlify captures the submission automatically
3. You receive an email notification
4. View all submissions in your Netlify dashboard under **Forms**

### Setup:
- No additional configuration needed!
- The form has `data-netlify="true"` attribute
- Netlify automatically detects and processes form submissions
- Includes honeypot spam protection

### Enable Email Notifications:
1. Go to your Netlify site dashboard
2. Navigate to **Forms** → **Notifications**
3. Add your email: `agapyenergies@gmail.com`
4. You'll now receive email for every form submission!

---

## 📞 Contact

- **Location:** Zone 1A, Mutungo, Central - Kampala, Uganda
- **Phone:** +256 790 357 777 | +256 752 461 038
- **Email:** agapyenergies@gmail.com

---

## 📄 License

© 2026 Agapy Energies Ltd. All rights reserved.
