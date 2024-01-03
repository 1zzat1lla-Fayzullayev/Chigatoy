import "../sass/_heroaria.scss";
import down from "../assets/down.png";
import shashlik from "../assets/shashlik.png";
import { useTranslation } from "react-i18next";

function HeroAria(): JSX.Element {
  const { t } = useTranslation();
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
                <h1>{t("heroAria.makingTime")}</h1>
                <p>{t("heroAria.paragraphs")}</p>
                <div className="hero_aria_btns">
                  <button className="order_now">{t("heroAria.odernow")}</button>
                  <button className="food_details">
                    {t("heroAria.foodDetail")}
                  </button>
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
