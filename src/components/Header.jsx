import Nav from "./Nav";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="logo-group">
            <img src={Logo} height={60} alt="Little Lemon Logo" />
            {/* <p className="logo-text">Little Lemon</p> */}
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
