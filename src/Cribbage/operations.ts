//Operations file, used to expose operations for the UI. 
import * as actions from "./actions";
import { Card, Player } from "./model";

function passCardsToCrib(cardsToPass: Card[], player:Player ) {
    //TODO: Pass cards from player to dealer's crib.
}

const playCard = (cardPlayed: Card, player:Player) => {
    //TODO: toggle/check whose turn it is.
    //TODO: Increment running total
    //TODO: Dispatch ADDPOINTS action(s)
    //TODO: add played card to list of played cards.
    //TODO: if necessary, toggle current phase.
}

const playGo = (player:Player) => {
    //TODO: dispatch ADDPOINTS for GO
    //TODO: toggle whose turn it is.
    //TODO: reset running total
}

//TODO: Should this be a player-facing action, or behind-the-scenes-only?
const dealNewHand = () => {
    //TODO: reset played cards
    //TODO: toggle dealer
    //TODO: deal out 6 cards to each player.
    //TODO: toggle phase.
}


// function loadSingleTask(task) {
//     return function (dispatch) {
//         return jobQueueAPI.getTask(task).then(jobList => {
//             dispatch(actions.loadSingleTaskSuccess(jobList));
//         }).catch(error => {
//             throw (error);
//         });
//     };
// }

export { submitTask, loadCurrentTasks, loadSingleTask, updateTask }