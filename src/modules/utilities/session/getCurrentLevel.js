import { getToken } from './manageSession';

export default async function getCurrentLevel() {
    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current/levels`;

    const response = await fetch(serverUrl, {
        method: 'GET',
        headers: {
            'Session-Token': getToken(),
        },
    }).catch(() => null);

    if (response === null) {
        return { ok: false, status: 502 };
    }

    if (response.status !== 200) {
        return { ok: false, status: response.status };
    }

    const results = await response.json();

    if (results.finished === true) {
        return {
            ok: true,
            data: results?.success,
            finished: true,
            score: results.score,
            placement: results.placement,
        };
    }

    return { ok: true, data: results?.success, progress: results?.progress };
}
