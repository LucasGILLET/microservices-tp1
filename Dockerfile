FROM node:20

WORKDIR /app

# installer pnpm
RUN npm install -g pnpm

COPY . .

RUN pnpm install
RUN pnpm build hello-service && pnpm build client