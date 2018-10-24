import React, { Component } from 'react';
import Tooltip from '../../../../lib';

class Animation extends Component {
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
                <div
                    onMouseEnter={this.showTooltip}
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
                    {/* <Tooltip
                        show={show}
                        animation='fadeIn'
                        arrow='leftBottom'
                        align='center'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                    <Tooltip
                        show={show}
                        animation='fadeDown'
                        arrow='leftBottom'
                        align='top'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                    <Tooltip
                        show={show}
                        animation='fade'
                        arrow='rightBottom'
                        align='center'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                    <Tooltip
                        show={show}
                        animation='bounce'
                        arrow='rightBottom'
                        align='bottom'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                    <Tooltip
                        show={show}
                        animation='fadeIn'
                        arrow='rightBottom'
                        align='top'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip> */}
                    <Tooltip
                        show={show}
                        animation='fadeLeftRight'
                        arrow='leftBottom'
                        align='bottom'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                    <Tooltip
                        show={show}
                        animation='fadeUpDown'
                        arrow='topCenter'
                        align='center'
                    >
                        <span>Our Technology</span>
                        <span>Our Story</span>
                    </Tooltip>
                </div>
            </>
        );
    }
}

export default Animation;