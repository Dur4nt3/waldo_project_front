import lvl1Image from '../../../assets/media/images/waldo-rick-morty-lvl1.webp';
import lvl2Image from '../../../assets/media/images/waldo-breaking-bad-lvl2.png';
import lvl3Image from '../../../assets/media/images/waldo-one-piece-lvl3.png';

const levelImages = {
    1: lvl1Image,
    2: lvl2Image,
    3: lvl3Image,
};

export default function getLevelImage(imageId) {
    return levelImages[imageId];
}
