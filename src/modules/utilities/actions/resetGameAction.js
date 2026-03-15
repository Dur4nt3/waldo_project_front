import { getToken, deleteToken } from '../session/manageSession';
import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';
import { redirect } from 'react-router';

export default async function resetGameAction() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (!activeSession.ok) {
        throw new Response(null, { status: activeSession.status });
    }

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current`;

    const response = await fetch(serverUrl, {
        method: 'DELETE',
        headers: {
            'Session-Token': getToken(),
        },
    }).catch(() => {
        throw new Response(null, { status: 502 });
    });

    if (response.status !== 200) {
        throw new Response(null, { status: response.status });
    }
    
    deleteToken();

    return redirect('/');
}
