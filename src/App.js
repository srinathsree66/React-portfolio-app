import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
    return (
        <div className='w-full h-auto bg-bodyColor text-lighText'>
            <div className='max-w-screen-2xl mx-auto px-16'>
                <Navbar />
                <Banner />
                <Features />
                <Projects />
            </div>
        </div>
    );
}

export default App;
