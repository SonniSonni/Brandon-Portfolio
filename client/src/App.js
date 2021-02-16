import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';



function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />

    </div>
  );
}

export default App;
