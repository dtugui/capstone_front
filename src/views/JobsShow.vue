<template>
  <div>
    <h1>{{ organization.name}}</h1>
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
      jobs: [],
      organization: {},
    };
  },
  created: function() {
    this.showJob();
    this.showOrganization();
  },
  methods: {
    showJob: function() {
      axios.get("/api/jobs/" + this.$route.params.id).then(response => {
        this.job = response.data;
      });
    },
    showOrganization: function() {
      axios.get("/api/organizations/" + this.$route.params.id).then(response => {
        this.organization = response.data;
      });
    },
  },
};
</script>