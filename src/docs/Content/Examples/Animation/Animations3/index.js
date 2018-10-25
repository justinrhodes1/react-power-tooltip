import React, { Component } from 'react';
import Tooltip from '../../../../../lib';

class Animations3 extends Component {
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
                    width: '130px',
                    height: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'relative',
                    cursor: 'pointer'
                }}
                className='PurpleGradient'>
                <span style={{ marginBottom: '15px' }}>Hover Me</span>
                <span><strong>Fade</strong></span>
                <Tooltip
                    show={this.state.show}
                    animation='fade'
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

export default Animations3;