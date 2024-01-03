import "../sass/_aboutus.scss";
import aboutus from "../assets/FmlS61J9LP 1.png";
import { useTranslation } from "react-i18next";
function AboutUs(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <span id="aboutus"></span>
      <span></span>
      <span></span>
      <div>
        <div className="container aboutus">
          <div className="row">
            <p className="aboutus_p">{t("aboutUs.aboutusMenu")}</p>
            <h3>{t("aboutUs.aboutusH1")}</h3>
            <div className="imageandiframe">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <img src={aboutus} alt="404" className="aboutus_img" />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.4537331829226!2d69.22114298895629!3d41.337298618289175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d42ed2de00f%3A0xfaa83d22871b22a7!2sAbdusamad%20Shashlik%20kafe!5e0!3m2!1sru!2s!4v1704276288866!5m2!1sru!2s"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
