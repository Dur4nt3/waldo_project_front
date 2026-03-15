import { useRouteError, Link } from 'react-router';

import BackgroundDecor from '../root/BackgroundDecor';

import { ArrowLeft } from 'lucide-react';

import './stylesheets/ErrorPage.css';

const errorContent = {
    404: {
        title: <h2>Page Not Found</h2>,
        description: (
            <div className='error-description-cont'>
                <p>
                    The page you're looking for doesn't exist or has been moved.
                </p>
            </div>
        ),
    },
    500: {
        title: <h2>Internal Server Error</h2>,
        description: (
            <div className='error-description-cont'>
                <p>Something went wrong while processing your request.</p>
                <p>Please try again later.</p>
            </div>
        ),
    },
    502: {
        title: <h2>Bad Gateway</h2>,
        description: (
            <div className='error-description-cont'>
                <p>We're having trouble connecting to the service.</p>
                <p>Please try again shortly.</p>
            </div>
        ),
    },
};

export default function ErrorPage() {
    const error = useRouteError();

    const status = error?.status || 404;

    return (
        <>
            <BackgroundDecor />
            <div className='error-cont'>
                <h1 className='error-code'>
                    {error.status}
                </h1>
                <div className='error-separator'></div>
                {errorContent[status].title}
                {errorContent[status].description}
                <Link to='/' className='return-home-link'>
                    <ArrowLeft strokeWidth='2' size='18'/>
                    Return Home
                </Link>
            </div>
        </>
    );
}
