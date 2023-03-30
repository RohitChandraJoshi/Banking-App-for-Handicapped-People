import React from "react";


function Contact(){
    return ( <section class="contact" id="contact">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-heading">
            <h3>Contact Us</h3>
            <p>
              Contact us on the phone or email and we will get back to you in
              24 hours
            </p>
          </div>

          <div class="contact-info">
            <div class="contact-icon">
              <i class="fa-solid fa-phone"></i>
              +91 5412879309
            </div>

            <div class="contact-icon">
              <i class="fa-solid fa-envelope"></i>
              xyz@gmail.com
            </div>
          </div>

          <div class="socials">
            <a target="blank" href="https://www.facebook.com/"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a target="blank" href="https://www.twitter.com"
              ><i class="fa-brands fa-twitter"></i
            ></a>
            <a target="blank" href="https://www.linkedin.com"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4">
          <img class="img-fluid" src="images/contactus.png" alt="" />
        </div>
      </div>
    </div>
  </section>
)
}

export default Contact;