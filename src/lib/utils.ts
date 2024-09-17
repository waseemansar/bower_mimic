import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getOwnerName(url: string) {
    try {
        const parsedUrl = new URL(url);

        const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);

        if (pathSegments.length >= 2) {
            return pathSegments[0];
        } else {
            return "";
        }
    } catch {
        return "";
    }
}
