# PRD: AppMaven Studio - Developer Website & App Showcase Portal

## Document Information

| Field | Value |
|-------|-------|
| **Document Version** | 1.0 |
| **Last Updated** | January 25, 2026 |
| **Author** | AppMaven Development Team |
| **Status** | Draft |
| **Target Domain** | appmavenstudio.com |

---

## 1. Executive Summary

### 1.1 Project Overview

AppMaven Studio Website là một nền tảng web chuyên nghiệp phục vụ 3 mục tiêu chính:

1. **App Showcase**: Giới thiệu danh mục ứng dụng & game đã xuất bản trên Google Play
2. **SEO Optimization**: Tối ưu SEO cho từng ứng dụng với trang chi tiết riêng biệt
3. **Compliance & Verification**: Đáp ứng yêu cầu của Google Play Console, AdMob, và Search Console

### 1.2 Business Goals

| Goal | Priority | Success Metric |
|------|----------|----------------|
| Tăng organic traffic từ search engines | High | 500+ monthly visits trong 6 tháng |
| Xác thực AdMob thành công | Critical | app-ads.txt hoạt động 100% |
| Xác thực Google Search Console | Critical | Site được index đầy đủ |
| Data Safety compliance cho Google Play | Critical | Không còn warning "Invalid Link" |
| Branding & Trust building | Medium | Professional appearance |

### 1.3 Target Audience

- **Primary**: Người dùng tìm kiếm ứng dụng qua Google Search
- **Secondary**: Google Play Console reviewers
- **Tertiary**: Potential partners & advertisers

---

## 2. Current App Portfolio

### 2.1 Published Applications (Google Play)

| # | App Name | Category | Package Name (Estimated) | Has Privacy Policy |
|---|----------|----------|--------------------------|-------------------|
| 1 | Lịch Âm 2026 - Lịch Vạn Niên | Tools/Lifestyle | com.appmaven.licham2026 | ✅ Yes |
| 2 | Gieo Quẻ Hỏi Việc | Lifestyle | com.appmaven.gieoque | ✅ Yes |
| 3 | Tạo Hóa Đơn & Quản Lý Shop | Business | com.appmaven.invoicestudio | ✅ Yes |
| 4 | FocusOne: Daily Focus Planner | Productivity | com.appmaven.focusone | ✅ Yes |
| 5 | Trial Shield | Tools | com.appmaven.trialshield | ✅ Yes |
| 6 | Sleep Stream: Relax & Sleep | Health & Fitness | com.appmaven.sleepstream | ✅ Yes |
| 7 | Square Race MAX | Games/Arcade | com.appmaven.squareracemax | ✅ Yes |
| 8 | Square Race | Games/Arcade | com.appmaven.squarerace | ✅ Yes |
| 9 | Dino Drop Master | Games/Casual | com.appmaven.dinodrop | ✅ Yes |
| 10 | Prompt Master AI Prompt Studio | Tools/AI | com.appmaven.promptmaster | ✅ Yes |
| 11 | QRCreator: Generator & Scanner | Tools | com.appmaven.qrcreator | ✅ Yes |

> **Note**: Tất cả ứng dụng đã có Privacy Policy riêng trên Google Play → Website sẽ link đến các policy hiện có, không tạo mới.

---

## 3. Technical Requirements

### 3.1 Technology Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Framework** | Static HTML/CSS/JS | Zero server cost, fast deployment |
| **Hosting** | GitHub Pages / Cloudflare Pages | Free, CDN, HTTPS included |
| **CSS Framework** | Custom CSS với CSS Variables | Full control, no dependencies |
| **Fonts** | Google Fonts (self-hosted option) | Performance + Typography |
| **Icons** | Lucide Icons / Custom SVG | Consistent, lightweight |
| **Build Tool** | None (Static) hoặc 11ty (optional) | Simple, maintainable |

