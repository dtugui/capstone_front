<template>
  <div class="container">
    <h1>{{ job.organization.name}}</h1>
    <p>{{ job.title}}</p>
    <p>{{ job.created_at}}</p>
    <p>{{ job.description}}</p>
    <p>Contact us at {{job.organization.email}}</p>
    <p>
      <a v-bind:href="`mailto:${job.organization.email}`">Email Us</a>
    </p>
    <a href="/jobs">All jobs</a>
  </div>
</template> 

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      job: { organization: {} },
    };
  },
  created: function() {
    this.showJob();
  },
  methods: {
    showJob: function() {
      axios.get("/api/jobs/" + this.$route.params.id).then(response => {
        this.job = response.data;
      });
    },
  },
};
</script>