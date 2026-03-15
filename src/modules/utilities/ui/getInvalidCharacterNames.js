export default function getInvalidCharacterNames(invalidIds, characters) {
    const invalidCharacters = [];
    for (const invalidId of invalidIds) {
        invalidCharacters.push(characters[invalidId].name);
    }

    return invalidCharacters;
}