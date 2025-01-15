import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setfilterDoc] = useState([]);

  const applyFilter = () => {
    if (!doctors) return;
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };

  useEffect(() => {
    if (doctors) {
      applyFilter();
    }
  }, [doctors, speciality]); // Exécuter seulement quand doctors change

  return (
    <div>
      <p className="text-gray-600">Parcourez les spécialités.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === " Médecin généraliste"
                ? navigate("/doctors")
                : navigate("/doctors/Médecin généraliste")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Médecin généraliste"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Médecin généraliste
          </p>
          <p
            onClick={() =>
              speciality === "Gynécologue"
                ? navigate("/doctors")
                : navigate("/doctors/Gynécologue")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynécologue" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynécologue
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologue"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologue")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologue" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologue
          </p>
          <p
            onClick={() =>
              speciality === "Neurologue"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologue")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Neurologue" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologue
          </p>
          <p
            onClick={() =>
              speciality === "Pédiatre"
                ? navigate("/doctors")
                : navigate("/doctors/Pédiatre")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Pédiatre" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pédiatre
          </p>
          <p
            onClick={() =>
              speciality === " Gastro-entérologue"
                ? navigate("/doctors")
                : navigate("/doctors/Gastro-entérologue")
            }
            className={`w-[93vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Gastro-entérologue"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastro-entérologue
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Disponible</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
