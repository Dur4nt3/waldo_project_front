import { useState } from 'react';

import initializeMarkerState from '../../utilities/initialize/initializeMarkerState';

import BackgroundDecor from '../root/BackgroundDecor';

import PlayHeader from './PlayHeader';

import PlayMain from './PlayMain';
import LevelMarkers from './LevelMarkers';
import PlayAreaCont from './PlayAreaCont';
import SubmitLevelAnswers from './SubmitLevelAnswers';

import lvl1Image from '../../../assets/media/images/waldo-rick-morty-lvl1.webp';
// import lvl2Image from '../../../assets/media/images/waldo-breaking-bad-lvl2.png';
// import lvl3Image from '../../../assets/media/images/waldo-one-piece-lvl3.png';

export default function Play() {
    // Mock data determined from loader response
    const characters = {
        1: {
            name: 'Pencilvester'
        },
        2: {
            name: 'Summer'
        }
    }

    // TODO: Potentially add a useEffect that syncs the state with characterIds
    // TODO: I.e., if the contents of characterIds change, re-initialize the state

    const [markers, setMarkers] = useState({
        ...initializeMarkerState(characters),
    });
    // NOTE: THIS IS EITHER NULL OR A CHARACTER ID
    // DO NOT PUT A BOOLEAN VALUE HERE
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
                    markers={markers}
                    addMarkerPosition={addMarkerPosition}
                />
                <SubmitLevelAnswers answerData={{ 1: 'test1', 2: 'test2' }} />
            </PlayMain>
        </>
    );
}
