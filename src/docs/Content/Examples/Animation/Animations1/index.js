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
                className='hoverDiv'>
                <span style={{ marginBottom: '15px' }} >Hover Me</span>
                <span style={{ fontSize: '14px' }}><strong>FadeUpDown</strong></span>
                <Tooltip
                    show={this.state.show}
                    animation='fadeUpDown'
                    arrow='topRight'
                    position='center'
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