### 3.2 Performance Requirements

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | ≥ 90 | Chrome DevTools |
| Lighthouse Accessibility | ≥ 95 | Chrome DevTools |
| Lighthouse SEO | 100 | Chrome DevTools |
| First Contentful Paint | < 1.5s | WebPageTest |
| Time to Interactive | < 3s | WebPageTest |
| Page Size | < 500KB (excluding images) | - |

### 3.3 Browser Compatibility

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 90+ |
| Safari | 14+ |
| Firefox | 88+ |
| Edge | 90+ |
| Mobile Safari | iOS 14+ |
| Chrome Android | Latest |

---

## 4. Site Architecture

### 4.1 URL Structure

```
appmavenstudio.com/
├── index.html                    # Homepage - Portfolio Overview
├── apps/                         # App Directory
│   ├── index.html               # All Apps Listing
│   ├── lich-am-2026/            # App Detail Page
│   │   └── index.html
│   ├── gieo-que-hoi-viec/
│   │   └── index.html
│   ├── tao-hoa-don-quan-ly-shop/
│   │   └── index.html
│   ├── focusone-daily-planner/
│   │   └── index.html
│   ├── trial-shield/
│   │   └── index.html
│   ├── sleep-stream/
│   │   └── index.html
│   ├── square-race-max/
│   │   └── index.html
│   ├── square-race/
│   │   └── index.html
│   ├── dino-drop-master/
│   │   └── index.html
│   ├── prompt-master-ai/
│   │   └── index.html
│   └── qrcreator/
│       └── index.html
├── blog/                         # Blog Section (SEO Content)
│   ├── index.html               # Blog Listing
│   └── [article-slug]/
│       └── index.html
├── data-deletion/               # Data Deletion Request
│   └── index.html
├── support/                     # Support & Contact
│   └── index.html
├── about/                       # About AppMaven
│   └── index.html
├── privacy-policy.html          # Site-wide Privacy Policy
├── terms-of-service.html        # Terms of Service
├── app-ads.txt                  # AdMob Verification (CRITICAL)
├── ads.txt                      # AdSense Verification (if needed)
├── robots.txt                   # Search Engine Directives
├── sitemap.xml                  # Auto-generated Sitemap
└── assets/
    ├── css/
    │   ├── main.css
    │   ├── variables.css
    │   └── components.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── logo/
    │   ├── apps/
    │   │   ├── lich-am-2026/
    │   │   │   ├── icon.png
    │   │   │   ├── screenshot-1.png
    │   │   │   └── ...
    │   │   └── [other-apps]/
    │   └── blog/
    └── fonts/ (optional self-hosted)
```

### 4.2 Page Hierarchy

```
                    ┌─────────────────┐
                    │    Homepage     │
                    │   (index.html)  │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐
   │  Apps   │         │   Blog    │        │  Legal  │
   │ Listing │         │  Listing  │        │  Pages  │
   └────┬────┘         └─────┬─────┘        └────┬────┘
        │                    │                   │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────────────┐
   │App Detail│        │Blog Article│       │• Privacy Policy │
   │  Pages  │         │   Pages   │        │• Terms          │
   │  (x11)  │         │   (xN)    │        │• Data Deletion  │
   └─────────┘         └───────────┘        │• Support        │
                                            └─────────────────┘
```

---

## 5. Functional Requirements

### 5.1 Homepage (index.html)

#### 5.1.1 Hero Section

| Element | Requirement |
|---------|-------------|
| Headline | "Innovating the Future of Mobile Experience" hoặc tương tự |
| Subheadline | Brief description về AppMaven Studio |
| CTA Button | "View Portfolio" → scroll/link to app section |
| Background | Animated cosmic/glassmorphism effect |

#### 5.1.2 Featured Apps Section

| Element | Requirement |
|---------|-------------|
| Layout | Grid 4 columns (desktop), 2 columns (tablet), 1 column (mobile) |
| App Card | Icon + Name + Short description + Store badges |
| Featured Logic | Manually select 4-6 featured apps |
| Link | Each card links to app detail page |

#### 5.1.3 Trust & Compliance Section

