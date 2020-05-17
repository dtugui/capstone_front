<template>
  <div class="organizations-show">
    <h2>{{ organization.name }}</h2>
    <router-link to="/organizations"></router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      organization: {},
    };
  },
  created: function() {
    axios.get("/api/organizations/profile").then(response => {
      console.log("organizations show", response);
      this.organization = response.data;
    });
  },
  methods: {},
};
</script>