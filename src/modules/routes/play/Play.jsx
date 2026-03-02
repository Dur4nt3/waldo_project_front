import BackgroundDecor from '../root/BackgroundDecor';

import PlayHeader from './PlayHeader';
import PlayMain from './PlayMain';
import PlayAreaCont from './PlayAreaCont';
import SubmitLevelAnswers from './SubmitLevelAnswers';

import lvl1Image from '../../../assets/media/images/waldo-rick-morty-lvl1.webp';
import lvl2Image from '../../../assets/media/images/waldo-breaking-bad-lvl2.png';
import lvl3Image from '../../../assets/media/images/waldo-one-piece-lvl3.png';

export default function Play() {
    return (
        <>
            <BackgroundDecor />
            <PlayHeader levelCount={3} levelsCompleted={2} />
            <PlayMain>
                <PlayAreaCont image={lvl1Image} />
                <SubmitLevelAnswers answerData={{ 1: 'test1', 2: 'test2' }} />
            </PlayMain>
        </>
    );
}
