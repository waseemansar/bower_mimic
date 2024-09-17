import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchInput } from "@/components/SearchInput";

describe("SearchInput", () => {
    it("should renders the input field with the correct query value", () => {
        const query = "abc";

        render(<SearchInput query={query} onChange={vi.fn()} />);

        const input = screen.getByPlaceholderText(/search/i);
        expect(input).toHaveValue(query);
    });

    it("should return the correct input value character by character as the user types", async () => {
        let query = "";
        const onChange = vi.fn((value) => (query = value));

        const { rerender } = render(<SearchInput query={query} onChange={onChange} />);

        const input = screen.getByPlaceholderText(/search/i);
        const user = userEvent.setup();

        await user.type(input, "a");
        rerender(<SearchInput query={query} onChange={onChange} />);
        expect(onChange).toHaveBeenNthCalledWith(1, "a");

        await user.type(input, "b");
        rerender(<SearchInput query={query} onChange={onChange} />);
        expect(onChange).toHaveBeenNthCalledWith(2, "ab");

        await user.type(input, "c");
        rerender(<SearchInput query={query} onChange={onChange} />);
        expect(onChange).toHaveBeenNthCalledWith(3, "abc");

        expect(input).toHaveValue(query);
    });
});
