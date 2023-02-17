import { useState, useEffect } from "react"

export const useInputChange = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (newValue) => {
        setValue(newValue)
        console.log(newValue)
    }

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return {
        value,
        onChange
    }
}
