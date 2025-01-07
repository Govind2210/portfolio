import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-[4.625rem]">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello there! I'm a passionate and creative front-end developer based
            in India with over 2+ years of hands-on experience in web
            development. My journey began with mastering the fundamentals of
            HTML, CSS, and JavaScript. Since then, I’ve expanded my expertise to
            include tools like StoryBook and modern frameworks like Next.js and
            Node.js within the dynamic MERN stack. With a knack for crafting
            seamless and interactive user experiences, I specialize in building
            responsive web applications using React.js, Tailwind CSS, and other
            cutting-edge technologies. Beyond coding, I value collaboration,
            continuous learning, and creating impactful digital solutions. Feel
            free to let me know if you'd like to tweak anything further! 😊
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
