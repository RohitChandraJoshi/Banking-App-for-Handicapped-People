import React from "react";

function Feature() {
  return (
    <section class="features" id="features">
      <div class="heading">
        <h2>USE OUR FEATURES TO STAY SAFE</h2>
        <h3>Features</h3>
      </div>

      <div class="feature-grid">
        <div class="feature">
          <img src="images/location.png" alt="" />

          <div class="feature-content">
            <h3>Use Face Recognition for authentication</h3>
            <p>
              Use face recognition to authenticate an individual for disabled
              individuals
            </p>
          </div>
        </div>
        <div class="feature">
          <img src="images/shield.png" alt="" />

          <div class="feature-content">
            <h3>Use voice navigation</h3>
            <p>
              Through the help of voice navigation, one is able to interact with
              the application just through their voice
            </p>
          </div>
        </div>
        <div class="feature">
          <img src="images/heart.png" alt="" />

          <div class="feature-content">
            <h3>Easily use banking services</h3>
            <p>
              Easyily utilize the services of banking like trasnferring money
              and checking account balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
