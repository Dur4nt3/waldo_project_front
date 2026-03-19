import formatScore from '../../utilities/format/formatScore';

import './stylesheets/LeaderboardTable.css';

function LeaderboardRow({ rowData }) {
    return (
        <div
            className={`leaderboard-row leaderboard-data-row rank${rowData.placement}`}
        >
            <div className='leaderboard-cell placement'>
                {rowData.placement}
            </div>
            <div className='leaderboard-cell name'>
                {rowData.name} (#{rowData.playerId})
            </div>
            <div className='leaderboard-cell score'>
                {formatScore(rowData.score)} ({rowData.completedLevels})
            </div>
        </div>
    );
}

export default function LeaderboardTable({ placements }) {
    return (
        <div className='leaderboard-table-cont'>
            <div className='leaderboard-row leaderboard-table-header'>
                <h3 className='leaderboard-placement'>#</h3>
                <h3 className='leaderboard-name'>Name</h3>
                <h3 className='leaderboard-score'>Time</h3>
            </div>

            {placements.map((placement) => (
                <LeaderboardRow rowData={placement} key={placement.playerId} />
            ))}
        </div>
    );
}
