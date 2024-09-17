import { Skeleton } from "@/components/ui/Skeleton";

export const ProjectItemSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-3 border-b py-4">
            <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[25%]" />
                <Skeleton className="h-6 w-[75%]" />
            </div>

            <div className="flex items-center gap-x-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
            </div>

            <Skeleton className="h-6 w-[30%]" />
        </div>
    );
};
