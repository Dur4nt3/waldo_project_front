import { useFetcher } from 'react-router';

import FormLoader from '../../utilities/miscComponents/FormLoader';

export default function FinishGame() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method='POST' action='/reset-game' className='finish-game-form'>
            <button
                type='submit'
                className='has-loader clear-button-design'
                disabled={fetcher.state !== 'idle'}
            >
                {fetcher.state === 'idle' ? (
                    'Finish Game'
                ) : (
                    <FormLoader color='#e8f4f8' />
                )}
            </button>
        </fetcher.Form>
    );
}
