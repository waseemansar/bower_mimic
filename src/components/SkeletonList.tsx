import { Fragment, type ReactNode } from "react";

type SkeletonListProps = {
    amount: number;
    children: ReactNode;
};

export function SkeletonList({ amount, children }: SkeletonListProps) {
    return (
        <>
            {Array.from({ length: amount }).map((_, i) => (
                <Fragment key={i}>{children}</Fragment>
            ))}
        </>
    );
}
