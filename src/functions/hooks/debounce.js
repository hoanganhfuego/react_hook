export const debounce = (callback, timeout) => {
    let timer
    return () => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => callback(), timeout)
    }
}