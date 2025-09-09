import React, { useState } from 'react';
import AccessibilityMenu from './components/AccessibilityMenu';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram,
  Camera,
  Bell,
  Heart,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react';

function App() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [showMassForm, setShowMassForm] = useState(false);
  const [massIntention, setMassIntention] = useState({
    name: '',
    intention: '',
    date: '',
    phone: ''
  });

  const scrollToSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMassIntentionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um sistema de backend
    alert('Intenção de missa enviada com sucesso! Entraremos em contato em breve.');
    setMassIntention({ name: '', intention: '', date: '', phone: '' });
    setShowMassForm(false);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${
        highContrast ? 'bg-black text-yellow-400' : 'bg-white text-gray-800'
      }`}
      style={{ fontSize: `${fontSize}rem` }}
    >
      {/* Menu de Acessibilidade */}
      <AccessibilityMenu
        onFontSizeChange={setFontSize}
        onContrastToggle={() => setHighContrast(!highContrast)}
        fontSize={fontSize}
        highContrast={highContrast}
      />

      {/* Header */}
      <header 
        className={`fixed top-0 w-full backdrop-blur-sm shadow-lg z-40 transition-colors duration-300 ${
          highContrast ? 'bg-black/95 border-b-2 border-yellow-400' : 'bg-white/95'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart 
                className={`w-8 h-8 ${highContrast ? 'text-yellow-400' : 'text-blue-800'}`}
                aria-hidden="true"
              />
              <div>
                <h1 className={`text-xl font-bold ${highContrast ? 'text-yellow-400' : 'text-blue-800'}`}>
                  Igreja Santo Antônio de Santana Galvão
                </h1>
                <p className={`text-sm ${highContrast ? 'text-yellow-300' : 'text-gray-600'}`}>
                  Taubaté - SP
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Menu principal">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  highContrast 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-gray-700 hover:text-blue-800'
                }`}
                tabIndex={10}
                aria-label="Ir para seção inicial"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('horarios')}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  highContrast 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-gray-700 hover:text-blue-800'
                }`}
                tabIndex={11}
                aria-label="Ir para seção de horários"
              >
                Horários
              </button>
              <button 
                onClick={() => scrollToSection('eventos')}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  highContrast 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-gray-700 hover:text-blue-800'
                }`}
                tabIndex={12}
                aria-label="Ir para seção de eventos"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('informes')}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  highContrast 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-gray-700 hover:text-blue-800'
                }`}
                tabIndex={13}
                aria-label="Ir para seção de informes"
              >
                Informes
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  highContrast 
                    ? 'text-yellow-400 hover:text-yellow-300' 
                    : 'text-gray-700 hover:text-blue-800'
                }`}
                tabIndex={14}
                aria-label="Ir para seção de contato"
              >
                Contato
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center"
        role="main"
        aria-labelledby="hero-title"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/fachada.jpg)',
          }}
          role="img"
          aria-label="Fachada da Igreja São Vicente de Paulo"
        >
          <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-black/40'}`}></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            id="hero-title"
            className={`text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg ${
              highContrast ? 'text-yellow-400' : 'text-white'
            }`}
          >
            Igreja Santo Antônio de Santana Galvão
          </h1>
          <p className={`text-xl md:text-2xl mb-8 drop-shadow-md ${
            highContrast ? 'text-yellow-300' : 'text-white'
          }`}>
            Uma comunidade de fé, esperança e caridade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('horarios')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                  : 'bg-blue-800 hover:bg-blue-900 text-white'
              }`}
              tabIndex={20}
              aria-label="Ver horários de missas"
            >
              Ver Horários de Missas
            </button>
            <button 
              onClick={() => setShowMassForm(true)}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                highContrast
                  ? 'bg-black/60 border-yellow-400 text-yellow-400 hover:bg-black/80'
                  : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
              }`}
              tabIndex={21}
              aria-label="Marcar intenção de missa"
            >
              Marcar Intenção de Missa
            </button>
          </div>
        </div>
      </section>

      {/* Horários Section */}
      <section 
        id="horarios" 
        className={`py-20 transition-colors duration-300 ${
          highContrast ? 'bg-gray-900' : 'bg-gray-50'
        }`}
        role="region"
        aria-labelledby="horarios-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="horarios-title"
              className={`text-4xl font-bold mb-4 ${
                highContrast ? 'text-yellow-400' : 'text-gray-800'
              }`}
            >
              Horários de Missas e Atendimentos
            </h2>
            <p className={`text-lg ${
              highContrast ? 'text-yellow-300' : 'text-gray-600'
            }`}>
              Venha participar de nossa comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Missas */}
            <div 
              className={`rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
              }`}
              role="article"
              aria-labelledby="missas-title"
            >
              <div className="flex items-center mb-6">
                <Clock 
                  className={`w-8 h-8 mr-3 ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}
                  aria-hidden="true"
                />
                <h3 
                  id="missas-title"
                  className={`text-2xl font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-gray-800'
                  }`}
                >
                  Horários de Missas
                </h3>
              </div>
              <div className="space-y-4">
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Todo dia 25 do Mês, Missa Votiva de Frei Galvão às 19h30 quando for na 2ª , 3ª, 4ª e 6ª feira. Se for nos demais dias será no horário de missa normal da tarde/noite
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    19:30
                  </span>
                </div>
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Quinta-feira
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    19:30
                  </span>
                </div>
                 <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Sábado
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    18:00
                  </span>
                </div>
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Domingo
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    08:30 • 18:00
                  </span>
                </div>
              </div>
            </div>

            {/* Atendimentos */}
            <div 
              className={`rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
              }`}
              role="article"
              aria-labelledby="atendimentos-title"
            >
              <div className="flex items-center mb-6">
                <Calendar 
                  className={`w-8 h-8 mr-3 ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}
                  aria-hidden="true"
                />
                <h3 
                  id="atendimentos-title"
                  className={`text-2xl font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-gray-800'
                  }`}
                >
                  Atendimento Pastoral
                </h3>
              </div>
              <div className="space-y-4">
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Confissões
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Sáb 18:00-18:45
                  </span>
                </div>
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Batizados
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Dom 16:00
                  </span>
                </div>
                <div className={`flex justify-between items-center py-3 border-b ${
                  highContrast ? 'border-yellow-400/30' : 'border-gray-100'
                }`}>
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Casamentos
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Agendar
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className={`font-semibold ${
                    highContrast ? 'text-yellow-300' : 'text-gray-700'
                  }`}>
                    Atendimento Geral
                  </span>
                  <span className={`font-bold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Seg-Sex 14:00-17:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section 
        id="eventos" 
        className={`py-20 transition-colors duration-300 ${
          highContrast ? 'bg-black' : 'bg-white'
        }`}
        role="region"
        aria-labelledby="eventos-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="eventos-title"
              className={`text-4xl font-bold mb-4 ${
                highContrast ? 'text-yellow-400' : 'text-gray-800'
              }`}
            >
              Eventos e Atividades
            </h2>
            <p className={`text-lg ${
              highContrast ? 'text-yellow-300' : 'text-gray-600'
            }`}>
              Momentos especiais de nossa comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Placeholder para fotos de eventos */}
            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-gray-100'
              }`}
              role="article"
              aria-labelledby="evento1-title"
              tabIndex={30}
            >
              <div className={`h-48 flex items-center justify-center ${
                highContrast 
                  ? 'bg-gradient-to-br from-yellow-600 to-yellow-800' 
                  : 'bg-gradient-to-br from-blue-400 to-blue-600'
              }`}>
                <Camera 
                  className="w-16 h-16 text-white/70" 
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 
                  id="evento1-title"
                  className={`text-xl font-bold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-800'
                  }`}
                >
                  Festa de São Vicente
                </h3>
                <p className={`${
                  highContrast ? 'text-yellow-300' : 'text-gray-600'
                }`}>
                  Celebração anual em honra ao nosso padroeiro
                </p>
              </div>
            </div>

            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-gray-100'
              }`}
              role="article"
              aria-labelledby="evento2-title"
              tabIndex={31}
            >
              <div className={`h-48 flex items-center justify-center ${
                highContrast 
                  ? 'bg-gradient-to-br from-yellow-600 to-yellow-800' 
                  : 'bg-gradient-to-br from-green-400 to-green-600'
              }`}>
                <Camera 
                  className="w-16 h-16 text-white/70" 
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 
                  id="evento2-title"
                  className={`text-xl font-bold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-800'
                  }`}
                >
                  Primeira Comunhão
                </h3>
                <p className={`${
                  highContrast ? 'text-yellow-300' : 'text-gray-600'
                }`}>
                  Momentos especiais das crianças da paróquia
                </p>
              </div>
            </div>

            <div 
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-gray-100'
              }`}
              role="article"
              aria-labelledby="evento3-title"
              tabIndex={32}
            >
              <div className={`h-48 flex items-center justify-center ${
                highContrast 
                  ? 'bg-gradient-to-br from-yellow-600 to-yellow-800' 
                  : 'bg-gradient-to-br from-purple-400 to-purple-600'
              }`}>
                <Camera 
                  className="w-16 h-16 text-white/70" 
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 
                  id="evento3-title"
                  className={`text-xl font-bold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-800'
                  }`}
                >
                  Ações Sociais
                </h3>
                <p className={`${
                  highContrast ? 'text-yellow-300' : 'text-gray-600'
                }`}>
                  Trabalhos de caridade e solidariedade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informes Section */}
      <section 
        id="informes" 
        className={`py-20 transition-colors duration-300 ${
          highContrast ? 'bg-gray-900' : 'bg-gray-50'
        }`}
        role="region"
        aria-labelledby="informes-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="informes-title"
              className={`text-4xl font-bold mb-4 ${
                highContrast ? 'text-yellow-400' : 'text-gray-800'
              }`}
            >
              Informes Paroquiais
            </h2>
            <p className={`text-lg ${
              highContrast ? 'text-yellow-300' : 'text-gray-600'
            }`}>
              Fique por dentro das novidades
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div 
              className={`rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
              }`}
              role="article"
              aria-labelledby="informe1-title"
              tabIndex={40}
            >
              <div className="flex items-start space-x-4">
                <Bell 
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 
                    id="informe1-title"
                    className={`text-xl font-bold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-800'
                    }`}
                  >
                    Preparação para o Natal
                  </h3>
                  <p className={`mb-3 ${
                    highContrast ? 'text-yellow-300' : 'text-gray-600'
                  }`}>
                    Iniciamos nossa preparação para o Natal com momentos especiais de oração e reflexão. 
                    Participe das novenas que acontecem todos os dias às 18h30.
                  </p>
                  <span className={`text-sm font-semibold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Publicado em 15/12/2024
                  </span>
                </div>
              </div>
            </div>

            <div 
              className={`rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
              }`}
              role="article"
              aria-labelledby="informe2-title"
              tabIndex={41}
            >
              <div className="flex items-start space-x-4">
                <Bell 
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 
                    id="informe2-title"
                    className={`text-xl font-bold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-800'
                    }`}
                  >
                    Campanha do Agasalho
                  </h3>
                  <p className={`mb-3 ${
                    highContrast ? 'text-yellow-300' : 'text-gray-600'
                  }`}>
                    Nossa paróquia está arrecadando agasalhos para distribuir às famílias necessitadas. 
                    Você pode deixar suas doações na secretaria paroquial.
                  </p>
                  <span className={`text-sm font-semibold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Publicado em 10/12/2024
                  </span>
                </div>
              </div>
            </div>

            <div 
              className={`rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
              }`}
              role="article"
              aria-labelledby="informe3-title"
              tabIndex={42}
            >
              <div className="flex items-start space-x-4">
                <Bell 
                  className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 
                    id="informe3-title"
                    className={`text-xl font-bold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-800'
                    }`}
                  >
                    Curso de Noivos
                  </h3>
                  <p className={`mb-3 ${
                    highContrast ? 'text-yellow-300' : 'text-gray-600'
                  }`}>
                    Inscrições abertas para o curso de preparação matrimonial. 
                    Procure a secretaria para mais informações e agendamento.
                  </p>
                  <span className={`text-sm font-semibold ${
                    highContrast ? 'text-yellow-400' : 'text-blue-800'
                  }`}>
                    Publicado em 05/12/2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section 
        id="contato" 
        className={`py-20 transition-colors duration-300 ${
          highContrast ? 'bg-black' : 'bg-white'
        }`}
        role="region"
        aria-labelledby="contato-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              id="contato-title"
              className={`text-4xl font-bold mb-4 ${
                highContrast ? 'text-yellow-400' : 'text-gray-800'
              }`}
            >
              Fale Conosco
            </h2>
            <p className={`text-lg ${
              highContrast ? 'text-yellow-300' : 'text-gray-600'
            }`}>
              Estamos aqui para ajudar você
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div 
                className={`rounded-xl p-8 transition-colors duration-300 ${
                  highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-gray-50'
                }`}
                role="article"
                aria-labelledby="endereco-title"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <MapPin 
                    className={`w-6 h-6 mt-1 flex-shrink-0 ${
                      highContrast ? 'text-yellow-400' : 'text-blue-800'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 
                      id="endereco-title"
                      className={`text-xl font-bold mb-2 ${
                        highContrast ? 'text-yellow-400' : 'text-gray-800'
                      }`}
                    >
                      Endereço
                    </h3>
                    <address className={`not-italic ${
                      highContrast ? 'text-yellow-300' : 'text-gray-600'
                    }`}>
                      Rua Tenente Alexandre Gandhi Lacerda de Souza, nº 20<br />
                      Chácara São Silvestre<br />
                      Taubaté - SP, 12081-010
                    </address>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Phone 
                    className={`w-6 h-6 flex-shrink-0 ${
                      highContrast ? 'text-yellow-400' : 'text-blue-800'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className={`text-lg font-bold ${
                      highContrast ? 'text-yellow-400' : 'text-gray-800'
                    }`}>
                      Telefone
                    </h3>
                    <a 
                      href="tel:+551236250000"
                      className={`hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                        highContrast ? 'text-yellow-300' : 'text-gray-600'
                      }`}
                      tabIndex={50}
                    >
                      (12) 3625-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail 
                    className={`w-6 h-6 flex-shrink-0 ${
                      highContrast ? 'text-yellow-400' : 'text-blue-800'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className={`text-lg font-bold ${
                      highContrast ? 'text-yellow-400' : 'text-gray-800'
                    }`}>
                      E-mail
                    </h3>
                    <a 
                      href="mailto:contato@saovicente-taubate.org.br"
                      className={`hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                        highContrast ? 'text-yellow-300' : 'text-gray-600'
                      }`}
                      tabIndex={51}
                    >
                      contato@saovicente-taubate.org.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div 
                className={`rounded-xl p-8 transition-colors duration-300 ${
                  highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-blue-50'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 ${
                  highContrast ? 'text-yellow-400' : 'text-gray-800'
                }`}>
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className={`p-3 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                      highContrast
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    aria-label="Facebook"
                    tabIndex={52}
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className={`p-3 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                      highContrast
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                        : 'bg-pink-600 hover:bg-pink-700 text-white'
                    }`}
                    aria-label="Instagram"
                    tabIndex={53}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div 
              className={`rounded-xl p-8 transition-colors duration-300 ${
                highContrast ? 'bg-gray-800 border-2 border-yellow-400' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 ${
                highContrast ? 'text-yellow-400' : 'text-gray-800'
              }`}>
                Envie sua Mensagem
              </h3>
              <form className="space-y-4" role="form" aria-labelledby="form-title">
                <div>
                  <label 
                    htmlFor="nome"
                    className={`block text-sm font-semibold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-700'
                    }`}
                  >
                    Nome *
                  </label>
                  <input 
                    id="nome"
                    type="text" 
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      highContrast
                        ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="Seu nome completo"
                    tabIndex={60}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-700'
                    }`}
                  >
                    E-mail *
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      highContrast
                        ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="seu@email.com"
                    tabIndex={61}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="telefone"
                    className={`block text-sm font-semibold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-700'
                    }`}
                  >
                    Telefone
                  </label>
                  <input 
                    id="telefone"
                    type="tel" 
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      highContrast
                        ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="(12) 99999-9999"
                    tabIndex={62}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="mensagem"
                    className={`block text-sm font-semibold mb-2 ${
                      highContrast ? 'text-yellow-400' : 'text-gray-700'
                    }`}
                  >
                    Mensagem *
                  </label>
                  <textarea 
                    id="mensagem"
                    rows={4}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      highContrast
                        ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                        : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                    }`}
                    placeholder="Sua mensagem..."
                    tabIndex={63}
                    aria-required="true"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                    highContrast
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-blue-800 hover:bg-blue-900 text-white'
                  }`}
                  tabIndex={64}
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para Intenção de Missa */}
      {showMassForm && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className={`rounded-xl max-w-md w-full p-8 transition-colors duration-300 ${
              highContrast ? 'bg-black border-2 border-yellow-400' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 
                id="modal-title"
                className={`text-2xl font-bold ${
                  highContrast ? 'text-yellow-400' : 'text-gray-800'
                }`}
              >
                Intenção de Missa
              </h3>
              <button 
                onClick={() => setShowMassForm(false)}
                className={`hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                  highContrast ? 'text-yellow-400' : 'text-gray-500'
                }`}
                aria-label="Fechar modal"
                tabIndex={70}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleMassIntentionSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="modal-nome"
                  className={`block text-sm font-semibold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-700'
                  }`}
                >
                  Nome Completo *
                </label>
                <input 
                  id="modal-nome"
                  type="text" 
                  required
                  value={massIntention.name}
                  onChange={(e) => setMassIntention({...massIntention, name: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    highContrast
                      ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                      : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                  }`}
                  placeholder="Seu nome completo"
                  tabIndex={71}
                  aria-required="true"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="modal-intencao"
                  className={`block text-sm font-semibold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-700'
                  }`}
                >
                  Intenção *
                </label>
                <textarea 
                  id="modal-intencao"
                  required
                  rows={3}
                  value={massIntention.intention}
                  onChange={(e) => setMassIntention({...massIntention, intention: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    highContrast
                      ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                      : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                  }`}
                  placeholder="Descreva sua intenção de missa..."
                  tabIndex={72}
                  aria-required="true"
                ></textarea>
              </div>
              
              <div>
                <label 
                  htmlFor="modal-data"
                  className={`block text-sm font-semibold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-700'
                  }`}
                >
                  Data Preferida *
                </label>
                <input 
                  id="modal-data"
                  type="date" 
                  required
                  value={massIntention.date}
                  onChange={(e) => setMassIntention({...massIntention, date: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    highContrast
                      ? 'bg-gray-700 border-yellow-400 text-yellow-400'
                      : 'bg-white border-gray-300 text-gray-800'
                  }`}
                  tabIndex={73}
                  aria-required="true"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="modal-telefone"
                  className={`block text-sm font-semibold mb-2 ${
                    highContrast ? 'text-yellow-400' : 'text-gray-700'
                  }`}
                >
                  Telefone *
                </label>
                <input 
                  id="modal-telefone"
                  type="tel" 
                  required
                  value={massIntention.phone}
                  onChange={(e) => setMassIntention({...massIntention, phone: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    highContrast
                      ? 'bg-gray-700 border-yellow-400 text-yellow-400 placeholder-yellow-300'
                      : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
                  }`}
                  placeholder="(12) 99999-9999"
                  tabIndex={74}
                  aria-required="true"
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowMassForm(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    highContrast
                      ? 'bg-gray-600 hover:bg-gray-500 text-yellow-400'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                  }`}
                  tabIndex={75}
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    highContrast
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                      : 'bg-blue-800 hover:bg-blue-900 text-white'
                  }`}
                  tabIndex={76}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer 
        className={`py-12 transition-colors duration-300 ${
          highContrast ? 'bg-black border-t-2 border-yellow-400 text-yellow-400' : 'bg-blue-900 text-white'
        }`}
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-8 h-8" aria-hidden="true" />
              <h3 className="text-2xl font-bold">
                Igreja São Vicente de Paulo
              </h3>
            </div>
            <p className={`mb-6 ${
              highContrast ? 'text-yellow-300' : 'text-blue-200'
            }`}>
              Uma comunidade unida pela fé, esperança e caridade
            </p>
            <div className="flex justify-center space-x-6 mb-6" role="navigation" aria-label="Redes sociais">
              <a 
                href="#" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                  highContrast 
                    ? 'text-yellow-300 hover:text-yellow-400' 
                    : 'text-blue-200 hover:text-white'
                }`}
                aria-label="Facebook da Igreja"
                tabIndex={80}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className={`transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                  highContrast 
                    ? 'text-yellow-300 hover:text-yellow-400' 
                    : 'text-blue-200 hover:text-white'
                }`}
                aria-label="Instagram da Igreja"
                tabIndex={81}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className={`text-sm ${
              highContrast ? 'text-yellow-300' : 'text-blue-300'
            }`}>
              © 2024 Igreja São Vicente de Paulo - Taubaté. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;