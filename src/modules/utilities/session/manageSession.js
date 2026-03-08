export function getToken() {
    return localStorage.getItem('session-token');
}

export function setToken(token) {
    return localStorage.setItem('session-token', token);
}

export function deleteToken() {
    return localStorage.removeItem('session-token');
}