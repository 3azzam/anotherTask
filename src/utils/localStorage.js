export const saveString = (key, value) => {
    localStorage.setItem(key, value)
}

export const saveJson = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getString = (key) => {
    return localStorage.getItem(key)
}

export const getArray = (key) => {
    return JSON.parse(`${localStorage.getItem(key)}`)
}