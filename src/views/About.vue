<template>
  <div id="about" class="about-area section-padding">
    <div class="container" data-aos="zoom-in">
      <div class="row">
        <div class="col-xs-12 col-sm-5 col-md-5 pb-5">
          <div class="about-left">
            <img src="../assets/about.png" alt="profile image">
          </div>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-7">
          <div class="about-right">
            <h1>
              I'm
              <span class="text-primary">{{name}}</span> and I'm a Front-End Developer
            </h1>
            <!--change name and designation here-->
            <p>{{ desc }}</p>
            <div class="socials">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "about",
  data() {
    return {
      desc:
        "I'm a Front-end Developer working for the last two years. I have experience working with local clients along with clients from all around the world. I have vast knowledge in html, css, Javascript , JQuery, Vue (javascript framewok) and so on. The work I provide is of highest quality, fully responsive, and tested in a wide range of devices.",
      name: "Binay Maharjan"
    };
  },
  components: {
    Footer
  }
};
</script>

