# AppMaven Studio - Local Testing Checklist

**Server Running:** http://localhost:8000
**Started:** 2026-01-25
**Status:** ✅ Active

---

## 🚀 Quick Start

Your local server is now running! Open your browser and visit:

**🌐 http://localhost:8000**

---

## ✅ Testing Checklist

### 1. Homepage Tests (http://localhost:8000/)

- [ ] **Visual Check**
  - [ ] Cosmic background with particle effects visible
  - [ ] Navigation bar displays correctly (logo + menu items)
  - [ ] Hero section with gradient title "Innovating the Future..."
  - [ ] Featured apps grid shows 4 app cards
  - [ ] Trust & Compliance section with 3 cards
  - [ ] Stats section with 4 metrics (11+, 10K+, 4.5+, 100%)
  - [ ] Footer displays with all columns

- [ ] **Responsive Check (Mobile)**
  - [ ] Resize browser to mobile size (< 768px width)
  - [ ] Hamburger menu icon appears
  - [ ] Click hamburger → menu slides in
  - [ ] App cards stack vertically (1 column)
  - [ ] All sections readable on mobile

- [ ] **Interactions**
  - [ ] Hover over app cards → card lifts up
  - [ ] Click "View Portfolio" button → navigates to /apps/
  - [ ] Click navigation links → correct pages load
  - [ ] All links work (no 404 errors)

---

### 2. Apps Listing Page (http://localhost:8000/apps/)

- [ ] **Visual Check**
  - [ ] Page header "Our Apps & Games"
  - [ ] Filter tabs visible (All Apps, Tools, Games, Productivity, Lifestyle)
  - [ ] Grid displays all 11 app cards
  - [ ] Each card shows: icon, badge, name, description, Play Store badge
  - [ ] Cards have glassmorphism effect

- [ ] **Filter Functionality**
  - [ ] Click "All Apps (11)" → all 11 cards visible
  - [ ] Click "Tools" → only tools apps show (Prompt Master AI, Trial Shield, QRCreator)
  - [ ] Click "Games" → only games show (Square Race MAX, Square Race, Dino Drop Master)
  - [ ] Click "Productivity" → only FocusOne shows
  - [ ] Click "Lifestyle" → Lịch Âm, Gieo Quẻ show

- [ ] **Navigation**
  - [ ] Click any app card → navigates to app detail page
  - [ ] Active tab highlights correctly

---

### 3. App Detail Page (http://localhost:8000/apps/prompt-master-ai/)

- [ ] **Visual Check**
  - [ ] Large app icon (120x120px) at top
  - [ ] App name "Prompt Master AI" as H1
  - [ ] "Tools" badge displayed
  - [ ] Download button visible
  - [ ] Main content + Sidebar layout (2 columns on desktop)

- [ ] **Content Sections**
  - [ ] Overview section with description paragraphs
  - [ ] Key Features grid with 6 feature cards (icons + text)
  - [ ] Screenshots section with 3 placeholder images
  - [ ] FAQ accordion with 5 questions

- [ ] **Sidebar**
  - [ ] "Data Safety & Privacy" card with links
  - [ ] "App Information" card with version, category, etc.
  - [ ] Download CTA card with gradient background

- [ ] **Interactions**
  - [ ] Click FAQ questions → answers expand/collapse
  - [ ] Only one FAQ open at a time
  - [ ] Hover over feature cards → highlight effect
  - [ ] Click "View Privacy Policy" → link works
  - [ ] Click "Request Data Deletion" → navigates to /data-deletion/

---

### 4. Data Deletion Page (http://localhost:8000/data-deletion/)

- [ ] **Visual Check**
  - [ ] Page header with 🗑️ icon
  - [ ] Legal notice box with orange background
  - [ ] Form with all fields visible
  - [ ] FAQ section below form

- [ ] **Form Fields**
  - [ ] App dropdown with all 11 apps + "Other"
  - [ ] Email input field
  - [ ] User ID input (optional)
  - [ ] Request type radio buttons (2 options)
  - [ ] Additional info textarea
  - [ ] Consent checkbox
  - [ ] Submit button

- [ ] **Form Validation**
  - [ ] Try submitting empty form → errors show
  - [ ] Enter invalid email → error shows
  - [ ] Submit without checking consent → error shows
  - [ ] Fill all required fields + check consent → mailto link opens

- [ ] **FAQ Accordion**
  - [ ] All 5 FAQ questions clickable
  - [ ] Answers expand/collapse correctly

---

### 5. Support Page (http://localhost:8000/support/)

- [ ] **Visual Check**
  - [ ] Page header with 💬 icon
  - [ ] 3 support option cards (Email, FAQs, Data Deletion)
  - [ ] Contact form below
  - [ ] FAQ sections: General, Privacy & Data, Account & Purchases

- [ ] **Support Cards**
  - [ ] Click "support@appmavenstudio.com" → opens email client
  - [ ] Click "Browse FAQs" → scrolls to FAQ section
  - [ ] Click "Submit Request" → navigates to /data-deletion/

- [ ] **Contact Form**
  - [ ] Name, Email, App dropdown, Message fields visible
  - [ ] Submit empty form → validation errors
  - [ ] Fill all fields → mailto link opens
  - [ ] Response time notice shows "24-48 hours"

- [ ] **FAQs**
  - [ ] 3 sections visible (General, Privacy, Account)
  - [ ] Total ~12 FAQ items
  - [ ] All clickable and expandable
  - [ ] Links within answers work (e.g., to /apps/, /privacy-policy.html)

