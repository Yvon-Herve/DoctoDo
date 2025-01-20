import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfil = () => {
  const [userData, setUserData] = useState({
    name: "Yvon Desire",
    image: assets.pic_profil,
    email: "yvondesire@gmail.com",
    phone: "0223456789",
    adresse: {
      line1: "27 rue de guyenne",
      line2: "92000 Paris",
    },
    gender: "Masculin",
    naissance: "10-06-1990",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img className="w-32" src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.taret.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>INFORMATION</p>
        <div>
          <p>Email : </p>
          <p>{userData.email}</p>
          <p>Tel : </p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.taret.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfil;
