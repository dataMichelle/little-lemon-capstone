import TestimonialCard from "./TestimonialCard";
import testimonials from "./../data/testimonials";

const Testimonials = () => {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <header>
          <h1 id="testimonials-heading">Testimonials</h1>
        </header>

        <section className="testimonials-list" aria-label="Customer Reviews">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              rating={item.rating}
              image={item.image}
              name={item.name}
              review={item.review}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
