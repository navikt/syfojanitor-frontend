FROM gcr.io/distroless/nodejs20-debian11@sha256:73c609013959f2a864fdd950a26fdac6138a608a246b8f61fe9485ce89b919e1

WORKDIR /app

COPY package.json /app/
COPY .next/standalone /app/
COPY public /app/public/
COPY /.next/static ./.next/static

EXPOSE 3000

ENV NODE_ENV=production

CMD ["server.js"]
