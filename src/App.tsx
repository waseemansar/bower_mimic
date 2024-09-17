import { Layout } from "@/components/layout/Layout";
import { TanstackQueryProvider } from "@/providers/TanStackQueryProvider";

export default function App() {
    return (
        <TanstackQueryProvider>
            <Layout />
        </TanstackQueryProvider>
    );
}
