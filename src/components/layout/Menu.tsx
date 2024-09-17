import { NavLink } from "react-router-dom";

import { sidebarMenu } from "@/data";
import { cn } from "@/lib/utils";

export const Menu = () => {
    return (
        <div className="flex flex-col space-y-2">
            {sidebarMenu.map((item) => (
                <NavLink
                    to={item.link}
                    key={item.name}
                    className={({ isActive }) =>
                        cn(`p-2 font-semibold text-bower-brown rounded hover:bg-stone-300`, isActive && "bg-stone-200")
                    }
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    );
};
