import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <><section class="info_section layout_padding">
    <div class="container info_content">
      <div>
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <h5>
                  About Us
                </h5>
                <ul>
                  <li>
                    <a href="">
                      It is a long established
                    </a>
                  </li>
                  <li>
                    <a href="">
                      fact that a reader will be
                    </a>
                  </li>
                  <li>
                    <a href="">
                      distracted by the read
                    </a>
                  </li>
                  <li>
                    <a href="">
                      able LoremIt is a long es
                    </a>
                  </li>
                  <li>
                    <a href="">
                      tablished fact that a
                    </a>
                  </li>
                  <li>
                    <a href="">
                      reader will be distracted
                    </a>
                  </li>

                </ul>
              </div>
              <div class="col-md-6">
                <h5>
                  Contact Us
                </h5>
                <ul>
                  <li>
                    <a href="">
                      It is a long established
                    </a>
                  </li>
                  <li>
                    <a href="">
                      fact that a reader will be
                    </a>
                  </li>
                  <li>
                    <a href="">
                      distracted by the read
                    </a>
                  </li>
                  <li>
                    <a href="">
                      able LoremIt is a long es
                    </a>
                  </li>
                  <li>
                    <a href="">
                      tablished fact that a
                    </a>
                  </li>
                  <li>
                    <a href="">
                      reader will be distracted
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div class="form_container mt-5">
              <form action="">
                <input type="email" placeholder="Enter Your email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info_img-box">
              <img src={map} alt=""></img>
            </div>
            <div class="d-flex justify-content-end pr-5">
              <div class="social-box">
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>

                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/linkedin1.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram1.png" alt="" />
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </section><><hr class="footer_hr"></hr>
      <section class="container-fluid footer_section">
        <p>
          &copy;
          2019 All Rights Reserved. Design by
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </section></></>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
