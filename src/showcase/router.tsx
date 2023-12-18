import { createBrowserRouter } from "react-router-dom";
import CardBundlePage from "./pages/CardBundlePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CardBundlePage />,
    },
]);

export default router;
