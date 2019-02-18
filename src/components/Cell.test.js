import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Cell from './Cell';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Cell/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the value passed to it', () => {
    const value = 'X';

    expect(shallow(<Cell value={value}/>).text()).toBe(value);
});

it('has an "onClick" property', () => {
    expect(shallow(<Cell/>).props()).toHaveProperty('onClick');
});

it('is disabled when assigned', () => {
    expect(shallow(<Cell value="X"/>).is('[disabled]')).toBe(true);
});
