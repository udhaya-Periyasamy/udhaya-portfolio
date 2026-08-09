import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import CurrentlyLearning from '../components/CurrentlyLearning';
import Contact from '../components/Contact';
import { PageTransition } from '../components/AnimationUtils';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Certifications />
      <Achievements />
      <CurrentlyLearning />
      <Contact />
    </PageTransition>
  );
}
