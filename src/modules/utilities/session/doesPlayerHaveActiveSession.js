import { getToken } from './manageSession';

// Returns true/false depending on session
// Returns null if there was a server error
export default async function doesPlayerHaveActiveSession() {
    const token = getToken();

    if (token === null) {
        return false;
    }

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current`;

    const response = await fetch(serverUrl, {
        method: 'GET',
        headers: {
            'Session-Token': token,
        },
    }).catch(() => 502);

    if (response === 502 || response.status === 404) {
        return null;
    }

    const results = await response.json();

    return results.success;
}
