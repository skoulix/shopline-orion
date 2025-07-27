<template>
  <footer class="site-footer">
    <!-- Newsletter Section -->
    <div v-if="showNewsletter" class="newsletter-section">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h3 class="text-xl font-semibold mb-2">{{ newsletterTitle }}</h3>
            <p class="text-gray-600">{{ newsletterDescription }}</p>
          </div>
          <form @submit.prevent="handleNewsletterSubmit" class="newsletter-form">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="newsletter-input"
              :disabled="isSubmitting"
            >
            <button
              type="submit"
              class="newsletter-button"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Subscribe</span>
              <span v-else>Subscribing...</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-column">
            <h4 class="footer-heading">{{ companyName }}</h4>
            <p class="text-gray-600 mb-4">{{ companyDescription }}</p>
            <div v-if="socialLinks.length > 0" class="social-links">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :aria-label="social.name"
                class="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <component :is="getSocialIcon(social.name)" />
              </a>
            </div>
          </div>

          <!-- Footer Links -->
          <div
            v-for="column in footerColumns"
            :key="column.title"
            class="footer-column"
          >
            <h4 class="footer-heading">{{ column.title }}</h4>
            <ul class="footer-links">
              <li v-for="link in column.links" :key="link.title">
                <a :href="link.url" class="footer-link">
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div v-if="showContact" class="footer-column">
            <h4 class="footer-heading">Contact</h4>
            <div class="contact-info">
              <p v-if="contactEmail" class="contact-item">
                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ contactEmail }}
              </p>
              <p v-if="contactPhone" class="contact-item">
                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ contactPhone }}
              </p>
              <p v-if="contactAddress" class="contact-item">
                <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ contactAddress }}
              </p>
            </div>
          </div>
        </div>

        <!-- Payment Methods -->
        <div v-if="paymentMethods.length > 0" class="payment-methods">
          <h4 class="text-sm font-medium text-gray-700 mb-3">Accepted Payment Methods</h4>
          <div class="payment-icons">
            <img
              v-for="method in paymentMethods"
              :key="method"
              :src="`/assets/payment/${method}.svg`"
              :alt="method"
              class="payment-icon"
            >
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} {{ companyName }}. All rights reserved.
          </p>
          <div class="footer-bottom-links">
            <a href="/pages/privacy-policy" class="footer-bottom-link">Privacy Policy</a>
            <a href="/pages/terms-of-service" class="footer-bottom-link">Terms of Service</a>
            <a href="/pages/refund-policy" class="footer-bottom-link">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, h } from 'vue'

const props = defineProps({
  companyName: {
    type: String,
    default: 'Orion Store'
  },
  companyDescription: {
    type: String,
    default: 'Your trusted online shopping destination'
  },
  showNewsletter: {
    type: Boolean,
    default: true
  },
  newsletterTitle: {
    type: String,
    default: 'Subscribe to our newsletter'
  },
  newsletterDescription: {
    type: String,
    default: 'Get the latest updates on new products and upcoming sales'
  },
  footerColumns: {
    type: Array,
    default: () => []
  },
  socialLinks: {
    type: Array,
    default: () => []
  },
  showContact: {
    type: Boolean,
    default: true
  },
  contactEmail: {
    type: String,
    default: ''
  },
  contactPhone: {
    type: String,
    default: ''
  },
  contactAddress: {
    type: String,
    default: ''
  },
  paymentMethods: {
    type: Array,
    default: () => []
  }
})

const email = ref('')
const isSubmitting = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const handleNewsletterSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Submit newsletter form
    const formData = new FormData()
    formData.append('email', email.value)
    
    const response = await fetch('/contact#newsletter', {
      method: 'POST',
      body: formData
    })
    
    if (response.ok) {
      email.value = ''
      alert('Thank you for subscribing!')
    } else {
      alert('An error occurred. Please try again.')
    }
  } catch (error) {
    console.error('Newsletter submission error:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const getSocialIcon = (name) => {
  const icons = {
    facebook: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })
    ]),
    twitter: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' })
    ]),
    instagram: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z' })
    ]),
    youtube: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' })
    ])
  }
  
  return icons[name.toLowerCase()] || icons.facebook
}
</script>

<style scoped>
.site-footer {
  @apply bg-gray-50 text-gray-700;
}

.newsletter-section {
  @apply bg-gray-900 text-white py-12;
}

.newsletter-content {
  @apply flex flex-col md:flex-row items-center justify-between gap-6;
}

.newsletter-text {
  @apply flex-1;
}

.newsletter-form {
  @apply flex w-full md:w-auto;
}

.newsletter-input {
  @apply flex-1 md:w-80 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500;
}

.newsletter-button {
  @apply px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-r-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed;
}

.footer-main {
  @apply py-12;
}

.footer-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8;
}

.footer-column {
  @apply space-y-4;
}

.footer-heading {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.footer-links {
  @apply space-y-2;
}

.footer-link {
  @apply text-gray-600 hover:text-gray-900 transition-colors;
}

.social-links {
  @apply flex space-x-4;
}

.social-link {
  @apply w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all;
}

.contact-info {
  @apply space-y-2 text-gray-600;
}

.contact-item {
  @apply flex items-start;
}

.payment-methods {
  @apply py-6 border-t border-gray-200;
}

.payment-icons {
  @apply flex flex-wrap gap-3;
}

.payment-icon {
  @apply h-8 w-auto opacity-60 hover:opacity-100 transition-opacity;
}

.footer-bottom {
  @apply pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4;
}

.copyright {
  @apply text-sm text-gray-600;
}

.footer-bottom-links {
  @apply flex flex-wrap gap-4 text-sm;
}

.footer-bottom-link {
  @apply text-gray-600 hover:text-gray-900 transition-colors;
}
</style>