import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Causa solidaria",
      description: "Uma aplicação em desenvolvimento para ajudar pessoas necessitadas por meio de doações.",
      tags: ["React", "TypeScript", "next.js"],
      link: "https://github.com/Causa-Solidaria/causa-solidaria.github.io",
    },
    {
      title: "sistema de previsao do tempo",
      description: "Sistema desenvolvido com foco no aprendizado e prática de integrações via API em aplicações web. Além disso, utiliza Docker para containerização e MySQL como banco de dados principal, contando também com uma solução NoSQL para complementar o armazenamento.",
      tags: ["laravel", "php", "openweathermap API", "html", "css", "bootstrap", "docker"],
      link: "https://github.com/Inaciogabriel0/previsao_laravel",
    },
    {
      title: "API de produtos com laravel",
      description: "API RESTful desenvolvida com Laravel para gerenciar um catálogo de produtos, incluindo funcionalidades de criação, leitura, atualização e exclusão (CRUD).",
      tags: ["laravel", "mysql", "API RESTful", "php", "postman"],
      link: "https://github.com/Inaciogabriel0/Primeira-api-com-laravel",
    },
  ];

  const skills = [
    "Desenvolverdor Full-Stack",
    "React e Next.js",
    "vue.js",
    "php e Laravel",
    "Docker ",
    "JavaScript",
    "html & css",
    "API RESTful",
    "Banco de Dados SQL e NoSQL",
    "Git e Controle de Versão",
    "Testes e Depuração",
    "Metodologias Ágeis",
    
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["sobre", "projetos", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors capitalize text-sm tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {["sobre", "projetos", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors capitalize text-sm tracking-wide text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Olá, eu sou
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Inacio gabriel Tavares da Silva
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor full-stack apaixonado pelo mundo da tecnologia e programação.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button
                onClick={() => scrollToSection("projetos")}
                className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 px-8 py-6 text-base font-semibold"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Sobre Mim
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções em código, principalmente na parte lógica dos meus projetos, atuando principalmente no back-end, mas também no front-end.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Acredito que uma boa arquitetura de código, aliada a práticas de segurança, é essencial para o sucesso de qualquer site. Quando combinada a um bom UI/UX, a experiência se torna completa e realmente eficiente.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-900 px-4 py-3 rounded border border-gray-800 hover:border-gray-600 transition-colors"
                  >
                    <p className="text-sm text-gray-300">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Projetos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 p-6 hover:border-gray-600 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-900 text-gray-300 px-2 py-1 rounded border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm font-medium"
                >
                  Ver Projeto <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Vamos Conversar
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
            vontade para entrar em contato!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:inaciogabriel0342@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors font-semibold"
            >
              <Mail size={20} /> Email
            </a>
            <a
              href="https://github.com/Inaciogabriel0"
              className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors font-semibold"
            >

              <Github size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/inaciogabriel/"
              className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors font-semibold"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Inacio gabriel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
