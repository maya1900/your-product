import { Footer } from './components/layout/footer';
import { Header } from './components/layout/header';
import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Home } from './sections/home';
import { Projects } from './sections/projects';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <Header />
      <main className="pt-24 md:pt-14">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
