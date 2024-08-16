import Resume1 from '../assets/ClarissaMobleyResume.png';
import ResumePDF from '../assets/ClarissaMobleyResume.pdf';

const Resume = () => {
  return (
    <div className='flex flex-col items-center animate-fadeIn mt-11 px-4'>
      <a 
        href={ResumePDF} 
        download="ClarissaMobleyResume.pdf" 
        className='mb-4 px-6 py-3 bg-[#b77676] text-white transform transition-transform duration-300 hover:scale-105 rounded text-center w-full sm:w-auto max-w-[250px]'
      >
        Download Resume
      </a>
      <div className='w-full max-w-[800px]'>
        <img src={Resume1} alt="Resume" className='w-full h-auto' />
      </div>
    </div>
  );
};

export default Resume;

