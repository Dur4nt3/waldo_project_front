import { useEffect } from 'react';
import { Link, useFetcher } from 'react-router';

import FormLoader from '../../utilities/miscComponents/FormLoader';

import './stylesheets/HomepageActions.css';

export default function HomepageActions({ openModal }) {
    const fetcher = useFetcher();

    return (
        <div className='homepage-actions'>
            <button className='play-game clear-button-design' onClick={() => fetcher.load('/start-game')}>
                {fetcher.state === 'idle' ? (
                    'Play'
                ) : (
                    <FormLoader color='#00d4ff' />
                )}
            </button>

            <div className='about-actions'>
                <Link className='site-rules clear-button-design' to='/rules'>
                    Rules
                </Link>
                <Link className='site-faq clear-button-design' to='/faq'>
                    FAQ
                </Link>
            </div>

            <Link className='leaderboard-link'>Leaderboard</Link>
        </div>
    );
}
