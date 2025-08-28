import React, { useEffect, useState } from 'react';
import { FaPlay, FaStar, FaQuoteLeft, FaArrowRight, FaDollarSign, FaCalendarAlt, FaBullseye, FaGlobe, FaCheck, FaUsers, FaClock, FaShieldAlt, FaRocket, FaHeart, FaUserTie, FaGraduationCap, FaHandshake, FaSmile, FaMedal } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VSLanding = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    // Inicializar AOS após o componente estar montado
    setTimeout(() => {
      try {
        AOS.init({ 
          duration: 1000,
          once: true,
          offset: 100
        });
      } catch (error) {
        console.log('AOS initialization error:', error);
      }
    }, 100);
  }, []);

  // Contador funcional
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Reset quando chegar a zero
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const testimonials = [
    {
      name: "Juliana Assis",
      crp: "04/81514",
      content: "Acredito na Mind's Club por se tratar de uma plataforma que está nascendo junto com a minha carreira. Por ser uma plataforma com premissas que coadunam meus valores pessoais e profissionais.",
      rating: 5,
      image: "juliana-assis.jpg"
    },
    {
      name: "Taynara Lys",
      crp: "04/68936",
      content: "Fiquei muito feliz em poder atender oficialmente pela Mind's Club. A experiência foi muito significativa porque senti na prática o propósito do projeto: levar apoio emocional além das fronteiras geográficas. Estar no interior de Minas e poder me conectar com alguém do Sul do país mostra a força dessa rede e como a distância não é um obstáculo quando existe empatia e escuta verdadeira. Foi gratificante perceber que mesmo separados fisicamente é possível criar um espaço acolhedor e humano.",
      rating: 5,
      image: "taynara-lys.jpg"
    },
    {
      name: "Kênia Carvalho Mendes",
      crp: "22888/04",
      content: "Meu nome é Kênia, e quarta fiz meu primeiro atendimento pela Mind's Club. Sou formada há 21 anos e com pouca familiaridade com internet. Entrei neste grupo, p auxiliar na construção do projeto e tentar entender como é feito captação de clientes online. Na vdd nem pensei q teria algum retorno real.",
      rating: 5,
      image: "kenia.jpg"
    },
    {
      name: "Maira das graças Pereira Esteves",
      crp: "04/70902",
      content: "Acredito na Mind's Club, pela expectativa voltada para a atenção psicológica, enfatizar esse cuidado e investir já é uma grande valorização.",
      rating: 5,
      image: "maira-esteves.jpg"
    },
    {
      name: "Daniel Marcos Andrade",
      crp: "04/28350",
      content: "Pra mim, a Mind's Club é a conexão que transforma. A ideia de termos o máximo de psicólogos dentro da plataforma a qual ela mesma fará a divulgação é surpreendente.",
      rating: 5,
      image: "daniel-andrade.jpg"
    }
  ];

  const benefits = [
    { 
      icon: <FaDollarSign />, 
      title: "Você define o valor", 
      desc: "100% integral do valor que você cobra por consulta" 
    },
    { 
      icon: <FaCalendarAlt />, 
      title: "Total autonomia", 
      desc: "Sua agenda, seus horários, sem pressão ou interferência" 
    },
    { 
      icon: <FaBullseye />, 
      title: "Marketing cuidamos", 
      desc: "Nossa equipe investe em divulgação nacional para você" 
    },
    { 
      icon: <FaGlobe />, 
      title: "Visibilidade Nacional", 
      desc: "Atenda pacientes de todo Brasil , conectados pela Mind’s Club" 
    }
  ];

  const stats = [
    { number: "500+", label: "Psicólogos Conectados" },
    { number: "320.000+", label: "Pessoas Alcançadas" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "1 Anos", label: "Garantia Especial" }
  ];

  return (
    <div className="vsl-landing">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="navbar-brand">
              <img 
                src="assets/images/logo.png" 
                alt="Mind's Club" 
                height="50"
                className="logo"
              />
            </div>
            
            <div className="navbar-nav ms-auto">
              <a 
                className="nav-link" 
                href="#benefits-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('benefits-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Benefícios
              </a>
              <a 
                className="nav-link" 
                href="#testimonials-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Depoimentos
              </a>
              <a 
                className="nav-link" 
                href="#faq-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQ
              </a>
              <a 
                className="nav-link" 
                href="#pricing-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Planos
              </a>
              <button 
                className="btn btn-primary ms-3"
                onClick={() => document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Assinar Agora
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - VSL REORGANIZADA */}
      <section className="hero-section">
        <div className="container">
          {/* Badge de Urgência */}
          <div className="text-center mb-4" data-aos="fade-down">
            <div className="urgency-badge">
              <FaClock className="me-2" />
              <span>Oferta por tempo limitado - Vagas limitadas!</span>
            </div>
          </div>

          {/* Título Principal Impactante */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h1 className="hero-title">
              <span className="highlight">Psicólogos:</span> Pare de perder pacientes!
            </h1>
            
            {/* Subtítulo com Benefício Claro */}
            <p className="hero-subtitle">
              <strong>1 ano de divulgação nacional GRATUITA</strong> + anúncios pagos + marketing profissional. 
              <br />
              <span className="text-primary">Conecte-se com pacientes de todo o Brasil sem pagar nada!</span>
            </p>
          </div>

          {/* Video Container - Logo após a headline */}
          <div className="row justify-content-center mb-5" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="video-container">
                <div 
                  className="video-placeholder"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {!isVideoPlaying ? (
                    <>
                      <div className="play-button">
                        <FaPlay />
                      </div>
                      <div className="video-overlay">
                        <h4>Assista o Vídeo Explicativo</h4>
                        <p>Veja como a Mind's Club transformou a carreira de centenas de psicólogos</p>
                      </div>
                    </>
                  ) : (
                    <div className="video-playing">
                      <FaPlay className="me-2" />
                      Vídeo em reprodução...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas de Credibilidade */}
          <div className="row justify-content-center mb-5" data-aos="fade-up">
            <div className="col-lg-10">
              <div className="credibility-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call-to-Action Principal */}
          <div className="text-center mb-5" data-aos="fade-up">
            <div className="hero-cta">
              <button 
                className="btn btn-primary btn-lg main-cta"
                onClick={() => document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' })}
              >
                <FaRocket className="me-2" />
                QUERO MINHA VAGA AGORA
              </button>
              
              <div className="cta-benefits">
                <div className="benefit-item">
                  <FaShieldAlt className="text-success" />
                  <span>Garantia de 1 ano extra se não conseguir pacientes</span>
                </div>
                <div className="benefit-item">
                  <FaUsers className="text-primary" />
                  <span>Sem concorrência - Vagas limitadas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgência Visual */}
          <div className="row justify-content-center mb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <div className="urgency-counter">
                <div className="counter-item">
                  <div className="counter-number">47</div>
                  <div className="counter-label">Vagas Restantes</div>
                </div>
                                 <div className="counter-item">
                   <div className="counter-number">{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</div>
                   <div className="counter-label">Tempo Restante</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="text-center mb-4" data-aos="fade-up">
            <div className="trust-badges">
              <div className="badge">
                <FaShieldAlt />
                <span>100% Seguro</span>
              </div>
              <div className="badge">
                <FaCheck />
                <span>Garantia de 2 Anos</span>
              </div>
              <div className="badge">
                <FaUsers />
                <span>500+ Psicólogos</span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center" data-aos="fade-up">
            <div className="social-proof">
              <div className="testimonial-preview">
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>"Consegui 15 novos pacientes em apenas 2 meses!"</p>
                <div className="author">
                  <img src="assets/images/juliana-assis.jpg" alt="Juliana" />
                  <span>Juliana Assis - CRP 04/81514</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Especialista - Silvio Martins */}
      <section className="expert-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="expert-content">
                <div className="expert-badge">
                  <FaUserTie className="me-2" />
                  <span>Fundador da Mind's Club</span>
                </div>
                
                <h2 className="expert-title">
                  Conheça <span className="highlight">Silvio Martins</span>
                </h2>
                
                <div className="expert-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>
                    "Sou casado, pai de três filhos, e acredito que minha maior riqueza está na minha família. 
                    Coloco Deus em primeiro lugar em tudo que faço e trago comigo valores de moral e ética que 
                    guiam cada passo da minha vida pessoal e profissional."
                  </p>
                </div>
                
                <div className="expert-story">
                  <div className="story-item">
                    <FaGraduationCap className="story-icon" />
                    <div className="story-content">
                      <h4>De Filho de Pedreiro a Empresário</h4>
                      <p>
                        Sou filho de um pedreiro e de uma lavradora, e foi através do trabalho, da fé e da 
                        perseverança que me tornei empresário. A vida sempre me apresentou grandes desafios, 
                        mas em cada um deles encontrei uma nova possibilidade de crescimento.
                      </p>
                    </div>
                  </div>
                  
                  <div className="story-item">
                    <FaHeart className="story-icon" />
                    <div className="story-content">
                      <h4>Transformado pela Psicologia</h4>
                      <p>
                        Já estive à beira de um abismo emocional, e foi a psicologia — através do cuidado de 
                        uma profissional — que me resgatou e me mostrou um novo caminho. Essa experiência me 
                        transformou profundamente e me fez acreditar, de todo o coração, no poder da psicologia.
                      </p>
                    </div>
                  </div>
                  
                  <div className="story-item">
                    <FaHandshake className="story-icon" />
                    <div className="story-content">
                      <h4>Minha Missão</h4>
                      <p>
                        Hoje, trago essa visão empreendedora e essa vivência pessoal para ajudar outros 
                        psicólogos a se conectarem com pacientes, alcançarem reconhecimento e viverem da 
                        profissão que escolheram. Minha missão é ser um elo entre quem cuida e quem precisa de cuidado.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="expert-cta">
                  <p className="expert-mission">
                    <strong>Acredito que quem cuida da saúde mental também precisa ser cuidado. 
                    E é por isso que a Mind's Club nasceu.</strong>
                  </p>
                  <button className="btn btn-primary btn-lg">
                    <FaArrowRight className="me-2" />
                    Conheça Nossa História
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="expert-image-container">
                <div className="expert-image">
                  <img 
                    src="assets/images/silvio-martins.jpg" 
                    alt="Silvio Martins - Fundador da Mind's Club"
                    className="img-fluid"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>Silvio Martins</h4>
                      <p>Fundador & CEO</p>
                      <div className="credentials">
                        <span>Empreendedor</span>
                        <span>Pai de 3 filhos</span>
                        <span>Transformado pela Psicologia</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="expert-stats">
                  <div className="stat-card">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Anos de Experiência</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Psicólogos Conectados</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Compromisso</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits-section" className="benefits-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto" data-aos="fade-up">
              <h2 className="section-title">
                Como a Mind's Club Transforma Sua Carreira
              </h2>
              
              <div className="row">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        {benefit.icon}
                      </div>
                      <h4 className="benefit-title">
                        {benefit.title}
                      </h4>
                      <p className="benefit-desc">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Testimonials */}
       <section id="testimonials-section" className="testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h2 className="section-title">
                O que nossos psicólogos dizem
              </h2>
              
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-lg-6 mb-4">
                    <div className="testimonial-card">
                      <div className="quote-icon">
                        <FaQuoteLeft />
                      </div>
                      
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="star" />
                        ))}
                      </div>
                      
                      <p className="testimonial-content">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="testimonial-author">
                        <img 
                          src={`assets/images/${testimonial.image}`} 
                          alt={testimonial.name}
                          className="author-image"
                        />
                        <div className="author-info">
                          <h5 className="author-name">
                            {testimonial.name}
                          </h5>
                          <p className="author-crp">
                            CRP: {testimonial.crp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* FAQ Section */}
       <section id="faq-section" className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>Encontre Suas Respostas</h5>
                <h2 className="section-title">Perguntas Frequentes</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <img
                  src="/assets/images/faq-mockup2.png"
                  className="img-fluid"
                  alt="imagem-faq"
                />
                <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <FaSmile />
                  </div>
                  <div className="faq-patients-content text-center">
                    <h4>
                      <span className="count-digit">500+</span> Psicólogos Satisfeitos
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  <div className="accordion-item">
                                         <h2 className="accordion-header" id="headingOne">
                       <button
                         className="accordion-button"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseOne"
                         aria-expanded="true"
                         aria-controls="collapseOne"
                       >
                         Como funciona a plataforma Mind's Club?
                       </button>
                     </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            A Mind's Club é uma plataforma completa que conecta psicólogos a pacientes. 
                            Você cria seu perfil profissional, define sua disponibilidade, e recebe 
                            consultas de pacientes que se identificam com sua abordagem. Tudo de forma 
                            simples e organizada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                                         <h2 className="accordion-header" id="headingTwo">
                       <button
                         className="accordion-button collapsed"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseTwo"
                         aria-expanded="false"
                         aria-controls="collapseTwo"
                       >
                         Quais são os benefícios dos planos Bronze e Prata?
                       </button>
                     </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                          O plano bronze é dedicado a quem tem menos de 365 dias de CRP habilitado e o plano prata é para profissionais com mais de 365 de CRP habilitado.
                          Todos os planos incluem recursos avançados como marketing personalizado, relatórios no Dashboard e suporte técnico.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                                         <h2 className="accordion-header" id="headingThree">
                       <button
                         className="accordion-button collapsed"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseThree"
                         aria-expanded="false"
                         aria-controls="collapseThree"
                       >
                         Posso cancelar minha assinatura a qualquer momento?
                       </button>
                     </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Sim! Oferecemos garantia de 7 dias. Se você não estiver satisfeito com 
                            a plataforma, pode cancelar sua assinatura a qualquer momento sem 
                            multas ou taxas ocultas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                                         <h2 className="accordion-header" id="headingFour">
                       <button
                         className="accordion-button collapsed"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseFour"
                         aria-expanded="false"
                         aria-controls="collapseFour"
                       >
                         Como recebo pagamentos das consultas?
                       </button>
                     </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                          Você recebe o valor da sua sessão diretamente do seu paciente. Sem desconto, sem comissão, sem burocracia. Do seu jeito!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                                         <h2 className="accordion-header" id="headingFive">
                       <button
                         className="accordion-button collapsed"
                         data-bs-toggle="collapse"
                         data-bs-target="#collapseFive"
                         aria-expanded="false"
                         aria-controls="collapseFive"
                       >
                         A plataforma oferece suporte técnico?
                       </button>
                     </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Sim! Oferecemos suporte completo por email, chat e telefone. 
                            Nossa equipe está disponível para ajudar com qualquer dúvida 
                            sobre a plataforma, desde configuração até otimização do seu perfil.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - APENAS BRONZE E PRATA */}
      <section id="pricing-section" className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="pricing-inner-header text-center">
                <h2>Planos Disponíveis</h2>
                <p>Escolha o plano que melhor se adapta às suas necessidades</p>
              </div>
              
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-sm-12 aos" data-aos="fade-up">
                  <div className="card pricing-card">
                    <div className="card-body">
                      <div className="pricing-header">
                        <div className="pricing-header-info">
                                                     <div className="pricing-icon">
                             <span>
                               <FaMedal style={{ color: '#CD7F32' }} />
                             </span>
                           </div>
                          <div className="pricing-title">
                            <h4>Bronze</h4>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-info">
                        <div className="pricing-amount">
                          <h2>
                          Plano Anual Bronze • 12x
                          </h2>
                          <h6>R$ 119,99 <span>/ano</span></h6>
                        </div>
                        <div className="pricing-list">
                          <ul>
                            <li>Criação de Perfil</li>
                            <li>Agendamento de Consultas</li>
                            <li>Alertas de Notificação</li>
                            <li>Acesso Limitado à Telemedicina</li>
                          </ul>
                        </div>
                                                 <div className="pricing-btn">
                           <a 
                             href="https://mpago.li/1cfySuw" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="btn"
                           >
                             Escolher Bronze
                           </a>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6 col-sm-12 aos" data-aos="fade-up">
                  <div className="card pricing-card pricing-card-active">
                    <div className="card-body">
                      <div className="pricing-header">
                        <div className="pricing-header-info">
                                                     <div className="pricing-icon">
                             <span>
                               <FaMedal style={{ color: '#C0C0C0' }} />
                             </span>
                           </div>
                          <div className="pricing-title">
                            <h4>Prata</h4>
                          </div>
                          <div className="pricing-tag">
                            <span>Popular</span>
                          </div>
                        </div>
                      </div>
                      <div className="pricing-info">
                        <div className="pricing-amount">
                          <h2>
                          Plano Anual Prata • 12x
                          </h2>
                          <h6>R$ 199,99 <span>/ano</span></h6>
                        </div>
                        <div className="pricing-list">
                          <ul>
                            <li>Criação de Perfil</li>
                            <li>Agendamento de Consultas</li>
                            <li>Alertas de Notificação</li>
                            <li>Histórico de Consultas</li>                         
                          </ul>
                        </div>
                                                 <div className="pricing-btn">
                           <a 
                             href="https://mpago.li/1f2RhDp" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="btn"
                           >
                             Escolher Prata
                           </a>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <div className="guarantee-section">
                  <h3>
                    Garantia Especial
                  </h3>
                  <p>
                    Se você não conseguir nenhum paciente em um ano, você ganha mais 2 anos de visibilidade sem pagar mais nada.
                  </p>
                </div>
                
                                 <button 
                   className="btn btn-primary btn-lg cta-button"
                   onClick={() => document.getElementById('pricing-section').scrollIntoView({ behavior: 'smooth' })}
                 >
                   Começar Agora
                   <FaArrowRight className="ms-2" />
                 </button>
                <p className="limited-time mt-3">
                  Condições especiais por tempo limitado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="footer-section">
                <img 
                  src="assets/images/logo.png" 
                  alt="Mind's Club" 
                  className="footer-logo"
                  height="60"
                />
                <p className="footer-description">
                Mind’s Club, conectando você no Brasil e no mundo!
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <FaGlobe />
                  </a>
                  <a href="#" className="social-link">
                    <FaUsers />
                  </a>
                  <a href="#" className="social-link">
                    <FaHeart />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="footer-section">
                <h5>Links Rápidos</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#benefits-section">Benefícios</a>
                  </li>
                  <li>
                    <a href="#testimonials-section">Depoimentos</a>
                  </li>
                  <li>
                    <a href="#faq-section">Perguntas Frequentes</a>
                  </li>
                  <li>
                    <a href="#pricing-section">Planos</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4">
              <div className="footer-section">
                <h5>Contato</h5>
                <div className="contact-info">
                  <p>
                    <FaGlobe className="me-2" />
                    www.mindsclub.com.br
                  </p>
                  <p>
                    <FaUsers className="me-2" />
                    suporte@mindsclub.com.br
                  </p>
                  <p>
                    <FaHeart className="me-2" />
                    (31) 99594-1980
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="footer-divider" />
          
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer-bottom">
                <p className="footer-text">
                  © 2024 Mind's Club. Todos os direitos reservados.
                </p>
                <div className="footer-badges">
                  <span className="badge">100% Seguro</span>
                  <span className="badge">Garantia de 2 Anos</span>
                  <span className="badge">Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VSLanding;
