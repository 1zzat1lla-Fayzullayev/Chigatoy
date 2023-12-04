import { useEffect, useState } from "react";
import chigatoy from "../assets/chigatoy.jpg";
import x from "../assets/x.png";
import "../sass/_navbar.scss";
function Navbar(): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [hasLogined, setHasLogined] = useState<boolean>(false);
  const [data, setData] = useState<IData>({
    username: "",
    password: "",
  });

  const [name, setName] = useState<string>("");

  useEffect(() => {
    const ifLoggined = localStorage.getItem("logined");
    if (ifLoggined && JSON.parse(ifLoggined)) {
      setHasLogined(true);
      let aa = JSON.parse(ifLoggined);
      setName(aa.username);
      console.log(aa.username);
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            {!hasLogined ? (
              <button className="login" onClick={() => setShow(true)}>
                Login
              </button>
            ) : (
              <div className="shapaloq_div">
                <h4>
                  <span className="hi">Hi,</span> {name ? name : "aa"}
                </h4>
                <div className="shapaloq">👋🏻</div>
              </div>
            )}
          </div>
        </div>
      </nav>

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
