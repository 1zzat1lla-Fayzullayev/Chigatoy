import { useEffect, useState } from "react";
import chigatoy from "../assets/chigatoy.jpg";
import bag from "../assets/bag.png";
import x from "../assets/x.png";
import "../sass/_navbar.scss";
import "../sass/_navbarcart.scss";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  changeLang: (v: any) => void;
}

function Navbar({ changeLang }: NavbarProps): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [hasLogined, setHasLogined] = useState<boolean>(false);
  const [data, setData] = useState<IData>({
    username: "",
    password: "",
  });
  const [name, setName] = useState<string>("");
  const changeLangHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(e.target.value);
  };
  const { t } = useTranslation();

  useEffect(() => {
    const ifLoggined = localStorage.getItem("logined");
    if (ifLoggined && JSON.parse(ifLoggined)) {
      setHasLogined(true);
      let aa = JSON.parse(ifLoggined);
      setName(aa.username);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let value: string = e.target.value;
    let name: string = e.target.name;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("logined", JSON.stringify(data));
    setHasLogined(true);
    setShow(false);
    setName(data.username);
  };

  const handleLogout = () => {
    localStorage.removeItem("logined");
    setHasLogined(false);
    setShow(false);
    setName("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={chigatoy} alt="404" className="navbar_logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img
            src={bag}
            alt="404"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="bag_btn"
          />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#heroaria">
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#features">
                  {t("features")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#aboutus">
                  {t("about")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#menu">
                  {t("menu")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">
                  {t("contact")}
                </a>
              </li>
              <li className="nav-item">
                <select onChange={changeLangHandler}>
                  <option value="eng">English</option>
                  <option value="ru">Russian</option>
                  <option value="uz">Uzbek</option>
                </select>
              </li>
            </ul>
            {!hasLogined ? (
              <a className="login" onClick={() => setShow(true)} href="#login">
                Login
              </a>
            ) : (
              <div className="shapaloq_div">
                <h4>
                  <span className="hi">{t("hi")},</span> {name ? name : "aa"}
                </h4>
                <div className="shapaloq">👋🏻</div>
                <button onClick={handleLogout}>{t("exit")}</button>
                <img
                  src={bag}
                  alt="404"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Shopping bag */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping bag
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* {ALL.menu.map((cart, i) => {
            return (
              <div className="cart_item" key={i}>
                <div className="cart_info">
                  <h4>{cart.name}</h4>
                  <h3>{cart.price},000 so'm</h3>
                </div>
              </div>
            );
          })} */}
        </div>
        <button className="buy_now">Buy now</button>
      </div>

      {/* Login page */}
      {show ? (
        <div className="login-box">
          <h2 id="hereAria">Login</h2>
          <img src={x} alt="404" onClick={() => setShow(false)} className="x" />
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
