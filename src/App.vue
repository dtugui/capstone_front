<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/jobs">All jobs</router-link>|
      <router-link to="/jobs/new">New job</router-link>|
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>
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
          <li class="current">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
            <ul>
              <li>
                <a href="#">Lorem dolor</a>
              </li>
              <li>
                <a href="#">Magna phasellus</a>
              </li>
              <li>
                <a href="#">Etiam sed tempus</a>
              </li>
              <li>
                <a href="#">Submenu</a>
                <ul>
                  <li>
                    <a href="#">Lorem dolor</a>
                  </li>
                  <li>
                    <a href="#">Phasellus magna</a>
                  </li>
                  <li>
                    <a href="#">Magna phasellus</a>
                  </li>
                  <li>
                    <a href="#">Etiam nisl</a>
                  </li>
                  <li>
                    <a href="#">Veroeros feugiat</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Veroeros feugiat</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Banner -->

    <router-view />

    <!-- Footer -->
    <div id="footer">
      <div class="container">
        <div class="row">
          <section class="col-3 col-6-narrower col-12-mobilep"></section>
          <section class="col-3 col-6-narrower col-12-mobilep"></section>
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

<style>
</style>
