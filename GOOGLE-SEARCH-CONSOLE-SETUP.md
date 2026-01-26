# Google Search Console Setup Guide

## Overview

Google Search Console (GSC) is essential for:
- Monitoring site performance in Google Search
- Submitting sitemaps
- Identifying and fixing indexing issues
- Tracking search queries and impressions
- Receiving security alerts

---

## Setup Steps

### 1. Access Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **Add Property**

### 2. Add Your Website

Choose **URL prefix** method:
- Enter: `https://appmavenstudio.com`
- Click **Continue**

---

## Verification Methods

Google will ask you to verify ownership. You have several options:

### Option A: HTML File Upload (Recommended for Static Sites)

1. **Download verification file**
   - Google will provide a file like `googleXXXXXXXXXXXXXXXX.html`

2. **Upload to root directory**
   - Place the file in: `E:\Web\AppMaven\`
   - Ensure it's accessible at: `https://appmavenstudio.com/googleXXXXXXXXXXXXXXXX.html`

3. **Verify**
   - Click **Verify** in Search Console
   - Keep the file on your server permanently

4. **Commit and deploy**
   ```bash
   git add googleXXXXXXXXXXXXXXXX.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```

### Option B: HTML Meta Tag (Alternative)

1. **Get meta tag from Google**
   - Example: `<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXX" />`

2. **Add to all pages' `<head>` section**
   - Open `index.html`
   - Add the meta tag after the viewport meta tag:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXX">
   ```

3. **Repeat for key pages** (or use a template/include if available)
   - `index.html`
   - `apps/index.html`
   - `blog/index.html`
   - `about/index.html`

4. **Verify in Search Console**

---

## Post-Verification Tasks

### 1. Submit Sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://appmavenstudio.com/sitemap.xml`
3. Click **Submit**
4. Google will start crawling your site

### 2. Configure Settings

#### a. Set Preferred Domain (if needed)
- Usually not needed for URL prefix properties
- Ensure HTTPS is working properly

#### b. Set Target Country (Optional)
- Settings → International Targeting
- If your apps target a specific country, set it here

#### c. Configure URL Parameters (if applicable)
- For static sites, usually not needed

### 3. Monitor Performance

Check these sections regularly:

- **Performance**: See search queries, impressions, clicks, CTR
- **Coverage**: Identify indexing errors
- **Sitemaps**: Monitor sitemap status
- **Mobile Usability**: Ensure mobile-friendliness
- **Core Web Vitals**: Monitor performance metrics

---

## Important Notes

### Do NOT Remove Verification

Once verified, **keep the verification file or meta tag permanently**. Removing it will cause you to lose access to Search Console data.

### Verification File Location

If using HTML file method:
```
E:\Web\AppMaven\
├── googleXXXXXXXXXXXXXXXX.html  ← Verification file here
├── index.html
├── sitemap.xml
├── robots.txt
└── ...
```

### Multiple Verification Methods

You can use multiple verification methods simultaneously for redundancy:
- HTML file + Meta tag
- This ensures verification persists even if one method fails

---

## After Deployment Checklist

Once your site is live on `appmavenstudio.com`:

- [ ] Verify site ownership in Google Search Console
- [ ] Submit `sitemap.xml`
- [ ] Check Coverage report for any errors
- [ ] Verify all pages are indexable (check `robots.txt`)
- [ ] Test mobile usability
- [ ] Monitor Core Web Vitals
- [ ] Set up email notifications for critical issues

---

## Common Issues & Solutions

### Issue: "Couldn't verify ownership"

**Solutions:**
- Ensure file is at root level (not in subdirectory)
- Check file is publicly accessible (test in incognito browser)
- Wait 24 hours for DNS propagation if domain was just set up
- Try alternative verification method

### Issue: "Sitemap could not be read"

**Solutions:**
- Verify sitemap is valid XML (use https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- Ensure sitemap is accessible at root: `https://appmavenstudio.com/sitemap.xml`
- Check for XML syntax errors

### Issue: Pages not being indexed

**Solutions:**
- Check `robots.txt` doesn't block Googlebot
- Verify pages don't have `noindex` meta tag (legal pages like privacy policy should have `noindex, follow`)
- Request indexing manually via URL Inspection tool

---

## Ongoing Maintenance

### Weekly Tasks
- Review Performance report for traffic trends
- Check Coverage for new errors

### Monthly Tasks
- Analyze top-performing queries
- Identify low-CTR pages and optimize titles/descriptions
- Review Core Web Vitals

### When Adding New Content
- Submit updated sitemap (or wait for automatic discovery)
- Use URL Inspection tool to request indexing for important pages

---

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)

---

**Status**: Pending - Awaiting verification code from user

**Next Steps**:
1. User signs up for Google Search Console
2. User provides verification file or meta tag code
3. Add verification to site
4. Deploy and verify
5. Submit sitemap
