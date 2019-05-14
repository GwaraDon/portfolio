<template>
  <div id="portfolio" class="portfolio-area section-padding">
    <div class="container" data-aos="zoom-in">
      <div class="row">
        <div class="col-sm-4 col-md-6 col-lg-4">
          <div class="gallery-items" data-aos="fade-right" data-aos-delay="150">
            <a class="view img" href>
              <!--edit image-->
              <img src="../assets/nas.jpg" alt="portfolio image">
              <!--edit image-->
            </a>

            <div class="gallery-text">
              <h2>Nepal All Shop</h2>
              <p>A multi-vendor ecommerce site</p>
              <a href class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4">
          <div class="gallery-items" data-aos="fade-right" data-aos-delay="250">
            <a class="view img" href>
              <!--edit image-->
              <img src="../assets/gva.jpg" alt="portfolio image">
              <!--edit image-->
            </a>

            <div class="gallery-text">
              <h2>Magazine</h2>
              <p>A multi-vendor ecommerce site</p>
              <a href class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4">
          <div class="gallery-items" data-aos="fade-right" data-aos-delay="400">
            <a class="view img" href>
              <!--edit image-->
              <img src="../assets/Dreams.png" alt="portfolio image">
              <!--edit image-->
            </a>

            <div class="gallery-text">
              <h2>Dream Nepal</h2>
              <p>A travel agency site</p>
              <a href class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4">
          <div class="gallery-items" data-aos="fade-right" data-aos-delay="550">
            <a class="view img" href>
              <!--edit image-->
              <img src="../assets/hamrojobs.jpg" alt="portfolio image">
              <!--edit image-->
            </a>

            <div class="gallery-text">
              <h2>Hamro jobs</h2>
              <p>A Job Portal Site</p>
              <a href class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4">
          <div class="gallery-items" data-aos="fade-right" data-aos-delay="750">
            <a class="view img" href>
              <!--edit image here-->
              <img src="../assets/Best-saurav.png" alt="portfolio image">
              <!--edit image here-->
            </a>

            <div class="gallery-text">
              <h2>Best Saurav</h2>
              <p>A Single-vendor ecommerce site</p>
              <a href class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-6 col-lg-4" v-for="work in works">
          <div class="gallery-items">
            <a class="view img" href>
              <!--edit image here-->
              <img v-bind:src="require(`@/assets/${work.img}`)" alt="portfolio image">
              <!--edit image here-->
            </a>

            <div class="gallery-text">
              <h2>{{work.title}}</h2>
              <p>{{work.desc}}</p>
              <a v-bind:href="btnLink" class="btn-white">Visit Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--portfolio area ends-->
</template>
<script>
// import db from "@/firebase/init";
import Footer from "@/components/Footer.vue";
export default {
  name: "portfolio",
  components: {
    Footer
  },
  data() {
    return {
      works: [
        {
          img: "gva.jpg",
          title: "Global Visa Advisor",
          desc: "this is a consutancy site",
          btnLink: "www.gva.com.np"
        },
        {
          img: "ktm.jpg",
          title: "Kathmandu Inn",
          desc: "this is a Hotel site",
          btnLink: "www.kathmanduinn.com.np"
        }
      ]
    };
  }
};
</script>
