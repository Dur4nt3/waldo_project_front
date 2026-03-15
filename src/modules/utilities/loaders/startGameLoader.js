import { redirect } from 'react-router';
import doesPlayerHaveActiveSession from '../session/doesPlayerHaveActiveSession';

export default async function startGameLoader() {
    const activeSession = await doesPlayerHaveActiveSession();

    if (!activeSession.ok) {
        throw new Response(null, { status: activeSession.status});
    }

    if (activeSession.data === true) {
        return redirect('/play');
    }

    return { openModal: true };
}
