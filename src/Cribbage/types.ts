import { type } from "os";

interface GameState {
  players: Player[];
  // Torn between this, and making it a boolean field on the player.
  dealer: Player;
  currentHand: Hand;
}

//Yeah, I know this is bad and ambiguous 
interface Hand {
  cardsInHand: HandOfCards[];
  cardsInCrib: HandOfCards;
  playedCards: { player: Player; card: Card }[];
  turnUp: Card;
  runningTotal: number;
  whoseTurn: Player;
}

interface HandOfCards {
  player: Player;
  cards: Card[];
}
interface Player {
  id: string;
  score: number;
}

interface Card {
  suit: Suit;
  number: number;
}

enum Suit {
  Hearts = "HEARTS",
  Spades = "SPADES",
  Diamonds = "DIAMONDS",
  Clubs = "CLUBS"
}

export { Suit, Card, Hand, Player, HandOfCards }