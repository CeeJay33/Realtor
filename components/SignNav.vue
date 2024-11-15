<template>
  <div>
    <nav
      class="w-full fixed bg-white top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 mb-3 flex items-center justify-between z-50"
    >
      <img
      @click="redirect"
        src="/images/logo-design-for-realtor-r-letter-logo-r-logo-by-shihab-logo-designer-dribbble-removebg-preview.png"
        alt="logo"
        class="w-28 cursor-pointer mr-14 z-50"
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

     

      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 left-0 w-full z-30 h-auto bg-white transition duration-500 "
        >
          <div class="absolute right-6 top-6" @click="toggleMenu">
            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12 6 6m6 6 6 6m-6-6 6-6m-6 6-6 6"/></svg>
          </div>
          <SearchByFilter/>
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

      redirect() {
        this.$router.push("/");
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
