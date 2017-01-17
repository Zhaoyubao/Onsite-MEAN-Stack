function Deck() {
    var suits = ['d', 'c', 'h', 's'];
    var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
    this.cards = function() {
        var deck = [];
        suits.forEach( suit => {
            values.forEach( value => {
                deck.push(new Card(suit, value));
            });
        });
        return deck;
    }();
    // this.deal = function() {
    //     return this.cards.pop();
    // }
    // this.reset = function() {
    //     this.cards = createDeck();
    //     return this;
    // }
}
Deck.prototype.deal = function() {
    return (this.cards.length > 0) ? this.cards.pop() : null;
}
Deck.prototype.reset = function() {
    this.shuffle();
    return this;
}
Deck.prototype.shuffle = function() {
    var len = this.cards.length, t, i;
    while (len > 1) {
        i = Math.floor(Math.random() * len--);
        t = this.cards[len];
        this.cards[len] = this.cards[i];
        this.cards[i] = t;
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
Player.prototype.takeCard = function(deck){
    this.hand.push(deck.deal());
    return this;
}
Player.prototype.discard = function(idx){
    if (this.hand.length > idx){
        this.hand.splice(idx, 1);
    }
    return this;
}

// ========================================================
function Game() {
    this.deck = new Deck();
    this.players = [];
    this.addPlayer = function(playerName) {
        var player = Player(playerName);
        this.players.push(player);
        return this;
    }
}

var game = new Game();
var myDeck = new Deck();
var player1 = new Player("Yubao", myDeck);
var player2 = new Player("Emilie", myDeck);

game.addPlayer(player1).addPlayer(player2);
myDeck.reset();
player1.takeCard(myDeck);
console.log(myDeck.cards);
console.log(player1.showHand());
