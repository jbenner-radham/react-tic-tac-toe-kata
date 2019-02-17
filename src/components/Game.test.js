import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
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

it('assigns a player to a cell when "assignCell" is invoked', () => {
    const wrapper = shallow(<Game/>);
    const index = 0;
    const { playerTurn } = wrapper.state();

    wrapper.instance().assignCell(index);

    const { history } = wrapper.state();
    const current = history[history.length - 1];

    expect(current.cells[index]).toBe(playerTurn);
});

it('has a "history" property which is an array of objects', () => {
    expect(shallow(<Game/>).state().history.every(move => move.cells)).toBe(true);
});

it('adds a record to the "history" property when "assignCell" is invoked', () => {
    const wrapper = shallow(<Game/>);
    const { history } = wrapper.state();

    wrapper.instance().assignCell(0);

    const delta = wrapper.state().history.length - history.length;

    expect(delta).toBe(1);
});

it('has a "getWinner" method', () => {
    expect(Game.prototype.getWinner).toBeInstanceOf(Function);
});

it('will return false from the "getWinner" method on a new game', () => {
    const fixture = Array(9).fill(null);

    expect(shallow(<Game/>).instance().getWinner(fixture)).toBe(false);
});

it('has a "message" which indicates it is "X\'s" upon initialization', () => {
    expect(shallow(<Game/>).state().message).toEqual(`X's turn.`);
});

it('should update the "message" property for "O" when it is their turn', () => {
    const wrapper = mount(<Game/>);

    wrapper.find('.Cell').first().simulate('click');

    expect(wrapper.state().message).toEqual(`O's turn.`);
});
