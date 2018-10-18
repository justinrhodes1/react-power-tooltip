import React, { Component } from 'react';

import Tooltip from '../../../lib';
import Alert from './Alert';

class Examples extends Component {
    state = {
        show: false,
    }

    showTooltip = () => {
        this.setState({ show: true })
    }

    hideTooltip = () => {
        this.setState({ show: false })
    }

    render() {
        const { show } = this.state;
        return (
            <>
                <h1>Examples</h1>
                <h2 id='animations'>Animations</h2>
                <div className='FlexContainer'>
                    <div
                        onMouseOver={this.showTooltip}
                        onMouseLeave={this.hideTooltip}
                        style={{
                            marginTop: '50px',
                            marginBottom: '50px',
                            width: '300px',
                            height: '400px',
                            background: 'linear-gradient(52deg, rgba(79,11,189,1) 0%, rgba(136,38,255,1) 100%, rgba(113,4,112,1) 100%)',
                            position: 'relative',
                            fontSize: '13px',
                            fontWeight: '400',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <span style={{ color: 'white', fontSize: '18px' }}>Hover me</span>
                        <Tooltip
                            show={true}
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            animation='bounce'
                            arrow='leftBottom'
                            align='top'
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                        <Tooltip
                            show={true}
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            animation='bounce'
                            arrow='leftBottom'
                            align='center'
                            lineSeparated
                        >
                            <span>trial</span>
                            <span>Our Story</span>
                        </Tooltip>
                        <Tooltip
                            show={true}
                            animation='bounce'
                            arrow='rightBottom'
                            align='bottom'
                            color='white'
                            backgroundColor='#181818'
                            static
                            flat
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                        <Tooltip
                            show={true}
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            animation='bounce'
                            arrow='rightBottom'
                            align='center'
                        >
                            <span>One very long description which spans
                                several lines and thus takes up more space.
                            </span>
                            <span>Our Story</span>
                        </Tooltip>
                        <Tooltip
                            show={true}
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            animation='bounce'
                            arrow='rightBottom'
                            align='top'
                            lineSeparated
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                    <Alert />
                </div>
            </>
        );
    }
}

export default Examples;