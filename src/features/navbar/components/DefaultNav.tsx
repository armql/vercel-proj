import { NavLink, useLocation } from "react-router-dom";
import {nav_data} from "../data/navigation_data.ts";
import useOnLoad from "../../../hooks/useOnLoad.ts";
import Logo from "./Logo.tsx";

type NavProps = {
    effect: boolean;
}

export default function DefaultNav({effect}: NavProps) {
    const { loading } = useOnLoad(500);
    const state = useLocation();

    return (
        <nav
            className={`fixed z-20 flex h-24 w-full flex-row items-center justify-between uppercase transition duration-100 ease-in-out xl:px-48 ${
                effect ? "-translate-y-20" : "translate-x-0"
            } ${loading ? "opacity-0" : "opacity-100"} 
      
      `}
        >
            <div className="flex justify-center itemss-center gap-4">
                {nav_data.slice(0, 3).map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.to}
                        className={({ isActive }) =>
                            `cursor-pointer rounded-lg py-2.5 text-center px-2 font-mono text-sm tracking-wider  ${
                                isActive ? state.pathname !== '/home' ? "bg-lime-200 font-medium" : "" : "font-normal "
                            } ${state.pathname !== "/home" ? "text-green-900 hover:bg-lime-100" : "text-white hover:bg-blue-700"}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <Logo
                className={`py-4 w-[88px] text-center text-4xl font-bold tracking-wide sm:py-0 sm:text-3xl ${state.pathname !== "/home" ? "text-green-950" : "text-white"} `}
            />
            <div className="flex items-center justify-center">
                <div className="flex gap-4 ">
                    {nav_data.slice(3, 5).map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.to}
                            className={({ isActive }) =>
                                `cursor-pointer rounded-lg text-center px-2 py-2.5 font-mono text-sm tracking-wider ${
                                    isActive ? state.pathname !== '/home' ? "bg-lime-200 font-medium" : "" : "font-normal"
                                } ${state.pathname !== "/home" ? `text-green-900 ${isActive && "hover:bg-lime-100"}` : "text-white hover:bg-blue-700"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                <button
                    type="button"
                    className={`rounded-lg py-2.5 px-2 text-sm font-medium uppercase tracking-wider 
          ${state.pathname !== "/home" ? "bg-black text-white" : "bg-white text-blue-900 "}
          `}
                >
                    Find in store
                </button>
                </div>
            </div>
        </nav>
    );
}
