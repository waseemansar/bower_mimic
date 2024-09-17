import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { getProjects, Project } from "@/api/projects";
import { SearchPage } from "@/pages/SearchPage";
import { AllProviders } from "../AllProviders";
import { filteredProjectsByNameReact, projects, sortedProjectsByStars } from "../data";

vi.mock("@/api/projects", () => ({
    getProjects: vi.fn(),
}));

const mockedGetProjects = getProjects as ReturnType<typeof vi.fn>;

describe("SearchPage", () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    function renderComponent() {
        render(<SearchPage />, { wrapper: AllProviders });

        const getProjectsSkeleton = () => screen.queryByRole("progressbar", { name: /projects/i });

        const expectProjectsToBeInTheDocument = (projects: Project[]) => {
            projects.forEach((project) => {
                expect(screen.getByRole("link", { name: project.name })).toBeInTheDocument();
            });
        };

        return {
            getProjectsSkeleton,
            expectProjectsToBeInTheDocument,
            user: userEvent.setup(),
        };
    }

    it("should show a loading skeleton when fetching data", () => {
        mockedGetProjects.mockResolvedValueOnce({ projects: [], totalRecords: 0 });
        const { getProjectsSkeleton } = renderComponent();

        expect(getProjectsSkeleton()).toBeInTheDocument();
    });

    it("should hide the loading skeleton after data fetched", async () => {
        mockedGetProjects.mockResolvedValueOnce({ projects: projects.slice(0, 5), totalRecords: 5 });
        const { getProjectsSkeleton } = renderComponent();

        await waitForElementToBeRemoved(getProjectsSkeleton());
    });

    it("should render an error if data cannot be fetched", async () => {
        mockedGetProjects.mockRejectedValueOnce(new Error("Failed to fetch"));
        const { getProjectsSkeleton } = renderComponent();

        await waitForElementToBeRemoved(getProjectsSkeleton);

        expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });

    it("should render data", async () => {
        mockedGetProjects.mockResolvedValueOnce({ projects, totalRecords: 10 });
        const { getProjectsSkeleton, expectProjectsToBeInTheDocument } = renderComponent();

        await waitForElementToBeRemoved(getProjectsSkeleton);

        expectProjectsToBeInTheDocument(projects);
    });

    it("should display correct data when pagination changes", async () => {
        const mockProjectsPage1 = projects.slice(0, 5);
        const mockProjectsPage2 = projects.slice(5, 10);
        mockedGetProjects.mockResolvedValueOnce({ projects: mockProjectsPage1, totalRecords: 10 });
        mockedGetProjects.mockResolvedValueOnce({ projects: mockProjectsPage2, totalRecords: 10 });

        const { user, getProjectsSkeleton, expectProjectsToBeInTheDocument } = renderComponent();
        await waitForElementToBeRemoved(getProjectsSkeleton);
        expectProjectsToBeInTheDocument(mockProjectsPage1);

        await user.click(screen.getByRole("button", { name: /next/i }));

        expectProjectsToBeInTheDocument(mockProjectsPage2);
    });

    it("should fetch sorted data when sort option changes", async () => {
        mockedGetProjects.mockResolvedValueOnce({ projects, totalRecords: 10 });
        mockedGetProjects.mockResolvedValueOnce({ projects: sortedProjectsByStars, totalRecords: 10 });

        const { user, getProjectsSkeleton, expectProjectsToBeInTheDocument } = renderComponent();
        await waitForElementToBeRemoved(getProjectsSkeleton);

        const option = screen.getByText("stars");
        await user.click(option);

        expectProjectsToBeInTheDocument(sortedProjectsByStars);
    });

    it("should fetch filtered data when search query changes", async () => {
        mockedGetProjects.mockResolvedValueOnce({ projects, totalRecords: 10 });
        mockedGetProjects.mockResolvedValueOnce({
            projects: filteredProjectsByNameReact,
            totalRecords: filteredProjectsByNameReact.length,
        });

        const { user, getProjectsSkeleton, expectProjectsToBeInTheDocument } = renderComponent();
        await waitForElementToBeRemoved(getProjectsSkeleton);

        const searchInput = screen.getByPlaceholderText(/search/i);
        await user.type(searchInput, "react");

        expectProjectsToBeInTheDocument(filteredProjectsByNameReact);
    });
});
