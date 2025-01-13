import { doctors } from "../assets/assets_frontend/assets";

const TopDoctors = () => {
  return (
    <div className="flex flex-col items-center gap-1 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">médecins les plus demandés</h1>
      <p className="sm:w-1/3 text-center text-sm">
        {" "}
        Parcourez de facon simple notre liste de médecins
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            className="border border-blue-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
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
      <button className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10">
        Plus
      </button>
    </div>
  );
};

export default TopDoctors;