import canFitPips from '../../utilities/UI/CanFitPips';

import './stylesheets/PlayHeader.css';

function createLevelPips(levelCount, levelsCompleted) {
    const levelPips = [];

    for (let i = 1; i <= levelCount; i += 1) {
        let pip;

        if (levelsCompleted >= i) {
            pip = <div className='pip done' key={`level-${i}`}></div>;
        } else {
            pip = <div className='pip active' key={`level-${i}`}></div>;
        }

        levelPips.push(pip);
    }

    return levelPips;
}

// TODO: Get levelCount, levelsCompleted as inputs
// TODO: Make indicators dynamic via above inputs
// TODO: Make reset button functional
export default function PlayHeader({ levelCount, levelsCompleted }) {
    return (
        <header className='play-header'>
            <div className='header-info'>
                <h1>
                    FIND <span>THEM</span>
                </h1>

                <div className='level-indicator'>
                    <p className='level-label'>Level</p>

                    {canFitPips(levelCount) && (
                        <div className='level-pips'>
                            {createLevelPips(levelCount, levelsCompleted)}
                        </div>
                    )}

                    <p className='level-label levels-completed'>
                        {levelsCompleted}/{levelCount}
                    </p>
                </div>
            </div>
        </header>
    );
}
