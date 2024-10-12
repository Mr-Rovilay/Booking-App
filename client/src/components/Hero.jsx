import { Link } from "react-router-dom";
import circle from "../assets/circle.png";
import client1 from "../assets/person-1.jpg";
import client2 from "../assets/person-2.jpg";
import sideImg from "../assets/sideImg.png";
import sideImg1 from "../assets/sideImg1.png";
import sideImg2 from "../assets/sideImg2.png";

const Hero = () => {
  return (
    <section className="mt-15 max-padd-container xl:mt-10">
      <div className="flex flex-col gap-16 xl:flex-row">
        <div className="flex flex-col justify-center flex-1 gap-y-8 xl:max-w-[555px] relative">
          <h1 className="h1">
            Invest in <span className="text-secondary">Your Future</span> with
            confidence
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            modi facilis exercitationem, officia consectetur repudiandae
            quisquam quae quas ut mollitia labore itaque alias voluptatibus
            nobis hic beatae. Nesciunt, quae dolorem
          </p>
          <div className="flex gap-3">
            <a href="#listing" className="rounded-full btn-dark flexCenter">
              Explore Properties
            </a>
            <Link to={"/createListing"} className="rounded-full btn-secondary flexCenter">
              <span className="pr-1 medium-20">+</span>Add Property
            </Link>
          </div>
          <div className="relative flex">
            <img src={circle} alt="" className="rounded-full h-[99px] z-30" />
            <img src={client1} alt="" className="rounded-full h-[80px] z-20 shadow-sm absolute left-16" />
            <img src={client2} alt="" className="rounded-full h-[80px] z-10 shadow-sm absolute left-32" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col flex-1 gap-4">
          <div className="rounded-2xl h-[266px] overflow-hidden ">
            <img src={sideImg} alt="" className="object-cover rounded-xl" />
          </div>
          <div className="gap-4 flexBetween">
            <div className="flex flex-1 rounded-xl">
              <img src={sideImg1} alt="" className="object-cover rounded-xl aspect-square" />
            </div>
            <div className="flex flex-1 rounded-xl">
              <img src={sideImg2} alt="" className="object-cover rounded-xl aspect-square" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;