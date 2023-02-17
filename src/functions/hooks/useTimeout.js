import {useState, useEffect} from 'react'

export const useTimeout = (callback, referValue, timeout) => {
    const [isFirstTime, setIsFIrstTime] = useState(true)

    useEffect(() => {
        if(!isFirstTime){
            const timer = setTimeout(() => callback(), timeout)
            return () => clearTimeout(timer)
        }
        setIsFIrstTime(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [referValue])
}