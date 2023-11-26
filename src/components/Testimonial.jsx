import { testimonialUser } from "../constants/testimonial";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-gray-50 dark:bg-darkBlue">
      <div className=" container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-ful space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            src="/images/bg-quotes.png"
            alt="quotes"
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
          />
          {testimonialUser.map((item, index) => (
            <TestimonialCard
              key={index}
              content={item.content}
              name={item.name}
              job={item.job}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
