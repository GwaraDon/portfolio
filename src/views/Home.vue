<template>
  <div class="home" data-aos="zoom-in">
    <section
      id="home_section"
      class="hero-section overlay-dark clip-section clip-bottom area parallax"
    >
      <article class="container">
        <div class="typing-text-wrap">
          <h1 class="hero-title" data-aos="fade-down" data-aos-delay="150">I'm Binay</h1>
          <h1 class="hero-typing-text">
            <span class="typing-text"></span>
            <span class="typing-cursor"></span>
          </h1>
          <h2 class="hero-tagline" data-aos="fade-down" data-aos-delay="250">Your long time partner</h2>
          <div class="hero-social-link">
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-codepen" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-stack-overflow" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <!-- End of hero-social-link -->
          <a href="#" class="btn btn-white">Hire Me</a>
        </div>
        <!-- End of typing-text-wrap -->
      </article>
      <!-- End of container -->
    </section>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import jQuery from "jquery";
let $ = jQuery;
export default {
  name: "home",
  components: {
    HelloWorld
  },

  mounted() {
    this.$nextTick(function() {
      // typing effect
      (function($) {
        function typeString($target, str, cursor, delay, cb) {
          $target.html(function(_, html) {
            return html + str[cursor];
          });
          if (cursor < str.length - 1) {
            setTimeout(function() {
              typeString($target, str, cursor + 1, delay, cb);
            }, delay);
          } else {
            cb();
          }
        }
        function deleteString($target, delay, cb) {
          var length;
          $target.html(function(_, html) {
            length = html.length;
            return html.substr(0, length - 1);
          });
          if (length > 1) {
            setTimeout(function() {
              deleteString($target, delay, cb);
            }, delay);
          } else {
            cb();
          }
        }
        // jQuery hook
        $.fn.extend({
          teletype: function(opts) {
            var settings = $.extend({}, $.teletype.defaults, opts);
            return $(this).each(function() {
              (function loop($tar, idx) {
                typeString(
                  $tar,
                  settings.text[idx],
                  0,
                  settings.delay,
                  function() {
                    setTimeout(function() {
                      deleteString($tar, settings.delay, function() {
                        loop($tar, (idx + 1) % settings.text.length);
                      });
                    }, settings.pause);
                  }
                );
              })($(this), 0);
            });
          }
        });
        $.extend({
          teletype: {
            defaults: {
              delay: 100,
              pause: 5000,
              text: []
            }
          }
        });
      })(jQuery);

      $(".typing-text").teletype({
        text: ["Web Developer", "Front-end Developer", "js Developer"]
      });
      $(".typing-cursor").teletype({
        text: ["_", " "],
        delay: 0,
        pause: 500
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.area {
  position: relative;
  top: -70px;
  z-index: 0;
}
.hero-section {
  background-position: center;
  background-image: url("../assets/bg.jpg");
  // background-position: 100% 1%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  height: 100vh;
}
.overlay-dark {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: #000;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#de3653', endColorstr='#4e1fe9',GradientType=1 );
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: -1;
  }
}
.hero-title {
  color: #ffffff;
  font-size: 70px;
  line-height: 80px;
  font-weight: 400;
  margin: 0;
}
.hero-typing-text {
  color: #d1d1d1;
  font-size: 50px;
  line-height: 60px;
  font-weight: 300;
  margin-bottom: 20px;
}
.hero-tagline {
  color: #d1d1d1;
  font-size: 26px;
  line-height: 26px;
  font-weight: 300;
  margin: 0 0 30px;
}
.hero-social-link ul {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    margin: 0 15px 15px 0;
    a {
      color: #c9c9c9;
      font-size: 22px;
      line-height: 22px;
    }
  }
}
a.btn-white,
.btn-white a,
button.btn-white,
.btn-white button,
input.btn-white,
.btn-white input {
  color: #d1d1d1 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  font-weight: 500 !important;
  border: 2px solid #d1d1d1 !important;
  padding: 7px 30px !important;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s;
  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: #000000;
    left: 0;
    top: 100px;
    z-index: -1;
    transform: skewY(20deg);
    transition: all 0.4s;
  }
  &:hover {
    color: #ffffff !important;
    &:after {
      top: 0;
      transform: skewY(0deg);
    }
  }
}
.clip-bottom {
  // -webkit-clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  // -moz-clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  // -ms-clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  // -o-clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  // clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  padding: 150px 0;
  margin: 0 0 -135px;
  z-index: 1;
}
@media screen and (max-width: 767px) {
  .clip-bottom {
    clip-path: none;
    padding: 100px 0;
  }
  .hero-title {
    color: #ffffff;
    font-size: 50px;
    line-height: 80px;
    font-weight: 200;
    margin: 0;
  }
  .hero-typing-text {
    color: #d1d1d1;
    font-size: 30px;
    line-height: 60px;
    font-weight: 200;
    margin: 10px 0;
  }
  .hero-tagline {
    color: #d1d1d1;
    font-size: 18px;
    line-height: 26px;
    font-weight: 100;
    margin: 0 0 30px;
  }
}
@media screen and (max-width: 425px) {
  .clip-bottom {
    padding: 75px 0;
  }
  .hero-title {
    color: #ffffff;
    font-size: 30px;
  }
}
</style>

