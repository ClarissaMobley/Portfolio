import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, slides, websiteLink, githubLink, technologies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="bg-[#b77676] p-4 rounded-lg shadow-lg">
      <div className="overflow-hidden relative mt-3">
        <div
          className={`flex transition ease-out duration-400`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center"
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="absolute top-0 h-full w-full flex justify-between items-center text-[#e4b3b3] text-2xl px-2">
          <button onClick={previousSlide}>
            <FaArrowAltCircleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaArrowAltCircleRight />
          </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`rounded-full w-3 h-3 ${
                currentSlide === index ? "bg-[#914949]" : "bg-[#e4b3b3]"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="p-4 text-center rounded-b-lg w-full">
        <h3 className="text-4xl text-white">{title}</h3>
        <p className="text-lg text-white mt-2">{technologies.join(", ")}</p>
        <p>{description}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href={websiteLink} target="__blank" className="text-4xl text-white hover:scale-125">
            <CgWebsite />
          </a>
          <a href={githubLink} target="__blank" className="text-4xl text-white hover:scale-125">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
