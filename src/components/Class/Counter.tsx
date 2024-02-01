//class component
import { Component } from "react";

type counterState={
    count: number
}
type counterProps={
    message: string
}

export class Counter extends Component<counterProps, counterState>{
    state = {
        count: 0
    }
    handleCounter = () => {
        this.setState((prevState)=>({count : prevState.count +1}))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleCounter}>increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}