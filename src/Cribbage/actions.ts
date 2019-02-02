/* ACTION CREATOR FUNCTIONS

Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects

*/
import * as types from "./types";
import * as Cribbage from "./model";
import { number } from "prop-types";

//Are these parameters correct? 
const scoreHand = (player:Cribbage.Player, turnUp:Cribbage.Card) => {
  //TODO: turn this hand of cards into a number of points and a list of scoring events.
  //IE, {player:player, points: 6, listOfEvents: ["15-2-5C,JD", "15-2-5S,JD", "Pair-2-5S,5C"]}
}

const dealNewHandToPlayer = () => {
  //TODO: Reset the current Hand to 0, give each player 6 cards, toggle dealer.
  //
}

// function loadSingleTaskSuccess(jobList) {
//   return { type: types.LOAD_SINGLE_TASK_SUCCESS, newQueue: [jobList] };
// }
export {
scoreHand, dealNewHandToPlayer
};
