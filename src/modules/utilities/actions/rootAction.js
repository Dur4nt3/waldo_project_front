import { redirect } from 'react-router';

import validateName from '../validation/validateName';
import { setToken } from '../session/manageSession';
import formatStartGameResults from '../format/formatStartGameResults';

export default async function rootAction({ request }) {
    const data = await request.formData();
    const { name } = Object.fromEntries(data);

    const nameValid = validateName(name);
    if (nameValid !== true) {
        return { errors: nameValid };
    }

    const screenWidth = window.innerWidth;

    const startData = {
        name,
        screenWidth,
    };

    const serverUrl = `${import.meta.env.VITE_API_URL}/games/sessions`;

    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(startData),
    }).catch(() => 502);

    if (response === 502) {
        return { errors: 'Server unavailable, try again later.' }
    }

    if (response.status === 404) {
        return { errors: 'There\'s seems to be an error on our end. Try again later.'}
    }

    const results = await response.json();

    if (results.success === true && results.token) {
        setToken(results.token);
        return redirect('/play');
    }

    return { errors: formatStartGameResults(results) };
}
