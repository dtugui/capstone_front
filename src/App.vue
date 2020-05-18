<template>
  <div id="page-wrapper">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/jobs">All jobs</router-link>|
      <router-link to="/jobs/new">New job</router-link>|
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>
      <router-link to="/organizations">All organizations</router-link>|
    </div>-->

    <!-- Header -->
    <div id="header">
      <!-- Logo -->
      <h1>
        <a href="index.html" id="logo">
          Code Bono
          <em>| Spread the Wealth</em>
        </a>
      </h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li v-if="!jwt" class>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li v-if="jwt">
            <a href="/organizations/profile">Profile</a>
          </li>
          <li v-if="!jwt">
            <a href="/signup">Signup</a>
          </li>
          <li v-if="!jwt">
            <a href="/login">Login</a>
          </li>
          <li v-if="jwt">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Banner -->

    <router-view v-on:changeJwt="setJwt()" />

    <!-- Footer -->
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
  },
};
</script>