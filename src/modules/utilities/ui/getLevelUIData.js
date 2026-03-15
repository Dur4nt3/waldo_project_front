import formatCharacterArray from '../format/formatCharacterArray';
import getLevelImage from './getLevelImage';

export default function getLevelUIData(levelData) {
    const characters = {
        ...formatCharacterArray(levelData?.current?.characters),
    };

    const levelImage = getLevelImage(levelData?.current?.imageId);

    const markerSize = levelData?.current?.markerSize;

    const completed = levelData?.completed;

    const levelCount = levelData?.total;

    return {
        characters,
        levelImage,
        markerSize,
        completed,
        levelCount
    }
}
