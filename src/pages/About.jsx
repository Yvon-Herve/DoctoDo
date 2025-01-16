// import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2x1 pt-10 text-gray-500">
        <p>
          A PROPOS <span className="text-gray-700 font-medium"> DE NOUS </span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Bienvenue chez DoctoDo, votre partenaire de confiance pour gérer vos
            besoins en soins de santé de manière pratique et efficace. Chez
            Prescripto, nous comprenons les défis auxquels les individus sont
            confrontés lorsqu'il s'agit de planifier des rendez-vous chez le
            médecin et de gérer leur dossier de santé.
          </p>
          <p>
            DoctoDo s'engage envers l'excellence en matière de technologie de
            santé. Nous nous efforçons continuellement d'améliorer notre
            plateforme, en intégrant les dernières avancées pour améliorer
            l'expérience utilisateur et fournir un service de qualité
            supérieure. Que vous preniez votre premier rendez-vous ou que vous
            gériez des soins continus, DoctoDo est là pour vous accompagner à
            chaque étape du processus.
          </p>
          <b className="text-gray-800">Notre vision</b>
          <p>
            Notre vision chez DoctoDo est de créer une expérience de soins de
            santé transparente pour chaque utilisateur. Notre objectif est de
            combler le fossé entre les patients et les prestataires de soins de
            santé, en vous permettant d'accéder plus facilement aux soins dont
            vous avez besoin, quand vous en avez besoin.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          POURQUOI{" "}
          <span className="text-gray-700 font-semibold">NOUS CHOISIR</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficacité</b>
          <p>
            Planification de rendez-vous rationalisée qui s'adapte à votre style
            de vie chargé.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Commodité</b>
          <p>
            Accédez à un réseau de professionnels de la santé de confiance dans
            votre région.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personnalisation</b>
          <p>
            Recommandations et rappels personnalisés pour vous aider à rester au
            top de votre santé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
