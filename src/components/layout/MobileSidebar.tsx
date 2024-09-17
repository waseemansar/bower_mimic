import { Menu as MenuIcon } from "lucide-react";

import { Menu } from "@/components/layout/Menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden mr-2">
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                <div className="mt-6">
                    <Menu />
                </div>
            </SheetContent>
        </Sheet>
    );
};
