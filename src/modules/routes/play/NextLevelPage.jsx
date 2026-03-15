import BackgroundDecor from '../root/BackgroundDecor';
import PlayHeader from './PlayHeader';
import PlayMain from './PlayMain';
import SubmissionFeedback from './SubmissionFeedback';
import StartNextLevel from './StartNextLevel';
import ResetGameButton from './ResetGameButton';

export default function NextLevelPage() {
    return (
        <>
            <BackgroundDecor />
            <PlayHeader omitPips={true} />
            <PlayMain>
                <SubmissionFeedback answerResponse={true} />
                <StartNextLevel />
                <ResetGameButton />
            </PlayMain>
        </>
    );
}
