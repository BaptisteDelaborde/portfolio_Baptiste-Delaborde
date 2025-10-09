<template>
  <section class="home">
    <div class="home-container">
      <!-- Photo de profil -->
      <div class="photo">
       <!-- <img src="@/assets/photo.jpg" alt="Baptiste Delaborde" /> -->
      </div>

      <!-- Texte et boutons -->
      <div class="intro">
        <h1>
          Bonjour, je suis <br />
          <span class="gradient">Baptiste Delaborde</span>
        </h1>
        <h2>Développeur web & mobile. Étudiant.</h2>
        <p>
          Passionné et rigoureux, je suis étudiant en BUT Informatique à l’IUT
          Nancy-Charlemagne. J’aime concevoir des applications modernes,
          performantes et centrées sur l’expérience utilisateur.
        </p>

        <div class="home-buttons">
          <a href="#contact" class="btn primary">Me contacter</a>
          <a href="https://github.com/BaptisteDelaborde" target="_blank" class="btn secondary">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank" class="btn secondary">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll -->
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <p>Défiler pour découvrir</p>
    </div>

  </section>
</template>

