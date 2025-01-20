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
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-32 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3x1 font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email : </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Tel : </p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Adresse : </p>
          {isEdit ? (
            <p>
              {" "}
              <input
                className="bg-gray-50"
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
                className="bg-gray-50"
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
            <p className="text-gray-500">
              {userData.adresse.line1} <br /> {userData.adresse.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Genre : </p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Masculin">Masculin</option>
              <option value="Feminin">Feminin</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Date de naissance : </p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, naissance: e.target.value }))
              }
              value={userData.naissance}
            />
          ) : (
            <p className="text-gray-400">{userData.naissance}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Sauvegarder
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Modifier
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfil;
