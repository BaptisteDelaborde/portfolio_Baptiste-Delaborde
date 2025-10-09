<template>
  <header class="navbar">
    <div class="nav-logo">BD</div>

    <!-- Bouton hamburger -->
    <div class="burger" @click="toggleMenu">
      <i :class="[menuOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
    </div>

    <!-- Liens desktop -->
    <nav class="nav-links">
      <a
        href="#home"
        :class="{ active: activeSection === 'home' }"
      >Accueil</a>
      <a
        href="#about"
        :class="{ active: activeSection === 'about' }"
      >À propos</a>
      <a
        href="#skills"
        :class="{ active: activeSection === 'skills' }"
      >Compétences</a>
      <a
        href="#projects"
        :class="{ active: activeSection === 'projects' }"
      >Projets</a>
      <a
        href="#experience"
        :class="{ active: activeSection === 'experience' }"
      >Expériences</a>
      <a
        href="#contact"
        :class="{ active: activeSection === 'contact' }"
      >Contact</a>
    </nav>

    <!-- Menu mobile -->
    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <a
          href="#home"
          :class="{ active: activeSection === 'home' }"
          @click="closeMenu"
        >Accueil</a>
        <a
          href="#about"
          :class="{ active: activeSection === 'about' }"
          @click="closeMenu"
        >À propos</a>
        <a
          href="#skills"
          :class="{ active: activeSection === 'skills' }"
          @click="closeMenu"
        >Compétences</a>
        <a
          href="#projects"
          :class="{ active: activeSection === 'projects' }"
          @click="closeMenu"
        >Projets</a>
        <a
          href="#experience"
          :class="{ active: activeSection === 'experience' }"
          @click="closeMenu"
        >Expériences</a>
        <a
          href="#contact"
          :class="{ active: activeSection === 'contact' }"
          @click="closeMenu"
        >Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const menuOpen = ref(false);
const activeSection = ref("home");

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

let observer = null;

onMounted(() => {
  const sections = document.querySelectorAll("section[id]");
  const options = { root: null, threshold: 0.5 };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
