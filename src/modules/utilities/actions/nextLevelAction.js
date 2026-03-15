import { getToken } from '../session/manageSession';
import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';

export default async function nextLevelAction() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (!activeSession.ok) {
        throw new Response(null, { status: activeSession.status });
    }

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current/levels`;

    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Session-Token': getToken(),
        },
    }).catch(() => {
        throw new Response(null, { status: 502 });
    });

    if (response.status !== 200) {
        throw new Response(null, { status: response.status });
    }
    
    return true;
}