import ProjectCard from '../components/ProjectCard';
import MoodBar from "../assets/moodbar.png";
import Moodbar3 from "../assets/moodbar2.png";
import Moodbar4 from "../assets/moodbar3.png";
import Moodbar5 from "../assets/moodbar4.png";
import Zozzled from "../assets/zozzled.png";
import Zozzled3 from "../assets/zozzled2.png";
import Zozzled4 from "../assets/zozzleddrink.png";
import Zozzled5 from "../assets/zozzledmac.png";
import Zozzled6 from "../assets/zozzledphones.png";
import Agora1 from "../assets/agora1.png";
import Agora2 from "../assets/agora2.png";
import Agora3 from "../assets/agora3.png";
import Agora4 from "../assets/agora4.png";
import Agora5 from "../assets/agora5.png";
import Agora6 from "../assets/agora6.png";

const Projects = () => {
  return (
    <div className="w-[80%] m-auto pt-11 flex flex-col gap-4 animate-fadeIn">
      <ProjectCard
        title="Agora"
        description="Agora is a dynamic e-commerce marketplace where users can set up their own shops, sell products, and connect with customers. It offers a space for brands to showcase, manage stores, and grow their businesses in an engaging community."
        slides={[Agora1, Agora2, Agora3, Agora4, Agora5, Agora6]}
        websiteLink="https://agora-crafts.onrender.com/"
        githubLink="https://github.com/EddieHinojosa/Agora"
        technologies={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <ProjectCard
            title="MoodBar"
            description="Mood Bar is a website where every cocktail is tailored to your spirit and mood selection, providing you with a drink complete with its name, image, ingredients, and preparation instructions. Enhance your experience with bartender advice quotes that match your chosen mood and easily save your favorite drinks to a personalized list for future enjoyment."
            slides={[MoodBar, Moodbar5, Moodbar3, Moodbar4]}
            websiteLink="https://eddiehinojosa.github.io/TheMoodBar/"
            githubLink="https://github.com/EddieHinojosa/TheMoodBar"
            technologies={["HTML", "CSS", "Javascript", "JQuery", "Bootstrap"]}
          />
        </div>
        <div className="flex-1">
          <ProjectCard
            title="Zozzled"
            description="Zozzled is an API directory offering a wide collection of cocktail recipes. Users can log in, search for specific recipes, save their favorites, and add their own cocktail recipes to their profiles. The website also allows users to edit and delete their submissions, browse popular and trending cocktails, and access detailed recipe instructions and ingredient lists."
            slides={[Zozzled, Zozzled5, Zozzled4, Zozzled3, Zozzled6]}
            websiteLink="https://zozzled.onrender.com"
            githubLink="https://github.com/EddieHinojosa/Cocktail-Directory"
            technologies={["Handlebars", "Node.js", "Express", "PostgreSQL"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
