import { createBrowserRouter } from "react-router-dom";
import CardBundlePage from "./pages/CardBundlePage";
import Layout from "./Layout";
import PickerPage from "./pages/PickerPage";
import ModalPage from "./pages/ModalPage";
import ChartPage from "./pages/ChartPage";

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
            {
                path:'modal',
                element: <ModalPage />
            },
            {
                path:'chart',
                element: <ChartPage />
            },

        ]
    },
]);

export default router;
