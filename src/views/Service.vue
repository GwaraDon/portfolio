<template>
  <!--services area starts-->
  <div id="services" class="services-area section-padding">
    <div class="container" data-aos="zoom-in">
      <div class="row">
        <div class="col-md-6 col-sm-6" data-aos="fade-right" data-aos-delay="100">
          <div class="heading" data-aos="fade-right" data-aos-delay="150">
            <h2>Skills & Experience</h2>
          </div>
          <div class="desc" data-aos="fade-right">
            <p
              data-aos="fade-right"
              data-aos-delay="200"
            >The main area of my expertise is front-end development(Client side web).</p>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
            >HTML, CSS, JS, building small, medium web apps with animation, custom plugins, and coding interactive layouts.</p>
            <p data-aos="fade-right" data-aos-delay="400">
              Visit my
              <a href>LinkedIn</a> profile for more details or just
              <a href>contact</a> me.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div
            class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="bar flex" v-for="skill in skills">
              <div class="fill width" v-bind:class="skill.skillCss">
                <div class="tag">{{skill.skillName}}</div>
              </div>
              <span>{{skill.skillPer}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--services area ends-->
</template>
<script>
import jQuery from "jquery";
let $ = jQuery;
export default {
  name: "service",

  mounted() {
    this.$nextTick(function() {
      setTimeout(function() {
        $(".fill").removeClass("width");
      }, 200);
    });
  },
  data() {
    return {
      skills: [
        { skillName: "illustrator", skillPer: "40%", skillCss: "fourty" },
        { skillName: "photoshop", skillPer: "60%", skillCss: "sixty" },
        { skillName: "UI Design", skillPer: "50%", skillCss: "fifty" },
        { skillName: "gulp.js", skillPer: "70%", skillCss: "seventy" },
        { skillName: "Html", skillPer: "100%", skillCss: "hundred" },
        { skillName: "Css", skillPer: "100%", skillCss: "hundred" },
        { skillName: "JavaScript", skillPer: "70%", skillCss: "seventy" },
        { skillName: "jQuery", skillPer: "80%", skillCss: "eighty" },
        { skillName: "Sass", skillPer: "80%", skillCss: "eighty" },
        { skillName: "Vue.js", skillPer: "70%", skillCss: "seventy" }
      ]
    };
  }
};
</script>  
<style scoped>
.bars-wrap {
  margin: 50px auto 0 auto;
  width: calc(100% - 15px);
  max-width: 90%;
}
.bar {
  font-size: 14px;
}
.bar {
  width: 90%;
}
.bar {
  color: #666;
  position: relative;
  background-color: #eee;
  height: 28px;
  margin: 0 0 15px 0;
}
.width {
  width: 10px !important;
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fill {
  top: 0;
  left: 0;
  position: absolute;
  background-color: #666;
  padding: 0;
  opacity: 1;
  height: 100%;
  text-align: center;
}
.fourty {
  width: 40%;
}
.fifty {
  width: 50%;
}
.sixty {
  width: 60%;
}
.seventy {
  width: 70%;
}
.eighty {
  width: 80%;
}
.ninty {
  width: 90%;
}
.hundred {
  width: 100%;
}
.bar:nth-child(1) .fill {
  transition: 1.1s 0.5s width ease-in-out;
}
.bar:nth-child(2) .fill {
  transition: 1.2s 0.5s width ease-in-out;
}
.bar:nth-child(3) .fill {
  transition: 1.3s 0.5s width ease-in-out;
}
.bar:nth-child(4) .fill {
  transition: 1.4s 0.5s width ease-in-out;
}
.bar:nth-child(5) .fill {
  transition: 1.5s 0.5s width ease-in-out;
}
.bar:nth-child(6) .fill {
  transition: 1.6s 0.5s width ease-in-out;
}
.bar:nth-child(7) .fill {
  transition: 1.7s 0.5s width ease-in-out;
}
.bar:nth-child(8) .fill {
  transition: 1.8s 0.5s width ease-in-out;
}
.bar:nth-child(9) .fill {
  transition: 1.9s 0.5s width ease-in-out;
}
.bar:nth-child(10) .fill {
  transition: 2s 0.5s width ease-in-out;
}

.tag {
  top: 0;
  left: 0;
  position: absolute;
  background-color: #222;
  color: #fff;
  height: 100%;
  width: 110px;
}
.bar span {
  z-index: 1;
  padding: 0 10px 0 0;
  position: absolute;
  right: 0;
  color: #000;
  font-size: 15px;
  font-weight: 500;
}
</style>