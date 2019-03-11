import React, { Component } from 'react'

class GameCard extends Component
{
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img
                        className="bd-placeholder-img card-img-top" 
                        width="1005"
                        height="205"
                        src={this.props.game.image}
                        alt={this.props.game.title}
                        title={this.props.game.title}
                    />
                    <div className="card-body">
                        <p className="card-text">
                            {this.props.game.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary">
                                    <i className="fa fa-info"></i>&nbsp;Info
                                </button>
                                <button type="button" className="btn btn-success">
                                    <i className="fas fa-shopping-cart"></i>&nbsp;Kopen
                                </button>
                            </div>
                            <small className="text-muted price-tag">
                                &euro; {this.props.game.price}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameCard