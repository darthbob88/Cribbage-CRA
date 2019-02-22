/* SELECTOR FUNCTIONS

These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.

*/
import * as CribbageTypes from "./model";

/**
 * Cards in @player hand that haven't been played yet.
 * @param player The player whose cards we need.
 */
function getVisibleCards(player:CribbageTypes.Player){
    return [];
}
/**
 * Cards in @player hand that can be reasonably played, without sending the running total above 31. 
 * @param player 
 */
function getPlayableCards(player:CribbageTypes.Player){
    return [];
}

export {getPlayableCards,
    getVisibleCards
};
