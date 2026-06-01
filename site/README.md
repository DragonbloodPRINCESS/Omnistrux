# Static Website Foundation

This folder contains the first public-safe static website foundation for the Diamond Soul Constellation launch.

It is intentionally lightweight and exportable:

- `index.html`: one-page modular launch site with sections for Story, Community Support, Living Layers, TimeShift Freo, About, and Privacy/Consent.
- `styles.css`: responsive visual styling.
- `app.js`: prevents placeholder forms from submitting until real endpoints are configured.
- `cta-config.example.json`: placeholder keys for verified CTA destinations.

## Launch Rule

Do not publish real donation, Ko-fi, PayPal, Princess Dragonblood, or form endpoint URLs until they are verified and approved.

## Required Runtime Configuration

Before public launch, replace placeholder links in `index.html` or wire them through a build step using verified values:

- `COMMUNITY_GOFUNDME_URL`
- `KOFI_URL`
- `PAYPAL_URL`
- `PRINCESS_DRAGONBLOOD_URL`
- `LIVING_LAYERS_FORM_ENDPOINT`
- `TIMESHIFT_FORM_ENDPOINT`
- `CONTACT_FORM_ENDPOINT`

If a value is not verified, keep the corresponding CTA marked as pending.
