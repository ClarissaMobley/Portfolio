import { useRouteError } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-custom">
      <div className="bg-[#b77676] text-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h3 className="text-4xl font-bold mb-4">Oops!</h3>
        <p className="mb-6">Sorry, an unexpected error has occurred.</p>
        <p className="mb-6">
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="/" className="text-white text-3xl flex justify-center items-center mt-4 hover:scale-125">
          <FaHome />
        </a>
      </div>
    </div>
  );
}
