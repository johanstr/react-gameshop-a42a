import React, { Component } from 'react'

class Cart extends Component
{
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