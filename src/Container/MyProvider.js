import React, { Component } from 'react'

export const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'I am provider',
            searchValue: '',
            dataArray: 'array'
        };
    };

    handleClick1 = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(
                jason => {
                    this.setState({
                        dataArray: jason.meals
                    })
                    console.log(jason);
                }
            )
    }



    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                handleClick: (value) =>
                    this.setState({
                        dataArray: value
                    })

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;