import {Component} from "react";
import './App.css';
import Card from "./Cards/Card";
import CardDeck from "./CardDeck";

class App extends Component {
    state = {
        getRandomArray: [],
    }

    getRandom = () => {
        const deck = new CardDeck();
        const cardArray = deck.getCards(5);

        this.setState({
            getRandomArray: cardArray,
        })
    }


    render() {

        return (
            <>
                <div className="playingCards fourColours faceImages">
                    {
                        this.state.getRandomArray.map((i, index) => {
                            return (
                                <Card key={index} rank={i.rank} suit={i.suit} />
                            );
                        })
                    }
                </div>
                <p className='combo'>{this.state.getCardsCombo}</p>
                <div>
                    <button type="button" className="btn" onClick={this.getRandom}>New Deck</button>
                </div>
            </>
        );
  }
}

export default App;
