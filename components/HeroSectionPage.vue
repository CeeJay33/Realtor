




<script setup lang="ts">
const items = [
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/office-working-space-scaled.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/spacejoy-scaled.jpg',
  'https://photos.zillowstatic.com/fp/39c802b21c681f393d9730784c6d2695-p_f.jpg',
  'https://photos.zillowstatic.com/fp/abc60a68461a328e9c1f377130b5b94d-p_f.jpg',
  'https://photos.zillowstatic.com/fp/6889a0da8a0eaf4229fa611cdf0b0035-p_f.jpg'
]
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows dots>
    <!-- <CoolSEarch/> -->
    <img :src="item" class="w-full compp" draggable="false" >
  </UCarousel>
</template>


<style>

.compp{
  height: 50rem;
}


@media (max-width: 493px){
  .compp{
  height: 30rem;
}
}
</style>
