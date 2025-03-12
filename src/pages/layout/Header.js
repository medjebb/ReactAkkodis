import { Component } from "react";
import './Header.css'; // Import a CSS file for styling
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header-title">HARRY POTTER</h1>
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">Books</Link></li>
                        <li><Link to="movies">Movies</Link></li>
                        <li><a href="#contact">Favorites</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
