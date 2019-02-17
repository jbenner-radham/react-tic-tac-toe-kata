import React from 'react';
import './Board.scss';

export default class Board extends React.Component {
    render() {
        return (
            <div className="Board">
                <div className="Board__row">
                    <div className="Board__cell Board__cell--top-left"></div>
                    <div className="Board__cell Board__cell--top-middle"></div>
                    <div className="Board__cell Board__cell--top-right"></div>
                </div>
                <div className="Board__row">
                    <div className="Board__cell Board__cell--middle-left"> </div>
                    <div className="Board__cell Board__cell--middle-middle">O</div>
                    <div className="Board__cell Board__cell--middle-right"> </div>
                </div>
                <div className="Board__row">
                    <div className="Board__cell Board__cell--bottom-left"> </div>
                    <div className="Board__cell Board__cell--bottom-middle"> </div>
                    <div className="Board__cell Board__cell--bottom-right">X</div>
                </div>
            </div>
        );
    }
}