| Element | Requirement |
|---------|-------------|
| Title | "Trust & Privacy" |
| Items | Data Safety badge, SEO compliance badge, Support info |
| Links | Privacy Policy, Data Deletion, Support |

#### 5.1.4 Navigation Header

| Element | Desktop | Mobile |
|---------|---------|--------|
| Logo | Left aligned | Left aligned |
| Menu Items | Home, Apps, Blog, About, Support | Hamburger menu |
| CTA | Contact/Data Deletion | In hamburger |

#### 5.1.5 Footer

| Column 1 | Column 2 | Column 3 | Column 4 |
|----------|----------|----------|----------|
| Logo + Tagline | Quick Links | Legal | Social |
| © 2026 AppMaven | Home, Apps, Blog | Privacy, Terms, Data Deletion | GitHub, Email |

### 5.2 Apps Listing Page (/apps/)

#### 5.2.1 Requirements

| Feature | Description |
|---------|-------------|
| Title | "Our Apps & Games" |
| Filter Tabs | All, Apps, Games |
| Grid Layout | Responsive grid với app cards |
| App Card | Icon, Name, Category badge, Short desc, Store link |
| Sorting | By date published (default), alphabetical |

#### 5.2.2 SEO Elements

```html
<title>Mobile Apps & Games | AppMaven Studio</title>
<meta name="description" content="Explore our collection of high-quality mobile applications and games. Download free apps for Android including productivity tools, lifestyle apps, and casual games.">
```

### 5.3 App Detail Page Template (/apps/[slug]/)

#### 5.3.1 Page Structure

```
┌────────────────────────────────────────────────────────┐
│                     HEADER/NAV                         │
├────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │              APP HERO SECTION                   │   │
│  │  [Icon]  App Name                               │   │
│  │          Tagline / Short Description            │   │
│  │          [App Store] [Google Play]              │   │
│  └─────────────────────────────────────────────────┘   │
├───────────────────────┬────────────────────────────────┤
│                       │                                │
│    MAIN CONTENT       │      SIDEBAR                   │
│                       │                                │
│  ┌─────────────────┐  │  ┌──────────────────────────┐  │
│  │   Overview      │  │  │  Data Safety & Privacy   │  │
│  │   (Description) │  │  │  • Privacy Policy Link   │  │
│  └─────────────────┘  │  │  • Data Deletion Link    │  │
│                       │  └──────────────────────────┘  │
│  ┌─────────────────┐  │                                │
│  │  Key Features   │  │  ┌──────────────────────────┐  │
│  │  (Bullet list)  │  │  │  App Info                │  │
│  └─────────────────┘  │  │  • Version               │  │
│                       │  │  • Category              │  │
│  ┌─────────────────┐  │  │  • Size                  │  │
│  │  Screenshots    │  │  │  • Updated              │  │
│  │  (Carousel)     │  │  └──────────────────────────┘  │
│  └─────────────────┘  │                                │
│                       │                                │
│  ┌─────────────────┐  │                                │
│  │      FAQ        │  │                                │
│  │  (Accordion)    │  │                                │
│  └─────────────────┘  │                                │
│                       │                                │
├───────────────────────┴────────────────────────────────┤
│                       FOOTER                           │
└────────────────────────────────────────────────────────┘
```

#### 5.3.2 Required Data Fields (Template Variables)

