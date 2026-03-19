import { useLoaderData } from 'react-router';

import BackgroundDecor from '../root/BackgroundDecor';
import PageHeaderGeneric from '../root/PageHeaderGeneric';
import LeaderboardMain from './LeaderboardMain';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardTable from './LeaderboardTable';
import LeaderboardEmpty from './LeaderboardEmpty';

export default function Leaderboard() {
    const placements = useLoaderData();

    return (
        <>
            <BackgroundDecor />
            <PageHeaderGeneric />
            <LeaderboardMain>
                <LeaderboardHeader />
                {placements.length > 0 ? (
                    <LeaderboardTable placements={placements} />
                ) : (
                    <LeaderboardEmpty />
                )}
            </LeaderboardMain>
        </>
    );
}
