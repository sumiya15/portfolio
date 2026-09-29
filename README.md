# Shaik Sumiya — Portfolio

A locally runnable React portfolio for Shaik Sumiya. The current experience
includes a brief cinematic intro, a three-way view selector, Recruiter,
Developer, and About Me views, and project browsing with accessible detail
dialogs. Its dark editorial styling and motion are an original interpretation
informed by a live portfolio reference.

## Requirements

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)

## Run in Windows PowerShell

Open a PowerShell terminal in VS Code and run:

```powershell
npm install
npm run dev
```

Open the terminal with the portfolio folder as its current directory.
Open the local URL printed by Vite, usually `http://localhost:5173/`.
Press `Ctrl+C` in that terminal to stop the development server.

To create a production build:

```powershell
npm run build
```

The generated site is written to `dist\`.

## Repository and deployment

The source repository is
[github.com/sumiya15/portfolio](https://github.com/sumiya15/portfolio). GitHub
Pages deployment uses the `Deploy portfolio to GitHub Pages` workflow, which
builds the site with `npm ci` and `npm run build`, then publishes `dist\`.
For a project repository, Vite uses `/portfolio/` as the production base path;
local builds keep `/`.

To enable deployment, open the repository's **Settings → Pages** page, set the
build and deployment source to **GitHub Actions**, and save. Pushes to `main`
then deploy automatically. The public URL is
`https://sumiya15.github.io/portfolio/` once the first workflow completes
successfully. Check the Actions run before sharing the URL.

## Current experience

- Choose **Enter Portfolio** or **Skip Intro** to open the **Choose your view**
  screen.
- Choose Recruiter, Developer, or About Me to open that view.
- Choose **Switch View** on any destination to return to the selector without
  replaying the intro.
- Recruiter and Developer views include horizontal project rows. Select a
  project card to inspect its details; press Escape or use **Close** to return
  to the same row position.
- AeroOps AI details distinguish historical public data, derived demo schedules,
  and synthetic operations. The repository includes verified screenshots and a
  working GitHub link.
- RecoverAI is a Razorpay test-mode, rules-first payment recovery MVP. Its
  dashboard and API require local configuration; there is no hosted demo or
  claim that it sends real customer messages or creates real charges.
- NewMomCircle links to its public repository; its project details describe
  features verified in the repository source.
- IPIS is a separate full-stack project. This portfolio only describes it; it
  does not import its source, dependencies, or backend. The IPIS app includes
  React, FastAPI, PostgreSQL schema, role-based access, and clearly synthetic
  demo data. It is not deployed.
- Recruiter and About Me views link to the supplied GitHub, LinkedIn, and email
  contact details, and open the included resume PDF.
- LinkedIn may redirect visitors to sign-in. The portfolio uses the profile URL
  supplied by Sumiya and does not treat that authentication page as a broken
  link.
- Remaining content: RecoverAI and NewMomCircle have no verified portfolio
  screenshots; AeroOps AI, RecoverAI, NewMomCircle, and IPIS have no hosted
  demos. There is no separate social-preview image yet, so the page exposes
  text metadata only.