```javascript
const appData = {
  // Basic Info
  slug: "prompt-master-ai",
  name: "Prompt Master AI",
  tagline: "Unlock your creative potential with advanced AI prompts",
  category: "Tools", // Tools, Games, Productivity, Lifestyle, etc.
  categoryBadgeColor: "#4CAF50",
  
  // Store Links
  googlePlayUrl: "https://play.google.com/store/apps/details?id=xxx",
  appStoreUrl: null, // or URL if available
  
  // Description
  overviewHtml: "<p>Detailed description...</p>",
  
  // Features (array)
  features: [
    { icon: "sparkles", title: "AI-Powered Prompts", description: "Generate tailored suggestions" },
    { icon: "sync", title: "Cross-Platform Sync", description: "Access on any device" },
    // ...
  ],
  
  // Screenshots (array of URLs)
  screenshots: [
    "/assets/images/apps/prompt-master-ai/screenshot-1.png",
    "/assets/images/apps/prompt-master-ai/screenshot-2.png",
  ],
  
  // FAQ (array)
  faqs: [
    { question: "How does the AI model work?", answer: "..." },
    { question: "Is my data secure?", answer: "..." },
  ],
  
  // Meta Info
  version: "1.2.3",
  size: "15 MB",
  lastUpdated: "2026-01-15",
  minAndroid: "7.0+",
  
  // SEO
  metaTitle: "Prompt Master AI - AI Prompt Generator | AppMaven",
  metaDescription: "Generate high-quality AI prompts for writing, coding, and image generation. Free download for Android.",
  keywords: ["ai prompt generator", "chatgpt prompts", "midjourney prompts"],
  
  // Legal (links to existing policies)
  privacyPolicyUrl: "https://play.google.com/.../privacy", // existing Google Play link
  
  // Schema.org data
  schemaRating: null, // or { value: 4.5, count: 120 }
}
```

#### 5.3.3 SEO Requirements per App Page

| Element | Requirement |
|---------|-------------|
| URL | `/apps/[slug]/` (clean, no .html) |
| Title Tag | `{App Name} - {Tagline} | AppMaven` (50-60 chars) |
| Meta Description | Unique, 150-160 chars, include main keyword |
| H1 | App Name (only 1 per page) |
| H2 | Section headings: Overview, Features, Screenshots, FAQ |
| Schema.org | `SoftwareApplication` JSON-LD |
| Canonical | Self-referencing canonical URL |
| Open Graph | og:title, og:description, og:image (app icon) |
| Twitter Card | summary_large_image |

