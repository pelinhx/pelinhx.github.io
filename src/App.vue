<!-- filepath: /Users/pelinho/Desktop/Website Portfolio/portfolio_website/src/App.vue -->
<template>
  <TheNavbar />
  <router-view />
  <FooterSection />
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import FooterSection from './components/FooterSection.vue'
import { onMounted, onBeforeUnmount } from 'vue';

// Function to ensure proper scaling
function resetViewport() {
  // Force the viewport to reset
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  }
}

// Apply on mount and window resize
onMounted(() => {
  resetViewport();
  window.addEventListener('resize', resetViewport);
  
  // Prevent pinch zoom on mobile if that's causing issues
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) { 
      event.preventDefault(); 
    }
  }, { passive: false });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resetViewport);
});
</script>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Your-font', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  overflow-x: hidden; /* Make sure this is consistent */
  width: 100%;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Make sure these are consistent across components */
</style>