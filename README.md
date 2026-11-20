# Quyen Nguyen - Career Portfolio

A small Next.js foundation for a personal career portfolio focused on human insight, strategy, and product thinking.

## Local development

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

For an isolated production preview in PowerShell (useful when another local tool owns `.next`):

```powershell
$env:NEXT_DIST_DIR = '.next-local'
pnpm build
pnpm start --hostname 127.0.0.1 --port 3000
```

Run the build and start commands from the same shell so they use the same output directory.

Style DNA is included at `/work/style-dna`. Its case study describes the current independent
prototype inspired by COMMON GROUND; community research and user validation remain pending.

The navigation separates professional work (`/work`), independent prototypes (`/personal-projects`),
and class projects (`/class-work`). Class work includes Spotify and fleet-maintenance posters.
The Spotify poster can be regenerated with `scripts/generate_spotify_poster.py` using ReportLab
and the Windows Arial fonts, then rendered with Poppler into `public/class-work/`.

The main Resume link serves the one-page resume. The About page and footer also link to the
two-page detailed CV. Editable sources are in `output/resumes/`; `scripts/build_resumes.py`
recreates them from the approved content. Export and visually check the DOCX files in Word
before replacing the public PDFs.
The one-page source is the user's exact Word layout in `content/resumes/one-page-reference.docx`;
the builder copies it unchanged, including the user's headline.
Working documents, local QA notes, and generated exports are ignored by Git and excluded
from Vercel uploads; the approved public PDFs and poster images are in `public/`.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```
