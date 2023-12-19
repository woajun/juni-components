import { createBrowserRouter } from 'react-router-dom';
import CardBundlePage from './pages/CardBundlePage';
import Layout from './Layout';
import PickerPage from './pages/PickerPage';
import ModalPage from './pages/ModalPage';
import ChartPage from './pages/ChartPage';
import TabPage from './pages/TabPage';
import BottomDrawerPage from './pages/BottomDrawerPage';
import DimPage from './pages/DimPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CardBundlePage />,
      },
      {
        path: 'card-bundle',
        element: <CardBundlePage />,
      },
      {
        path: 'picker',
        element: <PickerPage />,
      },
      {
        path: 'modal',
        element: <ModalPage />,
      },
      {
        path: 'chart',
        element: <ChartPage />,
      },
      {
        path: 'tab',
        element: <TabPage />,
      },
      {
        path: 'dim',
        element: <DimPage />,
      },
      {
        path: 'bottom-drawer',
        element: <BottomDrawerPage />,
      },

    ],
  },
]);

export default router;
