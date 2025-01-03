<template>
  <div>
    <button @click="invalidateCsrf">Invalidate</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    async invalidateCsrf() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/invalidate-sessions", {
      withCredentials: true,
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'true'
      },
    });
        console.log(response.data.message); // Log the success message
      } catch (error) {
        console.error('Error invalidating CSRF token:', error); // Log the error for debugging
      }
    },
  },
};
</script>
