import React, { Component } from 'react'
import Search from './Search';
import Card from './Card'
import { MyContext, MyProvider } from './MyProvider'

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    };



    render() {
        let searchValue = "not array"
        return (
            <MyContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <p>{context.state.text}</p>
                        <p>{context.state.dataArray[0] === undefined ? "sorry" : context.state.dataArray}</p>
                        <button onClick={context.state.handleClick({ searchValue })}>Get</button>
                    </React.Fragment>
                )
                }
            </MyContext.Consumer>
        )
    }
}
