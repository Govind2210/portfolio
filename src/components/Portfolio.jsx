import React from "react";
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import laundaryCart01 from "../assets/portfolio/laundaryCart01.jpg";
import tinder from "../assets/portfolio/tinder.png";
import news from "../assets/portfolio/news.png";
import jamstackPlus from "../assets/portfolio/jamstackPlus.png";
import guruMantra from "../assets/portfolio/guruMantra.png"
// import tradeDissect from "../assets/portfolio/tradeDissect.png"
import tradeDissect from "../assets/portfolio/tradeDissect.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jamstackPlus,
      demo: "https://www.jamstack.plus/",
      name: "JamStack Plus"
    },
    {
      id: 2,
      src: guruMantra,
      demo: "https://gurumantra.setoo.org/",
      name: "GuruMantra Admin Panel"
    },
    {
      id: 3,
      src: tradeDissect,
      demo: "http://tradedissect.com/",
      name: "Trade Dissect"
    },
    {
      id: 4,
      src: laundaryCart01,
      demo: "https://laundryweb-by-govindlowanshi.netlify.app/",
      name: "Laundary Cart"
    },
    {
      id: 5,
      src: tinder,
      name: "Tinder Clone",
      demo : "https://github.com/Govind2210/Tinder-clone"
    },
    {
      id: 6,
      src: news,
      name: "News Web App",
      demo : "https://news-app-by-govind-lowanshi.netlify.app"
    },
    // {
    //   id: 7,
    //   src: reactSmooth,
    //   name: "React Smooth Project",
    //   demo : ""
    // },
    // {
    //   id: 8,
    //   src: installNode,
    //   name: "Installing Node",
    //   demo : ""
    // },
    // {
    //   id: 9,
    //   src: reactWeather,
    //   name: "Weather WebApp",
    //   demo : ""
    // }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-56">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="Image"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {name}
                </div>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
