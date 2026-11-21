# Santosh Meganathan — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite.
The landing page features an original Three.js hero visual with a static
fallback for browsers without WebGL; the animation respects reduced-motion
preferences. Experience, skills, certifications, and contact information remain
available in conventional scroll sections.

## Run locally

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Portfolio content

The profile summary, experience, skills, certifications, contact details, and LinkedIn URL are taken from the resume and profile details supplied for this portfolio.

The supplied professional headshot is at `public/images/headshot.jpg`. To replace it, use the same path or update the image reference in `src/App.tsx`.

## GitHub Pages

The included Actions workflow builds and deploys the site on pushes to `main` and on manual runs. In the repository settings, open **Pages** and set the build and deployment source to **GitHub Actions**. The Vite base path is configured for the `santosh-meganathan-portfolio` repository name; update `base` in `vite.config.ts` if the repository is renamed or deployed at a different path.
