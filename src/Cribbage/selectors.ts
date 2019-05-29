/* SELECTOR FUNCTIONS

These are pure functions that get the app state as a parameter and return some data from it, needed in the components.
Together with the operations, the selectors are part of the public interface of the 'duck'.
These functions make sense when you have a more complex app state.

*/
import * as CribbageTypes from "./model";

/**
 * Cards in @player hand that haven't been played yet.
 * @param player The player whose cards we need.
 * @returns card[] The cards in the player's hand that are available to play.
 */
const getVisibleCards: CribbageTypes.Card[] = (player: CribbageTypes.Player) => {
  const playerCards = player.cardsInHand;
  return playerCards;
}
/**
 * Cards in @player hand that can be reasonably played, without sending the running total above 31. 
 * Not sure if I should drill down to player.cards here, or in the calling code.
 * @param player 
 * @param currentTotal The current running total, between 0 and 31.
 */
function getPlayableCards(player: CribbageTypes.Player, currentTotal:number): CribbageTypes.Card[] {
  return [];
}

export {getPlayableCards,
    getVisibleCards
};
