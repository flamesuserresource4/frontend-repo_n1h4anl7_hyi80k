import Hero from "./components/Hero";
import About from "./components/About";
import SkillsProjects from "./components/SkillsProjects";
import Contact from "./components/Contact";

function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-semibold text-slate-900">[Nama Anda]</a>
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <a href="#about" className="hover:text-slate-900">Tentang</a>
          <a href="#projects" className="hover:text-slate-900">Keterampilan & Proyek</a>
          <a href="#contact" className="hover:text-slate-900">Kontak</a>
        </div>
        <a href="#contact" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">Kolaborasi</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600">
        <p>
          © {new Date().getFullYear()} [Nama Anda]. Dibangun dengan kata yang jelas dan UI yang bersih. Terima kasih sudah berkunjung!
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
