import './stylesheets/SubmissionFeedback.css';

export default function SubmissionFeedback({
    answerResponse,
    invalidCharacters = [],
}) {
    if (answerResponse === false) {
        return (
            <div className='submission-feedback-cont has-error'>
                <h3 className='feedback-title'>Invalid Submission</h3>
                <p className='feedback-info'>
                    Something went wrong with your submission. Please try again.
                </p>
            </div>
        );
    }

    if (answerResponse === true) {
        return (
            <div className='submission-feedback-cont is-valid'>
                <h3 className='feedback-title'>All Characters Found</h3>
                <p className='feedback-info'>
                    You've spotted everyone in this level. Ready for the next
                    one?
                </p>
            </div>
        );
    }

    return (
        <div className='submission-feedback-cont has-error'>
            <h3 className='feedback-title'>Some Markers Are Off</h3>
            <p className='feedback-info'>
                {invalidCharacters.map((invalidCharacter, index) => {
                    if (index + 1 < invalidCharacters.length) {
                        return `"${invalidCharacter}", `;
                    }
                    return `"${invalidCharacter}" ${invalidCharacters.length > 1 ? 'were' : 'was'} not positioned correctly.`;
                })}
            </p>
        </div>
    );
}
