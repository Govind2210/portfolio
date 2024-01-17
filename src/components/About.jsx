import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Greetings! I'm a creative and diligent full-stack developer,
          specializing in the MERN stack, with over 1+ years of hands-on
          experience in the dynamic world of web development. My journey has
          been shaped by a relentless passion for both backend and frontend
          design, and I'm eager to take on new challenges to sharpen my skills
          in a stimulating environment.
        </p>

        <p className="text-xl mt-7">
          The web can sometimes be indistinguishable from magic, but I have the
          knowledge and patience required to make just about anything.
        </p>
      </div>
    </div>
  );
};

export default About;
