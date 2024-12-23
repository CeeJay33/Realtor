<script setup lang="ts">
const items = [
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/architecture-home-merrick-way-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/bedroom-02-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-00-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/interior-02-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/living-00-1240x720.jpg',
  'https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/Beautiful-House-1240x720.jpg'
]


</script>()

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    class="templateee"
    dots
    :autoplay="{ delay: 6000 }"
    :items="items"
    :ui="{ item: 'basis-1/3' }"
  >
    <img :src="item" width="350" height="200" class="rounded-lg">
  </UCarousel>
</template>

<style>

.templateee{
    width: 70%;
    margin: auto;
}
</style>