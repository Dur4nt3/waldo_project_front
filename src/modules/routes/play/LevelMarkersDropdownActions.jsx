import { useState } from 'react';
import { Tooltip } from '@mantine/core';

import hintSvg from '../../../assets/media/icons/hint.svg';
import deleteSvg from '../../../assets/media/icons/delete.svg';

export default function LevelMarkersDropdownActions({
    characters,
    markerId,
    addMarkerPosition,
    setPlacingMarker,
}) {
    const [opened, setOpened] = useState(false);

    return (
        <div className='marker-actions'>
            <Tooltip
                opened={opened}
                multiline
                label={characters[markerId].description}
                position='left'
                classNames={{
                    tooltip: 'character-hint-tooltip',
                }}
            >
                <button
                    className='character-hint'
                    onClick={(event) => {
                        event.stopPropagation();
                        setOpened((opened) => !opened);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.stopPropagation();
                            event.preventDefault();
                            setOpened((opened) => !opened);
                        }
                    }}
                >
                    <img src={hintSvg} alt='a hint about the character' />
                </button>
            </Tooltip>

            <button
                className='remove-marker'
                onClick={(event) => {
                    event.stopPropagation();
                    addMarkerPosition(markerId, null);
                    return setPlacingMarker(null);
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.stopPropagation();
                        event.preventDefault();
                        addMarkerPosition(markerId, null);
                        return setPlacingMarker(null);
                    }
                }}
            >
                <img
                    src={deleteSvg}
                    // eslint-disable-next-line @stylistic/max-len
                    alt={`remove ${characters[markerId].name}'s marking from the image`}
                />
            </button>
        </div>
    );
}
