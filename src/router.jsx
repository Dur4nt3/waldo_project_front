import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Play from './modules/routes/play/Play';
import Rules from './modules/routes/rules/Rules';
import FAQ from './modules/routes/faq/FAQ';

import playLoader from './modules/utilities/loaders/playLoader';
import startGameLoader from './modules/utilities/loaders/startGameLoader';

import rootAction from './modules/utilities/actions/rootAction';

import FullscreenLoader from './modules/utilities/miscComponents/FullscreenLoader';

import ErrorPage from './modules/routes/error/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        action: rootAction,
    },
    {
        path: '/play',
        element: <Play />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: playLoader,
    },
    {
        path: '/rules',
        element: <Rules />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/faq',
        element: <FAQ />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
    },
    {
        path: '/start-game',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: startGameLoader,
    },
]);

export default router;
