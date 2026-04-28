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
