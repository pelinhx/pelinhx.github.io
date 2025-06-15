<template>
    <main>
      <section class="contact">
        <div class="container">
          <h1 class="section-title">{{ t('contactMe') }}</h1>
          
          <div class="contact-content">
            <div class="contact-info">
              <p class="contact-intro">{{ t('contactIntro') }}</p>
              
              <div class="contact-email">
                <h3>{{ t('email') }}</h3>
                <a href="mailto:pedrobastosmagalhaes@outlook.com" class="email-link">
                  pedrobastosmagalhaes@outlook.com
                </a>
              </div>
              
              <div class="contact-item">
                <h3>{{ t('location') }}</h3>
                <p>Porto, Portugal</p>
              </div>
              
              <div class="contact-item">
                <h3>{{ t('socialMedia') }}</h3>
                <div class="social-links">
                  <a href="https://www.instagram.com/pelinhx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@pelinhx" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/pedro-magalhães-442675233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { userLanguage } from '../composables/userlanguage.js';
  
  const { t } = userLanguage();
  </script>
  
  <style>
  .contact {
    padding: 8rem 0;
    text-align: center;
    width: 100%;
  }
  
  .container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--container-padding);
    width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
    font-weight: 500;
  }
  
  .contact-content {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  
  .contact-info {
    max-width: 600px;
  }
  
  .contact-intro {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 3rem;
  }
  
  .contact-email {
    margin-bottom: 2.5rem;
    padding: 2rem;
    background-color: var(--light-bg);
    border-radius: 4px;
  }
  
  .contact-item {
    margin-bottom: 2.5rem;
  }
  
  .contact-email h3,
  .contact-item h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  .email-link {
    display: inline-block;
    font-size: 1.2rem;
    color: var(--text-color);
    text-decoration: underline;
    transition: color 0.3s ease;
    margin-top: 0.5rem;
    word-break: break-all; /* Ensures email address doesn't overflow on mobile */
  }
  
  .email-link:hover {
    color: var(--primary-color);
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    font-size: 1.5rem;
    color: var(--text-color);
    transition: all 0.3s ease;
  }
  
  .social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
  
  @media screen and (max-width: 768px) {
    .contact {
      padding: 5rem 0;
    }
    
    .contact-intro {
      font-size: 1.1rem;
    }
    
    .email-link {
      font-size: 1.1rem;
    }
  }
  </style>