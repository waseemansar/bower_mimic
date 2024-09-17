import { render, screen } from "@testing-library/react";

import { ProjectItem } from "@/components/ProjectItem";

describe("ProjectItem", () => {
    const projectItemProps = {
        name: "Project Name",
        homepageUrl: "https://project-homepage.com",
        description: "This is a project description.",
        keywords: ["react", "typescript", "api", "graphql", "css", "html", "javascript", "node"],
        repositoryUrl: "https://github.com/facebook/project",
        stars: 1500,
        rank: 1,
    };

    function renderComponent() {
        render(<ProjectItem {...projectItemProps} />);
    }

    it("should render the project name and link", () => {
        renderComponent();

        const nameLink = screen.getByRole("link", { name: projectItemProps.name });
        expect(nameLink).toHaveAttribute("href", projectItemProps.homepageUrl);
    });

    it("should render the project description", () => {
        renderComponent();

        const description = screen.getByText(projectItemProps.description);
        expect(description).toBeInTheDocument();
    });

    it("should render correct number of keyword badges", () => {
        renderComponent();

        const badges = screen.getAllByRole("contentinfo");
        expect(badges).toHaveLength(7);
        badges.forEach((badge, index) => {
            expect(badge).toHaveTextContent(projectItemProps.keywords[index]);
        });
    });

    it("should render the owner name", () => {
        renderComponent();

        expect(screen.getByText(/owned by facebook/i)).toBeInTheDocument();
    });

    it("should render the correct stars and rank", () => {
        renderComponent();

        expect(screen.getByText(`${projectItemProps.stars} Stars`)).toBeInTheDocument();
        expect(screen.getByText(`${projectItemProps.rank} Rank`)).toBeInTheDocument();
    });
});
