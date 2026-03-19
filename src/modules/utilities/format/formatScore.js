export default function formatScore(score) {
    const minutes = Math.trunc(score / 1000 / 60);

    const remainingMilliseconds = score - (minutes * 60 * 1000);
    const seconds = Math.trunc(remainingMilliseconds / 1000);

    const milliseconds = remainingMilliseconds - (seconds * 1000);

    return `${minutes}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
}
