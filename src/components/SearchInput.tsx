import { Input } from "@/components/ui/Input";

type SearchInputProps = {
    query: string;
    onChange: (searchQuery: string) => void;
};

export const SearchInput = ({ query, onChange }: SearchInputProps) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query = e.target.value;
        onChange(query);
    }

    return (
        <Input
            value={query}
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            className="focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-stone-500 placeholder:text-xs"
        />
    );
};
