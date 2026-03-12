import { Link } from 'react-router';

import './stylesheets/HomepageActions.css';

export default function HomepageActions({ openModal }) {
    return (
        <div className='homepage-actions'>
            <button
                className='play-game clear-button-design'
                onClick={openModal}
            >
                Play
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
