import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { reducer} from "./reducer";
import * as actions from "./actions";
import * as types from "./types";
import fetchMock from "fetch-mock";
import { GameState } from "./model";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const getInitialState = (initial?: Partial<GameState>) =>
  reducer(initial as GameState, {} as any);

//  * ACCEPTANCE REQUIREMENTS

//  * I should be able to tell the game my player name
describe("Player name", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should start with a blank name", () => {
    const initialState = getInitialState();
    expect(initialState).toMatchSnapshot();
  });
  it("should be able to update the name appropriately", () => {
    const initialState = getInitialState();
    const stateWithNames = reducer(initialState, {
      type: types.SET_NAMES,
      names: ["Boris", "Natasha"]
    });
    expect(stateWithNames.players).toEqual([
      { name: "Boris", score: 0 },
      { name: "Natasha", score: 0 }
    ]);
  });
});

//  * The game should then to deal 6 cards to each player
//   * And then each player should be able to pass exactly two cards to the crib.
//   * This should be the dealer's crib, not the off-dealer.

//  * After passing to the crib, we should commence to the PLAY phase.
//   * At this point, I should be able to play a card.
//     * In response, the game should
//       * properly increment the running total.
//       * register GO/31/Last card, and dispatch points/reset running total accordingly.
//       * register any scoring (15, pair, run, etc).
//       * Toggle whose turn it is.

//  * After all cards have been played, we proceed to the COUNT.
//   * This should go in the order dealer/off-dealer/dealer's crib.
//   * Scores should be dispatched per hand/crib, not in a single lump.

//  * After COUNT, the game should toggle who's dealer and deal a new hand.

//  * At some point, the game should register that somebody has won, and then whether the other player was (double)skunked.

//  * We should also handle pegging properly; jump the back peg over the front peg,
//  * and do it using a nice oblong board rather than just a couple straight lines
//   * Lower priority, though; for starters we'll just settle for "P1: 50 P2: 60"
