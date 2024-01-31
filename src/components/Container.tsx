//style props

import React from "react"

type styleProps={
    styles: React.CSSProperties
}

export const Container = ({styles}: styleProps) => {
    return (
        <div style={styles}>
            text content here
        </div>
    )
}