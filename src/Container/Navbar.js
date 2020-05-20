import React from "react";
import "./Navbar.css"
import Search from "./Search"
const navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <p>Meal Finder</p>
                <Search />
            </nav>
        </div>

    );
}

export default navbar;

