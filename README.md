<div align="center">

<img src="icon-512.png" alt="üMed logo" width="110">

# üMed

**Get ready for your doctor visit — a clear next step and a summary to bring with you.**

[**▶︎ Open the app**](https://hekdan.github.io/umed/) · [Privacy policy](https://hekdan.github.io/umed/privacy.html)

*Free · No account · Works offline · Installable (Add to Home Screen)*

</div>

---

> **⚠️ NOT FOR CLINICAL USE.** üMed is an educational demonstration. It does not
> diagnose, treat, or replace a clinician — every path ends with a handoff to a real
> person. In an emergency call **911**; for thoughts of suicide or self-harm call or
> text **988**.

## What it does

Pick an area (or describe what's going on in your own words) and üMed asks the
kinds of questions a clinician would. You get:

- **A recommended next step**: emergency care, same-day, within a few days, or routine
- **Possible causes** a clinician would consider, ranked, with "must not miss" conditions flagged
- **A best guess at any point**: stop early and üMed pools the remaining branches into a provisional result
- **What to bring up** at your appointment
- **A visit summary PDF**: page 1 for you, page 2 a clinician note (selectable text), plus a FHIR R4 export for electronic records

## Coverage

Skin and rashes (with diagrams of lesion shapes), cough and breathing, heart and circulation,
stomach and bowels, urinary, headache, nerves and dizziness, joints and back, eye,
ear/nose/sinus, and a free-text "something else" path: 59 question steps and
141 result pathways.

## Safety design

- A one-tap red-flag check appears before every non-emergency result; any flag escalates to emergency care
- Free-text descriptions are screened for emergency wording first
- Urgency can only be raised, never lowered; "not sure" counts as yes
- Every path ends with being seen by a real clinician

## Privacy

**No data leaves your device.** No server, no accounts, no analytics, no tracking.
Answers are processed in memory and discarded. [Full policy](https://hekdan.github.io/umed/privacy.html).

## Tech

A single HTML page with a deterministic decision-graph engine. Fonts and the PDF
library (jsPDF) are served from this site, so there are no third-party network calls.
Served as a PWA (installable, offline-capable via service worker).

---

## Copyright

© 2014–2026 üMed. **All rights reserved.** üMed and the ü mark are
trademarks of üMed. No license is granted to copy, modify, or
redistribute this application or its content without written permission.

