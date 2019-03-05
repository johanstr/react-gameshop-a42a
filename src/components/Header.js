import React, { Component } from 'react'

class Header extends Component
{
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <img src="img/eengameshop.png" className="logo-image" />
                    <div className="col-sm-4 offset-md-1 py-4">
                        <ul className="list-unstyled float-right">
                            <li>
                                <i className="fas fa-shopping-cart">
                                </i>
                                &nbsp;Winkelwagen
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;