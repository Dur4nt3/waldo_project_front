export default function validateName(name) {
    if (name === undefined) {
        return 'Name must not be empty';
    }

    const trimmedName = name.trim();

    if (trimmedName === '') {
        return 'Name must not be empty';
    }

    if (trimmedName.length < 3 || trimmedName.length > 30) {
        return 'Name must be between 3 and 30 characters';
    }

    const regex = /^[A-Za-z0-9]+$/;

    if (!regex.test(trimmedName)) {
        return 'Name must only contain letters and numbers';
    }

    return true;
}
