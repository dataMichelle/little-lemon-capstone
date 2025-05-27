import { Link } from "react-router-dom";
import bicycle from "../assets/bicycle-delivery.svg";

const SpecialsCard = ({ image, name, price, description }) => {
  return (
    <article className="specials-card">
      <img src={image} alt={name} />
      <header className="specials-content">
        <div className="specials-title-row">
          <h2>{name}</h2>
          <span className="specials-price">{price}</span>
        </div>
        <p className="specials-description">{description}</p>
      </header>
      <footer className="specials-order-row">
        <Link to="#">Order a Delivery</Link>
        <img src={bicycle} className="specials-icon" alt="Delivery icon" />
      </footer>
    </article>
  );
};

export default SpecialsCard;
