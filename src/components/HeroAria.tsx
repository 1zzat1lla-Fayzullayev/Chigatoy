import "../sass/_heroaria.scss";
import down from "../assets/down.png";
import shashlik from "../assets/shashlik.png";
function HeroAria(): JSX.Element {
  return (
    <>
      <div id="heroaria">
        <a href="#down">
          <img src={down} alt="404" className="down" />
        </a>

        <div className="container hereAria" id="login">
          <div className="row hereAria_row">
            <div className="col-lg-6 col-md-4 col-sm-12">
              <div className="hero_aria_txt">
                <h1>Making time a good time by making food the good food.</h1>
                <p>
                  There are many things are needed to start the Fast Food
                  Business. You need not only Just Food Stalls with Persons but
                  also specialized equipment,
                </p>
                <div className="hero_aria_btns">
                  <button className="order_now">Oder now</button>
                  <button className="food_details">Food Details</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={shashlik} alt="404" className="herearia_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroAria;
