import React from 'react';
import './Cell.scss';

export default class Cell extends React.Component {
    render(props) {
        return (
            <div className="Cell" onClick={this.props.onClick}>
                {this.props.value}
            </div>
        );
    }
}
