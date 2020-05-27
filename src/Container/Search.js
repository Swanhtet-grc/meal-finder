import "./Search.css"
import React, { useState, useEffect } from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    };
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        console.log(this.state.inputValue)
        return (
            <div className="wrap">
                <div className="search">
                    <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} className="searchTerm" placeholder="What are you looking for?" />
                    <button className="bt" ><i className="fas fa-search"></i></button>
                </div>
            </div>
        );

    }

}

export default Search;

export function Data() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(
                jason => {
                    setIsLoaded(true);
                    console.log(jason);
                    setItems(jason.categories[0].strCategoryDescription)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div></div>

        );
    }
}

