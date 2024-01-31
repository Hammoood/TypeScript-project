//useReducer
import { useReducer } from "react"
type counterState={
    count: number
}
type updateAction={
  type: 'increment' | 'decrement' | 'reset'
  amount: number
}
type resetAction={
  type: 'reset'
}
type actionType= updateAction | resetAction 
const initialState = {count: 0}
function reducer(state : counterState, action : actionType){
    switch(action.type){
        case 'increment' :
          return {count : state.count + action.amount}
        case  'decrement' :
           return {count : state.count - action.amount}
        case 'reset' :
           return initialState   
        default : 
           return state    
    }
}
export const Counter = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return(
        <>
          count : {state.count}
          <button onClick={() => dispatch({type: 'increment', amount: 10})}> 
            increment 10
          </button>
          <button onClick={() => dispatch({type: 'decrement', amount: 10})}> 
            decrement 10
          </button> 
          <button onClick={() => dispatch({type: 'reset'})}> 
            reset
          </button>  
        </>
    )
}