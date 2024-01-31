//children prop where type is React.ReactNode

import React from "react"

type oscarProps = {
    children : React.ReactNode
}

export const Oscar = (props: oscarProps) => {
    return(
        <h2>{props.children}</h2>
    )
}