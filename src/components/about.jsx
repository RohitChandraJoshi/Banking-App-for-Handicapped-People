import React from "react";

function About() {
    return (<section class="about" id="about">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="heading">
            <h2>LEARN MORE ABOUT DiVYANG BANKING SERVICES</h2>
            <h3>About Us</h3>
          </div>

          <p>
            In order to empower the differently abled (Divyaang) people of the
            country with digital banking services, easy-to-use innovative
            solutions for digital banking services such as digital payments,
            account opening, account statement, payment of utility bills,
            usage of debit/credit cards, etc., may be explored. This would
            provide equal opportunity to the physically challenged without any
            discrimination by the digitisation of banking and enable a greater
            inclusion of the physically challenged into the mainstream
          </p>
          <a
            class="btn-register btn-start"
            target="_blank"
            href="images/aqi_broshure.pdf"
            >Learn More</a
          >
        </div>
        <div class="col-lg-6">
          <img class="img-fluid" src="images/AboutUsImg.png" alt="" />
        </div>
      </div>
    </div>
    </section>)
    
}

export default About;