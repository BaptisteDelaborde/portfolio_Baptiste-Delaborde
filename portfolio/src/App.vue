<script setup>
import Navbar from './components/Navbar.vue'
import HomeSection from './components/HomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
</script>


<template>
  <div id="app">
    <Navbar />

    <main>
      <section id="home"><HomeSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
      <section><Footer /></section>
    </main>

  </div>
</template>



