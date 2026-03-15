import { useFetcher } from 'react-router';
import { Popover } from '@mantine/core';

import FormLoader from '../../utilities/miscComponents/FormLoader';

import './stylesheets/ResetGameButton.css';

export default function ResetGameButton() {
    const fetcher = useFetcher();

    return (
        <Popover
            trapFocus
            position='top'
            shadow='md'
            classNames={{
                dropdown: 'reset-game-dropdown',
            }}
        >
            <Popover.Target>
                <button className='reset-game-button'>Reset Game</button>
            </Popover.Target>

            <Popover.Dropdown>
                <p className='reset-game-notice'>
                    This action is irreversible!
                </p>
                <fetcher.Form action='/reset-game' method='DELETE'>
                    <button
                        type='submit'
                        className='confirm-game-reset'
                        disabled={fetcher.state !== 'idle'}
                    >
                        {fetcher.state === 'idle' ? 'Confirm' : <FormLoader color="#0a0e14" />}
                    </button>
                </fetcher.Form>
            </Popover.Dropdown>
        </Popover>
    );
}
