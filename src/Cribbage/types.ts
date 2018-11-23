export interface GameState {
  players: Player[];
  // Torn between this, and making it a boolean field on the player.
  dealer: Player;
  currentHand: Hand;
}

export interface Hand {
  cardsInHand: HandOfCards[];
  cardsInCrib: HandOfCards;
  playedCards: { player: Player; card: Card }[];
  turnUp: Card;
  runningTotal: number;
  whoseTurn: Player;
}

export interface HandOfCards {
  player: Player;
  cards: Card[];
}
export interface Player {
  id: string;
  score: number;
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
