<template>
  <div v-if="isVisible" class="bg-white z-50 w-full sticky top-16 sub_main">
    <div class="search__bar__main">
      <form class="flex flex-col md:flex-row gap-3">
        <!-- Custom Location Dropdown -->
        <div class="relative w-full">
          <div
            @click="toggleDropdown('location')"
            class="cursor-pointer w-full h-12 border-2 border-gray-200 bg-white rounded-lg px-4 flex items-center justify-between hover:shadow-lg transition-all duration-200 ease-in-out thumb">
            <span class="text-gray-700">
              {{ selected.location }}
            </span>
            <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <ul
            v-if="dropdowns.location"
            class="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 max-h-40 overflow-auto z-20">
            <li
              v-for="option in locationOptions"
              :key="option"
              @click="selectOption('location', option)"
              class="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>

        <!-- Custom Price Dropdown -->
        <div class="relative w-full">
          <div
            @click="toggleDropdown('price')"
            class="cursor-pointer w-full h-12 border-2 border-gray-200 bg-white rounded-lg px-4 flex items-center justify-between hover:shadow-lg transition-all duration-200 ease-in-out">
            <span class="text-gray-700">
              {{ selected.price }}
            </span>
            <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <ul
            v-if="dropdowns.price"
            class="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 max-h-40 overflow-auto z-20">
            <li
              v-for="option in priceOptions"
              :key="option"
              @click="selectOption('price', option)"
              class="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>

        <div class="relative w-full">
          <div
            @click="toggleDropdown('sort')"
            class="cursor-pointer w-full h-12 border-2 border-gray-200 bg-white rounded-lg px-4 flex items-center justify-between hover:shadow-lg transition-all duration-200 ease-in-out">
            <span class="text-gray-700">
              {{ selected.sort }}
            </span>
            <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <ul
            v-if="dropdowns.sort"
            class="absolute w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 max-h-40 overflow-auto z-20">
            <li
              v-for="option in priceOptions"
              :key="option"
              @click="selectOption('sort', option)"
              class="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>

        <!-- Search Input -->
        <div id="search-bar" class="w-full md:w-auto border-2 bg-white border-gray-200 rounded-md shadow-md z-10">
          <form class="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search here"
              class="w-full md:w-auto rounded-md px-4 bg-white focus:outline-none "
            />
            <button
              type="submit"
              class="bg-gray-800 text-white rounded-md px-4 py-2 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 transition-all duration-200">
              Search
            </button>
          </form>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdowns: {
        location: false,
            price: false,
        sort: false,
      },
      locationOptions: ["All Locations", "New York", "Minnesota", "Oklahoma", "Minnesota", "Oklahoma"],
      priceOptions: ["All Prices", "Freemium", "Free", "Paid"],
      selected: {
        location: "Location", 
        price: "Price", 
        sort: "Sort", 
      },

      isVisible: false,
    };
  },
  methods: {
    toggleDropdown(type) {

      this.dropdowns = { location: false, price: false };
      this.dropdowns[type] = !this.dropdowns[type];
    },
    selectOption(type, option) {
      
      this.selected[type] = option;
      this.dropdowns[type] = false;
    },
     handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > scrollHeight / 8) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },

   mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  
};
</script>

<style>
.search__bar__main {
  width: 70%;
  margin: auto;
}

.sub_main{
    padding: 2rem 0 0.5rem 0;
}


::-webkit-scrollbar {
    width: 12px; /* Set the width of the scrollbar */
}

/* Add color to the scrollbar handle */
::-webkit-scrollbar-thumb {
    background-color: #fff; /* Set the color of the scrollbar handle */
    border-radius: 6px; /* Optional: Round the corners of the scrollbar handle */
}

/* Optional: Add color to the scrollbar track on hover */
::-webkit-scrollbar-track:hover {
    background-color: #f1f1f1;
}

/* Optional: Add color to the scrollbar handle on hover */
::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
}
.custom-dropdown li + li {
  margin-top: 5px; /* Add spacing between dropdown items */
}
</style>
