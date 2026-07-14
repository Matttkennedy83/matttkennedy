# Matthew Kennedy Personal Website

A premium, responsive, static website ready for GitHub and Cloudflare Pages.

## What is included

- Single-page personal website
- Responsive mobile navigation
- Light and dark modes
- Animated statistics
- Scroll-triggered reveal effects
- SEO metadata
- Open Graph and Twitter metadata
- Schema.org structured data
- Sitemap and robots.txt
- 404 page
- Contact form placeholder
- LinkedIn and email links
- Google Analytics placeholder
- Cookie/privacy notice
- Cloudflare Pages compatible static files
- No build process and no paid hosting dependency

## Before you launch

### 1. Add your portrait

Place your professional image in:

`assets/images/matthew.jpg`

Then open `index.html` and replace:

`assets/images/matthew-placeholder.svg`

with:

`assets/images/matthew.jpg`

A portrait with a roughly 4:5 ratio works best.

### 2. Replace your domain

Search the project for:

`yourdomain.com`

Replace it with your actual domain, including the preferred `www` or non-`www` version.

### 3. Replace contact information

In `index.html`, replace:

- `hello@yourdomain.com`
- `https://www.linkedin.com/`
- `your-form-id`

The email and LinkedIn buttons work as soon as the URLs are correct.

### 4. Activate the contact form

This project uses a Formspree-ready form action:

`https://formspree.io/f/your-form-id`

Create a Formspree form, copy its ID and replace `your-form-id`.

Alternatively, remove the form and keep the direct email button.

### 5. Add Google Analytics

In `index.html`, find the commented Google Analytics section.

Replace:

`G-XXXXXXXXXX`

with your Google Analytics Measurement ID, then remove the surrounding comment markers.

### 6. Update sitemap date

Change the `lastmod` date in `sitemap.xml` whenever you materially update the site.

## Test locally

Double-click `index.html` to open it in a browser.

For best results, run a simple local web server:

### Windows PowerShell

```powershell
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Deploy to GitHub

1. Create a new GitHub repository.
2. Upload the contents of this folder.
3. Commit the files.
4. Copy the repository URL.

## Deploy to Cloudflare Pages

1. Log in to Cloudflare.
2. Open **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages** and connect your GitHub repository.
5. Use these settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy.
7. In the Pages project, add your custom domain.
8. Follow Cloudflare's DNS prompts.

## Editing the website

All visible text is in `index.html`.

Design and colours are in:

`assets/css/styles.css`

Animations and interactive behaviour are in:

`assets/js/main.js`

## Notes

- Google Fonts are loaded from Google. For a fully self-hosted site, replace them with local font files or system fonts.
- The cookie notice is informational until analytics or marketing cookies are enabled.
- The current site is static and requires no database.
