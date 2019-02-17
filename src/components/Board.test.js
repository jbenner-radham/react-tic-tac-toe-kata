import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
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

it('has a "renderCell" method', () => {
    expect(Board.prototype.renderCell).toBeInstanceOf(Function);
});

it('renders a cell component when "renderCell" is invoked', () => {
    const cell = shallow(<Board/>).instance().renderCell();

    expect(shallow(cell).is('.Cell')).toBe(true);
});
