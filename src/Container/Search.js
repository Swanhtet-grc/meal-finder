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
                    <button className="bt" onClick={() => alert("Sorry about that! I am still working on this feature")}><i className="fas fa-search"></i></button>
                </div>
            </div>
        );
    }
}
export default Search;

