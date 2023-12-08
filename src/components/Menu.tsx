import "../sass/_menu.scss";
import CODE from "../CODE";
function Menu(): JSX.Element {

  return (
    <>
      <div className="container menu">
        <p className="menu_p">MENU</p>
        <h3>Food Full of treaty Love</h3>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers
        </p>
        <div className="row">
          {
            CODE.menu.map((menu, i) => {
              return (
                <div className="col-12 col-md-4" key={i}>
                  <div className="card food_card">
                    <div className="card-img">
                      <img src={menu.image} alt="404" />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Menu;
