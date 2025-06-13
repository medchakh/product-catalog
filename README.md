This is a mini take-home assignment built with [Next.js](https://nextjs.org) and Shadcn Ui bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

to work with a build version:

```bash
# first initiate a build
npm run build
# run the build version
npm run start

```

to run the tests:

```bash
npm run test
# or
npm run test


```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

the code for catalog is at `app/catalog`

## Design Decisions

- The project uses Next.js App Router for modern routing and server components support.
- UI components are styled with Shadcn UI and Tailwind CSS for rapid, consistent design.
- The homepage features a clear call-to-action to check the catalog, prioritizing user navigation.
- The codebase is organized for clarity and ease of extension, with catalog-related logic separated in `app/catalog`.
- Accessibility and responsiveness are considered in layout and component choices.
- Minimal dependencies are used to keep the project lightweight and easy to maintain.
- Simple sorting and searching are implemented in the catalog to help users quickly find and organize products. The design is simple, as the main priority was functionality rather than aesthetics.

## Potential Improvements

- Enhance the visual design and add more branding elements for a polished look.
- improve the filtering, sorting and searching. Refactor the sorting and filtering state to use useQueryState from nuqs to allow url sharing. Use global state rather than local state.
- Integrate product details pages for richer information.
- Improve accessibility with more semantic HTML and ARIA attributes.
- Add tests for catalog features and UI components.
- Optimize performance for larger datasets.
- Add an informative header navigation and footer.
- Support for internationalization/localization.
- Add user authentication and personalized features.
