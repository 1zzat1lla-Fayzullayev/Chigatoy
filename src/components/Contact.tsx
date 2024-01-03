import { useTranslation } from "react-i18next";
import "../sass/_contact.scss";
function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact_divs">
          <div className="contact_texts">
            <h3 className="contact_h3">{t("contactUs.contact")}</h3>
            <h3 className="paragraph">{t("contactUs.opinion")}</h3>
          </div>
          <div className="contact_inputs">
            <input type="text" placeholder={t("contactUs.placeholder")} />
            <button type="submit">{t("contactUs.send")}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
