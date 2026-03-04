// Gets an object with character IDs as properties
// Returns the initial state of the level's markers
export default function initializeMarkerState(characters) {
    const initialState = {};

    for (const characterId of Object.keys(characters)) {
        initialState[characterId] = null;
    }

    return initialState;
}