FROM node:20

WORKDIR /app

# installer pnpm
RUN npm install -g pnpm
COPY package.json  ./
RUN pnpm install

COPY . .

RUN pnpm build hello-service && pnpm build client