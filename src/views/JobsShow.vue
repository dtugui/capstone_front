<template>
  <div>
    <h1>{{ job.id}}</h1>
    <p>{{ job.description}}</p>
    <a href="/jobs">All jobs</a>
  </div>
</template> 

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      job: {},
    };
  },
  created: function() {
    axios.get("/api/jobs/" + this.$route.patams.id).then(response => {
      this.job = response.data;
    });
  },
  methods: {},
};
</script>