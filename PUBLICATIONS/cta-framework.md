# CTA Framework

This framework defines how support calls to action should appear across the first public launch.

The CTA system must keep two support pathways clearly distinct:

1. Community care support: GoFundMe for Freya's Community of Kindness / Community of Kindness Lunchies, only when approval and accountability are confirmed.
2. Creator and continuity support: Kristal's Ko-fi, PayPal, and Princess Dragonblood persona/creative channels, clearly labelled as support for Kristal's creative work and continuity, not as Community of Kindness donations.

Do not merge these pathways into one button, one fund, or one vague support request.

## CTA Hierarchy

### Primary CTA: Read the Story

Use on Home, Story, About, and social share surfaces.

Button label options:

- Read the Walyalup Bridge Story
- Read the Story
- Begin with the Story

Purpose: keep testimony as the centre and avoid leading with money.

### Primary Community CTA: Support Community of Kindness

Use only after Community of Kindness / Freya approval and accountability details are confirmed.

Button label options:

- Support Community of Kindness
- Donate to Community of Kindness
- Help Fund Community Lunches
- Support Meals, Dignity, and Connection

Required destination: verified GoFundMe or approved donation URL.

Required supporting line:

> Donations through this link support Freya's Community of Kindness / Community of Kindness Lunchies through the approved fundraising pathway. Please check the fundraiser page for recipient, purpose, and accountability details.

If approval is not yet confirmed, use the holding CTA:

- Support Pathway Pending
- Community Support Details Coming Soon

Holding line:

> Approved community support pathways are being confirmed. This site will not publish donation instructions on behalf of any person, group, or initiative until approval and accountability details are clear.

### Secondary Creator CTA: Support Kristal's Creative Work

Use on About, Author Note, footer, and optionally after the story. It must be visually secondary to the community-care CTA on fundraiser pages.

Button label options:

- Support Kristal's Work
- Support the Author
- Buy Kristal a Coffee
- Support the Creative Continuity

Destinations may include verified Ko-fi and PayPal links.

Required supporting line:

> Ko-fi and PayPal support Kristal Cornwell's creative work, writing, music, recovery, continuity, and the development of this ecosystem. These are separate from Community of Kindness donations.

### Persona CTA: Princess Dragonblood

Use where the page is about music, creative identity, performance, art, or broader creative ecosystem links. Do not use it as the main CTA on the Walyalup Bridge Story page.

Button label options:

- Explore Princess Dragonblood
- Listen to Princess Dragonblood
- Follow Princess Dragonblood
- Enter the Creative Layer

Required supporting line:

> Princess Dragonblood is Kristal's music and creative persona. This pathway connects to the wider creative body of work and should remain distinct from community fundraising.

## Recommended Placement

### Home

Primary:

- Read the Walyalup Bridge Story

Secondary:

- Support Community of Kindness, if approved
- Register Interest
- Explore the Wider Vision

Footer or small support area:

- Support Kristal's Work
- Explore Princess Dragonblood

### Walyalup Bridge Story

Before story:

- Read first; no donation pressure before context.

After first major section or after a natural break:

- Support Community of Kindness, if approved

After story:

- Support Community of Kindness, if approved
- Register for Living Layers updates
- Support Kristal's Work
- Explore Princess Dragonblood, optional and clearly secondary

### Support / Community Care Page

Primary:

- Donate to Community of Kindness via approved GoFundMe

Secondary:

- Volunteer or Contribute Goods
- Get Updates

Separate lower section:

- Support Kristal's Creative Work, with separation note

### About / Author Page

Primary:

- Read the Walyalup Bridge Story

Secondary:

- Support Kristal's Work via Ko-fi / PayPal
- Explore Princess Dragonblood
- Learn About the Diamond Soul Constellation

### Footer

Small persistent links:

- Story
- Support Community Care
- Living Layers
- TimeShift Freo
- Support Kristal
- Princess Dragonblood
- Privacy and Consent

## URL Requirements

Before launch, record verified URLs in the private launch checklist or environment/config layer:

- `COMMUNITY_GOFUNDME_URL`
- `KOFI_URL`
- `PAYPAL_URL`
- `PRINCESS_DRAGONBLOOD_URL`

Do not hard-code unverified links into public pages.

## Copy Guardrails

Use:

- "Support practical community care."
- "Support Kristal's creative work."
- "These pathways are separate."
- "Approved GoFundMe pathway."
- "Verified Ko-fi / PayPal links."

Avoid:

- "All support goes to the community" unless true for that exact button.
- "Donate here" without naming the recipient.
- "Partnered with" unless partnership is documented.
- "Official fundraiser" unless approval is documented.
- Emotional pressure based on homelessness, trauma, or urgency.

## Button Priority Rule

On story and community pages, the order should be:

1. Read / understand.
2. Support approved community care.
3. Register or volunteer.
4. Support Kristal's creative work.
5. Explore Princess Dragonblood / wider creative layers.

On author or creative pages, the order may be:

1. Read the story.
2. Support Kristal's creative work.
3. Explore Princess Dragonblood.
4. Learn about the wider ecosystem.

## Release Gate

No CTA is ready until the release checklist confirms:

- recipient is clear
- link is verified
- purpose is clear
- community and creator support are separated
- consent/privacy text is present where forms are used
- no unapproved partnership or fundraiser claim is implied
