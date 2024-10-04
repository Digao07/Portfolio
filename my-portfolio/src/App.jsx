import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <About />
      <Skills />
      <Projects />
      <SocialLinks />
    </div>
  );
}

export default App;
