# Personal website — luca-nik.github.io

Astro 5 static site for Luca Nicoli (cryptoeconomist, research scientist). Live at
https://luca-nik.github.io — repo `luca-nik/luca-nik.github.io`, deploys automatically
via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/` (must stay green before pushing)

## Structure

- `src/pages/` — home (`index.astro`: intro, case studies, latest 3 blog posts),
  `/case-studies` (index + `[id]`), `/publications` (single page, grouped by year),
  `/blog` (index grouped by section + `[id]`), `/rss.xml.ts`
- `src/layouts/Base.astro` — header/nav/footer, OG meta, favicon; default description:
  "Cryptoeconomist, Research Scientist, Engineer"
- `src/styles/global.css` — all styling, hand-written CSS variables, dark mode via
  `prefers-color-scheme`. No UI framework. Serif headings (Palatino/Georgia stack),
  sans body. Classes: `.hero`, `.chips`/`.chip`, `.card`, `.entry-list`, `.tag`,
  `.pub-year`, `blockquote.poem`.
- `src/content.config.ts` — three collections (glob loaders):
  - `casestudies` — frontmatter: title, org, tags, period, order, summary
  - `publications` — title, authors, venue, year, link (verified DOIs only — never
    invent URLs), kind (article|patent|thesis), order (year desc, patent/thesis last).
    Markdown body = 3-4 line plain-language synthesis.
  - `blog` — title, excerpt, date (ISO), section (web3|science|thoughts), coverImage?
    (coverImage is metadata only, not rendered by `[id].astro`). Section labels are
    mapped in `src/pages/blog/index.astro` and `src/pages/blog/[id].astro`.
- `public/` — CV + Case-Studies PDFs, `images/` (profile photo `me.jpg` = GitHub
  avatar headshot, `images/posts/*` migrated blog assets), `documents/` (PDFs embedded
  in old blog posts), `favicon.svg`
- Math: remark-math + rehype-katex; KaTeX CSS imported in Base layout.

## Content sources

- CV and case studies PDFs: repo root + `public/` (text extractions were at
  /tmp/case-studies.txt, /tmp/cv.txt — may be gone; re-extract with pdftotext)
- Old blog: `/Users/luca/programmi/naiky-next` (Next.js, do not modify; outdoor posts
  were deliberately NOT migrated — thoughts posts ARE migrated)
- Google Scholar: https://scholar.google.com/citations?hl=en&user=SsTwaqEAAAAJ

## Deliberate design/content decisions (don't "fix" these)

- Home intro is third person, brief (user's own text). Tagline ends with "Engineer",
  not "Protocol Designer".
- Italian poem as epigraph at bottom of home — intentionally unsigned and untranslated
  (the "smarrito / mi trovo" double meaning is untranslatable).
- No "Elsewhere" section on home (removed as redundant with nav).
- Case studies 05/06 (Urani.trade) have empty `period` — no dates in source PDF.
- Publication syntheses were drafted by an agent; four (*plasmonX*, *real-time
  formulation*, *bimetallic nanoparticles*, *do we need QM*) describe method/scope
  rather than findings — pending author's review.

## Workflow rules

- Git commits/pushes only with the user's explicit go-ahead each time.
- After pushing, verify the change is live with curl before reporting done.
