# 🌐 Portfolio – Baptiste Delaborde

> 🚀 Portfolio personnel développé avec **Vue.js** & **Vite**, déployé sur **Netlify**.  
> Ce site présente mes projets, mes compétences, mon parcours et mes expériences dans le développement web & mobile.

---

## ✨ Aperçu

![Aperçu du site](./src/assets/preview.png)

👉 [Voir le site en ligne](https://baptiste-delaborde.netlify.app/) *(remplace par ton vrai lien Netlify)*

---

## 🧠 À propos du projet

Ce portfolio a été conçu pour mettre en avant mes compétences techniques et mes réalisations de manière simple, fluide et moderne.  
Le site est **totalement responsive**, optimisé pour le défilement vertical (scroll navigation) et propose une interface claire dans une **thématique bleu & noir**.

---

## 🧩 Fonctionnalités principales

- 🎨 **Interface moderne & animée** (thème sombre avec accents bleus)
- 🧭 **Navigation fluide** entre les sections via le scroll
- 📱 **Responsive design** (menu burger sur mobile)
- ⚙️ **Composants Vue modulaires**
- 💡 **Surbrillance dynamique** de la section active dans la barre de navigation
- 🖼️ **Page d’accueil avec animation de souris “scroll down”**
- 💬 **Formulaire de contact fonctionnel** (via Netlify Forms ou autre)
- 🧰 **Sections** :
  - Accueil
  - À propos
  - Compétences
  - Projets
  - Expériences
  - Contact

---

## 🛠️ Technologies utilisées

| Type | Outils |
|------|---------|
| Framework front-end | [Vue.js 3](https://vuejs.org/) |
| Bundler | [Vite](https://vitejs.dev/) |
| Hébergement | [Netlify](https://www.netlify.com/) |
| Langages | HTML5, CSS3, JavaScript |
| Gestion de version | Git & GitHub |

---

## ⚙️ Installation locale

Si tu veux exécuter ce projet en local :

```bash
# 1️⃣ Clone le dépôt
git clone https://github.com/ton-pseudo/portfolio-baptiste.git

# 2️⃣ Va dans le dossier
cd portfolio-baptiste

# 3️⃣ Installe les dépendances
npm install

# 4️⃣ Lance le serveur local
npm run dev
```

Le site sera disponible sur 👉 [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build & déploiement

### 🔹 Build local :
```bash
npm run build
```

Le dossier final est généré dans `/dist`.

### 🔹 Déploiement Netlify :
1. Connecte ton dépôt GitHub à Netlify  
2. Paramètres de build :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
3. Ajoute un fichier `_redirects` dans `/public` :
   ```
   /* /index.html 200
   ```

---

## 🎨 Structure du projet

```
src/
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── navbar.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── images/
│       └── ...
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   └── ...
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── SkillsView.vue
│   ├── ProjectsView.vue
│   ├── ExperienceView.vue
│   └── ContactView.vue
├── App.vue
└── main.js
```

---

## 🔥 Auteur

👤 **Baptiste Delaborde**  
🎓 Étudiant en BUT Informatique – IUT Nancy-Charlemagne  
💻 Passionné par le développement web & mobile  
🌐 [LinkedIn](https://linkedin.com/in/tonprofil) | [GitHub](https://github.com/BaptisteDelaborde)

---

## 🪄 Licence

Ce projet est libre d’inspiration.  
N’hésitez pas à l’utiliser comme base pour créer votre propre portfolio — tant que vous mentionnez l’auteur original.
