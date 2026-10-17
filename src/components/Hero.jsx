import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';
import heroBannerImg from '../assets/hero_banner.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <img
        src={heroBannerImg}
        alt="Sua Academia"
        className="hero-bg"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="hero-overlay"></div>

      <div className="container hero-container-inner">
        <div className="hero-content">
          <span className="hero-tag">Mais que uma academia</span>

          <AnimatedSectionTitle tag="h1" className="hero-title">
            Disciplina <span className="text-primary">hoje</span><br />
            Resultados <span className="text-primary">amanhã</span>
          </AnimatedSectionTitle>

          <p className="hero-subtitle animate-fade-in">
            Treine com estrutura, acompanhamento e motivação para alcançar seus objetivos.
          </p>

          <div className="hero-actions animate-fade-in">
            <a href="#planos" className="btn btn-hover-fill cta-btn">
              <span>Conheça a Sua Academia</span> <ArrowRight size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
