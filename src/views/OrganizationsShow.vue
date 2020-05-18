<template>
  <div class="organizations-show container">
    <h2>{{ organization.name }}</h2>
    <div v-for="job in organization.jobs">{{ job.description }}</div>
    <router-link to="/organizations"></router-link>
    <div id="footer">
      <div class="container">
        <div class="row">
          <section class="col-6 col-12-narrower">
            <h3>Get In Touch</h3>
            <form>
              <div class="row gtr-50">
                <div class="col-6 col-12-mobilep">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="col-6 col-12-mobilep">
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="col-12">
                  <textarea name="message" id="message" placeholder="Message" rows="5"></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input type="submit" class="button alt" value="Send Message" />
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