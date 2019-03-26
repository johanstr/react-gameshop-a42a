import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Cart from './components/Cart'
import './App.css'

class App extends Component {
  state = {
    games: [{
        id: 1,
        title: 'Ryse',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/ryse.jpeg',
        price: 19.95
      },
      {
        id: 2,
        title: 'Amnesia',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/amnesia.jpeg',
        price: 29.95
      },
      {
        id: 3,
        title: 'Avatar',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/avatar.jpeg',
        price: 39.95
      },
      {
        id: 4,
        title: 'Horizon Zero Dawn',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/horizonzerodawn.jpeg',
        price: 39.95
      },
      {
        id: 5,
        title: 'Just cause 2',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/justcause.jpeg',
        price: 49.95
      },
      {
        id: 6,
        title: 'Project Cars',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/projectcars.jpeg',
        price: 29.95
      },
      {
        id: 7,
        title: 'Prototype 2',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/prototype2.jpeg',
        price: 39.95
      },
      {
        id: 8,
        title: 'Trine',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/trine.jpeg',
        price: 49.95
      },
      {
        id: 9,
        title: 'Watch Dogs',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'img/watchdogs.jpeg',
        price: 19.95
      }
    ],
    cart: []
  }

  addToCart = (id) => {
    const gameToAdd = this.state.games.find((game) => {
      return id === game.id
    })

    const cart_game = {
      ...gameToAdd,
      amount: 1
    }

    const old_cart = this.state.cart;
    const index = old_cart.findIndex(
      (game) => {
        return game.id === id
      }
    )
    if(index === -1)
      old_cart.push(cart_game);
    else
      old_cart[index].amount++

    this.setState({
      cart: old_cart
    });
  }

  cartCount = () => {
    let total_amount = 0;
    for (let index = 0; index < this.state.cart.length; index++)
      total_amount += this.state.cart[index].amount
    
    return total_amount
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Header count={this.cartCount()}/>
            <Route 
              exact path='/'
              render={() => <Shop
                games={this.state.games}
                addToShoppingCart={this.addToCart}
              />}
            />
            <Route
              path='/cart'
              render={() => <Cart cart={this.state.cart} />}
            />
            <Footer />
          </>
        </BrowserRouter>
      </div>

    );
  }
}

export default App
