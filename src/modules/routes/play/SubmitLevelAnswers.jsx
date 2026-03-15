import { useEffect } from 'react';
import { useFetcher } from 'react-router';

import FormLoader from '../../utilities/miscComponents/FormLoader';

import './stylesheets/SubmitLevelAnswers.css';

export default function SubmitLevelAnswers({
    setAnswerResponse,
    answerData = {},
}) {
    const fetcher = useFetcher();

    useEffect(() => {
        setAnswerResponse(fetcher?.data);

        return () => setAnswerResponse(undefined);
    }, [fetcher?.data, setAnswerResponse]);

    return (
        <fetcher.Form
            method='POST'
            action='/play'
            className='submit-level-answers-form'
        >
            {Object.keys(answerData).map((markerNum) => (
                <input
                    key={markerNum}
                    name={markerNum}
                    hidden
                    value={
                        answerData[markerNum] !== null
                            ? JSON.stringify(answerData[markerNum])
                            : ''
                    }
                    readOnly
                />
            ))}

            <button
                type='submit'
                className='has-loader clear-button-design'
                disabled={fetcher.state !== 'idle'}
            >
                {fetcher.state === 'idle' ? (
                    'Check'
                ) : (
                    <FormLoader color='#e8f4f8' />
                )}
            </button>
        </fetcher.Form>
    );
}
