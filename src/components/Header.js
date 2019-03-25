import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component
{
    getBadge = () => {
        if (this.props.count > 0) {
            return (
                <span className="badge badge-primary">{this.props.count}</span>
            )
        }
    }
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <Link to='/'>
                        <img src="img/eengameshop.png" className="logo-image" />
                    </Link>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <ul className="list-unstyled float-right">
                            <li>
                                <Link to='/cart' className="text-white">
                                    <i className="fas fa-shopping-cart">
                                    </i>
                                    &nbsp;Winkelwagen
                                    {this.getBadge()}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;