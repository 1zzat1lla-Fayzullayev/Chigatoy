import "../sass/_features.scss";
import qualityfood from "../assets/Group 94.svg";
import fooddelivery from "../assets/food-delivery.svg";
import supaerpaste from "../assets/Group 93.svg";
import vektor from "../assets/Vector 3.png";
import { useTranslation } from "react-i18next";
function Features(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div id="features">
      <img src={vektor} alt="404" className="vektor" />
      <div className="container features">
        <p className="features_p">{t("features.featuresH4")}</p>
        <h2>{t("features.newpassion")}</h2>
        <div className="row features_details">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="quality_food">
              <div className="img_div_features">
                <img src={qualityfood} alt="404" />
              </div>
              <h3>{t("features.qualityfood")}</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="food_delivery">
              <div className="img_div_features">
                <img src={fooddelivery} alt="404" />
              </div>
              <h3>{t("features.fooddelivery")}</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="super_taste">
              <div className="img_div_features">
                <img src={supaerpaste} alt="404" />
              </div>
              <h3>{t("features.supertaste")}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
