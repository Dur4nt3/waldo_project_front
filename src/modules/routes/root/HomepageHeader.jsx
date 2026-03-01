import './stylesheets/HomepageHeader.css';

export default function HomepageHeader() {
    return <header className="homepage-header">
        <div className="title-wrap">
            <span className="heading-above">A hidden character game</span>
            <h1 className="title" data-text='By Dante'>FIND <span>THEM</span></h1>
        </div>

        <p className="header-description">Can you spot them all?</p>
    </header>
}