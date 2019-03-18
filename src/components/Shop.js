import React, { Component } from 'react'
import GameCard from './GameCard'

class Shop extends Component
{
    createGameCards = () => {
        const games = this.props.games

        return games.map((game) => {
            return <GameCard game={game} key={game.id}/>
        })    
    }

    render() {
        return (
            <main>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {this.createGameCards()}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Shop