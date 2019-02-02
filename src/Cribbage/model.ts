
export interface GameState {
  players: Player[];
  // Torn between this, and making it a boolean field on the player.
  dealer: Player;
  currentHand: Hand;
}

//Yeah, I know this is bad and ambiguous 
export interface Hand {
  players: Player[];
  playedCards: { player: Player; card: Card }[];
  turnUp: Card;
  runningTotal: number;
  whoseTurn: Player;
}

export interface Player {
  id: string;
  score: number;
  cardsInHand: Card[];
  cardsInCrib: Card[];
}

export interface Card {
  suit: Suit;
  number: number;
}

export enum Suit {
  Hearts = "HEARTS",
  Spades = "SPADES",
  Diamonds = "DIAMONDS",
  Clubs = "CLUBS"
}

