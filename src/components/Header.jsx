import Nav from "./Nav";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="logo-group">
            <Link to="/">
              <img src={Logo} height={60} alt="Little Lemon Logo" />
            </Link>
            {/* <p className="logo-text">Little Lemon</p> */}
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
