<template>
  <div class="container">
    <h1>All Jobs</h1>
    <section class="wrapper style1">
      <div class="container">
        <div class="row">
          <section v-for="job in jobs" class="col-6 col-12-narrower">
            <div class="box post">
              <a href="#" class="image left">
                <img v-bind:src="job.organization.image_url" alt />
              </a>
              <div class="inner">
                <a v-bind:href="`/jobs/${job.id}`">
                  <h3>{{job.title}}</h3>
                </a>
                <p>{{job.description}}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.job-title {
  width: 25%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

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
      console.log(this.jobs);
    });
  },
  methods: {},
};
</script>
