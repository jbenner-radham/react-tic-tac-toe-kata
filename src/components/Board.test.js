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
