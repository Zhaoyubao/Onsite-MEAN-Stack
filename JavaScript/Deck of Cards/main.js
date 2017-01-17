function Deck() {
    let suits = ['d', 'c', 'h', 's'],
        values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    this.cards = function() {
        let deck = [];
        suits.forEach( suit => {
            values.forEach( value => {
                deck.push(new Card(suit, value));
            });
        });
        return deck;
    }();
}

Deck.prototype.deal = function() {
    return this.cards.length > 0 ? this.cards.pop() : null;
}

Deck.prototype.reset = function() {
    this.shuffle();
    return this;
}

Deck.prototype.shuffle = function() {
    let len = this.cards.length, i;
    while (len > 1) {
        i = Math.floor(Math.random() * len--);
        [this.cards[i], this.cards[len]] = [this.cards[len], this.cards[i]];
    }
    return this;
}

// ========================================================
function Card(suit, value) {
    this.suit = suit;
    this.value = value;
}

// ========================================================
function Player(name) {
    this.name = name;
    this.hand = [];
}
Player.prototype.showHand = function() {
    return this.hand;
}
Player.prototype.takeCard = function(deck) {
    this.hand.push(deck.deal());
    return this;
}
Player.prototype.discard = function(idx) {
    if (this.hand.length > idx) {
        this.hand.splice(idx, 1);
    }
    return this;
}

// ========================================================
function Game() {
    this.deck = new Deck();
    this.players = [];
    this.addPlayer = function(playerName) {
        let player = Player(playerName);
        this.players.push(player);
        return this;
    }
}

let game = new Game();
let myDeck = new Deck();
let player1 = new Player("Yubao", myDeck);
let player2 = new Player("Emilie", myDeck);

game.addPlayer(player1).addPlayer(player2);
myDeck.reset();
console.log(myDeck.cards, myDeck.cards.length);
console.log(player1.takeCard(myDeck).takeCard(myDeck).showHand());
player1.discard(0);
console.log(player1.showHand());
console.log(player2.takeCard(myDeck).takeCard(myDeck).showHand());
player2.discard(1);
console.log(player2.showHand());
console.log(myDeck.cards.length);
