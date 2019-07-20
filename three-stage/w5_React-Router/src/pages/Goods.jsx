import React from 'react'

class Goods extends React.Component{
    render(){
        console.log(this.props);
        let {state} = this.props.location
        return <div>
            Godds 
            <h4>{state.title}</h4>
            <p>{state.name}</p>
            {state.price}
        </div>
    }
}

export default Goods