import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { CribbagePlayArea } from "./CribbagePlayArea";
import { CribbageBoard } from "./CribbageBoard";
import { Card } from "../model";

type CribbageProps = Card &
  //& typeof CounterStore.actionCreators
  RouteComponentProps<{}>;

export default class CardComponent extends React.Component<CribbageProps, {}> {
  //TODO: This needs to convert something like "11S" into "J♠"
  public render() {
    return (
      <div>
        <b>{this.props.suit}</b>
        <b>{this.props.number}</b>
      </div>
    );
  }
}
