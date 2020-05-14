<template>
  <div class="container">
    <h1>All Jobs</h1>
    <div v-for="job in jobs">
      <h2>{{ job.description }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      jobs: [],
    };
  },
  created: function() {
    axios.get("/api/jobs").then(response => {
      this.jobs = response.data;
    });
  },
  methods: {},
};
</script>
