import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/bower-logo.svg";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { communityMenu } from "@/data";

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="sticky z-50 inset-x-0 top-0 w-full bg-bower-yellow backdrop-blur-lg px-2.5 md:px-0 py-2">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div className="flex items-center">
                    <MobileSidebar />
                    <div className="flex items-center gap-x-2 py-2 md:py-0">
                        <Link to="/">
                            <img src={logo} alt="Bower Logo" className="h-8 md:h-10" />
                        </Link>
                        <div className="flex flex-col">
                            <h1 className="text-base md:text-2xl font-bold text-bower-brown">Bower{pathname === "/search" && " Search"}</h1>
                            <p className="text-xs md:text-sm text-bower-brown">
                                Powered by{" "}
                                <Link to="https://libraries.io/" target="_blank" className="text-bower-blue">
                                    libraries.io
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {communityMenu.map(({ name, link, icon: Icon }) => (
                        <Link to={link} key={name} className="text-lg md:text-2xl text-bower-brown hover:text-stone-500">
                            <Icon />
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};
