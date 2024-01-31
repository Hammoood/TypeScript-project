//input event prop

import React from "react"

type inputProps = {
    value: string
    handleInput : (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input =  ({value,handleInput}: inputProps) => {
    return(
        <input type="text" value={value} onChange={handleInput} />
    )
}