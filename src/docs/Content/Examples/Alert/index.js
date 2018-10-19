import React, { Component } from 'react';
import Tooltip from '../../../../lib';
import logo from '../../../../assets/logo.svg';

class Alert extends Component {
    state = {
        alternate: true
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                alternate: !this.state.alternate,
            });
        }, 5000);
    }
    render() {
        return (
            <div
                style={{
                    margin: '100px auto',
                    padding: '0 30px',
                    width: '100%',
                    border: '1px solid lightgrey',
                    height: '65px',
                    backgroundColor: 'white',
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <img src={logo} style={{
                    height: '60%',
                    left: '50px'
                }} />
                <div style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    width: '190px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <span style={{ position: 'relative' }}>Shopping Cart
                        <Tooltip
                            show={this.state.alternate}
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            textboxWidth='100px'
                            animation='fade'
                            arrow='topLeft'
                            align='center'
                            pulse
                            static
                        >
                            <span>New Item added!</span>
                        </Tooltip>
                    </span>
                    <span>Contact</span>
                </div>
            </div>
        );
    }
}

export default Alert;