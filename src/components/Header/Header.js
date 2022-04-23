import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import slider_img from '../../images/slider-img.png';
import jquery from '../../js/jquery-3.4.1.min.js'
import bootstrap from '../../js/bootstrap.js'


const Header = () => (

<html> 
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/*<!-- Site Metas -->*/}
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />

  <title>Intot</title>

  {/*<!-- slider stylesheet -->*/}
  <link rel="stylesheet" type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" />

  {/*<!-- bootstrap core css -->*/}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  {/*<!-- fonts style -->*/}
  <link href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,600,700&display=swap" rel="stylesheet"></link>
  {/*<!-- Custom styles for this template -->*/}
  <link href="css/style.css" rel="stylesheet" />
  {/*<!-- responsive style -->*/}
  <link href="css/responsive.css" rel="stylesheet" />
</head>

<body>
  <div class="hero_area">
    {/*<!-- header section strats -->*/}
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
              <form class="form-inline my-2 mb-3 mb-lg-0 mr-5">
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
    {/*<!-- end header section -->*/}
    {/*<!-- slider section -->*/}
    <section class="slider_section">

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-3 offset-md-2">
                <div class="slider_detail">
                  <h1>
                    INNOVATIVE
                    <span>
                      SOLUTIONS
                    </span>
                  </h1>
                  <p>
                    We find the best solutions fot you, we redesign your home and work places.
                    Discover why over 5,100 home owners trust initiative
                  </p>
                  <div>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="slider_img-box">
                  <img src={slider_img} alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-3 offset-md-2">
                <div class="slider_detail">
                  <h1>
                    INNOVATIVE
                    <span>
                      SOLUTIONS
                    </span>
                  </h1>
                  <p>
                    We find the best solutions fot you, we redesign your home and work places.
                    Discover why over 5,100 home owners trust initiative
                  </p>
                  <div>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="slider_img-box">
                  <img src={slider_img} alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel_btn-container">
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

    </section>

    {/*<!-- end slider section -->*/}
  </div>

  



  


  {/*<!-- why section -->*/}
  <section class="Why_section layout_padding">
    <div class="container">
      <h2>WHY CHOOSE US?</h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the
        readable
        content of a page when looking at its layout. The point of using Lorem
      </p>
    </div>
  </section>



  {/*<!-- end why section -->*/}

  {/*<!-- info section -->*/}
 

  {/*<!-- end info section -->*/}
 

  <script type="text/javascript" src={jquery}></script>
  <script type="text/javascript" src={bootstrap}></script>


  {/*
  <script>
    function openNav() {
      document.getElementById("myNav").classList.toggle("menu_width")
      document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
    }
  </script>
  */}

</body>

</html>

);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
