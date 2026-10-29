# Loqelo pre-launch site

Static site: one `index.html` plus `assets/`, `common.css`, `common.js`, `icons.js`.
No build step. Host on any static host (Cloudflare Pages, Netlify, or the client's hosting).

## Before going live
1. **Waitlist + contact forms** — `common.js` (`wireForm`) and `index.html` (`cform`) currently simulate a submit.
   Connect them to Brevo (free plan): one list with contact attributes `ROLE` (customer | contractor),
   `COUNTRY`, `TYPE` (individual | business); double opt-in on. Brevo exports CSV filtered by ROLE.
   Add Cloudflare Turnstile (free) to both forms; the hidden `company_website` honeypot is already in place.
2. **Analytics** — add the GA4 tag (Consent Mode v2 defaults are already pushed to `dataLayer`).
   Events already fired (no personal data): `form_start`, `form_submit_attempt`, `customer_signup`,
   `contractor_signup`, `hero_email_submit`, `contact_submit`, `faq_open`, `video_play`, `cta_click`,
   `language_change`, `privacy_open`, `share_copy`. Mark `customer_signup` and `contractor_signup` as key events.
3. **Language by location** — the page picks EN/PL/DE from the browser language. For true geo-detection,
   read the Cloudflare `CF-IPCountry` header (or Netlify geo) and set `localStorage['loqelo.lang']` on first visit.
4. **Check copy with the client** — contact address `hello@loqelo.com`, the privacy notice text,
   and the FAQ answers (pricing answer is taken from the client's own UI: "Free to post, no obligation").
5. **Absolute URLs** — set `og:image` / `twitter:image` to `https://loqelo.com/assets/og.jpg`.

Libraries (CDN, pinned): GSAP 3.12.5 (+ScrollTrigger, CustomEase), Lenis 1.1.13, SplitType 0.3.4. All free.

## Photo credits / licences
- `assets/img/u-cust.webp`: Unsplash photo 1612832164313-ac0d7e07b5ce (Unsplash License: free for commercial use, no attribution required)
- `assets/img/u-pro.webp`: Unsplash photo 1787672357491-d43acdf974cb (Unsplash License)
- All other images: client-supplied (Pixabay Content License per the client's licence file) and client UI screens.
