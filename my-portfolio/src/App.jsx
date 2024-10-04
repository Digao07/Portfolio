import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <Header />
        <About />
        <Skills />
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
