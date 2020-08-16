const BASE_URL = 'http://localhost:80/api'


const convertParamsToQuery = (params) => {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

export function getStatistics() {
    return fetch(`${BASE_URL}/packages/stats`)
        .then((response) => response.json())
}

export function loginUser(userData) {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}

export function signUp(userData) {
    return fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}

export function autoAuth() {
    return fetch(`${BASE_URL}/auth/auto-login`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}

export function getLatestReleases(amount) {
    return fetch(`${BASE_URL}/packages/latest-releases/${amount}`)
        .then((response) => response.json());
}

export function getPackageDetails(packageId) {
    return fetch(`${BASE_URL}/packages/${packageId}`)
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}

export function getUsers(params) {
    let query = convertParamsToQuery(params);
    return fetch(`${BASE_URL}/users?${query}`)
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}

export function searchProjectsByString(params) {
    let query = convertParamsToQuery(params);
    return fetch(`${BASE_URL}/packages/search?${query}`)
        .then(response => response.json().then(data => ({
            data: data,
            status: response.status
        })))
}
