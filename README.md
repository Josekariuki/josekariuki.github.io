# Joseph Kariuki — Portfolio Website

A fast, single-page portfolio built with plain HTML, CSS, and JavaScript. No build step, no dependencies.

## Deploy to GitHub Pages (5 minutes)

1. Create a new repository on GitHub named exactly: `Josekariuki.github.io`
2. Push these files to it:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Launch portfolio site"
   git branch -M main
   git remote add origin https://github.com/Josekariuki/Josekariuki.github.io.git
   git push -u origin main
   ```
3. On GitHub: Settings → Pages → confirm source is `main` branch, root folder.
4. The site goes live at **https://josekariuki.github.io** within a few minutes.

## Before you deploy — checklist

- [ ] Add your CV as `assets/Joseph_Kariuki_CV.pdf` (the Download CV button points there)
- [ ] Replace the three `href="#"` demo links in `index.html` with your live Streamlit URLs (search for `TODO`)
- [ ] Optional: add `assets/og-image.png` (1200x630) so links preview nicely on WhatsApp/LinkedIn
- [ ] Optional: add project screenshots and an analytics snippet (Plausible or GA4)

## Custom domain (optional, later)

Buy a domain, then in the repo add a file named `CNAME` containing the domain,
and point a CNAME DNS record at `josekariuki.github.io`.

## Structure

```
index.html      — all content
css/style.css   — design system (edit tokens at the top to retheme)
js/main.js      — footer year + scroll reveal
assets/         — CV PDF, images
```
