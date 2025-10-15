<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">
      Me <span>Contacter</span>
    </h2>

    <div class="contact-container">
      <!-- === INFOS DE CONTACT === -->
      <div class="contact-info">
        <h3>Informations de contact</h3>

        <div class="info-item">
          <i class="fa-solid fa-envelope"></i>
          <div>
            <p class="label">Email</p>
            <a href="mailto:delabordebaptiste8@gmail.com">delabordebaptiste8@gmail.com</a>
          </div>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-phone"></i>
          <div>
            <p class="label">Téléphone</p>
            <a href="tel:+33769075410">07 69 07 54 10</a>
          </div>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <p class="label">Localisation</p>
            <p>Nancy, France</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-share-nodes"></i>
          <div>
            <p class="label">Réseaux sociaux</p>
            <div class="social-links">
              <a href="https://github.com/BaptisteDelaborde" target="_blank">GitHub</a>
              <span>|</span>
              <a href="https://linkedin.com/in/baptiste-delaborde-123412339" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="availability">
          💼 Je suis actuellement à la recherche d’un stage en développement web.
        </div>
      </div>

      <!-- === FORMULAIRE === -->
      <div class="contact-form">
        <h3>Envoyez-moi un message</h3>
        <form ref="form" @submit.prevent="sendEmail">
          <div class="input-row">
            <input type="text" name="name" placeholder="Nom" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <textarea name="message" placeholder="Votre message..." rows="6" required></textarea>

          <button type="submit" class="send-btn" :disabled="loading">
            {{ loading ? "Envoi..." : "📤 Envoyer le message" }}
          </button>
        </form>

        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref(null);
const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const sendEmail = async () => {
  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  // Récupération manuelle des champs
  const formData = {
    from_name: form.value.name.value,
    from_email: form.value.email.value,
    message: form.value.message.value,
  };

  try {
    await emailjs.send(
      "service_3eqckue",     // ✅ Ton Service ID
      "template_shlterp",    // ✅ Ton Template ID
      formData,              // ✅ On envoie les données manuellement
      "MRwdTU6gSBcjIph_J"    // ✅ Ta clé publique EmailJS
    );

    successMessage.value = "Message envoyé avec succès ✅";
    form.value.reset();
  } catch (error) {
    console.error("Erreur EmailJS:", error);
    errorMessage.value = "Une erreur est survenue lors de l'envoi ❌";
  } finally {
    loading.value = false;
  }
};
</script>