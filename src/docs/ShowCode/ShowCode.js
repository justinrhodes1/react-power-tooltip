import React, { Component } from 'react';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';

class ShowCode extends Component {
    state = {
        open: false
    }

    clickHandler = () => {
        this.setState({ open: !this.state.open })
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        const SVG = this.state.open ? ArrowUp : ArrowDown;
        return (
            <>
                <div
                    style={{
                        width: '100%',
                        background: '#ececec',
                        cursor: 'pointer',
                        padding: '20px',
                        fontSize: '14px',
                        color: '#686868',
                        marginTop: '10px'
                    }}
                    onClick={this.clickHandler}
                >
                    <span>{this.state.open ? 'Hide Code Example' : 'Show Code Example'}</span>
                    <img
                        style={{ marginLeft: '8px', width: '10px' }}
                        src={SVG}
                    />
                </div>
                {this.state.open ? this.props.children : null}
            </>
        );
    }
}

export default ShowCode;