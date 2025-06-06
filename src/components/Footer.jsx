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
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <address className="footer-col">
        <div>123 Little Lemon Way</div>
        <div>Chicago, IL 73945</div>
        <a href="tel:123-456-7890" style={{ color: "white" }}>
          123-456-7890
        </a>
        <div>
          <a href="mailto:info@littlelemon.com" style={{ color: "white" }}>
            info@littlelemon.com
          </a>
        </div>
      </address>

      <section className="socials" aria-label="Social Media Links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook style={iconStyle} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin style={iconStyle} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram style={iconStyle} />
        </a>
      </section>
    </div>
  </footer>
);

export default Footer;
