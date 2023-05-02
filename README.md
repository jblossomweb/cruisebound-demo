This is a [Next.js](https://nextjs.org/) 12 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`next-scaffold-2023`](https://github.com/jblossomweb/next-scaffold-2023).

## Prerequisites

![](https://nodejs.org/static/images/logo.svg)

[Node.js](https://nodejs.org/) version [`>=18.15.0`](https://nodejs.org/dist/v18.15.0/node-v18.15.0.pkg)

## Getting Started

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

#### React Pages

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/views/HomePage`. The page auto-updates as you edit the file.
The Route for this page is defined by `src/pages/index.ts`.

#### API Routes

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

An example can be accessed at [http://localhost:3000/api/ping](http://localhost:3000/api/ping).

This endpoint's controller can be edited in `src/api/controllers/PingController`.
The Route for this endpoint is defined by `src/pages/api/ping.ts`.

#### Component Library

To run the storybook dev server:

```bash
npm run storybook
```

To generate a static build that can be independently deployed:

```bash
npm run storybook:build
```

#### Other Commands

To run the linter:

```bash
npm run lint
```

To run tests once:

```bash
npm test
```

To run test watcher:

```bash
npm run test:watch
```

To run coverage report:

```bash
npm run test:coverage
```

A full list of commands can be found in the [`package.json`](https://github.com/jblossomweb/next-scaffold-2023/blob/main/package.json)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