#### 5.3.4 Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Prompt Master AI",
  "operatingSystem": "Android",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "120"
  },
  "author": {
    "@type": "Organization",
    "name": "AppMaven Studio"
  }
}
```

### 5.4 Blog Section (/blog/)

#### 5.4.1 Blog Listing Page

| Element | Requirement |
|---------|-------------|
| Title | "Blog - Insights on App Development & AI" |
| Filter | Category tabs: All, AI, App Dev, News, Tutorials |
| Article Card | Featured image, Title, Date, Author, Excerpt |
| Pagination | 6 articles per page, numbered pagination |

#### 5.4.2 Blog Article Template

| Section | Content |
|---------|---------|
| Header | Title (H1), Date, Author, Category badge, Reading time |
| Featured Image | Full-width hero image |
| Content | Markdown-rendered HTML với proper headings |
| Author Bio | Avatar, name, short bio |
| Related Posts | 3 related articles |
| Social Share | Facebook, Twitter, LinkedIn, Copy link |

#### 5.4.3 Blog Article Data Schema

```javascript
const articleData = {
  slug: "seo-strategies-mobile-apps-2026",
  title: "SEO Strategies for Mobile App Visibility in 2026",
  excerpt: "Learn how to optimize your app's discoverability...",
  content: "<!-- HTML content -->",
  featuredImage: "/assets/images/blog/seo-strategies.jpg",
  category: "App Dev",
  tags: ["SEO", "ASO", "Mobile Apps"],
  author: {
    name: "Duong Cong Ha",
    avatar: "/assets/images/author.jpg",
    bio: "Founder of AppMaven Studio"
  },
  publishedDate: "2026-01-20",
  updatedDate: "2026-01-22",
  readingTime: "5 min",
  
  // SEO
  metaTitle: "SEO Strategies for Mobile Apps in 2026 | AppMaven Blog",
  metaDescription: "Discover the latest SEO techniques...",
  
  // Schema
  schemaType: "Article"
}
```

### 5.5 Data Deletion Page (/data-deletion/)

#### 5.5.1 Requirements

| Element | Requirement |
|---------|-------------|
| URL | `/data-deletion/` (cũng support `/data-deletion.html` redirect) |
| Title | "Data Deletion Request" |
| Purpose | Allow users to request deletion of their data |

#### 5.5.2 Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| App Name | Select dropdown | Yes | Must select from list |
| Email | Email input | Yes | Valid email format |
| User ID (optional) | Text | No | - |
| Request Type | Radio | Yes | "Delete all data" / "Delete specific data" |
| Additional Info | Textarea | No | Max 500 chars |
| Consent | Checkbox | Yes | Must check |

#### 5.5.3 Submission Handling

**Option A (MVP - mailto):**
```javascript
// Generate mailto link with prefilled content
const mailtoLink = `mailto:support@appmavenstudio.com?subject=Data Deletion Request - ${appName}&body=${encodedBody}`;
```

**Option B (Serverless):**
```javascript
// POST to Cloudflare Worker / Netlify Function
fetch('/api/data-deletion', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

#### 5.5.4 Legal Text Required

```
By submitting this request, you confirm that:
• You are the owner of the account/data in question
• You understand this action is irreversible
• AppMaven Studio will process your request within 30 days
• Some data may be retained for legal/compliance purposes

For immediate concerns, contact: support@appmavenstudio.com
```

### 5.6 Support Page (/support/)

| Section | Content |
|---------|---------|
| Title | "Support & Contact" |
| FAQ | General FAQs about apps |
| Contact Form | Name, Email, App (dropdown), Message |
| Email | support@appmavenstudio.com |
| Response Time | "We typically respond within 24-48 hours" |

### 5.7 Legal Pages

#### 5.7.1 Privacy Policy (/privacy-policy.html)

Site-wide privacy policy covering:
- What data the website collects (analytics, cookies)
- How data is used
- Third-party services (Google Analytics, etc.)
- Contact information
- Links to individual app privacy policies

#### 5.7.2 Terms of Service (/terms-of-service.html)

- Acceptable use
- Intellectual property
- Limitation of liability
- Governing law
- Contact information

---

## 6. Compliance & Verification Files

### 6.1 app-ads.txt (CRITICAL for AdMob)

**Location**: `/app-ads.txt` (root directory)

**Content Format**:
```
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

**Requirements**:
- Must return HTTP 200 OK
- Must be publicly accessible
- Must contain valid AdMob publisher ID
- No robots.txt blocking

**Acceptance Criteria**:
```
✅ GET https://appmavenstudio.com/app-ads.txt returns 200
✅ Content-Type: text/plain
✅ Contains valid pub-ID
✅ AdMob verification passes
```

### 6.2 ads.txt (If using AdSense on website)

**Location**: `/ads.txt` (root directory)

**Content**: Same format as app-ads.txt for web ads

### 6.3 robots.txt

**Location**: `/robots.txt`

```
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://appmavenstudio.com/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1
```

### 6.4 sitemap.xml

**Location**: `/sitemap.xml`

**Auto-generated content**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://appmavenstudio.com/</loc>
    <lastmod>2026-01-25</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://appmavenstudio.com/apps/</loc>
    <lastmod>2026-01-25</lastmod>
    <priority>0.9</priority>
  </url>
  <!-- App pages -->
  <url>
    <loc>https://appmavenstudio.com/apps/prompt-master-ai/</loc>
    <lastmod>2026-01-20</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- ... more app pages -->
  <!-- Blog pages -->
  <url>
    <loc>https://appmavenstudio.com/blog/</loc>
    <lastmod>2026-01-25</lastmod>
    <priority>0.7</priority>
  </url>
  <!-- Legal pages -->
  <url>
    <loc>https://appmavenstudio.com/privacy-policy.html</loc>
    <lastmod>2026-01-01</lastmod>
    <priority>0.3</priority>
  </url>
</urlset>
```

### 6.5 Google Search Console Verification

**Support 3 methods**:

1. **HTML File Method**:
   - Place `googleXXXXXXXXXXXXXXXX.html` at root
   - Returns 200 OK with Google verification content

2. **Meta Tag Method**:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXX">
   ```

3. **DNS Method**: (Handled by domain registrar)

---

## 7. Design Specifications

### 7.1 Design Direction

**Aesthetic**: Cosmic Glassmorphism / Futuristic Dark Theme

**Inspiration**: Dựa trên các mẫu thiết kế được cung cấp (Images 2-4)

**Key Characteristics**:
- Dark background với cosmic gradient (deep blue → purple → teal accents)
- Glassmorphism cards với blur effect và subtle borders
- Futuristic, professional feel
- Particle/star effects trong background
- Smooth animations và hover effects

### 7.2 Color Palette

```css
:root {
  /* Primary Colors */
  --color-bg-primary: #0a0e1a;
  --color-bg-secondary: #0f1628;
  --color-bg-card: rgba(15, 25, 50, 0.6);
  
  /* Accent Colors */
  --color-accent-primary: #00d4ff; /* Cyan */
  --color-accent-secondary: #7c3aed; /* Purple */
  --color-accent-tertiary: #10b981; /* Emerald */
  
  /* Text Colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-text-muted: rgba(255, 255, 255, 0.5);
  
  /* Glass Effect */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 12px;
  
  /* Gradients */
  --gradient-cosmic: linear-gradient(135deg, #0a0e1a 0%, #1a1f3a 50%, #0f1628 100%);
  --gradient-accent: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  
  /* Shadows */
  --shadow-glow: 0 0 40px rgba(0, 212, 255, 0.15);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### 7.3 Typography

```css
:root {
  /* Font Families */
  --font-display: 'Clash Display', 'SF Pro Display', system-ui;
  --font-body: 'Inter', 'SF Pro Text', system-ui;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### 7.4 Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 7.5 Component Specifications

#### 7.5.1 Glassmorphism Card

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}
```

#### 7.5.2 App Card

**Desktop (Grid Item)**:
- Width: 280px min
- Padding: 24px
- Icon size: 64x64px
- Border radius: 16px
- Store badges: 120x40px

**Mobile**:
- Full width với padding
- Icon size: 56x56px
- Stack layout

#### 7.5.3 Navigation

**Desktop**:
- Fixed header, 64px height
- Logo left, menu center/right
- Glass effect background

**Mobile**:
- Hamburger menu icon
- Full-screen overlay menu
- Slide-in animation

#### 7.5.4 Buttons

```css
.btn-primary {
  background: var(--gradient-accent);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
}
```

### 7.6 Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### 7.7 Animation Specifications

```css
/* Page load animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger delay classes */
.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }

/* Background particle effect */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

---

## 8. Accessibility Requirements

### 8.1 WCAG 2.1 AA Compliance

| Requirement | Implementation |
|-------------|----------------|
| Color Contrast | Minimum 4.5:1 for normal text, 3:1 for large text |
| Keyboard Navigation | All interactive elements focusable |
| Focus Indicators | Visible focus rings |
| Alt Text | All images have descriptive alt text |
| ARIA Labels | Navigation, buttons, form elements |
| Skip Links | "Skip to main content" link |
| Form Labels | All inputs have associated labels |
| Error Messages | Clear, descriptive error states |

### 8.2 Screen Reader Support

```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none"><a role="menuitem" href="/">Home</a></li>
  </ul>
</nav>

<!-- App cards -->
<article aria-labelledby="app-title-1">
  <h3 id="app-title-1">Prompt Master AI</h3>
  <p>Description...</p>
  <a href="..." aria-label="Download Prompt Master AI on Google Play">
    Google Play
  </a>
</article>
```

---

## 9. SEO Strategy

### 9.1 On-Page SEO Checklist

| Element | Requirement |
|---------|-------------|
| Title Tag | Unique per page, 50-60 chars, keyword at start |
| Meta Description | Unique, 150-160 chars, include CTA |
| H1 Tag | One per page, contains primary keyword |
| H2-H6 Tags | Proper hierarchy, descriptive |
| URL Structure | Clean, lowercase, hyphens, keyword-rich |
| Internal Linking | Link between related pages |
| External Linking | Link to authoritative sources |
| Image Optimization | Compressed, lazy-loaded, descriptive filenames |
| Mobile Friendly | Responsive design, tap targets ≥44px |
| Page Speed | < 3s load time |

### 9.2 Structured Data (Schema.org)

**Homepage**: Organization, WebSite
**App Pages**: SoftwareApplication
**Blog Articles**: Article, BreadcrumbList
**FAQ Sections**: FAQPage

### 9.3 Content Strategy

**App Pages**:
- Unique description (not copied from Play Store)
- Feature highlights
- FAQ với relevant questions
- User benefits

**Blog Topics**:
- App tutorials & guides
- Android development tips
- AI & technology trends
- Company news & updates

---

## 10. Implementation Phases

### Phase 1: MVP (Week 1-2)

**Priority: Google Play Compliance + Basic SEO**

| Task | Priority | Est. Hours |
|------|----------|------------|
| Setup repository & hosting | Critical | 2h |
| Create base HTML structure | Critical | 4h |
| Implement CSS design system | Critical | 8h |
| Homepage (index.html) | Critical | 6h |
| App listing page (/apps/) | Critical | 4h |
| App detail page template | Critical | 8h |
| Data deletion page | Critical | 4h |
| app-ads.txt, robots.txt, sitemap.xml | Critical | 2h |
| Privacy policy page | High | 2h |
| Mobile responsiveness | High | 6h |
| Basic JavaScript (navigation, forms) | High | 4h |

**Total Phase 1**: ~50 hours

### Phase 2: Content & SEO (Week 3-4)

| Task | Priority | Est. Hours |
|------|----------|------------|
| Create all 11 app detail pages | High | 16h |
| Blog listing page | Medium | 4h |
| Blog article template | Medium | 4h |
| 3-5 initial blog articles | Medium | 10h |
| Support page | Medium | 2h |
| About page | Low | 2h |
| Terms of service | Low | 2h |
| Search Console verification | High | 1h |
| Submit sitemap | High | 1h |

**Total Phase 2**: ~42 hours

### Phase 3: Enhancement (Week 5-6)

| Task | Priority | Est. Hours |
|------|----------|------------|
| Animation polish | Medium | 8h |
| Performance optimization | High | 4h |
| Lighthouse audit & fixes | High | 4h |
| Cross-browser testing | High | 4h |
| Add more blog content | Medium | 10h |
| Social share functionality | Low | 2h |
| Newsletter signup (optional) | Low | 4h |

**Total Phase 3**: ~36 hours

---

## 11. Testing & QA

### 11.1 Functional Testing

| Test Case | Expected Result |
|-----------|-----------------|
| Homepage loads | All sections visible, no console errors |
| App cards link correctly | Navigate to app detail page |
| Mobile menu works | Opens/closes, links function |
| Data deletion form submits | Shows success message or opens email |
| App Store badges link correctly | Open correct Play Store pages |
| All images load | No broken images |
| Navigation works on all pages | Correct active states |

### 11.2 SEO Testing

| Test | Tool | Target |
|------|------|--------|
| Lighthouse SEO | Chrome DevTools | 100 |
| Mobile-friendly | Google Mobile Test | Pass |
| Structured data | Google Rich Results Test | No errors |
| sitemap.xml | XML Sitemap Validator | Valid |
| robots.txt | Google Robots Test | No issues |

### 11.3 Performance Testing

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | WebPageTest |
| FID | < 100ms | WebPageTest |
| CLS | < 0.1 | WebPageTest |
| Page size | < 1MB | DevTools |

### 11.4 Accessibility Testing

| Test | Tool | Target |
|------|------|--------|
| WAVE errors | WAVE Extension | 0 errors |
| Lighthouse A11y | Chrome DevTools | ≥ 95 |
| Keyboard navigation | Manual | All elements accessible |
| Color contrast | WebAIM Contrast Checker | 4.5:1 minimum |

---

## 12. Deployment & Hosting

### 12.1 Recommended: GitHub Pages

**Pros**:
- Free hosting
- Free SSL/HTTPS
- Custom domain support
- Git-based deployment

**Setup**:
1. Create repository: `appmaven-studio`
2. Enable GitHub Pages in Settings
3. Configure custom domain: `appmavenstudio.com`
4. Add CNAME file with domain

### 12.2 Alternative: Cloudflare Pages

**Pros**:
- Better global CDN
- Serverless functions (for contact form)
- Free tier generous

### 12.3 Domain Configuration

| Record | Type | Value |
|--------|------|-------|
| @ | A | GitHub Pages IP (185.199.108.153) |
| www | CNAME | appmaven.github.io |

---

## 13. Maintenance & Updates

### 13.1 Regular Tasks

| Task | Frequency |
|------|-----------|
| Add new blog articles | Weekly/Bi-weekly |
| Update app information | As needed |
| Check broken links | Monthly |
| Review Search Console | Weekly |
| Update sitemap | Auto on deploy |

### 13.2 Adding New Apps

**Process**:
1. Create new folder: `/apps/[new-app-slug]/`
2. Copy template and fill in data
3. Add app icon and screenshots to `/assets/images/apps/`
4. Update `/apps/index.html` with new card
5. Update Homepage featured apps (if applicable)
6. Update sitemap.xml
7. Deploy and verify

---

## 14. Success Metrics

### 14.1 Technical KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| app-ads.txt verification | Pass | AdMob Console |
| Search Console verification | Pass | Search Console |
| Lighthouse Performance | ≥ 90 | DevTools |
| Lighthouse SEO | 100 | DevTools |
| Zero console errors | Pass | DevTools |

### 14.2 Business KPIs

| Metric | 1 Month | 3 Months | 6 Months |
|--------|---------|----------|----------|
| Organic traffic | 100 visits | 300 visits | 500+ visits |
| Indexed pages | All pages | All pages | All pages |
| Google Play warnings | 0 | 0 | 0 |
| AdMob status | Verified | Verified | Verified |

---

## 15. Appendix

### 15.1 App Slug Reference

| App Name | URL Slug |
|----------|----------|
| Lịch Âm 2026 - Lịch Vạn Niên | lich-am-2026 |
| Gieo Quẻ Hỏi Việc | gieo-que-hoi-viec |
| Tạo Hóa Đơn & Quản Lý Shop | invoice-studio |
| FocusOne: Daily Focus Planner | focusone |
| Trial Shield | trial-shield |
| Sleep Stream: Relax & Sleep | sleep-stream |
| Square Race MAX | square-race-max |
| Square Race | square-race |
| Dino Drop Master | dino-drop-master |
| Prompt Master AI Prompt Studio | prompt-master-ai |
| QRCreator: Generator & Scanner | qrcreator |

### 15.2 Image Requirements

| Image Type | Dimensions | Format | Max Size |
|------------|------------|--------|----------|
| App Icon | 512x512px | PNG | 100KB |
| Screenshot | 1080x1920px (9:16) | PNG/WebP | 200KB |
| Blog Featured | 1200x630px | JPG/WebP | 150KB |
| Logo | SVG preferred | SVG/PNG | 20KB |

### 15.3 Content Checklist per App Page

- [ ] App icon (512x512)
- [ ] App name
- [ ] Tagline (1 sentence)
- [ ] Overview description (2-3 paragraphs)
- [ ] 4-6 key features with icons
- [ ] 3-5 screenshots
- [ ] 3-5 FAQ items
- [ ] Version number
- [ ] Category
- [ ] Google Play URL
- [ ] Privacy Policy URL (from Play Store)
- [ ] Meta title (SEO)
- [ ] Meta description (SEO)

---

## 16. Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-25 | AppMaven | Initial PRD creation |

---

**END OF DOCUMENT**
