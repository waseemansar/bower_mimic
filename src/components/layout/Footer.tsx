import { Link } from "react-router-dom";

import logo from "@/assets/bower-logo.svg";
import { communityMenu, contributionMenu, docsMenu } from "@/data";

export const Footer = () => {
    return (
        <footer className="bg-bower-brown">
            <div className="container mx-auto px-2.5 md:px-0 py-4 space-y-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="font-semibold text-white text-lg">Docs</h3>
                        <ul className="flex flex-col mt-3">
                            {docsMenu.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="text-sm font-semibold text-white hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white text-lg">Community</h3>
                        <ul className="flex flex-col mt-3">
                            {communityMenu.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="text-sm font-semibold text-white hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white text-lg">Contributing</h3>
                        <ul className="flex flex-col mt-3">
                            {contributionMenu.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="text-sm font-semibold text-white hover:underline">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <img src={logo} alt="Bower Logo" className="h-8 md:h-10" />
                    <p className="text-xs text-white">Copyright © 2024</p>
                </div>
            </div>
        </footer>
    );
};
