import React, { Component } from 'react'

const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    };

    render() {
        return (
            <MyContext.Provider value="I'm value">
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;