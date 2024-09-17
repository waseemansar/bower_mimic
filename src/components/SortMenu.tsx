import { Label } from "@/components/ui/Label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";

type SortMenuProps = {
    label: string;
    options: string[];
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
};

export const SortMenu = ({ disabled, label, options, onChange, value }: SortMenuProps) => {
    return (
        <div className="flex items-center gap-x-2">
            <Label className="text-bower-brown">{label}</Label>
            <ToggleGroup
                disabled={disabled}
                value={value}
                onValueChange={(value) => onChange(value)}
                size="sm"
                variant="outline"
                type="single"
            >
                {options.map((option) => (
                    <ToggleGroupItem key={option} value={option} aria-label={`Sort by ${option}`} className="text-bower-brown capitalize">
                        {option}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>
    );
};
