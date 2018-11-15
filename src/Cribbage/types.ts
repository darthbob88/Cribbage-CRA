export interface GameState {
  players: Player[];
  // Torn between this, and making it a boolean field on the player.
  dealer: Player;
}

export interface Hand {
  playedCards: { player: Player; card: Card }[];
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
