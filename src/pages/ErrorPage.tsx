import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";

export function ErrorPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-5xl font-bold text-bower-brown mb-4">404</h1>
                <p className="text-bower-brown mb-6">Oops! The page you're looking for doesn't exist.</p>
                <Button asChild className="bg-bower-brown hover:bg-stone-700">
                    <Link to="/">Go Back Home</Link>
                </Button>
            </div>
        </div>
    );
}
