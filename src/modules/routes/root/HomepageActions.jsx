import { Link } from 'react-router';

import './stylesheets/HomepageActions.css';

export default function HomepageActions() {
    return (
        <div className='homepage-actions'>
            <Link className='play-game clear-button-design' to='/play'>
                Play
            </Link>

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
