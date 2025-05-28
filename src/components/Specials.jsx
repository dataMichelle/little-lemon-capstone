import SpecialsCard from "./SpecialsCard";
import specials from "../data/specials";
import Button from "./Button";

const Specials = () => {
  return (
    <section className="specials-section" aria-labelledby="specials-heading">
      <div className="container">
        <header className="specials-header-row">
          <h1 id="specials-heading">This week's specials!</h1>
          <Button className="specials-button" label="Online Menu" />
        </header>

        <section className="specials-list" aria-label="Specials Menu">
          {specials.map((item) => (
            <SpecialsCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Specials;
