import { screen } from "@testing-library/react";

import { navigateTo } from "./utils";

describe("Router", () => {
    it("should render the home page for /", () => {
        navigateTo("/");

        expect(screen.getByRole("heading", { name: /bower — a package manager for the web/i })).toBeInTheDocument();
    });

    it("should render the error page for invalid routes", () => {
        navigateTo("/invalid-route");

        expect(screen.getByText(/doesn't exist/i)).toBeInTheDocument();
    });
});
