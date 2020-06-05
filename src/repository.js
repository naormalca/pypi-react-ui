const BASE_URL = 'http://localhost:5000/api'


export function getLatestReleases(amount) {
    return fetch(`${BASE_URL}/packages/latest-releases/${amount}`)
        .then((response) => response.json());
}

export function loginUser(userData) {
    return fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
}

export function signUp(userData) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
}

export function autoAuth(userData) {
    return fetch(`${BASE_URL}/auto-login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
}