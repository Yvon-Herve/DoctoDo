// import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div>
        <p>
          A PROPOS <span> DE NOUS </span>
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
          <b></b>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
