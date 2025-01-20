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
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT</p>
        <div>
          <p>Email : </p>
          <p>{userData.email}</p>
          <p>Tel : </p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Adresse : </p>
          {isEdit ? (
            <p>
              {" "}
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adresse: { ...prev.adresse, line1: e.target },
                  }))
                }
                value={userData.adresse.line1}
                type="text"
              />{" "}
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    adresse: { ...prev.adresse, line2: e.target },
                  }))
                }
                value={userData.adresse.line2}
                type="text"
              />{" "}
            </p>
          ) : (
            <p>
              {userData.adresse.line1} <br /> {userData.adresse.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p>INFORMATION</p>
        <div>
          <p>Genre : </p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Feminin</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Date de naissance : </p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, naissance: e.target.value }))
              }
              value={userData.naissance}
            />
          ) : (
            <p>{userData.naissance}</p>
          )}
        </div>
      </div>

      <div>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Sauvegarder</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Modifier</button>
        )}
      </div>
    </div>
  );
};

export default MyProfil;
