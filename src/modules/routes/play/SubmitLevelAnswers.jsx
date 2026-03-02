import { useFetcher } from 'react-router';

import FormLoader from '../../utilities/MiscComponents/FormLoader';

import './stylesheets/SubmitLevelAnswers.css';

export default function SubmitLevelAnswers({ answerData = {} }) {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method='POST' action='/play' className='submit-level-answers-form'>
            {Object.keys(answerData).map((markerNum) => (
                <input
                    key={answerData[markerNum]}
                    name={markerNum}
                    hidden
                    value={answerData[markerNum]}
                    readOnly
                />
            ))}

            <button type='submit' className='has-loader'>
                { fetcher.state === 'idle' ? 'Submit' : <FormLoader color='#e8f4f8' />}
            </button>
        </fetcher.Form>
    );
}
