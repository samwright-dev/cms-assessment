# Avidly Content Hub Fit Assessment Prototype

Leadership-ready front-end prototype for an Avidly lead generation assessment that helps users understand whether HubSpot Content Hub is the right CMS for their business.

## What is included

- `index.html` for the full prototype structure
- `styles.css` for the Avidly-inspired visual treatment
- `script.js` for question flow, weighted scoring, form gating, and result logic

## How to open it

Open [index.html](/Users/samwright/Documents/Avidly/Hubspot%20Vs%20Assessment/index.html) directly in a browser.

If you want to serve it locally instead, run:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Prototype notes

- The form is a front-end only demo and does not submit anywhere.
- The assessment includes the agreed 12 questions, weighted scoring, score guardrails, and result bands.
- The results screen also shows the lead payload preview to demonstrate what could be passed into HubSpot later.

## GitHub Pages

This repo now includes a `docs/` folder that is ready to publish with GitHub Pages.

Use these settings in GitHub:

1. Push this folder to a GitHub repository.
2. Open `Settings` in the repository.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Set the branch to `main`.
6. Set the folder to `/docs`.
7. Save.

After GitHub Pages finishes publishing, your site will be available at:

`https://<your-github-username>.github.io/<your-repo-name>/`

The published files live in:

- `docs/index.html`
- `docs/styles.css`
- `docs/script.js`
- `docs/.nojekyll`
