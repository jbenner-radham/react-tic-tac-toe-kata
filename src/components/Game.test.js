import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from './Game';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Game/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('has a "cells" property which is an array of nine values', () => {
    const cells = Array(9).fill(null);

    expect(shallow(<Game/>).state().cells).toEqual(cells);
});

it('has a "playerTurn" property which defaults to "X"', () => {
    expect(shallow(<Game/>).state().playerTurn).toBe('X');
});

it('has a "assignCell" method', () => {
    expect(Game.prototype.assignCell).toBeInstanceOf(Function);
});

it('toggles the "playerTurn" property when the "assignCell" method is invoked', () => {
    const wrapper = shallow(<Game/>);

    wrapper.instance().assignCell();

    expect(wrapper.state().playerTurn).toBe('O');
});
