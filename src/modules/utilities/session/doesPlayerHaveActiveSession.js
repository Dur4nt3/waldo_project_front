import { getToken } from './manageSession';

// Returns true/false depending on session
// Returns a status code if there was a server error
export default async function doesPlayerHaveActiveSession() {
    const token = getToken();

    if (token === null) {
        return { ok: true, data: false };
    }

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current`;

    const response = await fetch(serverUrl, {
        method: 'GET',
        headers: {
            'Session-Token': token,
        },
    }).catch(() => null);

    if (response === null) {
        return { ok: false, status: 502 };
    }

    if (response.status === 404) {
        return { ok: false, status: 404 };
    }

    const results = await response.json();

    return { ok: true, data: results.success };
}
