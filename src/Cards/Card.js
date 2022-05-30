import React from 'react';
import './Cards.css';

class Card extends React.Component {
    render() {
        const simbols = [`♦`, '♥', '♠', '♣'];
        let s;

        switch (this.props.suit) {
            case `diams`:
                s = simbols[0];
                break;
            case  'hearts':
                s = simbols[1];
                break;
            case 'spades':
                s = simbols[2];
                break;
            case 'clubs':
                s = simbols[3];
                break;
            default:
                this.props.suit = '';
        }

        return (
            <div>
                <div className={`card rank-${(this.props.rank).toLowerCase()} ${this.props.suit}`}>
                    <span className="rank">{this.props.rank}</span>
                    <span className="suit">{s}</span>
                </div>
            </div>
        );
    }
}

export default Card;