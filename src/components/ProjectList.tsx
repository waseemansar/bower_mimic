import { Project } from "@/api/projects";
import { ProjectItem } from "@/components/ProjectItem";

type ProjectListProps = {
    projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
    return projects.map((project, index) => (
        <ProjectItem
            key={`${project.name}-${index}`}
            name={project.name}
            description={project.description}
            homepageUrl={project.homepage}
            keywords={project.keywords}
            repositoryUrl={project.repository_url}
            stars={project.stars}
            rank={project.rank}
        />
    ));
}
