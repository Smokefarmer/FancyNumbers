import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css';
import portfolio_img_1 from '../../images/portfolio-img-1.png'
import portfolio_img_2 from '../../images/portfolio-img-2.jpg'
import portfolio_img_3 from '../../images/portfolio-img-3.png'
import portfolio_img_4 from '../../images/portfolio-img-4.png'
import map from '../../images/map.png'

const Portfolio = () => (
<body class="sub_page">
  <body class="">
    <div class="hero_area">
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span>
                Intot
              </span>
            </a>

            <div class="navbar-collapse" id="">
              <div class="d-none d-lg-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item">
                    <a class="nav-link" href="fruit.html">
                      <img src="images/login.png" alt="" />
                      <span>Login</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="service.html">
                      <img src="images/signup.png" alt="" />
                      <span>Sign Up</span>
                    </a>
                  </li>
                </ul>
                <form class="form-inline my-2 mb-3 mb-lg-0  mr-5">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
              </div>

              <div class="custom_menu-btn">
                <button onclick="openNav()">
                  <span class="s-1">

                  </span>
                  <span class="s-2">

                  </span>
                  <span class="s-3">

                  </span>
                </button>
              </div>
              <div id="myNav" class="overlay">
                <div class="overlay-content">
                  <a href="index.html">HOME</a>
                  <a href="team.html">TEAM</a>
                  <a href="portfolio.html">PORTFOLIO</a>

                  <a href="contact.html">CONTACT US</a>

                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>



    <section class="portfolio_section layout_padding">
      <div class="container">
        <h2>
          OUR PORTFOLIO
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at
          its layout. The point of using Lorem
        </p>
      </div>
      <div class="container layout_padding2-top ">
        <div class="row">
          <div class="col-md-8">
            <div class="portfolio_img-box">
              <img src={portfolio_img_1} alt=""></img>
            </div>
          </div>
          <div class="col-md-4">
            <div class="portfolio_img-box">
              <img src={portfolio_img_2} alt=""></img>
            </div>
          </div>
          <div class="col-md-4">
            <div class="portfolio_img-box">
              <img src={portfolio_img_3} alt=""></img>
            </div>
          </div>
          <div class="col-md-8">
            <div class="portfolio_img-box">
              <img src={portfolio_img_4} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="info_section layout_padding">
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
    </section>

    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
  </body>
</body>
);

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
