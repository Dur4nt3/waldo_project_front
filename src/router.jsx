import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Play from './modules/routes/play/Play';
import Rules from './modules/routes/rules/Rules';
import FAQ from './modules/routes/faq/FAQ';

import playLoader from './modules/utilities/loaders/playLoader';
import startGameLoader from './modules/utilities/loaders/startGameLoader';

import rootAction from './modules/utilities/actions/rootAction';

import FullscreenLoader from './modules/utilities/miscComponents/FullscreenLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1>WIP ERROR ELEMENT</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
        action: rootAction,
    },
    {
        path: '/play',
        element: <Play />,
        errorElement: <h1>WIP ERROR ELEMENT</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: playLoader,
    },
    {
        path: '/rules',
        element: <Rules />,
        errorElement: <h1>WIP ERROR ELEMENT</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/faq',
        element: <FAQ />,
        errorElement: <h1>WIP ERROR ELEMENT</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/start-game',
        element: <h1>WIP ERROR ELEMENT</h1>,
        errorElement: <h1>WIP ERROR ELEMENT</h1>,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: startGameLoader,
    },
]);

export default router;
