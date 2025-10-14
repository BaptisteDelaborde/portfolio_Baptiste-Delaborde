<template>
  <section class="skills" id="skills">
    <h2 class="section-title">Mes <span class="gradient">Compétences</span></h2>
    <p class="section-subtitle">
      Technologies et outils que j’utilise pour concevoir des applications modernes, performantes et esthétiques.
    </p>

    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="card-inner">
          <!-- Face avant -->
          <div class="card-front">
            <i :class="skill.icon"></i>
            <h3>{{ skill.name }}</h3>
          </div>
          <!-- Face arrière -->
          <div class="card-back">
            <p>{{ skill.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: "Vue.js", icon: "fa-brands fa-vuejs", detail: "Composants dynamiques" },
  { name: "JavaScript", icon: "fa-brands fa-js", detail: "Logique et interactivité" },
  { name: "HTML5", icon: "fa-brands fa-html5", detail: "Structure sémantique" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", detail: "Design responsive" },
  { name: "Node.js", icon: "fa-brands fa-node-js", detail: "API et backend" },
  { name: "MySQL", icon: "fa-solid fa-database", detail: "Gestion des données" },
  { name: "GitHub", icon: "fa-brands fa-github", detail: "Collaboration & versioning" },
  { name: "Figma", icon: "fa-brands fa-figma", detail: "Prototypage et design UI" },
];
</script>
