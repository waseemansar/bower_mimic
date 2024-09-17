import { Link } from "react-router-dom";

import { sponsorsData } from "@/data";

export const Sponsors = () => {
    return (
        <div className="container mx-auto px-2.5 md:px-0 mt-4 mb-8">
            <h3 className="text-xl font-bold text-bower-brown mb-8">Sponsored By</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:px-16">
                {sponsorsData.map((sponsor) => (
                    <Link to={sponsor.link} key={sponsor.name} className="flex items-center justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-10 md:h-12" />
                    </Link>
                ))}
            </div>
        </div>
    );
};
