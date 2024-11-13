<template>
  <div>
    <nav
      class="w-full fixed bg-white top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 mb-3 flex items-center justify-between z-50"
    >
      <img
        src="/images/logo-design-for-realtor-r-letter-logo-r-logo-by-shihab-logo-designer-dribbble-removebg-preview.png"
        alt="logo"
        class="w-28 cursor-pointer mr-14 "
      />
      <ul
        class="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50"
      >
        <!-- <li><a href="#top">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#work">Our work</a></li>
        <li><a href="#contact">Contact Us</a></li> -->
      </ul>

      <div class="flex items-center gap-4">
        <button>
          <a href="#location">
<svg
                    width="20px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="#1C274C"
                      stroke-width="1.5"
                    />
                    <ellipse
                      cx="12"
                      cy="17"
                      rx="7"
                      ry="4"
                      stroke="#1C274C"
                      stroke-width="1.5"
                    />
                  </svg>
          </a>
        </button>
        <a
          href="#contact"
          class="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 relative"
          >For rent <svg width="20px" height="20px" class="absolute right-4 bottom-1 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a
        >

        <button class="block md:hidden ml-3" @click="toggleMenu">
                <div>
                   <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Menu / Menu_Alt_03">
<path id="Vector" d="M5 17H13M5 12H19M5 7H13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
                </div>
        </button>
      </div>

      <!-- mobile nav -->
      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 left-0 w-full z-50 h-[50vh] bg-white transition duration-500"
        >
          <div class="absolute right-6 top-4" @click="toggleMenu">
            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12 6 6m6 6 6 6m-6-6 6-6m-6 6-6 6"/></svg>
          </div>
          <li class="relative">
            <a href="#top" @click="closeMenu" class="text-sm">Home</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
             <svg width="20px" height="20px" class="absolute right-0 bottom-0 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </li>
          <li class="relative">
            <a href="#about" @click="closeMenu" class="text-sm">About Us</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>

             <svg width="20px" height="20px" class="absolute right-0 bottom-0 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </li>
          <li class="relative ">
            <a href="#Services" @click="closeMenu" class="text-sm">Services</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1">

                <svg width="20px" height="20px" class="absolute right-0 bottom-0 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </li>
          <li class="relative">
            <a href="#work" @click="closeMenu" class="text-sm">Our work</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
             <svg width="20px" height="20px" class="absolute right-0 bottom-0 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </li>
          <li class="relative">
            <a href="#contact" @click="closeMenu" class="text-sm">Contact Us</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
             <svg width="20px" height="20px" class="absolute right-0 bottom-0 mb-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
