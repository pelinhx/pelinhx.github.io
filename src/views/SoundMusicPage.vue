<template>
      <section class="portfolio-header">
        <div class="container">
          <h1 class="section-title">{{ t('soundMusic') }}</h1>
          <p class="section-intro">{{ t('soundMusicIntro') }}</p>
        </div>
      </section>
      
      <section class="audio-showcase">
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
          
          <!-- Portfolio Grid -->
          <div class="portfolio-grid">
            <div v-for="(project, index) in filteredProjects" :key="index" class="project-card">
              <div class="project-thumbnail" :style="{ backgroundImage: `url(${project.thumbnail})` }">
                <div class="project-overlay" @click="openProject(project)">
                  <i :class="getProviderIcon(project.provider)"></i>
                  <span class="view-text">View Project</span>
                </div>
              </div>
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-category">
                  <span class="category-badge">{{ project.categoryLabel }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Link to see more on social media -->
          <div class="see-more">
            <a href="https://www.instagram.com/pelinhx/" target="_blank" rel="noopener noreferrer" class="instagram-button">
              <i class="fab fa-instagram"></i> See More on Instagram
            </a>
            <a href="https://soundcloud.com/pelinhx" target="_blank" rel="noopener noreferrer" class="soundcloud-button">
              <i class="fab fa-soundcloud"></i> Listen on SoundCloud
            </a>
          </div>
        </div>
      </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { userLanguage } from '../composables/userlanguage.js';
  
  const { t } = userLanguage();
  
  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'soundSynthesis', label: 'Sound Synthesis' },
    { id: 'soundDesign', label: 'Sound Design/Soundscape' }
  ];
  
  const activeFilter = ref('all');
  
  const setFilter = (filterId) => {
    activeFilter.value = filterId;
  };
  
  // Portfolio projects data
  const projects = ref([
    // Sound Synthesis Projects (Instagram)
    { 
      id: 1,
      provider: 'instagram',
      link: "https://www.instagram.com/reel/DBMLud7IuT_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", 
      thumbnail: "images/sound/synthesis_1.jpg",
      title: "Haunted Caving Experience on Minecraft", 
      description: "Creative sound synthesis exploration with modular system",
      category: "soundSynthesis",
      categoryLabel: "Sound Synthesis"
    },
    { 
      id: 2,
      provider: 'instagram',
      link: "https://www.instagram.com/reel/DBMLhHxo1SA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", 
      thumbnail: "images/sound/synthesis_2.jpg",
      title: "Eeriescape", 
      description: "Experimental synthesis techniques for ambient textures",
      category: "soundSynthesis",
      categoryLabel: "Sound Synthesis"
    },
    { 
      id: 3,
      provider: 'instagram',
      link: "https://www.instagram.com/reel/DBKhw5toYtt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", 
      thumbnail: "images/sound/synthesis_3.jpg",
      title: "Minecraft Haunted Maze", 
      description: "Exploring sonic possibilities through synthesis",
      category: "soundSynthesis",
      categoryLabel: "Sound Synthesis"
    },
    
    // Sound Design/Soundscape Projects
    { 
      id: 4,
      provider: 'soundcloud',
      link: "https://soundcloud.com/pelinhx/horrorscape-4-demoo", 
      thumbnail: "images/sound/horrorscape.jpg",
      title: "Horrorscape", 
      description: "Atmospheric horror soundscape design for an immersive experience",
      category: "soundDesign",
      categoryLabel: "Sound Design/Soundscape"
    },
    { 
      id: 5,
      provider: 'youtube',
      link: "https://youtu.be/oHklDEB9wDI", 
      thumbnail: "images/sound/youtube_sound.jpg",
      title: "pov: you're 12 and this is your first time on minecraft", 
      description: "Experimental sound design for visual media",
      category: "soundDesign",
      categoryLabel: "Sound Design/Soundscape"
    },
    { 
      id: 6,
      provider: 'soundcloud',
      link: "https://soundcloud.com/pelinhx/avistamento-tubarao-alheira", 
      thumbnail: "images/sound/tubarao_alheira.jpg",
      title: "Avistamento Tubarão Alheira", 
      description: "Creative soundscape composition blending natural and synthetic elements",
      category: "soundDesign",
      categoryLabel: "Sound Design/Soundscape"
    }
  ]);
  
  // Filter projects by category
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
      return projects.value;
    }
    return projects.value.filter(project => project.category === activeFilter.value);
  });
  
  // Get the appropriate icon class based on the content provider
  function getProviderIcon(provider) {
    switch (provider) {
      case 'instagram':
        return 'fab fa-instagram';
      case 'youtube':
        return 'fab fa-youtube';
      case 'soundcloud':
        return 'fab fa-soundcloud';
      default:
        return 'fas fa-play';
    }
  }
  
  // Open project in new tab
  function openProject(project) {
    window.open(project.link, '_blank', 'noopener,noreferrer');
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
    grid-template-columns: repeat(2, 1fr); /* 2 columns layout */
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .project-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: var(--white);
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .project-thumbnail {
    height: 240px;
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
    cursor: pointer;
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
  
  .project-info p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    opacity: 0.8;
    line-height: 1.5;
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
  
  /* See More Buttons */
  .see-more {
    text-align: center;
    margin: 2rem 0 4rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
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
  
  .soundcloud-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(45deg, #ff7700 0%, #ff3300 100%);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    transition: transform 0.3s ease;
  }
  
  .instagram-button:hover, .soundcloud-button:hover {
    transform: translateY(-3px);
  }
  
  /* Responsive adjustments */
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
    
    .see-more {
      flex-direction: column;
      gap: 1rem;
    }
  }
  </style>