<template>
  <TheNavbar />
  <MainLayout>
    <router-view />
  </MainLayout>
  <FooterSection />
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import FooterSection from './components/FooterSection.vue'
import MainLayout from './components/MainLayout.vue'
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