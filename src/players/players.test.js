import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Players from './players';

it('should render', () => {
    render(<Players />)
});

it('should display default message with no players', () => {
    const { queryByText } = render(<Players />);

    const defaultMessage = queryByText(/no players/i);

    expect(defaultMessage).toBeInTheDocument();
});

it('should display players', () => {
   //define sample players
    const players = [
            {id: 2, name: 'Miller'},
            {id: 3, name: 'Datsuk'},
            {id: 4, name: 'Nyqust'},
    ];

    // array of names
    const playerNames = players.map(p => p.name);

    //rendered palyers and passed in players as props
    const { getByText, getAllByTestId } = render(<Players  players={players}/>);

    //check to make sure header existed
    getByText(/player list/i);

    // specific to react testing lib. check id of element. an array containing the dom elements for each player with testid
    const playerDivs = getAllByTestId('player-name');


    // check we have the right amount of players. grab length from dom to dummy data
    expect(playerDivs.length).toBe(players.length);

    // correct name displayed. mapped component to text content. for every div map it to its text content. d = div
    const divTexts = playerDivs.map(d => d.textContent)

    // check to make sure they equal each other. number of names to divs of text
    expect(playerNames).toEqual(divTexts)
});