//object 

import {personProps} from './Person.types'

export const Person = (props: personProps) =>{
    return(
        <div>
            <h3>{props.name.first} {props.name.second}</h3>
        </div>
    )
}