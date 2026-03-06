import './stylesheets/RuleCard.css';

export default function RuleCard({ summary, description }) {
    return <div className="rule-card">
        <h3 className="rule-summary">{summary}</h3>
        <p className="rule-description">{description}</p>
    </div>
}