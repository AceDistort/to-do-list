# Étape 1: Image de base
FROM node:alpine

# Étape 2: Définir le répertoire de travail
WORKDIR /app

# Étape 3: Copier package.json et package-lock.json
COPY ../package.json ./

# Étape 4: Installer les dépendances
RUN npm install

# Étape 5: Copier le reste du code source
COPY ../.. .

# Étape 6: Construire l'application
RUN npm run build

# Étape 7: Exposer le port
EXPOSE 3000

# Étape 8: Démarrer l'application
CMD ["npm", "start"]