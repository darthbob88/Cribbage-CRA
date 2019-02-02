import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PlayerHand from './Hand';

export const CribbagePlayArea = () => {

    //TODO: State to handle: Players. Played cards. Turnup card. 
    return <div>
        <PlayerHand player={this.state.player1} />
        <Deck topCard={this.state.topCard} />
        <PlayedCards cards={this.state.PlayedCards} />
        <PlayerHand player={this.state.player2} />

    </div>;

}
