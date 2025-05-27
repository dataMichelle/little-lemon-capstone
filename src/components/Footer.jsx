import Logo from "../assets/lemon.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconStyle = {
  color: "#F4CE14",
  fontSize: "1.5em",
  marginRight: "0.5em",
  verticalAlign: "middle",
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <section className="footer-col">
        <div className="footer-logo-group">
          <img src={Logo} alt="Little Lemon" />
          <span
            className="logo-text"
            style={{ color: "white", fontWeight: "bold", fontSize: "24pt" }}
          >
            Little Lemon
          </span>
        </div>
      </section>

      <nav className="footer-col" aria-label="Footer Navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/order-online">Order Online</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <address className="footer-col">
        <div>123 Little Lemon Way</div>
        <div>Chicago, IL 73945</div>
        <div>123-456-7890</div>
        <div>
          <a href="mailto:info@littlelemon.com" style={{ color: "white" }}>
            info@littlelemon.com
          </a>
        </div>
      </address>

      <section className="footer-col" aria-label="Social Media Links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={iconStyle} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={iconStyle} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={iconStyle} />
        </a>
      </section>
    </div>
  </footer>
);

export default Footer;
