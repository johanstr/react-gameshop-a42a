# Een Game Webshop
Een demonstratie project t.b.v. lessen Webapps

## Pre-requisites
Om de onderstaande stappen uit te voeren dienen we de volgende zaken te hebben geiïnstalleerd op ons systeem:

1. NodeJS  
2. NPM (Node Package Manager).
Als je de standaard installatie procedure volgt van NodeJS zal NPM standaard mee geïnstalleerd worden.
3. Yarn  
Yarn is eveneens een package manager, deze installeren we ook (naast NPM dus). Deze werkt net even iets anders en voor sommigen ook iets makkelijker dan NPM.
4. Een Code Editor  
In de lessen maken we gebruik van Visual Studio Code. Maar je kan natuurlijk ook gebruik maken van PHPStorm. Visual Studio Code breiden we wel uit met een aantal extensions m.b.t. HTML, CSS, JavaScript, ReactJS. In de les zullen een aantal tips worden gegeven.
5. De Browser extension React  
Deze extensie voor de browser maakt het volgen en testen van een React app een stuk makkelijker. De extensie is dan te gebruiken in de Ontwikkeltools voor developers.
6. Git Bash  
Deze hebben we nodig om een linux-like terminal onder Windows te kunnen gebruiken.

# Les 00 - Introductie en tooling

## Stap 1. Installeren van de CLI van ReactJS
Open een terminal en voeg de CLI van react aan je global dependencies toe met de volgende opdracht:
  
```bash
$ npm i -g create-react-app
```

## Stap 2. M.b.v. de CLI een boilerplate ReactJS app aanmaken
In de terminal maken we nu een boilerplate ReactJS app aan met de volgende opdracht:
  
```bash
$ create-react-app eengamewebshop
```
  
Het tweede deel van de opdracht is de naam die we het project geven. Dit wordt ook de map waar alles in geïnstalleerd zal worden.

## Stap 3. React modules toevoegen aan de boilerplate
We gaan uiteindelijk in de lessen ook routing toepassen, waardoor we met clean URL's en zonder page reload van pagina naar pagina kunnen switchen. Om deze module te installeren voeren we in de terminal de volgende opdracht uit:

Met YARN
```bash
$ yarn add react-router-dom
```

Met NPM
```bash
$ npm i --save react-router-dom
```

# Les 01 - Prepareren van ons project

## Stap 4. CSS en Images  

### Stap 4.1 index.html  
We willen Bootstrap en Font-awesome in ons project gebruiken.  
In de map **public** vinden we het bestand index.html, dit is in feite ons html document voor de gehele app. Voor nu gaan we beide CSS pakketten op de standaard manier toevoegen.  
  
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous">
```  
  
Daarnaast gaan we nog een icon toevoegen aan ons project, dit doen we door in index.html de volgende code te plaatsen:
  
```html
<link rel="icon" href="%PUBLIC_URL%/img/favicon.ico" type="image/x-icon">
```
  
Het icoon staat al in de repo in de juiste map. Je hoeft het dus niet zelf aan index.html toe te voegen.

### Stap 4.2 CSS code  
Aangezien de lessen niet over vormgeving gaan krijg je de CSS-code hieronder gepresenteerd, en de code staat al in App.css.

```css
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: .25rem;
}

.logo-image {
  width: 50px;
  height: auto;
}

.price-tag {
  color: red !important;
  font-weight: bold !important;
  font-size: 24px !important;
}

.shopping-cart-image {
  width: 50px;
  height: auto;
}

.btn-small {
  font-size: 15px;
  text-align: center;
}

.table>tbody>tr>td:first-child {
  width: 60px;
  padding: 3;
}
```
### Stap 4.3 Images  
In de map **public** maken we een nieuwe map aan met de naam **img**, hierin staan afbeeldingen die we in ons project gaan gebruiken. In de repo is de map natuurlijk al aanwezig.



## Stap 5. Opschonen van de boilerplate
In de boilerplate app krijgen we standaard een aantal bestanden en code om te kunnen zien of alles werkt. Wanneer we de app starten zien we een basic screen met o.a. een logo van ReactJS. Dit hebben we voor ons project uiteraard niet nodig, dus gaan we alle sporen verwijderen van de default code.
We gaan het volgende doen:

### Stap 5.1 Verwijderen van logo.svg  
Dit bestand hebben we dus zeker niet nodig.
### Stap 5.2 Code uit App.css verwijderen  
We gaan App.css wel gebruiken, maar dan met onze eigen opmaak en niet met de geleverde opmaak. Dus maken we dit bestand leeg.
### Stap 5.3 Code in index.css  
Ook in index.css staat misschien code die we niet gebruiken. We gaan niet standaard alle code verwijderen, maar eerst kijken of we dit willen gebruiken. Na bestuderen van deze file hebben we de conclusie getrokken dat we de code laten voor wat het is.
### Stap 5.4 App.js  
App.js is de file waar onze app begint. Deze laat nu dus de boilerplate pagina zien. We gaan de code die deze pagina toont verwijderen uit dit bestand. Het gaat om de volgende code:  
  
```js
<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
    Learn React
    </a>
</header>
```
  
Ook halen we de verwijzing naar het logo uit de code. De volgende code halen we dus uit App.js:
  
```js
import logo from './logo.svg';
```
  
We houden nu de volgende code in App.js over:
  
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
```

## Stap 6. Mappen aanmaken  
We gaan nog een nieuwe map aanmaken met de naam **components** om alle componenten die we nog gaan maken voor ons project hierin te plaatsen. Door dit te doen houden we de root van onze app mooi clean.
