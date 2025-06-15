<!-- filepath: /Users/pelinho/Desktop/Website Portfolio/portfolio_website/src/views/PhotographyPage.vue -->
<template>
  <section class="portfolio-header">
    <div class="container">
      <h1 class="section-title">{{ t('photography') }}</h1>
      <p class="section-intro">{{ t('photographyIntro') }}</p>
    </div>
  </section>
  
  <section class="portfolio-gallery">
    <div class="container">
      <div class="showcase-filters">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="{ active: activeFilter === category.id }"
          @click="setFilter(category.id)"
        >
          {{ category.label }}
        </button>
      </div>
      
      <div class="portfolio-grid">
        <div v-for="photo in filteredPhotos" :key="photo.id" class="project-card" @click="openInstagramPost(photo.link)">
          <div class="project-thumbnail" :style="{ backgroundImage: `url(${photo.thumbnail})` }">
            <div class="project-overlay">
              <i class="fab fa-instagram"></i>
              <span class="view-text">View on Instagram</span>
            </div>
          </div>
          <div class="project-info">
            <h3>{{ photo.title }}</h3>
            <div class="project-category">
              <span class="category-badge">{{ photo.categoryLabel }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="see-more">
        <a href="https://www.instagram.com/pelinhx/" target="_blank" rel="noopener noreferrer" class="instagram-button">
          <i class="fab fa-instagram"></i> See More on Instagram
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { userLanguage } from '../composables/userlanguage.js';

const { t } = userLanguage();

// Categories with English labels for simplicity
const categories = [
{ id: 'all', label: 'All' },
{ id: 'portrait', label: 'Portrait' },
];

const activeFilter = ref('all');

const setFilter = (filterId) => {
activeFilter.value = filterId;
};

// Photography collection with Instagram links
// Note: You'll need to manually add thumbnails for each post
const photos = ref([
{ 
  id: 1, 
  link: "https://www.instagram.com/p/DChewovNQ4i/?img_index=1", 
  thumbnail: "images/photography/photo1.jpg",
  title: "FIFA street 2, PSP.", 
  category: "portrait",
  categoryLabel: "Portrait"
},
{ 
  id: 2, 
  link: "https://www.instagram.com/p/DCm71DAN730/?img_index=1", 
  thumbnail: "images/photography/photo2.jpg",
  title: "🤝", 
  category: "portrait",
  categoryLabel: "Portrait"
},
{ 
  id: 3, 
  link: "https://www.instagram.com/p/DCuappKNqBn/?img_index=1", 
  thumbnail: "images/photography/photo3.jpg",
  title: "Bloke core.", 
  category: "portrait",
  categoryLabel: "Portrait"
},
{ 
  id: 4, 
  link: "https://www.instagram.com/p/DI4MT-HtRdP/?img_index=1", 
  thumbnail: "images/photography/photo4.jpg",
  title: "Futebol no jardim.", 
  category: "portrait",
  categoryLabel: "Portrait"
},
]);

const filteredPhotos = computed(() => {
if (activeFilter.value === 'all') {
  return photos.value;
}
return photos.value.filter(photo => photo.category === activeFilter.value);
});

// Open Instagram post in a new tab
function openInstagramPost(link) {
window.open(link, '_blank', 'noopener,noreferrer');
}
</script>

<style>
.portfolio-header {
padding: 8rem 0 4rem;
text-align: center;
}

.section-title {
font-size: 2rem;
margin-bottom: 1rem;
color: var(--primary-color);
font-weight: 500;
}

.section-intro {
max-width: 800px;
margin: 0 auto;
font-size: 1.1rem;
line-height: 1.8;
margin-bottom: 2rem;
}

.showcase-filters {
display: flex;
justify-content: center;
gap: 1rem;
margin-bottom: 3rem;
flex-wrap: wrap;
}

.showcase-filters button {
background: none;
border: 1px solid var(--text-color);
padding: 0.5rem 1.2rem;
font-size: 0.9rem;
cursor: pointer;
transition: all 0.3s ease;
}

.showcase-filters button.active {
background-color: var(--primary-color);
color: var(--white);
border-color: var(--primary-color);
}

/* Portfolio Grid Styling */
.portfolio-grid {
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3 columns for photos */
gap: 2rem;
margin-bottom: 4rem;
}

.project-card {
border-radius: 8px;
overflow: hidden;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;
background-color: var(--white);
cursor: pointer;
}

.project-card:hover {
transform: translateY(-5px);
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.project-thumbnail {
height: 0;
padding-bottom: 100%; /* Square aspect ratio for Instagram photos */
background-size: cover;
background-position: center;
position: relative;
}

.project-overlay {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 0;
transition: opacity 0.3s ease;
color: white;
}

.project-overlay i {
font-size: 2rem;
margin-bottom: 1rem;
}

.project-card:hover .project-overlay {
opacity: 1;
}

.view-text {
font-size: 0.9rem;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.05em;
}

.project-info {
padding: 1.5rem;
}

.project-info h3 {
margin-bottom: 0.5rem;
font-size: 1.2rem;
font-weight: 500;
}

.category-badge {
display: inline-block;
background-color: var(--gray);
padding: 0.3rem 0.8rem;
border-radius: 2rem;
font-size: 0.7rem;
text-transform: uppercase;
letter-spacing: 0.05em;
}

/* See More Button */
.see-more {
text-align: center;
margin: 2rem 0 4rem;
}

.instagram-button {
display: inline-flex;
align-items: center;
gap: 0.5rem;
background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
color: white;
padding: 0.8rem 1.5rem;
border-radius: 4px;
font-weight: 500;
transition: transform 0.3s ease;
}

.instagram-button:hover {
transform: translateY(-3px);
}

/* Responsive adjustments */
@media screen and (max-width: 992px) {
.portfolio-grid {
  grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
}
}

@media screen and (max-width: 768px) {
.portfolio-grid {
  grid-template-columns: 1fr; /* Single column on mobile */
}

.portfolio-header {
  padding: 6rem 0 3rem;
}

.showcase-filters {
  gap: 0.5rem;
}

.showcase-filters button {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
}
</style>