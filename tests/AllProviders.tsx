import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";

export function AllProviders({ children }: PropsWithChildren) {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    return (
        <QueryClientProvider client={client}>
            <MemoryRouter>{children}</MemoryRouter>
        </QueryClientProvider>
    );
}
