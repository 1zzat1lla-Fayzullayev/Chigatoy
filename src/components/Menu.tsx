import "../sass/_menu.scss";
import CODE from "../CODE";
function Menu(): JSX.Element {
  return (
    <>
      <div className="container menu_ota">
        <p className="menu_p">MENU</p>
        <h3>Food Full of treaty Love</h3>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers
        </p>
        <div className="row menu">
          {CODE.menu.map((menu, i) => {
            return (
              <div className="col-12 col-md-4 menu_col" key={i}>
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
                        <h2>{menu.name}</h2>
                        <p>{menu.description}</p>
                        <div className="priceandbtn">
                          <h3>${menu.price}</h3>
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
    </>
  );
}

export default Menu;
