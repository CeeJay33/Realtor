<template>
  <div>
    <input
      type="text"
      v-model="query"
      @input="fetchData"
      placeholder="Type to search..."
    />
    <ul v-if="results.length">
      <li v-for="(result, index) in results" :key="index">
        {{ result.descriptiontype }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "", // Current input value
      results: [], // Fetched results
      debounceTimer: null, // Timer for debounce
    };
  },
  methods: {
    fetchData() {
      // Debounce to limit API calls
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        if (this.query.trim() === "") {
          this.results = []; // Clear results if input is empty
          return;
        }

        // Replace 'https://example.com/api/search' with your actual endpoint
        fetch(`http://127.0.0.1:8000/api/product/search/${encodeURIComponent(this.query)}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            this.results = data || []; // Adjust according to your API response structure
            console.log(data.username);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, 300); // Delay of 300ms for debounce
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
</style>
