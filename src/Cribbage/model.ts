export interface GameState {
  players: Player[];
  currentHand: Round;
}

/** Yeah, I know this is bad and ambiguous. Should probably be called round.
 * @typedef {object} Hand
 * @property {object} handsOfCards - The cards currently in the players' hands.
 * @property {object} crib - The cards in the crib, plus whomever has it.
 * @property {card} turnUp - The turnup card.
 * @property {number} runningTotal - The current total, from 0-31. Increments when somebody plays a card.
 * @property {string} dealer - Who's dealer for this hand. Might replace it with a number "HandNumber", so I can just derive
 * who's dealer from how many hands we've played so far.
 * @property {string} whoseTurn - Who's about to play.
 * @property {string} phase - The current phase of play. DEAL/PLAY/COUNT. Probably not necessary, but redundant.
 */
export interface Round {
  cardsInHand: Hand[];
  crib: Hand;
  playedCards: { player: string; card: Card }[];
  turnUp: Card;
  runningTotal: number;
  dealer: string;
  whoseTurn: string;
  phase: PHASE;
}
/** Not sure I really need this, but it's an easy way to keep it straight whether we're dealing, playing, or counting.
 * @enum PHASE */
export enum PHASE {
  DEAL,
  PLAY,
  COUNT
}
/**
 * A type for an actual hand of cards. Used for either a simple hand or the crib.
 * @property {string} player - The ID of the player who holds the hand.
 * @property {card} cards - The cards in this hand.
 */
export interface Hand {
  player: string;
  cards: Card[];
}
/**
 * Don't hate the player, hate the game.
 * @typedef {Object} Player
 * @property {string} id - ID and also name of the player. Unsure whether to keep them combined, or have separate name.
 * @property {number} score - How many points the player has ATM. Not sure whether to keep a single score like this, or
 * break it into front- and backPeg. Might do that in the actual gameboard component.
 */
export interface Player {
  id: string;
  score: number;
}
/**
 * A playing card. A-K, H-C, no jokers.
 * @typedef {object} Card
 * @property {Suit} suit - Which of the four suits a card is.
 * @property {number} number - Its numeric value, from 1-13, to be converted into A-K.
 */
export interface Card {
  suit: Suit;
  number: number;
}
/**
 * @enum {string}
 */
export enum Suit {
  Hearts = "HEARTS",
  Spades = "SPADES",
  Diamonds = "DIAMONDS",
  Clubs = "CLUBS"
}
