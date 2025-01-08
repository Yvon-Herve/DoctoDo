import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-right items-center ">
      <ul className="flex m-1 gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>Doctors</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/myappointments"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>My Appointments</li>
        </NavLink>
        <NavLink
          to="/myprofil"
          className={({ isActive }) =>
            `relative px-3 py-2 ${
              isActive ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-600 after:bottom-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
          }
          end
        >
          <li>My Profil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
