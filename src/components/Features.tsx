import "../sass/_features.scss";
import qualityfood from "../assets/Group 94.svg";
import fooddelivery from "../assets/food-delivery.svg";
import supaerpaste from "../assets/Group 93.svg";
import vektor from "../assets/Vector 3.png";
function Features(): JSX.Element {
  return (
    <div id="features">
      <img src={vektor} alt="404" className="vektor" />
      <div className="container features">
        <p className="features_p">FEATURES</p>
        <h2>Food With A New Passion</h2>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="quality_food">
              <div className="img_div_features">
                <img src={qualityfood} alt="404" />
              </div>
              <h3>Quality Food</h3>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="food_delivery">
              <div className="img_div_features">
                <img src={fooddelivery} alt="404" />
              </div>
              <h3>Food Delivery</h3>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="super_taste">
              <div className="img_div_features">
                <img src={supaerpaste} alt="404" />
              </div>
              <h3>Super Taste</h3>
              <p>
                It can be a very secure path to earn good <br /> money and make
                you very successful <br /> creative entrepreneur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
