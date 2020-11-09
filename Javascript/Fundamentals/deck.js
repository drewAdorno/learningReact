class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        let self=this
        suits.forEach(function(suit) {
            

            faces.forEach(function(face){
                console.log(self)
                deck.push(self.createCard(suit, face));
          });
        });
        this.deck = deck;
      }
      createCard(suit, face){
          return `${face} of ${suit}s`
      }
  }
//  
newDeck=new Deck()
newDeck.initialize()
console.log(newDeck.deck);