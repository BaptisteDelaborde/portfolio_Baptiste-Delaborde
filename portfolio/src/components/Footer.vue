<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        © {{ currentYear }} <span class="gradient">Baptiste Delaborde</span> — Tous droits réservés.
      </p>

      <div class="socials">
        <a href="https://github.com/BaptisteDelaborde" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/tonlinkedin" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:tonmail@gmail.com" aria-label="Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

