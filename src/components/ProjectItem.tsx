import { getOwnerName } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type ProjectItemProps = {
    name: string;
    homepageUrl: string;
    description: string;
    keywords: string[];
    repositoryUrl: string;
    stars: number;
    rank: number;
};

export function ProjectItem({ name, homepageUrl, description, keywords, repositoryUrl, stars, rank }: ProjectItemProps) {
    const ownerName = getOwnerName(repositoryUrl);

    return (
        <div className="flex flex-col gap-y-3 border-b py-4">
            <div>
                <a href={homepageUrl} className="text-xl font-bold text-bower-blue">
                    {name}
                </a>
                <p className="text-sm text-black/50">{description}</p>
            </div>

            <div>
                {keywords.slice(0, 7).map((keyword) => (
                    <Badge
                        key={keyword}
                        variant="secondary"
                        role="contentinfo"
                        className="text-bower-brown font-normal text-xs rounded mr-2"
                    >
                        {keyword}
                    </Badge>
                ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-black/50 mt-2">
                <p>Owned by {ownerName}</p>
                <span>•</span>
                <p>{stars} Stars</p>
                <span>•</span>
                <p>{rank} Rank</p>
            </div>
        </div>
    );
}
