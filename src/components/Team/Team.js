import React from 'react';
import PropTypes from 'prop-types';
import styles from './Team.module.css';
import logo from '../../images/login.png'
import signup from '../../images/signup.png'
import team_1 from '../../images/team-1.png';
import team_2 from '../../images/team-2.png';
import team_3 from '../../images/team-3.png';
import team_4 from '../../images/team-4.png';
import facebook_logo_button from '../../images/facebook-logo-button.png';
import twitter_logo_button from '../../images/twitter-logo-button.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';

const Team = () => (

<section class="team_section layout_padding">
<div class="container">
  <h2>
    OUR TEAM
  </h2>
  <p>
    It is a long established fact that a reader will be distracted by the readable
  </p>
</div>
<div class="container">
  <div class="team_card-container layout_padding2">
    <div class="team_card">
      <div class="team_img-box">
        <img src={team_1} alt=""></img>
      </div>
      <div class="team_detail-box">
        <h5>
          JOHN DOE
        </h5>
        <p>
          CEO - DESIGNER
        </p>
        <div class="team_follow">
          <h6>
            Follow On
          </h6>
          <div class="team_social">
            <div>
              <a href="">
                <img src={facebook_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitter_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={linkedin} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team_card">
      <div class="team_img-box">
        <img src={team_2} alt=""></img>
      </div>
      <div class="team_detail-box">
        <h5>
          sandy DOE
        </h5>
        <p>
          CEO - DESIGNER
        </p>
        <div class="team_follow">
          <h6>
            Follow On
          </h6>
          <div class="team_social">
            <div>
              <a href="">
                <img src={facebook_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitter_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={linkedin} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team_card">
      <div class="team_img-box">
        <img src={team_3} alt=""></img>
      </div>
      <div class="team_detail-box">
        <h5>
          Alexi DOE
        </h5>
        <p>
          CEO - DESIGNER
        </p>
        <div class="team_follow">
          <h6>
            Follow On
          </h6>
          <div class="team_social">
            <div>
              <a href="">
                <img src={facebook_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitter_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={linkedin} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="team_card">
      <div class="team_img-box">
        <img src={team_4}alt=""></img>
      </div>
      <div class="team_detail-box">
        <h5>
          JOHN DOE
        </h5>
        <p>
          CEO - DESIGNER
        </p>
        <div class="team_follow">
          <h6>
            Follow On
          </h6>
          <div class="team_social">
            <div>
              <a href="">
                <img src={facebook_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={twitter_logo_button} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={linkedin} alt=""></img>
              </a>
            </div>
            <div>
              <a href="">
                <img src={instagram} alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>




);

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
