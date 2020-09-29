"use strict";
class GetDeck {
    constructor() {
        this.deck = [];
        let suits = ["clubs", "diamonds", "hearts", "spades"];
        let ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        for (let suit in suits) {
            for (let rank in ranks) {
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
    }
    //console.log(deck1.deck.length);
    //Cards shuffling
    shuffle() {
        let deck1 = this.deck;
        let len = deck1.length, i, temp;
        while (len) {
            i = Math.floor(Math.random() * len--);
            temp = deck1[len];
            deck1[len] = deck1[i];
            deck1[i] = temp;
        }
        return deck1;
    }

    //Dealing cards
    deal(num) {
        return this.deck.splice(0, num);
    }
}


class Eights  {
    constructor() {
        this.one = Player();
        this.two = Player();
        this.drawPile = Hand();
        this.discardPile = Hand();
    }

    /*Hand() {
        this.deck.shuffle();
        this.one = this.deck.deal(5);
    }*/
    playGame() {
        Player = one;
        // keep playing until there's a winner
        while (!isDone()) {
            displayState();
            takeTurn(player);
            player = nextPlayer(player);
        }

        // display the final score
        one.displayScore();
        two.displayScore();
    }
    isDone() {
        return one.hand.isEmpty() || two.hand.isEmpty();
    }
}
function main() {
    const game = Eights();
    game.playGame();
}


let deck2 = new GetDeck();
console.log(deck2.shuffle());
console.log(deck2.deal());
