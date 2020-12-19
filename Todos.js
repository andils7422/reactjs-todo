import React, { Component } from 'react'

export class Todos extends Component {
    state = {
        userInput :'',
        list : []
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    }
    addToList(input) {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({
            list:listArray
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                onChange={ (e) => this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                />            
                <button onClick={ () => this.addToList(this.state.userInput)}>Add</button>
                <ul>
                    {this.state.list.map( (val)=> <li>{val}</li>)}
                </ul>
            </div>
        )
    }
}

export default Todos
