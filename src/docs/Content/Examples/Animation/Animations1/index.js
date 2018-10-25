import React, { Component } from 'react';
import Tooltip from '../../../../../lib';

class Animations1 extends Component {
    state = {
        show: false
    }

    showTooltip = boolean => {
        this.setState({ show: boolean })
    }

    render() {
        return (
            <div
                onMouseOver={() => this.showTooltip(true)}
                onMouseLeave={() => this.showTooltip(false)}
                style={{
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'relative',
                    margin: '100px 0',
                    cursor: 'pointer'
                }}
                className='PurpleGradient'>
                <span style={{ marginBottom: '15px', fontWeight: 'bold' }}>Hover Me</span>
                <span>Fade In</span>
                <span>Animation</span>
                {/* <Tooltip
                    show={this.state.show}
                    animation='fadeIn'
                    arrow='leftBottom'
                    align='center'
                    color='black'
                    fontSize='14px'
                >
                    <span>Our Technology</span>
                    <span>Our Story</span>
                </Tooltip> */}
                <Tooltip
                    show={this.state.show}
                    animation='fadeUpDown'
                    arrow='topRight'
                    align='center'
                    color='black'
                    fontSize='14px'
                >
                    <span>Our Technology</span>
                    <span>Our Story</span>
                </Tooltip>
            </div>
        );
    }
}

export default Animations1;