export default function validateMarkers(markers) {
    if (!Array.isArray(markers)) {
        return false;
    }

    const invalidCharacters = [];

    for (const marker of markers) {
        if (!Number.isInteger(marker.characterId)) {
            return false;
        }

        if (!marker.pctX || !marker.pctY) {
            invalidCharacters.push(marker.characterId);
            continue;
        }

        const xCoordinate = Number(marker.pctX);
        const yCoordinate = Number(marker.pctY);

        if (
            !(0 <= xCoordinate && xCoordinate <= 1) ||
            !(0 <= yCoordinate && yCoordinate <= 1)
        ) {
            return false;
        }
    }

    return invalidCharacters.length === 0 ? true : invalidCharacters;
}
