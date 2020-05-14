<template>
  <div>
    <h1>New Job</h1>
    <form v-on:submit.prevent="createJob()">
      <ul>
        <li>v-for="error in errors">{{ error }}</li>
      </ul>Organization ID
      <input type="text" v-model="NewJob" />
      <div></div>
      <span>Job Description</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newJob: "",
      newJobDescription: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createJob: function() {
      var params = {
        job: this.newJob,
        description: this.newJobDescription,
      };
      axios
        .post("/api/jobs", params)
        .then(response => {
          this.$router.push("/jobs");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

