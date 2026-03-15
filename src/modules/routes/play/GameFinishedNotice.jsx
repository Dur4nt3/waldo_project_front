export default function GameFinishedNotice({ score, placement }) {
    const scoreAvailable = `You've finished with a score of ${score}`;
    const scoreNotAvailable =
        'Due to an error we have no access to your score.';

    const placementAvailable = `With this score you're the top ${placement} player.`;
    const placementNotAvailable =
        'Due to an error we have no access to your placement.';

    return (
        <div className='game-finished-cont'>
            <h3 className='finished-title'>
                You've successfully completed the game!
            </h3>
            <p className='finished-info'>
                You've spotted everyone in all the levels.
            </p>
            <p className='finished-info'>
                {score !== null ? scoreAvailable : scoreNotAvailable}
            </p>
            <p className='finished-info'>
                {placement !== null
                    ? placementAvailable
                    : placementNotAvailable}
            </p>
        </div>
    );
}
