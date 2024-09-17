import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Pagination } from "@/components/Pagination";

describe("Pagination", () => {
    function renderComponent(currentPage: number, totalRecords: number, isLoading = false) {
        const onPageChange = vi.fn();

        render(
            <Pagination
                isLoading={isLoading}
                currentPage={currentPage}
                perPage={5}
                totalRecords={totalRecords}
                onPageChange={onPageChange}
            />,
        );

        return {
            prevButton: screen.getByRole("button", { name: /previous/i }),
            nextButton: screen.getByRole("button", { name: /next/i }),
            user: userEvent.setup(),
            onPageChange,
        };
    }

    it("should render pagination but disable next and previous buttons when data is loading", () => {
        const { nextButton, prevButton } = renderComponent(1, 0, true);

        expect(prevButton).toBeDisabled();
        expect(nextButton).toBeDisabled();
    });

    it("should render correct number of page links", () => {
        const { nextButton, prevButton } = renderComponent(1, 20);

        const pageLinks = screen.getAllByRole("link");

        expect(pageLinks).toHaveLength(3);
        expect(prevButton).toBeDisabled();
        expect(nextButton).not.toBeDisabled();
    });

    it("should disable next button on last page", () => {
        const { nextButton } = renderComponent(4, 20);

        expect(nextButton).toBeDisabled();
    });

    it("should call onPageChange with correct page number on page link click", async () => {
        const { user, onPageChange } = renderComponent(1, 20);

        const secondPageLink = screen.getByText("2");
        await user.click(secondPageLink);

        expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it("should call onPageChange with previous page number when previous button is clicked", async () => {
        const { user, prevButton, onPageChange } = renderComponent(3, 20);

        await user.click(prevButton);

        expect(onPageChange).toHaveBeenCalledWith(2);
    });

    it("should call onPageChange with next page number when next button is clicked", async () => {
        const { user, nextButton, onPageChange } = renderComponent(2, 20);

        await user.click(nextButton);

        expect(onPageChange).toHaveBeenCalledWith(3);
    });

    it("should render ellipsis when there are more than 3 pages", () => {
        renderComponent(1, 50);

        const ellipsis = screen.getAllByText(/more pages/i);
        expect(ellipsis).toHaveLength(1);
    });
});
