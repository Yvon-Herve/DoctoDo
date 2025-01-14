import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [doctors] = useContext(AppContext);

  return (
    <div>
      <p>Parcourez les spécialités.</p>
      <div>
        <div>
          <p></p>
          <p>Gynécologue</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
