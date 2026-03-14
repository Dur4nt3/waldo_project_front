import { useState } from 'react';

import initializeMarkerState from '../../utilities/initialize/initializeMarkerState';

import BackgroundDecor from '../root/BackgroundDecor';

import PlayHeader from './PlayHeader';

import PlayMain from './PlayMain';
import LevelMarkers from './LevelMarkers';
import PlayAreaCont from './PlayAreaCont';
import SubmitLevelAnswers from './SubmitLevelAnswers';
import ResetGameButton from './ResetGameButton';

import lvl1Image from '../../../assets/media/images/waldo-rick-morty-lvl1.webp';

export default function Play() {
    // Mock data determined from loader response
    const characters = {
        1: {
            name: 'Pencilvester',
            description: "He's a pencil...",
        },
        2: {
            name: 'Summer',
            description: 'Red haired girl with a pink shirt',
        },
    };
    const markerSize = 10;

    const [markers, setMarkers] = useState({
        ...initializeMarkerState(characters),
    });
    const [placingMarker, setPlacingMarker] = useState(null);

    function addMarkerPosition(markerId, markerPosition) {
        const newMarkers = { ...markers };
        newMarkers[markerId] = markerPosition;

        setMarkers(newMarkers);
    }

    return (
        <>
            <BackgroundDecor />
            <PlayHeader levelCount={3} levelsCompleted={2} />
            <PlayMain>
                <LevelMarkers
                    characters={characters}
                    markers={markers}
                    addMarkerPosition={addMarkerPosition}
                    placingMarker={placingMarker}
                    setPlacingMarker={setPlacingMarker}
                />
                <PlayAreaCont
                    image={lvl1Image}
                    placingMarker={placingMarker}
                    setPlacingMarker={setPlacingMarker}
                    characters={characters}
                    markers={markers}
                    addMarkerPosition={addMarkerPosition}
                    markerSize={markerSize}
                />
                <SubmitLevelAnswers answerData={{ 1: 'test1', 2: 'test2' }} />
                <ResetGameButton />
            </PlayMain>
        </>
    );
}
