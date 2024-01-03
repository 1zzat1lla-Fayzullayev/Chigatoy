import { useTranslation } from "react-i18next";
import "../sass/_footer.scss";
function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="top">
          <div className="pages">
            <ul>
              <h3>{t("footer.brandName")}</h3>
              <li>
                <a href="#">{t("navbar.home")}</a>
              </li>
              <li>
                <a href="#">{t("navbar.features")}</a>
              </li>
              <li>
                <a href="#">{t("navbar.about")}</a>
              </li>
              <li>
                <a href="#">{t("navbar.menu")}</a>
              </li>
              <li>
                <a href="#">{t("navbar.contact")}</a>
              </li>
            </ul>

            <ul>
              <h3>{t("navbar.about")}</h3>
              <li>
                <a href="#">{t("footer.telegram")}</a>
              </li>
              <li>
                <a href="#">{t("footer.instagram")}</a>
              </li>
              <li>
                <a href="#">{t("footer.phoneNumber")}</a>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>{t("footer.address")}</h3>
            <form>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.4537331829226!2d69.22114298895629!3d41.337298618289175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d42ed2de00f%3A0xfaa83d22871b22a7!2sAbdusamad%20Shashlik%20kafe!5e0!3m2!1sru!2s!4v1704276288866!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
