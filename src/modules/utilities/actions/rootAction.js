import validateName from '../validation/validateName';
import { setToken } from '../session/manageSession';

export default async function rootAction({ request }) {
    const data = await request.formData();
    const { name } = Object.fromEntries(data);

    // const nameValid = validateName(name);
    // if (nameValid !== true) {
    //     return { errors: nameValid };
    // }

    const screenWidth = window.innerWidth;

    const startData = {
        name,
        screenWidth,
    };

    const serverUrl = `${import.meta.env.VITE_API_URL}/sessions`;

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

    const results = await response.json();

    console.log(results);
}
