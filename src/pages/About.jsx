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

      <div>
        <img src={assets.about_image} alt="" />
        <div>
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
          <b>Notre vision</b>
          <p>
            Notre vision chez DoctoDo est de créer une expérience de soins de
            santé transparente pour chaque utilisateur. Notre objectif est de
            combler le fossé entre les patients et les prestataires de soins de
            santé, en vous permettant d'accéder plus facilement aux soins dont
            vous avez besoin, quand vous en avez besoin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
