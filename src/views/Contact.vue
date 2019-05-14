<template>
  <!--contact area starts-->

  <div id="contact" class="contact-area section-padding">
    <div class="container" data-aos="zoom-in">
      <div class="top-contact">
        <div class="row flex-nowrap">
          <div class="col-sm-4 col-md-4">
            <div class="top-contact-text" data-aos="fade-down" data-aos-delay="50">
              <div class="contact-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-map-marker"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <h2>Address / Street</h2>
              <p>{{ homeAdd}}</p>
              <!--edit here-->
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="top-contact-text" data-aos="fade-down" data-aos-delay="200">
              <div class="contact-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-phone"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <h2>Contact Number</h2>
              <p>+{{ countryCode}} {{contactNo}}</p>
              <!--edit here-->
            </div>
          </div>
          <div class="col-sm-4 col-md-4">
            <div class="top-contact-text" data-aos="fade-down" data-aos-delay="450">
              <div class="contact-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-globe"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <h2>Website Address</h2>
              <p>{{webAdd}}</p>
              <!--edit here-->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 box-contact-form">
          <form id="contact-form" method="post" action="contact.php">
            <div class="messages"></div>
            <!--you can change the message in contact.php file -->

            <div class="controls">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter your full name *"
                      required="required"
                      data-error="Fullname is required."
                    >
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter your email *"
                      required="required"
                      data-error="Valid email is required."
                    >
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      class="form-control"
                      placeholder="Your Message *"
                      rows="4"
                      required="required"
                      data-error="Leave a message for me"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <button
                    class="btn btn-send"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    value
                  >Send message</button>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  components: {},
  data() {
    return {
      countryCode: "977",
      contactNo: "9843599512",
      webAdd: "www.merosite.ga",
      homeAdd: "Wolkhu-11,Lalitpur,Nepal"
    };
  }
};
</script>
