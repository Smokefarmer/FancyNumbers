import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = () => (

  <section class="about_section layout_padding">
    <div class="container">
      <h2>
        WHY INITIATIVE COMPANY
      </h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem
      </p>
    </div>

    <div class="container">
      <div class="about_card-container">
        <div class="about_card">
          <div class="about-detail">
            <div class="about_img-box">
              <img src={card_img_1} alt=""></img>
            </div>
            <div class="card_detail-ox">
              <h4>
                10 YEARS EXPERIENCE
              </h4>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.
              </p>
            </div>
          </div>
          <div>
            <a href="" class="about_btn">
              Read More
            </a>
          </div>
        </div>
        <div class="about_card">
          <div class="about-detail">
            <div class="about_img-box">
              <img src={card_img_2}alt=""></img>
            </div>
            <div class="card_detail-ox">
              <h4>
                A PRO ARCHITECTS TEAM
              </h4>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.
              </p>
            </div>
          </div>
          <div>
            <a href="" class="about_btn">
              Read More
            </a>
          </div>
        </div>
        <div class="about_card">
          <div class="about-detail">
            <div class="about_img-box">
              <img src={card_img_3} alt=""></img>
            </div>
            <div class="card_detail-ox">
              <h4>
                1000+ HAPPY CUSTOMERS
              </h4>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.
              </p>
            </div>
          </div>
          <div>
            <a href="" class="about_btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


);

About.propTypes = {};

About.defaultProps = {};

export default About;
