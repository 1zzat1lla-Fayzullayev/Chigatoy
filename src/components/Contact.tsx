import "../sass/_contact.scss";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact_divs">
          <div className="contact_texts">
            <h3 className="contact_h3">CONTACT</h3>
            <h3 className="paragraph">
              Food Stalls with Persons but also specialized <br /> equipment,
              Skills to manage.
            </h3>
          </div>
          <div className="contact_inputs">
            <input type="text" placeholder="Enter your message" />
            <button type="submit">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
