<template>
  <section id="contact" class="contact-section">
    <h2 class="contact-title">Me contacter</h2>

    <form ref="form" @submit.prevent="sendEmail" class="contact-form">
      <div class="form-group">
        <input type="text" name="name" placeholder="Nom" required />
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        required
      ></textarea>

      <button type="submit" class="send-btn" :disabled="loading">
        {{ loading ? "Envoi..." : "Envoyer" }}
      </button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </section>
</template>

<script setup>
import { ref } from "vue"
import emailjs from "@emailjs/browser"

const form = ref(null)
const loading = ref(false)
const successMessage = ref("")
const errorMessage = ref("")

const sendEmail = async () => {
  loading.value = true
  successMessage.value = ""
  errorMessage.value = ""

  try {
    await emailjs.sendForm(
      "service_3eqckue",     // ✅ Ton Service ID
      "template_shlterp",    // ✅ Ton Template ID
      form.value,
      "MRwdTU6gSBcjIph_J"    // ✅ Mets ici ta clé publique EmailJS
    )
    successMessage.value = "Message envoyé avec succès 🎉"
    form.value.reset()
  } catch (error) {
    console.error("Erreur EmailJS:", error)
    errorMessage.value = "Une erreur est survenue lors de l'envoi ❌"
  } finally {
    loading.value = false
  }
}
</script>
