import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>WIP</h1>,
        hydrateFallbackElement: <h1>WIP</h1>,
    },
]);

export default router;
