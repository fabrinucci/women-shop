# 🛍️ Women's Clothing Online Store

This project is an online store for women's clothing, handbags and exclusive accessories, developed with **Next.js** on the frontend and a **REST API with PostgreSQL** for the backend.

## 🚀 Core technologies.

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Express, PostgreSQL (Docker)
- **Testing**: Vitest, React Testing Library, Playwright
- **CI/CD**: GitHub Actions
- **ORM**: Prisma

## 📦 How to run in dev?

```bash
## Clone repo
git clone <repo-url>

## Install dependencies
npm install

## Copy the ".env.template" file, rename it to ".env" and change the environment variables

## Build up database
docker compose up -d

## Run migrations
npx prisma migrate dev

## Run seed
npm run seed

## Run project
npm run dev
```

## 📤 How to collaborate in the project?

*Before uploading your changes, you should check that the project runs correctly and without conflicts. For this purpose we check it with the following tests*

```bash
## Run build
npm run build

## Run preview
npm run start

## Unit tests
npm run test:unit

## E2E tests
npm run test:e2e

## Lint & format
npm run lint
```

*If everything works correctly you can upload the changes in a special branch, with the name of the change or implementation. For example: **feat/improve-navigation**, and then create a pull request to the **dev** branch.*