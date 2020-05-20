<template>
  <div class="organizations-show container">
    <h2 class="organization-name">{{ organization.name }}</h2>
    <div v-for="job in organization.jobs">
      <h3 class="job-title">{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <button class="delete-button" v-on:click="destroyJob(job)">Delete job</button>
    </div>
    <div id="footer">
      <div class="container">
        <div class="row">
          <section class="col-6 col-12-narrower">
            <h3></h3>
            <form v-on:submit.prevent="createJob()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="row gtr-50">
                <div class="col-6 col-12-mobilep">
                  <input type="text" v-model="newJob" placeholder="Job Title" />
                </div>
                <div class="col-12">
                  <textarea
                    v-model="newJobDescription"
                    newJobDescription="message"
                    id="message"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input type="submit" class="button alt" value="Create Job" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <ul class="menu">
          <li>&copy; Untitled. All rights reserved</li>
          <li>
            Design:
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete-button {
  float: right;
}
.organization-name {
  /* margin: 0; */
}
.job-title {
  margin: 0;
}
</style>

<script>
// import axios from "axios";

// export default {
//   data: function() {
//     return {
//       organization: {},
//     };
//   },
//   created: function() {
//     axios.get("/api/organizations/profile").then(response => {
//       console.log("organizations show", response);
//       this.organization = response.data;
//     });
//   },
//   methods: {},
// };

import axios from "axios";

export default {
  data: function() {
    return {
      organization: {},
      newJob: "",
      newJobDescription: "",
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/organizations/profile").then(response => {
      console.log("organizations show", response);
      this.organization = response.data;
    });
  },
  methods: {
    createJob: function() {
      var params = {
        title: this.newJob,
        description: this.newJobDescription,
        organization_id: this.organization.id,
      };
      axios
        .post("/api/jobs", params)
        .then(response => {
          console.log(response);
          // this.$router.push("/jobs");
          this.organization.jobs.push(response.data);
          this.newJob = "";
          this.newJobDescription = "";
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyJob: function(job) {
      axios.delete("/api/jobs/" + job.id).then(response => {
        // this.$router.push("/jobs");
        var index = this.organization.jobs.indexOf(job);
        this.organization.jobs.splice(index, 1);

        console.log(response);
      });
    },
  },
};
</script>