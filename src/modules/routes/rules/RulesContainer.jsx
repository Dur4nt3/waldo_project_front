import RuleCard from './RuleCard';

import './stylesheets/RulesContainer.css';

export default function RulesContainer({ rules }) {
    return (
        <div className='rules-container'>
            {rules.map((rule) => (
                <RuleCard
                    key={rule.summary}
                    summary={rule.summary}
                    description={rule.description}
                />
            ))}
        </div>
    );
}
