import { Popover } from '@mantine/core';

import './stylesheets/LevelMarkers.css';

export default function LevelMarkers({ markers, setMarkers, setPlacingMarker }) {
    <Popover trapFocus position='bottom' shadow='md'>
        <Popover.Target>
            <button type='button' className='open-markers-menu'>Markers</button>
        </Popover.Target>

        <Popover.Dropdown>
            
        </Popover.Dropdown>
    </Popover>
}
