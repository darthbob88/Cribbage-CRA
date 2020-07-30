import { fetch, addTask } from "domain-task";
import { Player, Card, GameState, Suit, Hand, Round, PHASE } from "./model";
import { Reducer, Action } from "redux";
import { typeKeys } from "./types";

//// Not sure if I'll actually use the full Redux machinery, or if I'll settle for just local state.
//// We are going FULL REDUX FTGE.
/* ACTIONS TO HANDLE
 * NEWGAME (player ID(s))
 * Initialize player name(s) to the IDs given, set their scores to 0, and dispatch NEWHAND
 * NEWHAND (newDealer)
 * Toggle which player is dealer and gets the crib
 * Initialize each player's hand to 6 cards, crib to 0, empty the list of played cards, and reset running total to 0.
 * SENDCARDSTOCRIB (player, cards)
 * Transfer cards from one player's hand to the crib
 * If both players have passed cards over, turn up deck for nobs and proceed to the play phase.
 * Maybe also do something with an ADDPOINTS action, that takes a player, action, and score?
 * PLAYCARD (player, card, (implicitly playedCards and running total))
 * Move card from player's hand to playedCards, add the value of that card to runningTotal, and toggle which player's turn it is.
 * If this would score points, dispatch ADDPOINTS as appropriate
 * If this would take the total to 31, reset total to 0, dispatch ADDPOINTS for 31 and continue play.
 * If neither player has cards left, dispatch "last card" and proceed to the counting-up phase.
 * PLAYGO (player)
 * Same as above, except no card transfer happens, we just toggle who goes next.
 * ADDPOINTS(player, points, string description?)
 * Just increment the number of points for <player>.
 * This might need us to store current and previous score, so we know where the back and front pegs should be.
 */

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface NewGameAction {
  // * NEWGAME(player ID(s))
  //* Initialize player name(s) to the IDs given, set their scores to 0, and dispatch NEWHAND
  type: typeKeys.newGame;
  playerNames: string[];
}

interface NewHandAction {
  // * NEWHAND(newDealer)
  //* Toggle which player is dealer and gets the crib
  //    * Initialize each player's hand to 6 cards, crib to 0, empty the list of played cards, and reset running total to 0.

  type: typeKeys.newHand;
  newDealer: Player;
  newHands: Hand[];
}

interface SendCardsToCribAction {
  /*
   * SENDCARDSTOCRIB (player, cards)
   * Transfer cards from one player's hand to the crib
   * If both players have passed cards over, turn up deck for nobs and proceed to the play phase.
   * Maybe also do something with an ADDPOINTS action, that takes a player, action, and score?
   */
  type: typeKeys.sendCardsToCrib;
  player: Player;
  cardsForCrib: Card[];
}
interface PlayCardAction {
  // * PLAYCARD(player, card, (implicitly playedCards and running total))
  //* Move card from player's hand to playedCards, add the value of that card to runningTotal, and toggle which player's turn it is.
  //    * If this would score points, dispatch ADDPOINTS as appropriate
  //    * If this would take the total to 31, reset total to 0, dispatch ADDPOINTS for 31 and continue play.
  //    * If neither player has cards left, dispatch "last card" and proceed to the counting - up phase.
  type: typeKeys.playCard;
  player: Player;
  card: Card;
}

interface PlayGoAction {
  //* PLAYGO(player)
  //* Same as above, except no card transfer happens, we just toggle who goes next.
  type: typeKeys.playGo;
  player: Player;
}

interface AddPointsAction {
  //* ADDPOINTS(player, points, string description ?)
  //* Just increment the number of points for <player>.
  //* This might need us to store current and previous score, so we know where the back and front pegs should be.
  type: typeKeys.addPoints;
  points: number;
  player: Player;
  description: string;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction =
  | NewGameAction
  | NewHandAction
  | SendCardsToCribAction
  | PlayCardAction
  | PlayGoAction
  | AddPointsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

// export const actionCreators = {
//   requestWeatherForecasts: (
//     startDateIndex: number
//   ): AppThunkAction<KnownAction> => (dispatch, getState) => {
//     // Only load data if it's something we don't already have (and are not already loading)
//     if (startDateIndex !== getState().weatherForecasts.startDateIndex) {
//       let fetchTask = fetch(
//         `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`
//       )
//         .then(response => response.json() as Promise<WeatherForecast[]>)
//         .then(data => {
//           dispatch({
//             type: typeKeys.receiveForecast,
//             startDateIndex: startDateIndex,
//             forecasts: data
//           });
//         });

//       addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
//       dispatch({
//         type: typeKeys.requestForecast,
//         startDateIndex: startDateIndex
//       });
//     }
//   }
// };

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialState: GameState = {
  players: [],
  currentHand: {
    cardsInHand: [],
    crib: { player: "", cards: [] },
    dealer: "",
    phase: PHASE.DEAL,
    playedCards: [],
    turnUp: { suit: Suit.Spades, number: 1 },
    runningTotal: 0,
    whoseTurn: ""
  }
};

export const reducer: Reducer<GameState> = (
  state: GameState,
  incomingAction?: Action
) => {
  const action = incomingAction as KnownAction;
  switch (action.type) {
    case typeKeys.newGame:
      const namedPlayers = action.playerNames.map(name => (<Player>{ score: 0, id: name }));
      const dealer = action.playerNames[0];
      //TODO: This should probably be a function of some sort. Maybe an action creator, or just a "get a new hand of cards for each player"
      // Possibly even a "create a new hand of cards, including turnup".
      const newHand = <Partial<Round>>{
        playedCards: [],
        cardsInHand: [
          { player: action.playerNames[0], cards: [] },
          { player: action.playerNames[1], cards: [] }
        ],
        crib: { player: dealer, cards: [] },
        phase: PHASE.DEAL,
        runningTotal: 0,
        whoseTurn: dealer,
        dealer: dealer
      };
      return { players: namedPlayers, currentHand: newHand };
    case typeKeys.newHand:
      return initialState;
    case typeKeys.addPoints:
      return initialState;
    case typeKeys.playCard:
      return initialState;
    case typeKeys.playGo:
      return initialState;
    case typeKeys.sendCardsToCrib:
      return initialState;
    default:
      // The following line guarantees that every action in the KnownAction union has been covered by a case above
      const exhaustiveCheck: never = action;
  }

  return state || initialState;
};