---

### 6. Privacy Policy (http://localhost:8000/privacy-policy.html)

- [ ] **Visual Check**
  - [ ] Page header with 🔒 icon
  - [ ] Effective date notice
  - [ ] All 13 sections visible
  - [ ] Proper typography and spacing

- [ ] **Content Check**
  - [ ] Table of contents scrollable (if implemented)
  - [ ] All headings (H2) have proper spacing
  - [ ] Links to individual app pages work
  - [ ] Contact email link works

- [ ] **Navigation**
  - [ ] Scroll to different sections smoothly
  - [ ] All internal links functional

---

### 7. Navigation & Header (All Pages)

- [ ] **Desktop Navigation**
  - [ ] Logo visible and clickable → returns to homepage
  - [ ] Menu items: Home, Apps, Blog, About, Support
  - [ ] Active page highlighted
  - [ ] Hover effects work
  - [ ] Glass effect background

- [ ] **Mobile Navigation**
  - [ ] Resize to mobile (< 768px)
  - [ ] Hamburger icon appears
  - [ ] Click hamburger → menu slides in from top
  - [ ] Click menu item → menu closes automatically
  - [ ] Press ESC key → menu closes

- [ ] **Scroll Behavior**
  - [ ] Scroll down → navbar adds shadow
  - [ ] Navbar stays fixed at top
  - [ ] Glass blur effect visible

---

### 8. Footer (All Pages)

- [ ] **Visual Check**
  - [ ] 4 columns: Brand, Quick Links, Legal, Contact
  - [ ] Logo and tagline in Brand column
  - [ ] Copyright "© 2026 AppMaven Studio"

- [ ] **Links Check**
  - [ ] All Quick Links work (Home, Apps, Blog, About, Support)
  - [ ] All Legal links work (Privacy, Terms, Data Deletion)
  - [ ] Email link opens: support@appmavenstudio.com
  - [ ] GitHub link works (if available)

---

### 9. Compliance Files

- [ ] **app-ads.txt**
  - [ ] Visit: http://localhost:8000/app-ads.txt
  - [ ] Returns plain text (not 404)
  - [ ] Contains: `google.com, pub-0000000000000000, DIRECT`
  - [ ] Note: Placeholder pub-ID needs replacement for production

- [ ] **robots.txt**
  - [ ] Visit: http://localhost:8000/robots.txt
  - [ ] Returns plain text
  - [ ] Contains: `User-agent: *`, `Allow: /`
  - [ ] Contains sitemap URL

- [ ] **sitemap.xml**
  - [ ] Visit: http://localhost:8000/sitemap.xml
  - [ ] Returns XML (browser may render as tree)
  - [ ] Contains all 11 app URLs
  - [ ] Contains homepage, apps listing, blog, legal pages

---

### 10. Browser Console (No Errors)

- [ ] **Check Console**
  - [ ] Open browser DevTools (F12)
  - [ ] Go to Console tab
  - [ ] Refresh homepage → no red errors
  - [ ] Navigate to all pages → no console errors
  - [ ] Check for 404 errors (missing images, CSS, JS)

- [ ] **Expected Console Messages**
  - [ ] Should see: "🚀 AppMaven Studio" branding message
  - [ ] Should see: "Building innovative mobile experiences with ❤️"

---

### 11. Performance & Responsiveness

- [ ] **Page Load Speed**
  - [ ] Homepage loads in < 2 seconds
  - [ ] No FOUC (Flash of Unstyled Content)
  - [ ] CSS loads before content renders

- [ ] **Responsive Breakpoints**
  - [ ] Test at widths: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)
  - [ ] Grid layouts adjust correctly
  - [ ] Images scale proportionally
  - [ ] No horizontal scrollbar

- [ ] **Animations**
  - [ ] Cosmic background particles floating
  - [ ] Page elements fade in on load (fadeInUp animation)
  - [ ] Card hover effects smooth
  - [ ] Transitions feel polished (not laggy)

---

### 12. Accessibility

- [ ] **Keyboard Navigation**
  - [ ] Press Tab → focuses move through interactive elements
  - [ ] Focus indicators visible (blue outline)
  - [ ] Can navigate entire site with keyboard only
  - [ ] Enter key activates buttons/links

- [ ] **Screen Reader (Optional)**
  - [ ] Skip to main content link works
  - [ ] All images have alt text
  - [ ] Form labels associated with inputs
  - [ ] ARIA labels on navigation

---

## 🐛 Issues Found

Use this section to note any bugs or issues:

### High Priority
- [ ] Issue 1: _________________________
- [ ] Issue 2: _________________________

### Medium Priority
- [ ] Issue 1: _________________________

### Low Priority / Nice-to-Have
- [ ] Issue 1: _________________________

---

## 📝 Notes

- **Server:** Python HTTP server on port 8000
- **Browser Tested:** _________________________
- **Screen Resolution:** _________________________
- **Date Tested:** _________________________

---

## ✅ Sign-Off

- [ ] All critical tests passed
- [ ] No blocking issues found
- [ ] Ready for deployment / Phase 2

**Tested By:** _________________________
**Date:** _________________________

---

## 🔧 Stopping the Server

When done testing, stop the server:

```bash
# Find the process
netstat -ano | findstr :8000

# Or just close the terminal/command prompt window
```

---

**Built with ❤️ by AppMaven Studio + Claude Sonnet 4.5**
