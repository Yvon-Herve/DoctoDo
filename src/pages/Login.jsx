import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Cree un compte" : "Se connecter"}
        </p>
        <p>
          Veuillez vous {state === "Sign Up" ? "inscrire " : "connecter "}
          pour prendre rendez-vous
        </p>
        {state === "Sign Up" && (
          <div className="w-full ">
            <p>Nom et prénom</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
          />
        </div>
        <div className="w-full ">
          <p>Mot de passe</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 ounded-md text-base">
          {state === "Sign Up" ? "Cree un compte" : "Connexion"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Deja un compte ?{" "}
            <span
              onClick={() => setState("Se connecter")}
              className="text-primary underline cursor-pointer"
            >
              Connectez-vous ici
            </span>
          </p>
        ) : (
          <p>
            Cree un nouveau compte ?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Cliquez ici
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
