import React, { Component } from 'react'

class Cart extends Component
{
    
    createCartItems = () => {
        const cart = this.props.cart

        return cart.map((cart_item) => {
            return (
                <tr key={cart_item.id}>
                    <td>
                        <img
                            src={cart_item.image}
                            className="shopping-cart-image"
                            alt={cart_item.title}
                            title={cart_item.title}
                        />
                    </td>
                    <td>{cart_item.title}</td>
                    <td className="text-center">
                        <i className=" fas fa-minus-square"></i>
                        {cart_item.amount}
                        <i className="fas fa-plus-square"></i>
                    </td>
                    <td className="text-right">
                        &euro; {cart_item.price}
                    </td>
                    <td className="text-right">
                        &euro; {(cart_item.amount * cart_item.price).toFixed(2)}
                    </td>
                    <td className="text-center">
                        <button className="btn btn-small btn-danger">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <main>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <h1>Winkelwagen</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colspan="2">Game</th>
                                        <th className="text-center">Aantal</th>
                                        <th className="text-right">Prijs p.st.</th>
                                        <th className="text-right">Totaal</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.createCartItems()}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="4" className="text-right">
                                            <strong>Totaal</strong>
                                        </td>
                                        <td className="text-right">
                                            <strong>&euro; </strong>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Cart