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
                <button className="reset-game-button">Reset Game</button>
            </Popover.Target>

            <Popover.Dropdown>
                <p className="reset-game-notice">This action is irreversible!</p>
                <fetcher.Form action='/reset' method='DELETE'>
                    <button type='submit' className='confirm-game-reset'>{fetcher.state === 'idle' ? 'Confirm' : <FormLoader />}</button>
                </fetcher.Form>
            </Popover.Dropdown>
        </Popover>
    );
}
