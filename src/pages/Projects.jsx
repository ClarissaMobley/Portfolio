import React, { useState } from "react";
import MoodBar from "../assets/moodbar.png";
import Moodbar3 from "../assets/moodbar2.png";
import Moodbar4 from "../assets/moodbar3.png";
import Moodbar5 from "../assets/moodbar4.png";
import Zozzled from "../assets/zozzled.png";
import Zozzled2 from "../assets/zozzled1.png";
import Zozzled3 from "../assets/zozzled2.png";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const slides1 = [MoodBar, Moodbar5, Moodbar3, Moodbar4];
  const slides2 = [Zozzled, Zozzled2, Zozzled3];

  const previousSlide1 = () => {
    setCurrentSlide1(
      currentSlide1 === 0 ? slides1.length - 1 : currentSlide1 - 1
    );
  };

  const nextSlide1 = () => {
    setCurrentSlide1(
      currentSlide1 === slides1.length - 1 ? 0 : currentSlide1 + 1
    );
  };

  const previousSlide2 = () => {
    setCurrentSlide2(
      currentSlide2 === 0 ? slides2.length - 1 : currentSlide2 - 1
    );
  };

  const nextSlide2 = () => {
    setCurrentSlide2(
      currentSlide2 === slides2.length - 1 ? 0 : currentSlide2 + 1
    );
  };

  return (
    <div className="w-[80%] m-auto pt-11 flex flex-col lg:flex-row gap-4 animate-fadeIn">
      <div className="bg-[#b77676] p-4 rounded-lg shadow-lg flex-1">
        <div className="overflow-hidden relative mt-3">
          <div
            className={`flex transition ease-out duration-400`}
            style={{ transform: `translateX(-${currentSlide1 * 100}%)` }}
          >
            {slides1.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center"
              >
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center text-[#e4b3b3] text-2xl px-2">
            <button onClick={previousSlide1}>
              <FaArrowAltCircleLeft />
            </button>
            <button onClick={nextSlide1}>
              <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides1.map((_, index) => (
              <div
                key={index}
                className={`rounded-full w-3 h-3 ${
                  currentSlide1 === index ? "bg-[#914949]" : "bg-[#e4b3b3]"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="p-4 text-center rounded-b-lg w-full">
          <h3 className="text-4xl text-white">MoodBar</h3>
          <p>
          Mood Bar is a website where every cocktail is tailored to your spirit and mood selection, providing you with a drink complete with its name, image, ingredients, and preparation instructions. Enhance your experience with bartender advice quotes that match your chosen mood and easily save your favorite drinks to a personalized list for future enjoyment.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
          <a href="https://eddiehinojosa.github.io/TheMoodBar/" className="text-4xl text-white hover:scale-125">
            <CgWebsite />
          </a>
          <a href="https://github.com/EddieHinojosa/TheMoodBar" className="text-4xl text-white hover:scale-125">
            <FaGithub />
          </a>
          </div>
        </div>
      </div>
      <div className="bg-[#b77676] p-4 rounded-lg shadow-lg flex-1">
        <div className="overflow-hidden relative mt-3">
          <div
            className={`flex transition ease-out duration-400`}
            style={{ transform: `translateX(-${currentSlide2 * 100}%)` }}
          >
            {slides2.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center"
              >
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center text-[#e4b3b3] text-2xl px-2">
            <button onClick={previousSlide2}>
              <FaArrowAltCircleLeft />
            </button>
            <button onClick={nextSlide2}>
              <FaArrowAltCircleRight />
            </button>
          </div>
          <div className="dot absolute bottom-0 py-4 flex justify-center gap-3 w-full mt-10">
            {slides2.map((_, index) => (
              <div
                key={index}
                className={`rounded-full w-3 h-3 ${
                  currentSlide2 === index ? "bg-[#914949]" : "bg-[#e4b3b3]"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="p-4 text-center rounded-b-lg w-full">
          <h3 className="text-4xl text-white">Zozzled</h3>
          <p>Zozzled is an API directory offering a wide collection of cocktail recipes. Users can log in, search for specific recipes, save their favorites, and add their own cocktail recipes to their profiles. The website also allows users to edit and delete their submissions, browse popular and trending cocktails, and access detailed recipe instructions and ingredient lists.</p>
          <div className="flex justify-center space-x-4 mt-4">
          <a href="https://zozzled.onrender.com" className="text-4xl text-white hover:scale-125">
            <CgWebsite />
          </a>
          <a href="https://github.com/EddieHinojosa/Cocktail-Directory" className="text-4xl text-white hover:scale-125">
            <FaGithub />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
