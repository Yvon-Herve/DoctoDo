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
      <p>Parcourez les spécialités.</p>
      <div>
        <div>
          <p>Médecin généraliste</p>
          <p>Gynécologue</p>
          <p>Dermatologue</p>
          <p>Neurologue</p>
          <p>Pédiatre</p>
          <p>Gastro-entérologue</p>
        </div>
        <div>
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
