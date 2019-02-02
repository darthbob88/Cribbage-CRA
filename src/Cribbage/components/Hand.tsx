import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { CribbagePlayArea } from "./CribbagePlayArea";
import { CribbageBoard } from "./CribbageBoard";
import { Player } from "../model";

type CribbageProps = Player &
  //& typeof CounterStore.actionCreators
  RouteComponentProps<{}>;

//TODO: Find better terminology. "Hand" refers both to the component, to the cards held by any given player, and also to one round of play.
export default class PlayerHand extends React.Component<CribbageProps, {}> {
  defaultPlayer: Player = {
    id: "Boris",
    score: 0,
    cardsInCrib: [],
    cardsInHand: []
  };
  state: Player = this.defaultPlayer;
  //TODO: This needs to be able to A) pass cards from here to the dealer's crib, and B) play card from here during the counting up phase.
  public render() {
    return (
      <div>
        <h2> Cribbage!</h2>
        { /* TODO: Should I make this a full component, or just a div with some styling? */ }
        <HandOfCards cards={this.state.cardsInCrib} />
        <HandOfCards cards={this.state.cardsInHand} />
      </div>
    );
  }
}
