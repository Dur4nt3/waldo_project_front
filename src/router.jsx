import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Play from './modules/routes/play/Play';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>WIP</h1>,
        hydrateFallbackElement: <h1>WIP</h1>,
    },
    {
        path: '/play',
        element: <Play />,
        errorElement: <h1>WIP</h1>,
        hydrateFallbackElement: <h1>WIP</h1>,
    }
]);

export default router;
