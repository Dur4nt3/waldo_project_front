import './stylesheets/RulesHeading.css';

export default function RulesHeading({ headingText1, headingText2 }) {
    return <h2 className="rules-heading">
        <p className="heading-text">{headingText1} <span>{headingText2}</span></p>
        <div className="heading-divider"></div>
    </h2>
}