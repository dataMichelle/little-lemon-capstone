import Nav from "./Nav";
import Logo from "../assets/lemon.png";

const Header = () => {
  return (
    <header>
      <div className="header-row">
        <div className="logo-group">
          <img src={Logo} height={60} alt="Little Lemon" />
          <p className="logo-text">Little Lemon</p>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
