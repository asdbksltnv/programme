# Conference programme: interactive, searchable

This interactive programme was prepared by the Akfa Medline orthopedic team. The conference programme itself was created by the organisers (Ministry of Health of the Republic of Uzbekistan; Republican Specialized Scientific and Practical Medical Center of Traumatology and Orthopedics; Association of Traumatologists and Orthopedists).

Static, dependency-free programme for the *Scientific and Practical Conference of Traumatologists and Orthopedists of Uzbekistan* (Tashkent, 24 October 2026).

**159 talks · 8 sessions · 4 halls · 65 speakers · English / Русский / Oʻzbekcha**

## Features

- **Search** across talk titles, authors, institutions and times. It works across all three languages and across scripts, so `Ходжанов`, `Khodjanov` and `Xodjanov` find the same talks, and accents are ignored.
- Filters by **hall**, **country** and **session**, with matches highlighted.
- **Overview**: a timetable with one column per hall; click a block to open that session.
- **Speakers**: searchable cards with biography and a link to each speaker's talks.
- **My schedule**: star talks, get overlap warnings, export to calendar (`.ics`, Tashkent time).
- "Happening now" highlight on the conference day (Tashkent time). Test with `?now=14:25`.
- Shareable links: the URL hash stores language, search, filters and view; each talk has a copy-link button.
- Dark mode, print stylesheet, keyboard shortcut `/` to search.
- **Mobile-first details:** bottom tab bar within thumb reach, compact header, search bar that slides away while reading and returns on scroll up, 44px tap targets, bottom-sheet speaker profiles, agenda-style overview, native share sheet for talk links, keyboard dismisses on Enter or scroll.
- **Works offline:** a service worker (`sw.js`) caches the site after the first visit, so the programme still opens with no signal at the venue. When online it always fetches the newest version first. The site can also be added to the home screen (`manifest.webmanifest`).

## Run / host

There is no build step. Open `index.html` directly, or serve the folder with any static host (GitHub Pages, Netlify, nginx, ...).

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Editing the content

All content lives in `data/`:

| File | Contents |
| --- | --- |
| `meta.js` | event details, organisations (trilingual), sessions and moderators |
| `talks-1.js` … `talks-3.js` | talks, one row each: `[time, authors, orgs, title EN, title RU, title UZ]` |
| `speakers.js` | speaker profiles; the first value must match the author string used in the talks |

Authors are written `Latin name|Кириллица`. Organisation keys refer to `PROG.orgs` in `meta.js`.

### Speaker photos (optional)

Put portraits in `photos/<slug>.jpg`, where the slug is the speaker's programme name in lowercase with dashes, for example `tikhilov-r-m.jpg`. Then set `PROG.hasPhotos = true;` at the end of `data/meta.js`. Without photos, initials avatars are used.

## Notes on the source programme

The three PDF versions disagree in a few places. This site uses:

- Session 2 (Hall 2), talks 12–17: the times from the Russian/Uzbek versions (14:50 … 15:40). The English version lists a jumbled sequence.
- Session 7 (Hall 4), talk 9: 16:30–16:40 (English/Russian), not 16:30–16:35 (Uzbek).
- Plenary session end 12:05 and lunch 12:05–13:00 (Russian version).
- The bio of M. Asadullaev follows the speakers page (Vreden Center); his talk is listed under the Turner Center.

Please proof-read titles and affiliations against the final printed programme before publishing.
