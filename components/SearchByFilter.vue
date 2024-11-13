<template>
  <div class="w-full mt-20 bg-white text-center sticky py-4 top-20 z-50 container__bar">
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
    
    <!-- Sliding container below the SVG with smooth transition -->
    <div
      :class="['slide-container', { open: isContainerVisible }]"
    >
      <div class="content">
        <p>Your filter options go here...</p>
        <!-- Add your filter form or content here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContainerVisible: false // Controls the visibility of the sliding container
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
/* Base styles for the sliding container */
.slide-container {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, padding 0.5s ease;
  background-color: #f3f3f3;
  padding: 0 10px; /* padding initially set to zero */
  opacity: 0; /* Initial opacity */
}

/* Expanded state with full height and opacity */
.slide-container.open {
  max-height: 300px; /* Adjust based on content size */
  padding: 10px;
  opacity: 1;
}

/* Smooth opacity transition for the content */
.content {
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
}

/* Hide content when container is closed */
.slide-container:not(.open) .content {
  opacity: 0;
}


@media (max-width: 568px) {

.container__bar {
    display: none;
}

}


</style>
