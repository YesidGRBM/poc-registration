FROM node:22.20.0-slim AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.20.0-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package.json ./

RUN npm install --prod

ENV NODE_ENV=production

ENV PORT=4321

EXPOSE 4321

CMD [ "node", "./dist/server/entry.mjs", "--host", "0.0.0.0", "--port", "4321" ]
