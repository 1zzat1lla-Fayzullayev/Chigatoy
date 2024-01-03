import "../sass/_menu.scss";
import SALAT from "../ts/SALAT";
import SHORVA from "../ts/SHORVA";
import SHASHLIK from "../ts/SHASHLIK";
import { useTranslation } from "react-i18next";

function Menu(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <span id="menu"></span>
      <span id="down"></span>
      <div>
        <div className="container menu_ota">
          <p className="menu_p">{t("menu.menuMenu")}</p>
          <h3>{t("menu.foods")}</h3>
          <div className="row menu">
            <h1>{t("menu.salad")}</h1>
            {SALAT.menu.map((menu, i) => {
              return (
                <div className="col-lg-3 col-md-5 col-sm-12 menu_col" key={i}>
                  <div className="menu-box">
                    <div className="menu_box">
                      <div className="menu_card">
                        <div className="menu_image">
                          <img src={menu.image} />
                        </div>

                        <div className="small_card">
                          <i className="fa-solid fa-heart"></i>
                        </div>

                        <div className="menu_info">
                          <h4>{menu.name}</h4>
                          {/* <p>{menu.description}</p> */}
                          <div className="priceandbtn">
                            <button>{menu.price},000 сум</button>
                            <i className="bx bxs-plus-circle"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <h1>{t("menu.soup")}</h1>
            {SHORVA.shorva.map((menu, i) => {
              return (
                <div className="col-lg-3 col-md-5 col-sm-12 menu_col" key={i}>
                  <div className="menu-box">
                    <div className="menu_box">
                      <div className="menu_card">
                        <div className="menu_image">
                          <img src={menu.image} />
                        </div>

                        <div className="small_card">
                          <i className="fa-solid fa-heart"></i>
                        </div>

                        <div className="menu_info">
                          <h4>{menu.name}</h4>
                          {/* <p>{menu.description}</p> */}
                          <div className="priceandbtn">
                            <button>{menu.price},000 сум</button>
                            <i className="bx bxs-plus-circle"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <h1>{t("menu.shashlik")}</h1>
            {SHASHLIK.shashlik.map((menu, i) => {
              return (
                <div className="col-lg-3 col-md-5 col-sm-12 menu_col" key={i}>
                  <div className="menu-box">
                    <div className="menu_box">
                      <div className="menu_card">
                        <div className="menu_image">
                          <img src={menu.image} />
                        </div>

                        <div className="small_card">
                          <i className="fa-solid fa-heart"></i>
                        </div>

                        <div className="menu_info">
                          <h4>{menu.name}</h4>
                          {/* <p>{menu.description}</p> */}
                          <div className="priceandbtn">
                            <button>{menu.price},000 сум</button>
                            <i className="bx bxs-plus-circle"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
