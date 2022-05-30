class CardDeck {
    constructor() {
        this.suits = ["hearts", "spades", "clubs", "diams"];
        this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.cardDeck = [];
        this.getRandomCards = [];
        for (let s = 0; s < this.suits.length; s++) {
            for (let r = 0; r < this.ranks.length; r++) {
                let card = { suit: this.suits[s], rank: this.ranks[r] };
                this.cardDeck.push(card);
            }
        }
    }

    getCard() {
        const randomCard = this.cardDeck[Math.floor(Math.random() * this.cardDeck.length)]
        this.cardDeck.splice(this.cardDeck.indexOf(randomCard), 1);
        return randomCard;
    }

    getCards(howMany) {
        let i = 0;

        while (i < howMany) {
            this.getRandomCards.push(this.getCard());
            i++;
        }
        return this.getRandomCards;
    }
}

export default CardDeck;