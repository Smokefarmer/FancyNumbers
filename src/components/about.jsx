export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/crypto-wiener.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About the project</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}<br></br>
              How will the raffel take place? For this purpose, a spectacular video will be published on the Fancy Numbers YouTube channel where you can see which number has won and why. 
                Of course it will not be a simple raffle but more like an action movie scene like for example a skydiver lands blindfolded on a soccer field where numbers are drawn and on which number he lands is the winner.",
              <br></br>
              Of course, the Fancy Number NFT series can be traded at any time on Opensea, but holders can also burn their number. The burned number can then be sold again with a new design on the auction. 50% of the sale will be paid to the previous owner. 
              </p>      
              {/*
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
                      */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
