<template>
  <div class="container">
    <h1>
      <strong>All Jobs</strong>
    </h1>
    <div v-for="job in jobs">
      <h2>{{ job.description }}</h2>
      <div v-for="name in organizations">
        <p>
          <strong>{{ name.organization }}</strong>
          : {{ name }}
        </p>
      </div>
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
