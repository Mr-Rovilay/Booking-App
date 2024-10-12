import aboutImg from "../assets/about.png";
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  // Dynamic content for list items
  const steps = [
    "Access exclusive property listings",
    "Seamless online property tours",
    "Get expert advice from real estate professionals",
    "Compare prices and choose your ideal property",
    "Secure payment options with full transparency",
    "Move into your new home hassle-free",
    "Enjoy continuous customer support after your move",
  ];

  return (
    <section className="mx-auto max-padd-container max-w-7xl lg:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Home Rental"
            className="w-full h-auto max-h-[511px] rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center flex-1 w-full lg:pl-10">
          <div className="pb-4">
            <h6 className="text-lg font-semibold capitalize text-secondary">
              Few Steps to your new home
            </h6>
            <h2 className="text-3xl font-bold leading-tight capitalize md:text-4xl">
              This is how easy it can be
            </h2>
          </div>

          {/* Steps List */}
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center gap-x-3">
                <BsCheck2Circle className="text-2xl text-secondary" />
                <span className="text-base md:text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
