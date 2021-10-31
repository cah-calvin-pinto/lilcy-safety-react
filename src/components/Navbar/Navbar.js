import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="nav-container">
                <nav className="NavbarItems">
                    <Link className="no-underline" to="/home">
                    <h1 className="navbar-logo" onClick={this.handleClick}>Lilcy safety<i className="fas fa-hard-hat"></i></h1>
                    </Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <Link key={index} className="no-underline" to={ item.url }>
                                    <li  onClick={this.handleClick} className={ item.cName }>{ item.title }</li>
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar;