import { useFetcher } from 'react-router';

import FormLoader from '../../utilities/miscComponents/FormLoader';

export default function StartNextLevel() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method='POST' action='/next-level' className='start-next-level-form'>
            <button
                type='submit'
                className='has-loader clear-button-design'
                disabled={fetcher.state !== 'idle'}
            >
                {fetcher.state === 'idle' ? (
                    'Next Level'
                ) : (
                    <FormLoader color='#e8f4f8' />
                )}
            </button>
        </fetcher.Form>
    );
}
