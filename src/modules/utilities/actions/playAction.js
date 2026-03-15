import formatAnswerData from '../format/formatAnswerData';
import validateMarkers from '../validation/validateMarkers';
import { getToken } from '../session/manageSession';

export default async function playAction({ request }) {
    const data = await request.formData();

    const formattedAnswerData = formatAnswerData(data);

    const answersValid = validateMarkers(formattedAnswerData);
    if (answersValid !== true) {
        return answersValid;
    }

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions/current/answer`;

    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Session-Token': getToken(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locations: formattedAnswerData }),
    }).catch(() => {
        throw new Response(null, { status: 502 });
    });

    if (response.status !== 200 && response.status !== 400) {
        throw new Response(null, { status: response.status });
    }

    const results = await response.json();

    if (results.errors !== undefined) {
        return false;
    }

    if (results.invalidIds !== undefined) {
        return results.invalidIds;
    }

    return true;
}
