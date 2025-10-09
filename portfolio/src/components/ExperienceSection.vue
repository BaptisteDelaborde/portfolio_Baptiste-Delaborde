<template>
  <section id="experience" class="experience">
    <h2 class="section-title">
      Mon <span class="gradient">parcours</span>
    </h2>
    <p class="subtitle">
      Découvrez mon cheminement académique et mes expériences professionnelles.
    </p>

    <div class="filters">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['filter-btn', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        <i :class="icons[tab]" />
        {{ tab }}
      </button>
    </div>

    <div class="timeline">
      <div
        v-for="item in filteredItems"
        :key="item.title"
        class="timeline-item"
      >
        <div class="timeline-icon" :style="{ backgroundColor: item.color }">
          <i :class="item.icon"></i>
        </div>
        <div class="timeline-content">
          <span class="timeline-date" :style="{ backgroundColor: item.color }">
            {{ item.date }}
          </span>
          <h3>{{ item.title }}</h3>
          <h4>{{ item.place }}</h4>
          <p class="desc">{{ item.description }}</p>

          <ul v-if="item.details">
            <li v-for="(detail, index) in item.details" :key="index">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const tabs = ["Formation", "Expérience professionnelle"];
const currentTab = ref("Formation");

const icons = {
  Formation: "fas fa-graduation-cap",
  "Expérience professionnelle": "fas fa-briefcase",
};

const timeline = [
  {
    title: "Bachelor Universitaire de Technologie (BUT) Informatique",
    place: "IUT Nancy-Charlemagne, Nancy",
    date: "Depuis septembre 2023",
    description: "Parcours Développement Web et Mobile",
    details: [
      "Développement d’applications desktop et web",
      "Bases de données, réseaux, conception et modélisation de logiciels",
    ],
    icon: "fas fa-graduation-cap",
    color: "#007bff",
    type: "Formation",
  },
  {
    title: "Baccalauréat STI2D – Spécialité SIN",
    place: "Lycée Raymond Poincaré, Bar-le-Duc",
    date: "Septembre 2020 à Juin 2023",
    description: "Sciences de l’ingénieur et du numérique",
    details: [
      "Apprentissage de l’électronique, du développement web et de la conception numérique",
      "Travail sur projets en équipe autour de systèmes connectés",
    ],
    icon: "fas fa-school",
    color: "#ff4d4d",
    type: "Formation",
  },
  {
    title: "Technicien de surface - Stage",
    place: "Préfecture de la Meuse, Bar-le-Duc",
    date: "Février 2025 - Avril 2025",
    description: "Stage de 8 semaines en milieu professionnel",
    details: [
      "TODO",
      "TODO",
      "TODO",
    ],
    icon: "fas fa-code",
    color: "#9b4dff",
    type: "Expérience professionnelle",
  },
  {
    title: "Peintre en bâtiment - Job de vacances",
    place: "Peinture Tonnes, Bar-le-Duc",
    date: "Décembre 2022",
    description: "Travail dans le secteur de la peinture en bâtiment",
    details: [
      "Travail d’équipe et rigueur dans un environnement exigeant",
      "Préparation des surfaces et application de peinture",
    ],
    icon: "fas fa-recycle",
    color: "#ffc107",
    type: "Expérience professionnelle",
  },
];

const filteredItems = computed(() =>
  timeline.filter((item) => item.type === currentTab.value)
);
</script>
