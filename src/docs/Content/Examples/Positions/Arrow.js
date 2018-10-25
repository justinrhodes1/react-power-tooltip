import React from 'react';
import Tooltip from '../../../../lib';

const Arrow = () => {
    return (
        <>
            <h3 style={{ width: '100%' }}><strong>Vertical</strong> Positions</h3>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: '50px'
                }}
                className='greyBkgr'
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '85%',
                    padding: '90px 0',
                    fontSize: '14px'
                }}>
                    <div className='invisibleDiv'>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                    <div className='invisibleDiv'>
                        <Tooltip
                            show={true}
                            arrow='leftCenter'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>

                    </div>
                    <div className='invisibleDiv'>
                        <Tooltip
                            show={true}
                            arrow='leftBottom'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <h3 style={{ width: '100%' }}><strong>Horizontal</strong> Positions</h3>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: '50px',
                    justifyContent: 'center'
                }}
                className='greyBkgr'
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '83%',
                    padding: '70px 0 160px 0',
                    fontSize: '14px'
                }}>
                    <div className='invisibleDiv2'>
                        <Tooltip
                            show={true}
                            arrow='topLeft'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                    <div className='invisibleDiv2'>
                        <Tooltip
                            show={true}
                            arrow='topCenter'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>

                    </div>
                    <div className='invisibleDiv2'>
                        <Tooltip
                            show={true}
                            arrow='topRight'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Arrow;