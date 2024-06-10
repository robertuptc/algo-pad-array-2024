export const pad = (array, minSize, value=null) => {
    return minSize <= array.length ? array: padding(array, minSize, value)
}

function padding(array, minSize, value) {
    let startAt = array.length
    for (let i = startAt; i < minSize; i++) {
        value == null ? array[i] = null : array[i] = value
    }
    return array
}


