<!-- filepath: /Users/pelinho/Desktop/Website Portfolio/portfolio_website/src/views/HomePage.vue -->
<template>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>{{ t('hello') }} <span class="highlight">Pedro Magalhães</span></h1>
            <h2>{{ t('multimediaArtist') }}</h2>
            <p>{{ t('tagline') }}</p>
            <div class="cta-buttons">
              <a href="#about" class="btn primary-btn">{{ t('aboutMe') }}</a>
              <button @click="togglePortfolioMenu" class="btn secondary-btn portfolio-btn">
                {{ t('viewPortfolio') }}
                <span class="dropdown-arrow" :class="{ 'arrow-up': showPortfolioMenu }">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </button>
              
              <!-- Portfolio Options Menu -->
              <div class="portfolio-menu" v-if="showPortfolioMenu" ref="portfolioMenu">
                <router-link to="/photography" class="portfolio-option">
                  <div class="portfolio-icon"><i class="fas fa-camera"></i></div>
                  <div class="portfolio-text">
                    <h3>{{ t('photography') }}</h3>
                    <p>{{ t('photographyDesc') }}</p>
                  </div>
                </router-link>
                <router-link to="/video-editing" class="portfolio-option">
                  <div class="portfolio-icon"><i class="fas fa-video"></i></div>
                  <div class="portfolio-text">
                    <h3>{{ t('videoEditing') }}</h3>
                    <p>{{ t('videoEditingDesc') }}</p>
                  </div>
                </router-link>
                <router-link to="/sound-music" class="portfolio-option">
                  <div class="portfolio-icon"><i class="fas fa-music"></i></div>
                  <div class="portfolio-text">
                    <h3>{{ t('soundMusic') }}</h3>
                    <p>{{ t('soundMusicDesc') }}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <img :src="profileImagePath" alt="Pedro Magalhães - Portrait">
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">{{ t('aboutMeTitle') }}</h2>
        <div class="about-content">
          <div class="about-text">
            <p>{{ t('aboutMeText1') }}</p>
            <p>{{ t('aboutMeText2') }}</p>
            <div class="skills">
              <div class="skill-category">
                <h3>{{ t('videoEditingSkill') }}</h3>
                <p>{{ t('videoEditingDesc') }}</p>
              </div>
              <div class="skill-category">
                <h3>{{ t('photographySkill') }}</h3>
                <p>{{ t('photographyDesc') }}</p>
              </div>
              <div class="skill-category">
                <h3>{{ t('soundMusicSkill') }}</h3>
                <p>{{ t('soundMusicDesc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Background overlay for closing menu -->
    <div class="portfolio-overlay" v-if="showPortfolioMenu" @click="closePortfolioMenu"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { userLanguage } from '../composables/userlanguage.js';

const { t } = userLanguage();

const profileImagePath = computed(() => {
  return import.meta.env.PROD 
    ? '/portfolio-website/assets/profile-photo.jpg' 
    : '/src/assets/profile-photo.jpg';
});

// Portfolio menu state
const showPortfolioMenu = ref(false);
const portfolioMenu = ref(null);

// Toggle portfolio menu visibility
function togglePortfolioMenu() {
  showPortfolioMenu.value = !showPortfolioMenu.value;
}

// Close portfolio menu
function closePortfolioMenu() {
  showPortfolioMenu.value = false;
}

// Handle clicking outside to close menu
function handleClickOutside(event) {
  if (portfolioMenu.value && !portfolioMenu.value.contains(event.target) && 
      !event.target.classList.contains('portfolio-btn') && 
      !event.target.closest('.portfolio-btn')) {
    closePortfolioMenu();
  }
}

// Close menu on escape key
function handleEscKey(event) {
  if (event.key === 'Escape' && showPortfolioMenu.value) {
    closePortfolioMenu();
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleEscKey);
});
</script>

<style>
/* Hero Section */
.hero {
  padding: 6rem 0;
  background-color: var(--light-bg);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  padding-right: 2rem;
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.hero-text h2 {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.hero-text p {
  font-size: 1rem;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.highlight {
  font-weight: 500;
}

.hero-image {
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.hero-image img:hover {
  filter: grayscale(0%);
}

/* Buttons */
.cta-buttons {
  display: flex;
  gap: 2rem;
  position: relative;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
  font-weight: 400;
  transition: var(--transition);
  border: none;
  background: none;
  cursor: pointer;
}

.primary-btn {
  background-color: var(--primary-color);
  color: var(--white);
}

.primary-btn:hover {
  background-color: #333;
}

.secondary-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.secondary-btn:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

/* Portfolio Button and Menu */
.portfolio-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.dropdown-arrow {
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.arrow-up {
  transform: rotate(180deg);
}

.portfolio-menu {
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 350px;
  z-index: 100;
  overflow: hidden;
  animation: fadeIn 0.3s ease;
}

.portfolio-option {
  display: flex;
  align-items: center;
  padding: 1.2rem;
  transition: background-color 0.2s ease;
  text-decoration: none;
  color: var(--text-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.portfolio-option:last-child {
  border-bottom: none;
}

.portfolio-option:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.portfolio-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--light-bg);
  border-radius: 50%;
  margin-right: 1rem;
  color: var(--primary-color);
}

.portfolio-text {
  flex: 1;
}

.portfolio-text h3 {
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: var(--primary-color);
}

.portfolio-text p {
  font-size: 0.8rem;
  margin-bottom: 0;
  color: var(--secondary-color);
  line-height: 1.4;
}

.portfolio-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* About Section */
.about {
  padding: 8rem 0;
  background-color: var(--white);
}

.section-title {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 5rem;
  color: var(--primary-color);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.about-content {
  display: flex;
  justify-content: center;
}

.about-text {
  max-width: 800px;
}

.about-text p {
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.8;
}

.skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;
}

.skill-category {
  position: relative;
}

.skill-category h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.skill-category p {
  font-size: 0.9rem;
  line-height: 1.8;
}

/* Responsive Styles */
@media screen and (max-width: 1024px) {
  .hero-content {
    gap: 2rem;
  }
  
  .hero-text {
    padding-right: 0;
  }
  
  .skills {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .hero-text {
    text-align: center;
    padding-right: 0;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .portfolio-menu {
    width: 300px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .skills {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media screen and (max-width: 480px) {
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .portfolio-menu {
    width: 100%;
    max-width: 300px;
  }
  
  .portfolio-icon {
    width: 30px;
    height: 30px;
  }
}
</style>