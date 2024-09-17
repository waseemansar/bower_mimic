import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Sponsors } from "@/components/Sponsors";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 min-h-full">
                <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-[auto,1fr]">
                    <Sidebar />
                    <Outlet />
                </div>
            </main>
            <Sponsors />
            <Footer />
        </div>
    );
};
