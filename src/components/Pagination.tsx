import {
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNextButton,
    PaginationPreviousButton,
    Pagination as PaginationUI,
} from "@/components/ui/Pagination";

type PaginationProps = {
    isLoading: boolean;
    currentPage: number;
    perPage: number;
    totalRecords: number;
    onPageChange: (page: number) => void;
};

export function Pagination({ isLoading, currentPage, onPageChange, totalRecords, perPage }: PaginationProps) {
    const totalPages = Math.ceil(totalRecords / perPage);

    function getPageNumbers() {
        const pages: (number | "ellipsis")[] = [];
        const maxPagesToShow = 2;
        const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
        const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;

        let startPage = Math.max(1, currentPage - maxPagesBeforeCurrent);
        let endPage = Math.min(totalPages, currentPage + maxPagesAfterCurrent);

        if (currentPage <= maxPagesBeforeCurrent + 1) {
            endPage = Math.min(totalPages, maxPagesToShow);
        }
        if (currentPage > totalPages - maxPagesAfterCurrent) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) pages.push("ellipsis");
        }

        for (let page = startPage; page <= endPage; page++) {
            pages.push(page);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pages.push("ellipsis");
            pages.push(totalPages);
        }

        return pages;
    }

    const pages = getPageNumbers();

    return (
        <PaginationUI>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPreviousButton
                        onClick={() => onPageChange(currentPage - 1)}
                        isActive={currentPage === 1}
                        disabled={isLoading || currentPage === 1}
                        className="text-bower-brown hover:text-bower-brown"
                    />
                </PaginationItem>

                {pages.map((page, index) => (
                    <PaginationItem key={index}>
                        {page === "ellipsis" ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                role="link"
                                isActive={page === currentPage}
                                onClick={isLoading ? () => {} : () => onPageChange(page)}
                                className="p-2 min-w-max text-bower-brown hover:text-bower-brown"
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNextButton
                        onClick={() => onPageChange(currentPage + 1)}
                        isActive={currentPage === totalPages}
                        disabled={isLoading || currentPage === totalPages}
                        className="text-bower-brown hover:text-bower-brown"
                    />
                </PaginationItem>
            </PaginationContent>
        </PaginationUI>
    );
}
