# Website V1 Handoff

The first website should be one integrated site with modular pages. It should be mobile-first, low-cost, exportable, and easy to maintain.

## Recommended Stack

Use a static, content-first stack:

- Astro or Next.js static export.
- Markdown or MDX content files.
- Simple CSS with accessible typography and strong mobile readability.
- Forms that export to Google Sheets, CSV, Airtable-equivalent storage, or another portable format.
- No hidden analytics, no sensitive data capture by default, and no lock-in that prevents export.

## Site Map

1. Home
   - Plain-language ecosystem entry.
   - Primary calls to action: Read the Story, Support Approved Community Care, Register Interest.
   - Brief explanation of Walyalup Bridge, Living Layers, TimeShift Freo, and Diamond Soul Constellation.

2. Walyalup Bridge Story
   - Long-form readable story page.
   - Author attribution.
   - Context note before the story.
   - Donation/support prompts placed around natural breaks, not inserted as pressure during traumatic passages.
   - Share options and return links.

3. Support / Community Care
   - Status-sensitive page.
   - If approval is confirmed: recipient, purpose, fund handling, reporting, volunteer/goods pathways, and contact.
   - If approval is not confirmed: use a holding page explaining that approved support pathways are being confirmed.

4. Living Layers
   - Consent-first registration page.
   - Pathways: I need support, I want to volunteer, I can contribute goods/resources, I am a local business/organisation, I have lived experience and may want my voice included safely, I am interested in civic design, I want updates only.
   - Clear consent and privacy explanation before submission.

5. TimeShift Freo
   - Future-facing interest capture.
   - Audiences: residents, artists, historians, cultural workers, local businesses, venues, funders, developers, council/civic partners, community groups.
   - Make clear this is interest capture, not a finished app.

6. Diamond Soul Constellation
   - Plain-language overview.
   - Explain the framework as story, care, place, participation, ethical technology, creativity, and civic design.
   - Link to deeper architecture only after the practical story is understood.

7. About / Author
   - Kristal Cornwell as author, engineer, systems thinker, musician, community advocate, independent researcher, and creator of the framework.
   - Mention books and creative work without distracting from the public launch.
   - Include secondary creator CTAs for Ko-fi, PayPal, and Princess Dragonblood where verified links are available.

8. Contact
   - General contact and stakeholder enquiry.
   - Separate support, volunteer, media, and collaboration pathways where possible.

9. Privacy, Consent, and Transparency
   - Explain what data is collected, why, who can access it, how it is used, how long it may be kept, and how withdrawal/correction can be requested.
   - Include public claim and fundraising transparency notes.

## CTA Model

Use `PUBLICATIONS/cta-framework.md` as the source of truth for button hierarchy, page placement, and copy.

The website must clearly separate:

- Community care support: the approved GoFundMe for Freya's Community of Kindness / Community of Kindness Lunchies.
- Creator support: Kristal's Ko-fi and PayPal, supporting her writing, music, recovery, creative continuity, and ecosystem development.
- Persona/creative pathway: Princess Dragonblood, supporting music and creative identity exploration.

Do not merge these into one generic "support" CTA. Each button must name its recipient or purpose.

Required verified URL keys before launch:

- `COMMUNITY_GOFUNDME_URL`
- `KOFI_URL`
- `PAYPAL_URL`
- `PRINCESS_DRAGONBLOOD_URL`

## Form Requirements

Every form must state:

- purpose of the form
- required and optional fields
- who can access submissions
- whether information may be used publicly
- how to avoid disclosing sensitive details
- how to withdraw, correct, or follow up

## Content Tone

The site should feel human, dignified, local, creative, transparent, and hopeful without becoming sentimental. It should be visionary without becoming confusing.

Avoid leading with abstract systems language. Start with the story and the practical invitation.

## Launch Status Labels

Use clear labels for incomplete modules:

- Live
- Soft launch
- Interest capture
- Pending approval
- Future layer

Do not imply finished apps, formal partnerships, or authorised fundraisers before they exist.
