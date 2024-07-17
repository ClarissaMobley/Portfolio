import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
       
            <div id="root">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>

    );
};

export default App;


// secondary color #e4b3b3
// potential 2nd #b3b3e4
// potential 3rd #cbb3e4
// potential 4th #b3e4e4
// potential 5th ##b3e4b3
// potential 6th #714091
