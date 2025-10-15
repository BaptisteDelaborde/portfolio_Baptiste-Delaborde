<template>
  <section id="about" class="about-section">
    <h2 class="section-title">
      À propos <span class="gradient">de Moi</span>
    </h2>

    <div class="about-grid">
      <div v-for="card in cards" :key="card.title" class="about-card">
        <div class="icon">
          <i :class="card.icon"></i>
        </div>
        <h3>{{ card.title }}</h3>
        <ul v-if="card.items">
          <li v-for="(item, i) in card.items" :key="i">{{ item }}</li>
        </ul>
        <p v-if="card.text">{{ card.text }}</p>
      </div>
    </div>

    <div class="about-objective">
      <h3>Mon objectif</h3>
      <p>
        Je souhaite développer mes compétences en développement logiciel et
        acquérir une expérience solide afin de devenir un ingénieur polyvalent
        en informatique, capable de concevoir des applications performantes et
        intuitives.
      </p>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: "Profil",
    icon: "fas fa-user",
    items: [
      "Étudiant en BUT Informatique à l’IUT Nancy-Charlemagne",
      "Spécialisation en développement web et mobile",
      "Rigueur, passion et curiosité",
    ],
  },
  {
    title: "Coordonnées",
    icon: "fas fa-address-card",
    items: [
      "📧 delabordebaptiste8@gmail.com",
      "📞 07 69 07 54 10",
      "📍 Nancy, France",
    ],
  },
  {
    title: "Centres d’intérêt",
    icon: "fas fa-star",
    items: [
      "Projets de développement personnel",
      "Cyclisme et sport en équipe",
      "Innovation technologique et IA",
    ],
  },
];
</script>
