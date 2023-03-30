import React from "react";

function LandingPage() {
  return (
    <section className="home-page" id="home">
      <div class="container-fluid">
        <div class="title-page row">
          <div class="col-lg-6 col-md-12 col-sm-12 content">
            <h1>Divyang Banking Services</h1>
            <p>
              Specially designed for differently abled people struggling to
              navigate through banking services
            </p>
            <a href="register" class="btn-start btn-register">
              Get Started
            </a>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 content-img">
            <img
              class="img-fluid bg-intro"
              src="/images/1.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
