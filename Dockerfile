# Dockerfile
FROM node:20-alpine AS base

# Étape 1: Installer les dépendances
FROM base AS deps
WORKDIR /app

# Copier seulement les fichiers de dépendances
COPY package.json package-lock.json* ./
RUN npm ci

# Étape 2: Build de l'app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build pour production
RUN npm run build

# Étape 3: Image finale légère
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copier uniquement ce qui est nécessaire
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Exposer le port
EXPOSE 3000

# Démarrer l'app
CMD ["npx", "next", "dev"]