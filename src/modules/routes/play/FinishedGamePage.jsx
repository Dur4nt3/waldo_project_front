import BackgroundDecor from '../root/BackgroundDecor';
import PlayHeader from './PlayHeader';
import PlayMain from './PlayMain';
import GameFinishedNotice from './GameFinishedNotice';
import FinishGame from './FinishGame';

export default function FinishedGamePage({ score, placement }) {
    return (
        <>
            <BackgroundDecor />
            <PlayHeader omitPips={true} />
            <PlayMain>
                <GameFinishedNotice score={score} placement={placement} />
                <FinishGame />
            </PlayMain>
        </>
    );
}
