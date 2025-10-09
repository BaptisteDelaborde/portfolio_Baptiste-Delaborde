
<script setup>
function handleSubmit() {
  alert("Message envoyé !");
}

import Footer from './Footer.vue';
</script>
<template>
  <section class="contact">
    <div class="contact-container">
      <h2><span class="gradient">Me contacter</span></h2>

      <form class="contact-form">
        <div class="form-row">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit" class="btn primary">Envoyer</button>
      </form>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <p>© 2025 <span class="gradient">Baptiste Delaborde</span> — Tous droits réservés.</p>
        <div class="socials">
          <a href="https://github.com/BaptisteDelaborde" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:delabordebaptiste8@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  </section>
</template>



