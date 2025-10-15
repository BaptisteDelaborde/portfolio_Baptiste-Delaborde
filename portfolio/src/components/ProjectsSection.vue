<template>
  <section id="projects" class="projects">
    <h2 class="section-title">
      Mes <span class="gradient">projets</span>
    </h2>
    <p class="subtitle">
      Découvrez une sélection de mes réalisations en développement web et logiciels.
    </p>

    <div class="project-grid">
      <div
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <div class="image-wrapper">
          <img :src="project.image" :alt="project.title" />
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <h4>{{ project.subtitle }}</h4>
          <p>{{ project.description }}</p>
          <button class="btn" @click="openModal(project)">
            <i class="fas fa-eye"></i> Voir les détails
          </button>
        </div>
      </div>
    </div>

    <!-- Fenêtre modale -->
    <div v-if="selectedProject" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-btn" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>

        <img class="modal-image" :src="selectedProject.image" alt="" />

        <div class="modal-content">
          <div class="tags">
            <span v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
          </div>
          <h3>{{ selectedProject.title }}</h3>
          <p class="long-description">{{ selectedProject.fullDescription }}</p>

          <h4>🧩 Fonctionnalités</h4>
          <ul>
            <li v-for="(feat, i) in selectedProject.features" :key="i">
              {{ feat }}
            </li>
          </ul>

          <h4>💻 Technologies</h4>
          <div class="tech-list">
            <span v-for="tech in selectedProject.technologies" :key="tech">
              {{ tech }}
            </span>
          </div>

          <a
            v-if="selectedProject.github"
            :href="selectedProject.github"
            target="_blank"
            class="btn github"
          >
            <i class="fab fa-github"></i> Voir sur GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import portfolioImage from "@/assets/images/portfolio.png";
import nbaStatsImage from "@/assets/images/nbastats.png";

const selectedProject = ref(null);

const projects = [
  {
    title: "Nancy Spot",
    subtitle: "Application RMI / Java",
    description:
      "Application répartie pour visualiser des informations hétérogènes sur Nancy avec carte interactive.",
    fullDescription:
      "Nancy Spot est une application web répartie qui centralise diverses informations sur la ville de Nancy. L'application utilise une architecture distribuée avec plusieurs services RMI communicants (API REST, base de données Oracle, service proxy pour les données externes...).",
    features: [
      "Carte interactive Leaflet avec localisation des points d’intérêt",
      "Système de réservation avec validation transactionnelle",
      "Affichage des incidents de circulation",
      "Support HTTPS et modules JavaScript ES6",
    ],
    technologies: [
      "Java",
      "RMI",
      "Oracle",
      "JavaScript ES6",
      "Leaflet",
      "Bootstrap",
      "API REST",
    ],
    tags: ["Java", "RMI"],
    image: "/images/nancyspot.png",
    github: "https://github.com/korban2u/NancySpot",
  },

  {
    title: "Portfolio Personnel",
    subtitle: "Application Vue.js / CSS",
    description:
      "Mon portfolio personnel, construit avec Vue.js et CSS, présente mes projets et compétences.",
    fullDescription:
      "Ce portfolio est une application web interactive qui met en valeur mes réalisations en tant que développeur. Il est construit avec Vue.js pour le frontend et utilise des styles CSS modernes pour une présentation attrayante.",
    features: [
      "Présentation de projets avec images et descriptions",
      "Fenêtre modale pour les détails des projets",
      "Design responsive pour une expérience optimale sur tous les appareils",
      "Intégration de liens vers GitHub et autres ressources",
    ],
    technologies: [
      "Vue.js",
      "CSS",
      "JavaScript",
      "HTML5",
      "FontAwesome",
    ],
    tags: ["Vue.js", "CSS"],

    image: portfolioImage,
    github: "https://github.com/BaptisteDelaborde/portfolio_Baptiste-Delaborde",
  },

    {
    title: "NBA Stats",
    subtitle: "Application Vue.js / CSS",
    description:
      "Une application web pour visualiser les statistiques de la NBA.",
    fullDescription:
      "NBA Stats est une application construite avec Vue.js qui permet aux utilisateurs de consulter les statistiques des joueurs et des équipes de la NBA. L'application utilise une API pour récupérer les données en temps réel et les afficher de manière interactive.",
    features: [
      "Affichage des statistiques des joueurs et des équipes",
      "Recherche et filtrage des données",
      "Design responsive pour une expérience optimale sur tous les appareils",
      "Intégration de graphiques pour visualiser les performances",
    ],
    technologies: [
      "Vue.js",
      "CSS",
      "JavaScript",
      "HTML5",
    ],
    tags: ["Vue.js", "CSS"],

    image: nbaStatsImage,
    github: "https://github.com/DioAkaTheWorld/ProjetConnexe_DWM",
  },
  // ➕ ajoute d'autres projets ici
];

function openModal(project) {
  selectedProject.value = project;
}

function closeModal() {
  selectedProject.value = null;
}
</script>
