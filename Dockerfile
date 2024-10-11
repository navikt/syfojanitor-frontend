FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY package.json /app/
COPY .next/standalone /app/
COPY public /app/public/
COPY /.next/static ./.next/static

EXPOSE 3000

ENV NODE_ENV=production

CMD ["server.js"]
