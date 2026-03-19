import { createBrowserRouter } from 'react-router';

import Root from './modules/routes/root/Root';
import Play from './modules/routes/play/Play';
import Rules from './modules/routes/rules/Rules';
import FAQ from './modules/routes/faq/FAQ';
import Leaderboard from './modules/routes/leaderboard/Leaderboard';

import playLoader from './modules/utilities/loaders/playLoader';
import startGameLoader from './modules/utilities/loaders/startGameLoader';
import leaderboardLoader from './modules/utilities/loaders/leaderboardLoader';

import rootAction from './modules/utilities/actions/rootAction';
import playAction from './modules/utilities/actions/playAction';
import nextLevelAction from './modules/utilities/actions/nextLevelAction';
import resetGameAction from './modules/utilities/actions/resetGameAction';

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
        action: playAction,
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
        path: '/leaderboard',
        element: <Leaderboard />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: leaderboardLoader,
    },
    {
        path: '/start-game',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        loader: startGameLoader,
    },
    {
        path: '/next-level',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        action: nextLevelAction,
    },
    {
        path: '/reset-game',
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement: <FullscreenLoader />,
        action: resetGameAction,
    },
]);

export default router;
