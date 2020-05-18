<template>
  <div class="organizations-index">
    <h1>All Organizations</h1>
    <div v-for="organization in organizations">
      <h2>{{ organization.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      organizations: [],
    };
  },
  created: function() {
    axios.get("/api/organizations").then(response => {
      console.log("organizations index", response);
      this.organizations = response.data;
    });
  },
  methods: {},
};
</script>