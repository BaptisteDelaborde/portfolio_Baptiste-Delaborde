# 🌐 Portfolio – Baptiste Delaborde

Un portfolio moderne réalisé avec **Vue.js + Vite + Tailwind CSS**, hébergé sur **Netlify**.  
Il présente mon profil, mes compétences, mes projets, mes expériences et un formulaire de contact fonctionnel via **EmailJS + Brevo (SMTP)**.

---

## 🚀 Installation du projet

### 1. Cloner le dépôt
```bash
git clone git@github.com:BaptisteDelaborde/portfolio_Baptiste-Delaborde.git
cd porfolio_Baptiste-Delaborde/portfolio
```

### 2. Installer les dépendances
```bash
npm install
```

---

## 🧩 Dépendances principales

| Outil / Lib | Utilité |
|--------------|----------|
| **Vue.js 3** | Framework principal du projet |
| **Vite** | Outil de build rapide |
| **Tailwind CSS** | Stylisation rapide et moderne |
| **EmailJS** | Envoi d’e-mails depuis le formulaire de contact |
| **Brevo (ex Sendinblue)** | Serveur SMTP pour EmailJS |

---

## ⚙️ Configuration du formulaire de contact

1. Crée un compte sur [EmailJS](https://www.emailjs.com/)
2. Connecte ton service **Brevo SMTP** avec les informations suivantes :
   - **Serveur SMTP** : `smtp-relay.brevo.com`
   - **Port** : `587`
   - **Utilisateur** : ton identifiant SMTP Brevo
   - **Mot de passe** : ta clé SMTP Brevo
3. Crée un **template** appelé `Contactez-nous` avec les variables :
   - `nom`
   - `email`
   - `message`
4. Copie les valeurs suivantes dans ton projet :
   - `service_id`
   - `template_id`
   - `public_key`

5. Installe la dépendance EmailJS :
```bash
npm install emailjs-com
```

6. Dans ton composant `ContactSection.vue`, configure l’envoi :
```javascript
import emailjs from "@emailjs/browser";
```

---

## 🌍 Déploiement

Le site est hébergé sur **Netlify**.  
Assure-toi d’avoir dans ton `vite.config.js` :
```javascript
export default defineConfig({
  plugins: [vue()],
  base: './', // ✅ nécessaire pour Netlify
});
```

---

## 📫 Contact

- **Auteur :** Baptiste Delaborde  
- **Email :** delabordebaptiste8@gmail.com  
- **Hébergement :** [Netlify](https://www.netlify.com/)

---

© 2025 Baptiste Delaborde – Tous droits réservés.
