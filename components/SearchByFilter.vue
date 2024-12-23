<template>
  <div class="w-full mt-0 bg-white text-center sticky py-4 px-0 top-16 container__bar">
    <div class="flex items-center justify-center gap-5 ">
      <h4 class="font-semibold">Search properties by filter</h4>
      <!-- Click event on the SVG to toggle container visibility -->
      <svg
        @click="toggleContainer"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
      >
        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 12L17 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 17H13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div
      :class="['slide-container', { open: isContainerVisible }]"
    >
      <div class="content">
        <div>
          <span class="cursor-pointer hover:opacity-55">For rent</span>
        </div>

        <div>
          <span class="cursor-pointer hover:opacity-55">For sale</span>
        </div>

        <div>
          <span class="cursor-pointer hover:opacity-55">Location</span>
        </div>
        <div>
          <span class="cursor-pointer hover:opacity-55">Sort</span>
        </div>
        <div>
          <span class="cursor-pointer hover:opacity-55">Bedrooms</span>
        </div>
         <div>
          <span class="cursor-pointer hover:opacity-55">Bathrooms</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContainerVisible: false 
    };
  },
  methods: {
    toggleContainer() {
      this.isContainerVisible = !this.isContainerVisible;
    }
  }
};
</script>

<style scoped>
.slide-container {
  max-height: 0;
  width: 600px;
  margin: auto;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  /* background-color: #f3f3f3; */
  padding: 0 10px; /* padding initially set to zero */
  opacity: 0; /* Initial opacity */
}

.slide-container.open {
  max-height: 700px; /* Adjust based on content size */
  padding: 2rem 0 0 0;
  opacity: 1;
}

.content {
  transition: opacity 0.3s ease-in-out;
  display: flex;
  gap: 2rem;
  opacity: 1;
  width: 600px;
  margin: 0;
}

.slide-container:not(.open) .content {
  opacity: 0;
}


@media (max-width: 568px) {

.container__bar {
  margin-right: 2rem;
}

.content {
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-right: 2rem;
  padding-right: 2rem;
 
}

.slide-container {
  /* max-height: 0; */
  width: 400px;
  display: flex;
  flex-wrap: wrap;
   margin-right: 2rem;
  padding-right: 2rem;
  
}

.slide-container.open {
  margin-right: 3rem;
  padding-right: 1rem;
  opacity: 1;
}

}


</style>
