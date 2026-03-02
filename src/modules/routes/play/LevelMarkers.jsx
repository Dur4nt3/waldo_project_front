import { useState } from 'react';

import { Popover } from '@mantine/core';

import LevelMarkerDropdownCont from './LevelMarkersDropdownCont';
import LevelMarkerDropdownInfo from './LevelMarkersDropdownInfo';
import LevelMarkersDropdownActions from './LevelMarkersDropdownActions';

import downSvg from '../../../assets/media/icons/caret-down.svg';

import './stylesheets/LevelMarkers.css';

export default function LevelMarkers({
    characters,
    markers,
    addMarkerPosition,
    placingMarker,
    setPlacingMarker,
}) {
    const [opened, setOpened] = useState(false);

    return (
        <Popover
            trapFocus
            position='bottom'
            shadow='md'
            classNames={{
                dropdown: 'level-markers-dropdown',
            }}
            opened={opened}
            onChange={setOpened}
        >
            <Popover.Target>
                <button
                    type='button'
                    className='open-markers-menu'
                    onClick={() => setOpened((opened) => !opened)}
                >
                    <span>Markers</span>
                    <img src={downSvg} className={opened ? 'menu-open' : 'menu-closed'} />
                </button>
            </Popover.Target>

            <Popover.Dropdown>
                <h2 className='marker-dropdown-info'>
                    SELECT A MARKER TO PLACE
                </h2>

                {Object.keys(markers).map((markerId) => (
                    <LevelMarkerDropdownCont
                        characterName={characters[markerId].name}
                        markerId={markerId}
                        placingMarker={placingMarker}
                        setPlacingMarker={setPlacingMarker}
                        setOpened={setOpened}
                        key={markerId}
                    >
                        <LevelMarkerDropdownInfo
                            characters={characters}
                            markerId={markerId}
                            markers={markers}
                            placingMarker={placingMarker}
                        />
                        <LevelMarkersDropdownActions
                            characters={characters}
                            markerId={markerId}
                            addMarkerPosition={addMarkerPosition}
                            setPlacingMarker={setPlacingMarker}
                        />
                    </LevelMarkerDropdownCont>
                ))}
            </Popover.Dropdown>
        </Popover>
    );
}
