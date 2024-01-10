import { useEffect, useState } from "react";
import chigatoy from "../assets/chigatoy.jpg";
import bag from "../assets/bag.png";
import x from "../assets/x.png";
import "../sass/_navbar.scss";
import "../sass/_navbarcart.scss";
import { useTranslation } from "react-i18next";
// import ALL from "../ts/ALL";

function Navbar({ changeLang }: NavbarProps): JSX.Element {
  // Login qismini show hide qiluvchi state
  const [show, setShow] = useState<boolean>(false);
  // Login qilgan yoki qilmaganini bajaruvchi state
  const [hasLogined, setHasLogined] = useState<boolean>(false);
  // Interface dan malumot qanaqa turdaligini olib kelish
  const [data, setData] = useState<IData>({
    username: "",
    password: "",
  });
  // Login bo'lgandan keyin qaysi ism bilan login qilsa oshani ekranga chiqaruvchi state
  const [name, setName] = useState<string>("");
  // Select ni change qilganda til o'zgartiruvchi state
  const changeLangHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(e.target.value);
  };
  // Tilni olib olish uchun ishlatilinadi
  const { t } = useTranslation();

  // Login qilish jarayonini tekshiradi agar login qilinsa
  // ism ekranda ko'rinadi va ba'zi narsalar hide qilib qo'yiladi
  useEffect(() => {
    const ifLoggined = localStorage.getItem("logined");
    if (ifLoggined && JSON.parse(ifLoggined)) {
      setHasLogined(true);
      const aa = JSON.parse(ifLoggined);
      setName(aa.username);
    }
  }, []);

  // Inputga yozilvotgan paytdagi o'zgarishlar
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value: string = e.target.value;
    const name: string = e.target.name;
    setData({ ...data, [name]: value });
  };

  // Login qilish button bosilganda ishga tushadi
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("logined", JSON.stringify(data));
    setHasLogined(true);
    setShow(false);
    setName(data.username);
  };

  // Login qilingandan so'ng undan chiqib ketish ya'ni Log out
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
                  {t("navbar.home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#features">
                  {t("navbar.features")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#aboutus">
                  {t("navbar.about")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#menu">
                  {t("navbar.menu")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">
                  {t("navbar.contact")}
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
                {t("Login.loginh1")}
              </a>
            ) : (
              <div className="shapaloq_div">
                <h4>
                  <span className="hi">{t("navbar.hi")},</span>{" "}
                  {name ? name : "aa"}
                </h4>
                <div className="shapaloq">👋🏻</div>
                <button onClick={handleLogout}>{t("navbar.exit")}</button>
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
            {t("shoppingBag.shopingH1")}
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
        <button className="buy_now">{t("shoppingBag.shopingbutton")}</button>
      </div>

      {/* Login page */}
      {show ? (
        <div className="login-box">
          <h2 id="hereAria">{t("Login.loginh1")}</h2>
          <img src={x} alt="404" onClick={() => setShow(false)} className="x" />
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
              <label>{t("Login.username")}</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <label>{t("Login.password")}</label>
            </div>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {t("Login.submit")}
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
