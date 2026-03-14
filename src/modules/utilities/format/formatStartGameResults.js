export default function formatStartGameResults(results) {
    if (results === true) {
        return 'An unexpected error occurred. Try again later.'
    }

    if (!Array.isArray(results.errors)) {
        return 'An unexpected error occurred. Try again later.'
    }
    
    return results.errors[0].msg;
}