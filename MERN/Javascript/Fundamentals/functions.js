class Deck {
    constructor()
    {
        this.deck=[]
    }
    initialize() {
        // var createCard=(suit, face)=>{`${face} of ${suit}`};
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                var createCard=(suit, face)=>{`${face} of ${suit}`}
                deck.push(createCard(suit,face));
          });
        });
        this.deck = deck;
      }
    createCard(suit, face)
    {
        return `${face} of ${suit}`
    }
    //createCard=(suit, face)=>{`${face} of ${suit}`};
}

deck= new Deck()
deck.initialize()
console.log(deck.deck);
