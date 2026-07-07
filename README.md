# Your Art Website

A five-page site: Home, Gallery, Shop, Commissions, Contact. Plain HTML/CSS/JS —
no build step, no framework, works by just opening the files or hosting them anywhere
that serves static files.

## 1. Personalize it (5 minutes)

Almost everything lives in **two files**:

- **`js/main.js?v=1`** → top of the file, edit the `SITE_CONFIG` block:
  ```js
  const SITE_CONFIG = {
    artistName: "Meghana Reddy",
    email: "megha.treddy@gmail.com",
    instagram: "https://instagram.com/thisis_meghanacreates",
    ...
  };
  ```
  This automatically updates the name/email/Instagram everywhere on the site.

- **`js/artworks.js`** → your actual artwork. Each piece is one entry. Copy the
  instructions at the top of that file — in short: add an image to `/images`,
  copy an entry, fill in the details, set `forSale: true` and `status: "available"`
  to have it show up in the Shop too.

Until you add real photos, each piece shows a soft color placeholder instead of a
broken image, so the site looks intentional even before you've uploaded anything.

## 2. Connect the commission form (2 minutes) — Formspree, free

The commission form needs somewhere to send submissions since this is a static
site with no server of its own. [Formspree](https://formspree.io) is free for up
to 50 submissions/month and just emails you each one.

1. Go to formspree.io and sign up free.
2. Create a new form, and copy the form ID it gives you (looks like `xyzabcde`).
3. In **`commissions.html`**, find this line near the bottom:
   ```html
   <form class="form-card" data-commission-form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Confirm the verification email Formspree sends after your first test submission.

That's it — submissions will land in your inbox. No backend needed.

## 3. Hosting — free options

Any of these will host this site for **$0/month**:

- **GitHub Pages** — push this folder to a GitHub repo, turn on Pages in
  Settings → Pages. You get a URL like `yourname.github.io/site-name`.
- **Netlify** (free tier) — drag and drop this folder onto app.netlify.com/drop.
  You get a URL immediately, no account required for the drop, account needed to keep it.
- **Cloudflare Pages** — connect a GitHub repo or drag-and-drop, similar free tier.

Any of these support a **custom domain** later (e.g. `yourname.com`) for roughly
$10–15/year for the domain itself — the hosting stays free.

## 4. Selling work

You chose inquiry-based selling: each "Available" piece has an **Inquire to
purchase** button that opens the visitor's email client with a pre-filled message
to you, including the piece title and price. You handle payment (Venmo, PayPal,
etc.) directly over email — no payment processor or fees to set up. If you later
want real on-site checkout, Stripe Payment Links or Shopify's "Buy Button" are the
easiest add-ons, and I'm happy to help wire that in when you're ready.

## File structure

```
index.html          Home
gallery.html         Gallery — all work, filterable by category
shop.html             Shop — pieces for sale
commissions.html      Commissions — pricing, process, intake form
contact.html            Contact info
css/style.css              All styling
js/artworks.js               Your artwork data — edit this
js/main.js?v=1                     Site behavior + SITE_CONFIG — edit this
images/                           Put your artwork photos here
```
