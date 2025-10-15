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
        @click="scrollToSection('home')"
      >Accueil</a>
      <a
        href="#about"
        :class="{ active: activeSection === 'about' }"
        @click="scrollToSection('about')"
      >À propos</a>
      <a
        href="#skills"
        :class="{ active: activeSection === 'skills' }"
        @click="scrollToSection('skills')"
      >Compétences</a>
      <a
        href="#projects"
        :class="{ active: activeSection === 'projects' }"
        @click="scrollToSection('projects')"
      >Projets</a>
      <a
        href="#experience"
        :class="{ active: activeSection === 'experience' }"
        @click="scrollToSection('experience')"
      >Expériences</a>
      <a
        href="#contact"
        :class="{ active: activeSection === 'contact' }"
        @click="scrollToSection('contact')"
      >Contact</a>
    </nav>

    <!-- Menu mobile -->
    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <a
          href="#home"
          :class="{ active: activeSection === 'home' }"
          @click="scrollToSection('home', true)"
        >Accueil</a>
        <a
          href="#about"
          :class="{ active: activeSection === 'about' }"
          @click="scrollToSection('about', true)"
        >À propos</a>
        <a
          href="#skills"
          :class="{ active: activeSection === 'skills' }"
          @click="scrollToSection('skills', true)"
        >Compétences</a>
        <a
          href="#projects"
          :class="{ active: activeSection === 'projects' }"
          @click="scrollToSection('projects', true)"
        >Projets</a>
        <a
          href="#experience"
          :class="{ active: activeSection === 'experience' }"
          @click="scrollToSection('experience', true)"
        >Expériences</a>
        <a
          href="#contact"
          :class="{ active: activeSection === 'contact' }"
          @click="scrollToSection('contact', true)"
        >Contact</a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const menuOpen = ref(false)
const activeSection = ref("home")

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// ✅ Fonction améliorée pour forcer le scroll fluide vers la section même si on est déjà dessus
const scrollToSection = (id, isMobile = false) => {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // ferme le menu mobile après clic
  if (isMobile) closeMenu()
}

let observer = null

onMounted(() => {
  // Observer pour détecter la section visible (active)
  const sections = document.querySelectorAll("section[id]")
  const options = { root: null, threshold: 0.5 }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  sections.forEach((section) => observer.observe(section))

  // ✅ Scroll initial si l'utilisateur arrive avec un hash (ex: #contact)
  const hash = window.location.hash.replace("#", "")
  if (hash) {
    const target = document.getElementById(hash)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 300)
    }
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
