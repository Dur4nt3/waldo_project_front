import { Link } from 'react-router';

import './stylesheets/PageHeaderGeneric.css';

export default function PageHeaderGeneric() {
    return (
        <header className='page-header-generic'>
            <div className='header-info'>
                <h1>
                    <Link to='/'>
                        FIND <span>THEM</span>
                    </Link>
                </h1>
            </div>
        </header>
    );
}
