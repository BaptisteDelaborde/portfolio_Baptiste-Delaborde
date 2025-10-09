<template>
  <section id="skills" class="skills">
    <h2 class="section-title">
      Mes <span class="gradient">compétences</span>
    </h2>
    <p class="subtitle">
      Une expertise diversifiée en développement et conception de solutions informatiques
    </p>

    <!-- Groupe principal -->
    <div class="skills-grid">
      <!-- Langages & Frameworks -->
      <div class="skills-card">
        <div class="card-header">
          <i class="fas fa-code"></i>
          <h3>Langages & Frameworks</h3>
        </div>
        <ul>
          <li><span>Java</span><div class="bar java" style="--w: 85%"></div><span class="percent">85%</span></li>
          <li><span>PHP</span><div class="bar php" style="--w: 75%"></div><span class="percent">75%</span></li>
          <li><span>Python</span><div class="bar python" style="--w: 80%"></div><span class="percent">80%</span></li>
          <li><span>HTML/CSS</span><div class="bar html" style="--w: 90%"></div><span class="percent">90%</span></li>
          <li><span>Symfony</span><div class="bar symfony" style="--w: 70%"></div><span class="percent">70%</span></li>
          <li><span>JavaScript</span><div class="bar js" style="--w: 80%"></div><span class="percent">80%</span></li>
          <li><span>Vue.js</span><div class="bar vue" style="--w: 65%"></div><span class="percent">65%</span></li>
          <li><span>Node.js</span><div class="bar node" style="--w: 70%"></div><span class="percent">70%</span></li>
        </ul>
      </div>

      <!-- Bases de données -->
      <div class="skills-card">
        <div class="card-header">
          <i class="fas fa-database"></i>
          <h3>Bases de données</h3>
        </div>
        <ul>
          <li><span>MySQL</span><div class="bar mysql" style="--w: 85%"></div><span class="percent">85%</span></li>
          <li><span>Oracle</span><div class="bar oracle" style="--w: 65%"></div><span class="percent">65%</span></li>
          <li><span>SQL</span><div class="bar sql" style="--w: 80%"></div><span class="percent">80%</span></li>
          <li><span>JDBC/PDO</span><div class="bar jdbc" style="--w: 75%"></div><span class="percent">75%</span></li>
        </ul>
      </div>

      <!-- Systèmes & Réseaux -->
      <div class="skills-card">
        <div class="card-header">
          <i class="fas fa-network-wired"></i>
          <h3>Systèmes & Réseaux</h3>
        </div>
        <ul>
          <li><span>Windows</span><div class="bar windows" style="--w: 85%"></div><span class="percent">85%</span></li>
          <li><span>Unix/Linux</span><div class="bar linux" style="--w: 75%"></div><span class="percent">75%</span></li>
          <li><span>TCP/IP</span><div class="bar tcp" style="--w: 70%"></div><span class="percent">70%</span></li>
          <li><span>Docker</span><div class="bar docker" style="--w: 60%"></div><span class="percent">60%</span></li>
          <li><span>Virtualisation</span><div class="bar vm" style="--w: 65%"></div><span class="percent">65%</span></li>
        </ul>
      </div>

      <!-- Outils & Méthodologies -->
      <div class="skills-card">
        <div class="card-header">
          <i class="fas fa-cogs"></i>
          <h3>Outils & Méthodologies</h3>
        </div>
        <ul>
          <li><span>Git</span><div class="bar git" style="--w: 90%"></div><span class="percent">90%</span></li>
          <li><span>JUnit</span><div class="bar junit" style="--w: 75%"></div><span class="percent">75%</span></li>
          <li><span>PHPUnit</span><div class="bar phpunit" style="--w: 70%"></div><span class="percent">70%</span></li>
          <li><span>UML</span><div class="bar uml" style="--w: 85%"></div><span class="percent">85%</span></li>
          <li><span>Agile</span><div class="bar agile" style="--w: 80%"></div><span class="percent">80%</span></li>
          <li><span>MVC</span><div class="bar mvc" style="--w: 90%"></div><span class="percent">90%</span></li>
        </ul>
      </div>
    </div>

    <!-- Compétences personnelles -->
    <div class="skills-card large">
      <div class="card-header">
        <i class="fas fa-user-check"></i>
        <h3>Compétences personnelles</h3>
      </div>
      <div class="personal-grid">
        <div class="personal-skill">
          <div class="circle green"><i class="fas fa-check"></i></div>
          <p>Résolution de problèmes</p>
        </div>
        <div class="personal-skill">
          <div class="circle orange"><i class="fas fa-check"></i></div>
          <p>Capacité d'adaptation</p>
        </div>
        <div class="personal-skill">
          <div class="circle blue"><i class="fas fa-check"></i></div>
          <p>Travail en équipe</p>
        </div>
      </div>
    </div>

    <!-- Langues -->
    <div class="skills-card large">
      <div class="card-header">
        <i class="fas fa-language"></i>
        <h3>Langues</h3>
      </div>
      <div class="languages">
        <div class="language">
          <img src="https://flagcdn.com/w80/fr.png" alt="Français" />
          <h4>Français</h4>
          <span class="level">Natif</span>
        </div>
        <div class="language">
          <img src="https://flagcdn.com/w80/gb.png" alt="Anglais" />
          <h4>Anglais</h4>
          <span class="level">B2</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucun script nécessaire pour le moment
</script>
