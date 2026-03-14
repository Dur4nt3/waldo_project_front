import { Modal } from '@mantine/core';
import { useFetcher } from 'react-router';

import FormLoader from '../../utilities/miscComponents/FormLoader';

import './stylesheets/StartGameModal.css';

const modalClasses = {
    root: 'start-game-modal-root',
    content: 'start-game-modal-content',
    header: 'start-game-modal-header',
    close: 'start-game-modal-close-button',
};

export default function StartGameModal({ opened, close }) {
    const fetcher = useFetcher();

    const nameErrors = fetcher.data?.errors;

    return (
        <Modal
            opened={opened}
            onClose={close}
            classNames={modalClasses}
            yOffset='25dvh'
            className={nameErrors && 'has-errors'}
        >
            <div className='start-game-heading'>
                <p className='heading-top'>New Session</p>
                <h2 className='heading-text'>
                    Who's <span>Playing?</span>
                </h2>
            </div>

            <fetcher.Form action='/' method='POST' className='start-game-form'>
                <label htmlFor='name' className='start-game-form-label'>
                    Name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    min='3'
                    max='30'
                    data-autofocus
                    className={nameErrors && 'has-errors'}
                />
                <span
                    className={
                        nameErrors ? 'inline-error not-empty' : 'inline-error'
                    }
                >
                    {nameErrors}
                </span>

                <button
                    type='submit'
                    className='start-game-button clear-button-design'
                >
                    {fetcher.state === 'idle' ? (
                        'Start'
                    ) : (
                        <FormLoader color='#00d4ff' />
                    )}
                </button>
            </fetcher.Form>
        </Modal>
    );
}
