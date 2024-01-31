//union of string literals

type stateProps ={
    state: 'loading' | 'success' | 'error'
}

export const Status = (props: stateProps) => {
    let message 
    if(props.state === 'loading'){
        message = "loading..."
    }else if(props.state === 'success'){
        message = 'successfuly fetching data'
    }else if(props.state === 'error'){
        message = 'error fetching data'
    }

    return(
        <h2>{message}</h2>
    )
}