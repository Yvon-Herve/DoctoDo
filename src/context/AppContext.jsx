import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
// **************
// import { createContext } from "react";
// import PropTypes from "prop-types"; // Importer PropTypes
// import { doctors } from "../assets/assets_frontend/assets";

// export const AppContext = createContext();

// const AppContextProvider = ({ children }) => {
//   const value = {
//     doctors,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// // Validation des props avec PropTypes
// AppContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AppContextProvider;
