import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2x1 pt-10 text-gray-500">
        <p>
          CONTACTEZ <span className="text-gray-700 font-semibold">NOUS</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">NOTRE BUREAU</p>
          <p className="text-gray-500">
            3 avenue de guyenne <br />
            75000 Paris
          </p>
          <p className="text-gray-500">
            Tel 02 23 45 67 12 <br /> Email: Herve.Munyemanzi@gmail.com{" "}
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Carrières chez DoctoDo
          </p>
          <p className="text-gray-500">
            Apprenez-en davantage sur nos équipes et nos offres d’emploi.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explorer les emplois
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
