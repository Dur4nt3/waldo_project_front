import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Play from './modules/routes/play/Play';

import rootLoader from './modules/utilities/loaders/rootLoader';

import FullscreenLoader from './modules/utilities/miscComponents/FullscreenLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>WIP</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: rootLoader,
    },
    {
        path: '/play',
        element: <Play />,
        errorElement: <h1>WIP</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
    }
]);

export default router;
