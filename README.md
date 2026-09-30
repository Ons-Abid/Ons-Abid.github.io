# Ons Abid — Full Stack & AI Engineer

Portfolio multipage réalisé avec Next.js App Router, TypeScript et React. Le point de départ est le template MIT de Sofiane Bahmed : https://github.com/Sofiane-Bahmed/portfolio-template. Son architecture et ses composants ont été simplifiés puis redessinés pour ce portfolio. Le texte, les métriques et les informations personnelles sont adaptés au CV fourni.

L’interface propose le français et l’anglais, avec un mode clair/sombre. Les préférences sont mémorisées dans le navigateur.

## Lancer le site

    npm install
    npm run dev

Puis ouvrir http://localhost:3000.

Pour vérifier l’export statique :

    npm run build

Le site généré se trouve dans `out/`. Pour le prévisualiser avec Python :

    python -m http.server 8000 --directory out

Puis ouvrir http://localhost:8000. `npm run start` n’est pas utilisé : le site est exporté en fichiers statiques pour GitHub Pages.

## Publication sur GitHub Pages

Le site est exporté en fichiers statiques dans `out/`. Le workflow `.github/workflows/deploy-pages.yml` publie automatiquement ce dossier sur GitHub Pages à chaque push sur `main`. Créer le dépôt public `Ons-Abid.github.io`, choisir **Settings → Pages → GitHub Actions**, puis pousser le code sur `main`. L’adresse publiée sera `https://ons-abid.github.io/`.

## Pages

- / — présentation et projets sélectionnés
- /projects — index des études de cas
- /projects/[slug] — détail d’un projet
- /about — profil, expériences et compétences
- /resume — parcours professionnel, formation et compétences
- /contact — e-mail, téléphone et profils professionnels

## Organisation du code

- `app/` contient les routes Next.js et la feuille de style globale.
- `features/projects/` regroupe les composants, données et traductions des projets.
- `features/preferences/` gère la langue et le thème.
- `features/profile/` contient les expériences, la formation et les compétences réutilisées entre les pages.
- `components/` contient les éléments partagés du site, comme l’en-tête et le pied de page.

## Modifier le contenu

- Les projets et leurs résultats sont regroupés dans `features/projects/data/projects.ts`.
- Les textes anglais des études de cas sont dans `features/projects/data/project-english.ts`.
- Les commandes de langue et de thème sont dans `features/preferences/components/language-theme-controls.tsx`.
- L’expérience, la formation et les compétences sont dans `features/profile/data/profile.ts`.
- Les couleurs, la typographie et les composants visuels sont dans `app/globals.css`.
- Le portrait publié est dans `public/ons-abid.jpg`.
- L’illustration du jumeau numérique est servie en WebP depuis `public/`.
- Les sources graphiques de travail dans `assets/`, l’ancien `index.html` et les consignes locales d’agents ne sont pas nécessaires au site et sont exclus du dépôt Git.
- Le PDF du CV n’est pas distribué par le site.

Les visuels des projets sont des illustrations conceptuelles, pas des captures d’écran des applications. Les liens de dépôt sont omis tant que le dépôt public correspondant n’a pas été vérifié.

## Licence

Le code du template d’origine est distribué sous MIT ; voir LICENSE. Les contenus et fichiers personnels d’Ons Abid restent ses propres matériaux.
