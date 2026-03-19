export default async function leaderboardLoader() {
    const serverUrl = `${import.meta.env.VITE_API_URL}/games/scores`;

    const response = await fetch(serverUrl, {
        method: 'GET',
    }).catch(() => {
        throw new Response(null, { status: 502 });
    });

    if (response.status !== 200) {
        throw new Response(null, { status: response.status });
    }

    const results = await response.json();

    return results.placements;
}
