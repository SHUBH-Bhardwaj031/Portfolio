# Shubham Bhardwaj — Portfolio

Built with React + Vite + Tailwind CSS. Layout and section structure inspired by
[Brittany Chiang's v4 portfolio](https://brittanychiang.com) (used with attribution,
as her repo's README permits — see [bchiang7/v4](https://github.com/bchiang7/v4)).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Edit your content

All text (name, bio, skills, experience, projects) lives in **`src/data.js`** —
edit that one file, no need to touch any component.

Things to fill in before you deploy:
- `src/data.js` → replace the `live: '#'` placeholders in the `projects` array with
  your actual live demo links (Bingo, Job Portal, AI Expense Manager).
- `public/resume.pdf` → already your uploaded resume; replace it if you update your resume.

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy.

## Deploy to Netlify

1. Push this folder to a GitHub repo.
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy.
