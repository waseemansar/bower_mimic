import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SortMenu } from "@/components/SortMenu";

describe("SortMenu", () => {
    function renderComponent(disabled = false) {
        const sortLabel = "Sort By";
        const sortOptions = ["rank", "stars"];
        const onChange = vi.fn();

        render(<SortMenu disabled={disabled} label={sortLabel} options={sortOptions} value={sortOptions[0]} onChange={onChange} />);

        return {
            sortLabel,
            sortOptions,
            onChange,
            user: userEvent.setup(),
        };
    }

    it("should disable the sort menu when disabled is true", () => {
        const { sortOptions } = renderComponent(true);

        sortOptions.forEach((option) => {
            expect(screen.getByText(option)).toBeDisabled();
        });
    });

    it("should render the label and options correctly", () => {
        const { sortLabel, sortOptions } = renderComponent();

        expect(screen.getByText(sortLabel)).toBeInTheDocument();
        sortOptions.forEach((option) => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it("should call onChange with the correct value when an option is clicked", async () => {
        const { sortOptions, onChange, user } = renderComponent();

        const option = screen.getByText(sortOptions[1]);
        await user.click(option);

        expect(onChange).toHaveBeenCalledWith(sortOptions[1]);
    });

    it("should render the active state correctly for the selected option", () => {
        const { sortOptions } = renderComponent();

        const option = screen.getByText(sortOptions[0]);
        expect(option).toHaveAttribute("aria-checked", "true");
    });

    it("should call onChange with empty string if the same option is clicked", async () => {
        const { sortOptions, onChange, user } = renderComponent();

        const option = screen.getByText(sortOptions[0]);
        await user.click(option);

        expect(onChange).toHaveBeenCalledWith("");
    });
});
