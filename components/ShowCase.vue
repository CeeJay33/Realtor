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

// Reactive variable for dynamic UI attribute
const ui = ref({ item: 'basis-1/3' });

const handleResize = () => {
  if (window.innerWidth <= 490) {
    ui.value = { item: 'basis-1/1' };
  } else {
    ui.value = { item: 'basis-1/3' };
  }
};

onMounted(() => {
  handleResize(); // Set initial value
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
    arrows
    class="templateee"
    dots
    :autoplay="{ delay: 6000 }"
    :items="items"
    :ui="ui"
  >
    <img :src="item" width="350" height="200" class="rounded-lg" />
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
  }
}
</style>
