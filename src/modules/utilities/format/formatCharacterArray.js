export default function formatCharacterArray(characterArray) {
    const characterObject = {};

    for (const character of characterArray) {
        characterObject[character.characterId] = {
            name: character.name,
            description: character.description,
        };
    }

    return characterObject;
}
