import React from 'react';
import './Cards.css';

class Card extends React.Component {
    render() {

        return (
            <div>
                <div className={`card rank-${(this.props.rank).toLowerCase()} ${this.props.suit}`}>
                    <span className="rank">{this.props.rank}</span>
                    <span className="suit">'♦'</span>
                </div>
            </div>
        );
    }
}

export default Card;