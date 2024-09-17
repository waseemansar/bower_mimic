import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getProjects, ProjectsResponse } from "@/api/projects";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Pagination } from "@/components/Pagination";
import { ProjectItemSkeleton } from "@/components/ProjectItemSkeleton";
import { ProjectList } from "@/components/ProjectList";
import { SearchInput } from "@/components/SearchInput";
import { SkeletonList } from "@/components/SkeletonList";
import { SortMenu } from "@/components/SortMenu";

const PER_PAGE = 5;

export const SearchPage = () => {
    const [totalRecords, setTotalRecords] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const sort = searchParams.get("sort") || "";
    const page = parseInt(searchParams.get("page") || "1");

    const [debouncedQuery, setDebouncedQuery] = useState(query);

    const { data, error, isLoading } = useQuery<ProjectsResponse, Error>({
        queryKey: ["projects", page, PER_PAGE, sort, debouncedQuery],
        queryFn: () => getProjects(page, PER_PAGE, sort, debouncedQuery),
    });

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(handler);
    }, [query]);

    useEffect(() => {
        if (!isLoading && data) setTotalRecords(data.totalRecords);
    }, [isLoading, data]);

    function handleQueryChange(query: string) {
        setSearchParams(
            (prev) => {
                prev.delete("page");
                prev.delete("sort");

                if (query.trim()) prev.set("query", query);
                else prev.delete("query");

                return prev;
            },
            { replace: true },
        );
    }

    function handlePageChange(page: number) {
        setSearchParams(
            (prev) => {
                prev.set("page", page.toString());
                return prev;
            },
            { replace: true },
        );
    }

    function handleSortChange(sort: string) {
        setSearchParams(
            (prev) => {
                prev.delete("page");

                if (sort) prev.set("sort", sort);
                else prev.delete("sort");

                return prev;
            },
            { replace: true },
        );
    }

    return (
        <div className="px-3 md:pr-0 space-y-4">
            <SearchInput query={query} onChange={handleQueryChange} />
            <SortMenu disabled={isLoading} value={sort} label="Sort by" options={["rank", "stars"]} onChange={handleSortChange} />
            <div>
                {isLoading ? (
                    <div role="progressbar" aria-label="Loading Projects">
                        <SkeletonList amount={5}>
                            <ProjectItemSkeleton />
                        </SkeletonList>
                    </div>
                ) : error ? (
                    <ErrorMessage message={error.message} />
                ) : (
                    <ProjectList projects={data?.projects || []} />
                )}
            </div>
            <div className="px-4 overflow-scroll">
                <Pagination
                    isLoading={isLoading}
                    currentPage={page}
                    perPage={PER_PAGE}
                    totalRecords={totalRecords}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
