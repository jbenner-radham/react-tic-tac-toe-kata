import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Board from './Board';

const wrapper = mount(<Board/>);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('contains nine <Cell/> components', () => {
    expect(wrapper.find('.Cell')).toHaveLength(9);
});

it('has a "playerTurn" property which defaults to "X"', () => {
    expect(wrapper.state().playerTurn).toBe('X');
});

it('has a "cells" property which is an array of nine values', () => {
    const cells = Array(9).fill(null);

    expect(wrapper.state().cells).toEqual(cells);
});
