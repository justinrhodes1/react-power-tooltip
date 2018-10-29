import React, { Component } from 'react';
import Tooltip from '../../../../lib';

class Align extends Component {
    state = {
        hover: false
    }

    hover = side => {
        this.setState({ hover: side })
    }

    render() {
        const { hover } = this.state;
        return (
            <div style={{ position: 'relative', fontSize: '14px' }}>
                <Tooltip
                    show={hover === 'left'}
                    position='left top'
                    arrow='center'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Top</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'left'}
                    position='left center'
                    arrow='center'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Center</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'left'}
                    position='left bottom'
                    arrow='center'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Bottom</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'right'}
                    position='top'
                    arrow='leftBottom'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Top</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'right'}
                    position='center'
                    arrow='leftBottom'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Center</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'right'}
                    position='bottom'
                    arrow='leftBottom'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Bottom</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'top'}
                    position='left'
                    arrow='bottomCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Left</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'top'}
                    position='center'
                    arrow='bottomCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Center</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'top'}
                    position='right'
                    arrow='bottomCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Right</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'bottom'}
                    position='left'
                    arrow='topCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Left</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'bottom'}
                    position='center'
                    arrow='topCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Center</span>
                </Tooltip>
                <Tooltip
                    show={hover === 'bottom'}
                    position='right'
                    arrow='topCenter'
                    delayTime='0'
                    textBoxWidth='auto'
                    static
                >
                    <span>Right</span>
                </Tooltip>
                <div className='square PurpleGradient'>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '15px'
                    }}>
                        <div style={{
                            width: '70%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <span>Left</span>
                            <span>Right</span>
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '15px'
                    }}>
                        <div style={{
                            height: '70%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>Top</span>
                            <span>Bottom</span>
                        </div>
                    </div>
                    <div className='left'
                        onMouseEnter={() => this.hover('left')}
                        onMouseLeave={() => this.hover(false)}
                    ></div>
                    <div className='top'
                        onMouseEnter={() => this.hover('top')}
                        onMouseLeave={() => this.hover(false)}
                    ></div>
                    <div className='right'
                        onMouseEnter={() => this.hover('right')}
                        onMouseLeave={() => this.hover(false)}
                    ></div>
                    <div className='bottom'
                        onMouseEnter={() => this.hover('bottom')}
                        onMouseLeave={() => this.hover(false)}
                    ></div>
                </div>
            </div>
        );
    }
}

export default Align;