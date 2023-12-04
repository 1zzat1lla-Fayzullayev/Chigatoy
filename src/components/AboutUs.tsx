import "../sass/_aboutus.scss";
import aboutus from "../assets/FmlS61J9LP 1.png";
function AboutUs():JSX.Element {
  return (
    <div>
      <div className="container aboutus">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <img src={aboutus} alt="404" className="aboutus_img" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <p className="aboutus_p">ABOUT US</p>
            <h3>
              Food Stalls with Persons but to Product marketing plane catlogues
              etc to.
            </h3>
            <p className="aboutus_p1">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also equipment
              make your marketing plane Effective.
            </p>
            <button className="read_more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
