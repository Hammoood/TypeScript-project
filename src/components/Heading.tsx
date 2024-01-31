//children prop

type headingProps={
    children : string
}

export const Heading = (props: headingProps) => {
    return(
        <h1> {props.children} </h1>
    )
}