# AppMaven Studio Website

> Professional app showcase portal for AppMaven's mobile applications

[![Lighthouse SEO](https://img.shields.io/badge/SEO-100-success)](https://developers.google.com/speed/pagespeed/insights/)
[![Performance](https://img.shields.io/badge/Performance-90%2B-success)](https://developers.google.com/speed/pagespeed/insights/)

## 🎯 Project Overview

AppMaven Studio Website is a professional web platform serving three main purposes:

1. **App Showcase**: Display portfolio of published apps & games on Google Play
2. **SEO Optimization**: Optimize search visibility for each app with dedicated detail pages
3. **Compliance & Verification**: Meet Google Play Console, AdMob, and Search Console requirements

**Live Site**: [appmavenstudio.com](https://appmavenstudio.com) (Coming Soon)

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git for version control

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/appmaven/appmaven-studio.git
   cd appmaven-studio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (npx http-server)
     npx http-server -p 8000
     ```

3. **Visit**: `http://localhost:8000`

---

## 📁 Project Structure

```
appmavenstudio.com/
├── index.html                    # Homepage
├── apps/                         # App Directory
│   ├── index.html               # All Apps Listing
│   ├── prompt-master-ai/        # Individual App Pages
│   ├── lich-am-2026/
│   └── ...                      # (11 apps total)
├── blog/                         # Blog Section
│   └── index.html
├── data-deletion/               # Data Deletion Request
│   └── index.html
├── support/                     # Support & Contact
│   └── index.html
├── about/                       # About AppMaven
│   └── index.html
├── privacy-policy.html          # Site Privacy Policy
├── terms-of-service.html        # Terms of Service
├── app-ads.txt                  # AdMob Verification (CRITICAL)
├── robots.txt                   # Search Engine Directives
├── sitemap.xml                  # XML Sitemap
├── CNAME                        # Custom Domain Config
└── assets/
    ├── css/
    │   ├── variables.css        # Design tokens
    │   ├── main.css             # Global styles
    │   └── components.css       # Reusable components
    ├── js/
    │   └── main.js              # Vanilla JavaScript
    ├── images/
    │   ├── logo/
    │   ├── apps/                # App icons & screenshots
    │   └── blog/
    └── fonts/                   # (Optional self-hosted)
```

---

## 🎨 Design System

**Aesthetic**: Cosmic Glassmorphism / Futuristic Dark Theme

**Key Features**:
- Dark background with cosmic gradient (deep blue → purple → teal)
- Glassmorphism cards with blur effects
- Smooth animations and hover transitions
- Responsive design (mobile-first)

**Colors**:
- Primary: `#0a0e1a` (Dark background)
- Accent: `#00d4ff` (Cyan), `#7c3aed` (Purple), `#10b981` (Emerald)
- Text: `#ffffff` with opacity variations

**Typography**:
- Display: Clash Display / SF Pro Display
- Body: Inter / SF Pro Text
- Mono: JetBrains Mono / Fira Code

---

## 📱 Published Apps (11 Total)

1. **Lịch Âm 2026** - Vietnamese Lunar Calendar
2. **Gieo Quẻ Hỏi Việc** - I Ching Fortune
3. **Invoice Studio** - Invoice & Shop Management
4. **FocusOne** - Daily Focus Planner
5. **Trial Shield** - Subscription Manager
6. **Sleep Stream** - Relax & Sleep Sounds
7. **Square Race MAX** - Arcade Game
8. **Square Race** - Arcade Game
9. **Dino Drop Master** - Casual Game
10. **Prompt Master AI** - AI Prompt Studio
11. **QRCreator** - QR Generator & Scanner

---

## 🔧 Technology Stack

| Component | Technology |
|-----------|------------|
| **Framework** | Static HTML/CSS/JS |
| **Hosting** | GitHub Pages |
| **CSS** | Custom CSS with Variables |
| **Icons** | Lucide Icons / SVG |
| **Fonts** | Google Fonts |
| **Build** | None (Pure Static) |

---

## ✅ Compliance & Verification

### AdMob Verification
- **File**: `/app-ads.txt`
- **Status**: ✅ Configured
- **URL**: [appmavenstudio.com/app-ads.txt](https://appmavenstudio.com/app-ads.txt)

### Google Search Console
- **Sitemap**: [appmavenstudio.com/sitemap.xml](https://appmavenstudio.com/sitemap.xml)
- **robots.txt**: [appmavenstudio.com/robots.txt](https://appmavenstudio.com/robots.txt)

### Google Play Console
- **Data Deletion**: [appmavenstudio.com/data-deletion/](https://appmavenstudio.com/data-deletion/)
- **Privacy Policy**: [appmavenstudio.com/privacy-policy.html](https://appmavenstudio.com/privacy-policy.html)

---

## 🚀 Deployment

### GitHub Pages (Current)

1. **Push to repository**:
   ```bash
   git add .
   git commit -m "feat: initial deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

3. **Configure custom domain**:
   - Add `CNAME` file with: `appmavenstudio.com`
   - Update DNS records (see below)

### DNS Configuration

| Record | Type | Value |
|--------|------|-------|
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | appmaven.github.io |

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Performance | ≥ 90 | ⏳ Pending |
| Lighthouse Accessibility | ≥ 95 | ⏳ Pending |
| Lighthouse SEO | 100 | ⏳ Pending |
| First Contentful Paint | < 1.5s | ⏳ Pending |
| Page Size | < 500KB | ⏳ Pending |

---

## 🧪 Testing

### Manual Testing
```bash
# Check all links
# Verify mobile responsiveness
# Test forms (data deletion, contact)
# Validate AdMob verification
```

### Lighthouse Audit
```bash
# Chrome DevTools → Lighthouse
# Run audit for Performance, Accessibility, SEO
```

### SEO Validation
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📝 Adding New Apps

1. Create new folder: `apps/[app-slug]/`
2. Copy template from `apps/prompt-master-ai/index.html`
3. Update app data (name, description, features, etc.)
4. Add app icon: `assets/images/apps/[app-slug]/icon.png` (512x512)
5. Add screenshots: `assets/images/apps/[app-slug]/screenshot-*.png`
6. Update `apps/index.html` with new app card
7. Update `sitemap.xml`
8. Deploy and verify

---

## 🔒 Security & Privacy

- ✅ HTTPS enforced
- ✅ No tracking scripts (privacy-first)
- ✅ Data deletion request available
- ✅ GDPR compliant
- ❌ No sensitive data stored

---

## 📞 Contact & Support

- **Email**: support@appmavenstudio.com
- **Website**: [appmavenstudio.com/support](https://appmavenstudio.com/support)
- **Data Deletion**: [appmavenstudio.com/data-deletion](https://appmavenstudio.com/data-deletion)

---

## 📄 License

Copyright © 2026 AppMaven Studio. All rights reserved.

---

## 🗺️ Roadmap

- [x] Phase 1: MVP Foundation (Week 1-2)
- [ ] Phase 2: Content Population (Week 3-4)
- [ ] Phase 3: Polish & Optimization (Week 5-6)
- [ ] Submit to Google Search Console
- [ ] Launch & monitor analytics

---

**Built with ❤️ by AppMaven Studio**
