<template>
  <header class="navbar">
    <!-- Logo -->
    <div class="nav-logo">BD</div>

    <!-- Bouton hamburger -->
    <div class="burger" @click="toggleMenu">
      <i :class="[menuOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
    </div>

    <!-- Liens desktop -->
    <nav class="nav-links">
      <a 
        href="#home" 
        :class="{ active: currentSection === 'home' }" 
        @click="setActive('home')"
      >Accueil</a>

      <a 
        href="#about" 
        :class="{ active: currentSection === 'about' }" 
        @click="setActive('about')"
      >À propos</a>

      <a 
        href="#skills" 
        :class="{ active: currentSection === 'skills' }" 
        @click="setActive('skills')"
      >Compétences</a>

      <a 
        href="#projects" 
        :class="{ active: currentSection === 'projects' }" 
        @click="setActive('projects')"
      >Projets</a>

      <a 
        href="#experience" 
        :class="{ active: currentSection === 'experience' }" 
        @click="setActive('experience')"
      >Expériences</a>

      <a 
        href="#contact" 
        :class="{ active: currentSection === 'contact' }" 
        @click="setActive('contact')"
      >Contact</a>
    </nav>

    <!-- Menu mobile -->
    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <a 
          href="#home" 
          :class="{ active: currentSection === 'home' }" 
          @click="setActive('home')"
        >Accueil</a>

        <a 
          href="#about" 
          :class="{ active: currentSection === 'about' }" 
          @click="setActive('about')"
        >À propos</a>

        <a 
          href="#skills" 
          :class="{ active: currentSection === 'skills' }" 
          @click="setActive('skills')"
        >Compétences</a>

        <a 
          href="#projects" 
          :class="{ active: currentSection === 'projects' }" 
          @click="setActive('projects')"
        >Projets</a>

        <a 
          href="#experience" 
          :class="{ active: currentSection === 'experience' }" 
          @click="setActive('experience')"
        >Expériences</a>

        <a 
          href="#contact" 
          :class="{ active: currentSection === 'contact' }" 
          @click="setActive('contact')"
        >Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
const currentSection = ref("home");

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const setActive = (section) => {
  currentSection.value = section;
  menuOpen.value = false;
};
</script>

<style scoped>
/* Icônes Font Awesome */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
