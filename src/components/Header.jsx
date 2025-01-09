import { assets } from "../assets/assets_frontend/assets";
const Header = () => {
  return (
    <div>
      {/* left-side */}
      <div>
        <p>
          Prendre rendez-vous <br />
          Avec des médecins de confiance
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            Parcourez de facon simple notre liste de médecins, <br />
            et planifiez votre rendez-vous.
          </p>
        </div>
        <a href="">
          Prendre rendez-vous <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* right-side */}
      <div></div>
    </div>
  );
};

export default Header;
