import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a <Game/> component', () => {
    expect(mount(<App/>).find('.Game').length).toBe(1);
});
