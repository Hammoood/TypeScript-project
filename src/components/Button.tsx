//button event prop

import React from "react"

type buttonProp={
    handleClick: (event : React.MouseEvent<HTMLButtonElement> , id:number) => void
}

export const Button = (props: buttonProp) => {
    return(
        <button onClick={(event) => props.handleClick(event,1)}>click here</button>
    )
}