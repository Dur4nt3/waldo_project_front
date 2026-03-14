import { redirect } from 'react-router';
import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';

export default async function startGameLoader() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (activeSession === null) {
        throw new Error('server error');
    }

    if (activeSession === true) {
        return redirect('/play');
    }

    return false;
}
