import { createBrowserRouter } from "react-router-dom";
import CardBundlePage from "./pages/CardBundlePage";
import Layout from "./Layout";
import PickerPage from "./pages/PickerPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <CardBundlePage />
            },
            {
                path: 'card-bundle',
                element: <CardBundlePage />
            },
            {
                path:'picker',
                element: <PickerPage />
            },

        ]
    },
]);

export default router;
