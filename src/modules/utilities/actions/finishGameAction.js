import { getToken } from '../session/manageSession';
import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';

export default async function finishGameAction() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (!activeSession.ok) {
        throw new Response(null, { status: activeSession.status });
    }

    console.log('finishing game!');

    // const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current/score`;

    // const response = await fetch(serverUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Session-Token': getToken(),
    //     },
    // }).catch(() => {
    //     throw new Response(null, { status: 502 });
    // });

    // if (response.status !== 200) {
    //     throw new Response(null, { status: response.status });
    // }

    // const results = await response.json();

    // return { score: results.score, placement: results.placement };
}
