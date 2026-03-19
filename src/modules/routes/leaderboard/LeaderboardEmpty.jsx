import './stylesheets/LeaderboardEmpty.css';

export default function LeaderboardEmpty() {
    return (
        <div className='empty-leaderboard-cont'>
            <div className='empty-title'>No scores yet...</div>
            <div className='empty-description'>
                Be the first to finish and claim the top spot.
            </div>
        </div>
    );
}
