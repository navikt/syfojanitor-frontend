## Syfojanitor

Prod: https://syfojanitor-frontend.intern.nav.no/
Dev: https://syfojanitor-frontend.intern.dev.nav.no/

Syfojanitor brukes til å lukke åpne dialogmøter manuelt. Dette gjøres ved å legge inn `uuid` og `personident` i syfojanitor på møtet man ønsker å lukke. 
`uuid` på dialogmøtet man skal lukke finner man ved å koble til databasen til `isdialogmote` ([se repository](https://github.com/navikt/isdialogmote)). (Se hvordan man gjør det [her](https://docs.nais.io/persistence/cloudsql/how-to/personal-access/?h=personal))
For å finne `uuid` på møtet man skal lukke så slår man opp `mote_id` i `motedeltaker_arbeidstaker` tabellen på gitt `personident`, for å så slå opp det spesifikke møtet i `mote` tabellen. Det er `uuid` på det spesifikke møtet man ønsker å lukke i `mote` tabellen som skal fylles inn i `syfojanitor`.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
