import React from 'react';
import './Cell.scss';

export default class Cell extends React.Component {
    isDisabled(props) {
        return this.props.value !== null;
    }

    render(props) {
        return (
            <button
                className="Cell"
                type="button"
                onClick={this.props.onClick}
                disabled={this.isDisabled()}
            >
                {this.props.value}
            </button>
        );
    }
}
