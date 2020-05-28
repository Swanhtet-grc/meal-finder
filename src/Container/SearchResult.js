import React, { Component } from 'react'

export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    };
    Data() {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(
                jason => {
                    console.log(jason);
                }
            )
    }
    render() {
        return (
            
        )
    }
}
