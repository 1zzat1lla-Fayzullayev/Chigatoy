import "../sass/_menu.scss";
import SALAT from "../ts/SALAT";
import SHORVA from "../ts/SHORVA";
import SHASHLIK from "../ts/SHASHLIK";
function Menu(): JSX.Element {
  return (
    <>
      <span id="menu"></span>
      <span></span>
      <div>
        <div className="container menu_ota">
          <p className="menu_p">MENU</p>
          <h3>Food Full of treaty Love</h3>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers
          </p>
          <div className="row menu">
            <h1>Salat</h1>
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
            <h1>Shorva</h1>
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
            <h1>Shashlik</h1>
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
