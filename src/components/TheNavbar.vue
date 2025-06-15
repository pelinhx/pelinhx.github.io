<template>
  <header :class="{ 'nav-scrolled': isScrolled, 'nav-hidden': isHidden }">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">Pedro Magalhães</router-link>
      </div>
      
      <div class="language-toggle">
        <button 
          @click="setLanguage('en')" 
          :class="{ 'active': currentLanguage === 'en' }"
          aria-label="Switch to English"
        >
          EN
        </button>
        <span class="language-divider">|</span>
        <button 
          @click="setLanguage('pt')" 
          :class="{ 'active': currentLanguage === 'pt' }"
          aria-label="Switch to Portuguese"
        >
          PT
        </button>
      </div>
      
      <div class="burger" :class="{ 'toggle': isNavOpen }" @click="toggleNav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      
      <ul class="nav-links" :class="{ 'nav-active': isNavOpen }">
        <li><router-link @click="closeNav" to="/" exact active-class="active">{{ t('home') }}</router-link></li>
        <li><router-link @click="closeNav" to="/photography" active-class="active">{{ t('photography') }}</router-link></li>
        <li><router-link @click="closeNav" to="/video-editing" active-class="active">{{ t('videoEditing') }}</router-link></li>
        <li><router-link @click="closeNav" to="/sound-music" active-class="active">{{ t('soundMusic') }}</router-link></li>
        <li><router-link @click="closeNav" to="/contact" active-class="active">{{ t('contact') }}</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { userLanguage } from '../composables/userlanguage.js';
import { useRoute } from 'vue-router';

// Get language utilities
const { currentLanguage, setLanguage, t } = userLanguage();
const route = useRoute();

// Navigation state
const isNavOpen = ref(false);
const isScrolled = ref(false);
const isHidden = ref(false);
let lastScrollY = ref(0);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
  
  // Prevent body scrolling when menu is open
  if (isNavOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeNav() {
  isNavOpen.value = false;
  document.body.style.overflow = '';
}

// Close menu when route changes
watch(() => route.path, () => {
  closeNav();
});

// Function to handle scroll events
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Check if user has scrolled enough to change navbar appearance
  isScrolled.value = currentScrollY > 50;
  
  // Hide navbar when scrolling down, show when scrolling up
  if (!isNavOpen.value) {
    isHidden.value = currentScrollY > 150 && currentScrollY > lastScrollY.value;
  }
  
  lastScrollY.value = currentScrollY;
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Handle smooth scrolling for anchor links (like About Me)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile navigation if open
        closeNav();
        
        // Hide navbar when clicking anchor links
        isHidden.value = true;
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add listener for escape key to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isNavOpen.value) {
      closeNav();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--white);
  padding: 1.5rem 0;
  transition: transform 0.3s ease, background-color 0.3s ease, padding 0.3s ease;
}

/* Hide navbar when scrolling down */
.nav-hidden {
  transform: translateY(-100%);
}

/* Change navbar appearance when scrolled */
.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.8rem 0;
}

.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  background-color: transparent;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
}

.logo a {
  color: var(--primary-color);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.logo a:hover {
  opacity: 0.7;
}

/* Updated Language toggle styles */
.language-toggle {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 1002;
  padding: 0.5rem 1.5rem;
  background-color: rgba(245, 245, 245, 0.8);
  border-bottom-left-radius: 5px;
}

.language-toggle button {
  background: none;
  border: none;
  font-size: 0.75rem;
  padding: 0.4rem 0.5rem;
  cursor: pointer;
  color: var(--primary-color);
  opacity: 0.6;
  transition: all 0.2s ease;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.language-toggle button.active {
  opacity: 1;
  font-weight: 500;
}

.language-toggle button:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.language-divider {
  margin: 0 0.4rem;
  opacity: 0.4;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  list-style: none;
  justify-content: center;
}

.nav-links li {
  margin: 0 2.5rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  position: relative;
  padding: 0.5rem 0;
}

.nav-links a:hover, .nav-links a.active {
  font-weight: 500;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--primary-color);
  transition: width 0.2s ease;
}

.nav-links a:hover:after, .nav-links a.active:after {
  width: 100%;
}

.burger {
  display: none;
  cursor: pointer;
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;
}

.burger div {
  width: 20px;
  height: 2px;
  background-color: var(--text-color);
  margin: 4px 0;
  transition: var(--transition);
}

@media screen and (max-width: 768px) {
  header {
    padding: 0;
  }
  
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6%;
    width: 100%;
  }
  
  .logo {
    margin-bottom: 0;
    font-size: 1rem;
    z-index: 1001;
    position: relative;
  }
  
  .language-toggle {
    top: 0.8rem;
    right: 3.5rem;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .language-toggle button {
    padding: 0.2rem;
    font-size: 0.7rem;
  }
  
  .nav-links {
    position: fixed;
    right: 0;
    height: 100vh;
    top: 0;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.4s ease;
    z-index: 999;
  }
  
  .nav-links li {
    margin: 1.5rem 0;
    opacity: 1;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(10px);
  }
  
  .nav-active {
    transform: translateX(0%);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  }
  
  .nav-active li {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
  }
  
  .burger {
    display: block;
  }
  
  /* Burger animation */
  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 5px);
  }
  
  .toggle .line2 {
    opacity: 0;
  }
  
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -5px);
  }
}
</style>