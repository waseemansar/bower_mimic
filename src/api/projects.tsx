import { axiosInstance } from "@/lib/axios";

const API_KEY = import.meta.env.VITE_API_KEY as string;

export type Project = {
    name: string;
    description: string;
    homepage: string;
    keywords: string[];
    repository_url: string;
    stars: number;
    rank: number;
};

export type ProjectsResponse = {
    projects: Project[];
    totalRecords: number;
};

export async function getProjects(page: number, perPage: number, sort?: string, query?: string) {
    const params: Record<string, string | number> = {
        api_key: API_KEY,
        per_page: perPage,
        page: page,
    };

    if (query) {
        params.q = query;
    }

    if (sort) {
        params.sort = sort;
    }

    const res = await axiosInstance.get("/search", { params });
    const projects = res.data as Project[];
    const totalRecords = parseInt(res.headers["total"]);

    return { projects, totalRecords };
}
