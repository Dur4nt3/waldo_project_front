export default function formatStartGameResults(results) {
    if (results === true) {
        return "We've encountered a temporary error, try again later.";
    }

    if (!Array.isArray(results.errors)) {
        return "We've encountered a temporary error, try again later.";
    }

    return results.errors[0].msg;
}
