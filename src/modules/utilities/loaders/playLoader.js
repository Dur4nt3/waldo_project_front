import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';
import getCurrentLevel from '../session/getCurrentLevel';
import getLevelUIData from '../ui/getLevelUIData';

export default async function playLoader() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (!activeSession.ok) {
        throw new Response(null, { status: activeSession.status });
    }

    if (activeSession.data === false) {
        throw new Response(null, { status: 401 });
    }

    const levelData = await getCurrentLevel();

    if (!levelData.ok) {
        throw new Response(null, { status: levelData.status });
    }

    if (levelData.finished === true) {
        return {
            finished: true,
            score: levelData.score,
            placement: levelData.placement,
        };
    }

    if (levelData?.progress?.current === null) {
        return {
            completed: levelData?.progress?.completed,
            levelCount: levelData?.progress?.total,
            pending: true,
        };
    }

    const uiData = getLevelUIData(levelData?.progress);

    return uiData;
}
