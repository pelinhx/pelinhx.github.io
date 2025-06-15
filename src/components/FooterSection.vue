<template>
    <footer>
      <div class="container">
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
        <p class="copyright">© 2025 Pedro Magalhães. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No additional script logic needed for this simple component
  </script>
  
  <style scoped>
  footer {
    background-color: var(--dark-bg);
    color: var(--white);
    padding: 3rem 0;
    text-align: center;
    margin-top: auto;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .social-links {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  
  .social-links a {
    color: var(--white);
    font-size: 1.2rem;
    transition: var(--transition);
    display: inline-block;
  }
  
  .social-links a:hover {
    opacity: 0.7;
    transform: translateY(-3px);
  }
  
  .copyright {
    font-size: 0.8rem;
    opacity: 0.7;
    letter-spacing: 0.05em;
    text-align: center;
    width: 100%;
  }
  </style>