import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

import BackgroundDecor from '../root/BackgroundDecor';
import PlayHeader from './PlayHeader';
import PlayMain from './PlayMain';
import LevelMarkers from './LevelMarkers';
import PlayAreaCont from './PlayAreaCont';
import SubmissionFeedback from './SubmissionFeedback';
import SubmitLevelAnswers from './SubmitLevelAnswers';
import ResetGameButton from './ResetGameButton';

import NextLevelPage from './NextLevelPage';
import FinishedGamePage from './FinishedGamePage';

import initializeMarkerState from '../../utilities/initialize/initializeMarkerState';
import getInvalidCharacterNames from '../../utilities/ui/getInvalidCharacterNames';

export default function Play() {
    const levelData = useLoaderData();
    const { characters, completed, levelCount, levelImage, markerSize } =
        levelData;

    const [answerResponse, setAnswerResponse] = useState();
    const invalidCharacters =
        typeof answerResponse === 'object' &&
        answerResponse !== null &&
        getInvalidCharacterNames(answerResponse, characters);

    const [markers, setMarkers] = useState({
        ...initializeMarkerState(characters),
    });
    const [placingMarker, setPlacingMarker] = useState(null);

    function addMarkerPosition(markerId, markerPosition) {
        const newMarkers = { ...markers };
        newMarkers[markerId] = markerPosition;

        setMarkers(newMarkers);
    }

    useEffect(() => {
        setMarkers({ ...initializeMarkerState(characters) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [levelData.pending]);

    if (levelData.finished === true) {
        return (
            <FinishedGamePage
                score={levelData.score}
                placement={levelData.placement}
            />
        );
    }

    if (levelData.pending === true) {
        return <NextLevelPage />;
    }

    return (
        <>
            <BackgroundDecor />
            <PlayHeader levelCount={levelCount} levelsCompleted={completed} />
            <PlayMain>
                <LevelMarkers
                    characters={characters}
                    markers={markers}
                    addMarkerPosition={addMarkerPosition}
                    placingMarker={placingMarker}
                    setPlacingMarker={setPlacingMarker}
                />
                <PlayAreaCont
                    image={levelImage}
                    placingMarker={placingMarker}
                    setPlacingMarker={setPlacingMarker}
                    characters={characters}
                    markers={markers}
                    addMarkerPosition={addMarkerPosition}
                    markerSize={markerSize}
                />
                {answerResponse !== undefined && (
                    <SubmissionFeedback
                        answerResponse={answerResponse}
                        invalidCharacters={invalidCharacters}
                    />
                )}
                <SubmitLevelAnswers
                    answerData={markers}
                    setAnswerResponse={setAnswerResponse}
                />
                <ResetGameButton />
            </PlayMain>
        </>
    );
}
