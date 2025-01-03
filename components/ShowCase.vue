<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = [
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-00-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-02-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/living-00-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Beautiful-House-1240x720.jpg',
];

// Reactive variables for dynamic UI attributes and arrow visibility
const ui = ref({ item: 'basis-1/3' });
const showArrows = ref(true);

const handleResize = () => {
  if (window.innerWidth <= 490) {
    ui.value = { item: 'basis-1/1' };
    showArrows.value = false; // Hide arrows on mobile
  } else {
    ui.value = { item: 'basis-1/3' };
    showArrows.value = true; // Show arrows on larger screens
  }
};

onMounted(() => {
  handleResize(); // Set initial values
  window.addEventListener('resize', handleResize); // Listen for window resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize); // Clean up listener
});
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    :arrows="showArrows"
    class="templateee"
    dots
    :autoplay="{ delay: 6000 }"
    :items="items"
    :ui="ui"
  >
    <img :src="item" width="350" class="rounded-lg" />
  </UCarousel>
</template>

<style>
.templateee {
  width: 70%;
  margin: 3rem auto;
}

@media (max-width: 490px) {
  .templateee {
    width: 100%;
    margin: 5rem auto;
    padding: 0 7px;
  }

  .templateee img {
    width: 100%;
    height: 450px;
  }
}
</style>
