import "./Search.css"
import React from "react";

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
        return (
            <div className="wrap">
                <div className="search">
                    <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} className="searchTerm" placeholder="What are you looking for?" />
                    <a href="/detail/Pork" ><button className="bt" ><i className="fas fa-search"></i></button></a>
                </div>
            </div>
        );
    }
}
export default Search;

