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
  // ➕ ajoute d'autres projets ici
];

function openModal(project) {
  selectedProject.value = project;
}

function closeModal() {
  selectedProject.value = null;
}
</script>
