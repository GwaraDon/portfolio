<template>
  <div>
    <header class="nav-area navbar-fixed-top">
      <div class="container">
        <div class="row d-flex justify-content-between align-items-center">
          <!-- logo -->
          <div class="logo" data-aos="fade-left">
            <a href="#">
              <img src="../assets/Binay1.png" alt="logo">
            </a>
          </div>
          <!--main menu starts-->
          <nav>
            <ul class="nav_ul desktop-view" data-aos="fade-right">
              <li class="active">
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/service">Skills</router-link>
              </li>
              <li>
                <router-link to="/portfolio">Portfolio</router-link>
              </li>

              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
            <div class="toggler">
              <button v-on:click="show = !show">
                <i class="fa fa-bars" aria-hidden="true" v-show="!show"></i>
                <i class="fa fa-close" v-show="show"></i>
              </button>
            </div>
            <div class="mobile-screen" v-if="show">
              <ul>
                <li class="active">
                  <router-link to="/">
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/about">
                    <i class="fa fa-info" aria-hidden="true"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/service">
                    <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                  </router-link>
                </li>
                <li>
                  <router-link to="/portfolio">
                    <i class="fa fa-code" aria-hidden="true"></i>
                  </router-link>
                </li>

                <li>
                  <router-link to="/contact">
                    <i class="fa fa-commenting-o" aria-hidden="true"></i>
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
          <!--main menu ends-->
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function() {
    return {
      show: false
    };
  }
};
</script>