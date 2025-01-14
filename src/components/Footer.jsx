// import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section  */}
        <div>
          <h4 className="mb-5 w-40 text-xl font text-primary font-medium">
            DcotoDo
          </h4>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Elementum dignissim aptent metus purus architecto animi tenetur
            voluptatem,commodo aperiam erat nonsemper habitant recusandae,
            hymenaeos architecto excepturi.
          </p>
        </div>

        {/* center section  */}
        <div>
          <p className="text-xl font-medium mb-5">ENTREPRISE</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Accueil</li>
            <li>A propos</li>
            <li>politique de confidentialité</li>
          </ul>
        </div>
        {/* right section  */}
        <div>
          <p className="text-xl font-medium mb-5">Contact</p>
          <ul>
            <li>Herve.Munyemanzi@gamil.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright  */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 Herve.Munyemanzi - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
