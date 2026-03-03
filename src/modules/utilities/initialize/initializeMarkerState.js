// Gets an array of character IDs
// Returns the initial state of the level's markers
export default function initializeMarkerState(characterIds) {
    const initialState = {};

    for (const characterId of characterIds) {
        initialState[characterId] = null;
    }

    return initialState;
}