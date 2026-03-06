import { Link } from 'react-router';

import canFitPips from '../../utilities/ui/canFitPips';

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

export default function PlayHeader({ levelCount, levelsCompleted }) {
    return (
        <header className='play-header'>
            <div className='header-info'>
                <h1>
                    <Link to='/'>FIND <span>THEM</span></Link>
                </h1>

                <div className='level-indicator'>
                    <p className='level-label'>Level</p>

                    {canFitPips(levelCount) && (
                        <div className='level-pips'>
                            {createLevelPips(levelCount, levelsCompleted)}
                        </div>
                    )}

                    <p className='level-label levels-completed'>
                        {levelsCompleted + 1}/{levelCount}
                    </p>
                </div>
            </div>
        </header>
    );
}
