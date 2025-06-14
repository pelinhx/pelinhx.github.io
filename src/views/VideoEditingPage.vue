<!-- filepath: /Users/pelinho/Desktop/Website Portfolio/portfolio_website/src/views/VideoEditingPage.vue -->
<template>
      <section class="portfolio-header">
        <div class="container">
          <h1 class="section-title">{{ t('videoEditing') }}</h1>
          <p class="section-intro">{{ t('videoEditingIntro') }}</p>
        </div>
      </section>
      
      <section class="video-showcase">
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
                  <i class="fab fa-youtube"></i>
                  <span class="view-text">Watch on YouTube</span>
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
          
          <!-- Link to see more on YouTube -->
          <div class="see-more">
            <a href="https://www.youtube.com/@pelinhx" target="_blank" rel="noopener noreferrer" class="youtube-button">
              <i class="fab fa-youtube"></i> See More on YouTube
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
    { id: 'vlogs', label: 'Vlogs' },
    { id: 'projects', label: 'Projects' }
  ];
  
  const activeFilter = ref('all');
  
  const setFilter = (filterId) => {
    activeFilter.value = filterId;
  };
  
  // Portfolio projects data
  const projects = ref([
  { 
      id: 11,
      link: "https://youtu.be/5uM5FZ2n9R4", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_20.jpg",
      title: "Short Film: LOVE", 
      description: "In LOVE we try to break down the relationship between the different types of love, as well as investigate if the parameters appear differently in people who are in a relationship versus people who are single.",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 1,
      link: "https://youtu.be/5uM5FZ2n9R4", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_6.jpg",
      title: "Short Film: Disconnected", 
      description: "A cinematic exploration of different viewpoints",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 4,
      link: "https://www.youtube.com/playlist?list=PLGehBi5705V6fl_Tl3Z2o-tsi5ZyKzeMz", 
      thumbnail: import.meta.env.BASE_URL + "images/video/vlog_thumbnail_4.jpg",
      title: "Vilnius Vlog", 
      description: "Vlog style documentation of a BIP mobility to Vilnius",
      category: "vlogs",
      categoryLabel: "Vlogs"
    },
    { 
      id: 8,
      link: "https://youtu.be/KJhj731-hTE", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_4.jpg",
      title: "Sensory Museum", 
      description: "Project about sensory overload",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 9,
      link: "https://youtu.be/JW4VAU61jkk", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_5.jpg",
      title: "Motion 2 Emotion", 
      description: "Motion 2 Emotion is a multimedia project focused on social interaction, designed to enhance people's understanding of body language and facial expressions.",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 2,
      link: "https://youtu.be/JaeCGASsue0", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_3.jpg",
      title: "Commercial: Coinbase Brand Video", 
      description: "A small advertisement for Coinbase",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 6,
      link: "https://youtu.be/Mgcu2B-uwFA", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_2.jpg",
      title: "Tubarão Alheira Trailer", 
      description: "A reimagination of a trailer for the horror saga featuring the mythical creature Tubarão Alheira",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 5,
      link: "https://youtu.be/JNikfaJPYDM", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_1.jpg",
      title: "The Ritual", 
      description: "A short animation done in blender",
      category: "projects",
      categoryLabel: "Projects"
    },
    { 
      id: 11,
      link: "https://www.youtube.com/playlist?list=PLGehBi5705V70yFniXWxyiNesFyZ8hrbE", 
      thumbnail: import.meta.env.BASE_URL + "images/video/project_thumbnail_10.jpg",
      title: "Paris Vlog 2022", 
      description: "A short trip to Paris captured in video",
      category: "vlogs",
      categoryLabel: "Vlogs"
    },
    { 
      id: 3,
      link: "https://www.youtube.com/playlist?list=PLGehBi5705V5QTsmwJdxzzSbT-8_JuSXz", 
      thumbnail: import.meta.env.BASE_URL + "images/video/vlog_thumbnail_3.jpg",
      title: "Vlog Buçaco", 
      description: "A series of videos while exploring Serra do Buçaco in Portugal.",
      category: "vlogs",
      categoryLabel: "Vlogs"
    },
    { 
      id: 10,
      link: "https://www.youtube.com/playlist?list=PLGehBi5705V5PuFw6mpMnEqTQUD2yTuld", 
      thumbnail: import.meta.env.BASE_URL + "images/video/vlog_thumbnail_2.jpg",
      title: "Paris Vlog 2", 
      description: "Capturing a vacation on Paris",
      category: "vlogs",
      categoryLabel: "Vlogs"
    }
  ]);
  
  // Filter projects by category
  const filteredProjects = computed(() => {
    if (activeFilter.value === 'all') {
      return projects.value;
    }
    return projects.value.filter(project => project.category === activeFilter.value);
  });
  
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
  
  /* See More Button */
  .see-more {
    text-align: center;
    margin: 2rem 0 4rem;
  }
  
  .youtube-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #FF0000; /* YouTube red */
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    transition: transform 0.3s ease;
  }
  
  .youtube-button:hover {
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
  }
  </style>