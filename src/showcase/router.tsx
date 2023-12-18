import { createBrowserRouter } from "react-router-dom";
import CardBundlePage from "./pages/CardBundlePage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <CardBundlePage />
            },

        ]
    },
]);

export default router;
