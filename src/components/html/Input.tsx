//wrapping html elemnts

type inputProps= React.ComponentProps<'input'>

export const CustomerInput =({...props})=>{
    return(
        <input type='text' {...props} />
    )
}