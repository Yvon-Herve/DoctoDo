import { useState } from "react";
import { assets } from "../assets/assets_frontend";

const MyProfil = () => {
  const [userData, setUserData] = useState({
    name: "Yvon Desire",
    image: assets.profil_pic,
    email: "yvondesire@gmail.com",
    tel: "0223456789",
  });
  return <div></div>;
};

export default MyProfil;
