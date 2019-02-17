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
