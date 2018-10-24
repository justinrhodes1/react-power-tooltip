import React from 'react';
import Tooltip from '../../../../lib';

const Arrow = () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    // background: '#dddddd',
                    marginBottom: '50px'
                }}
                className='PurpleGradient'
            >
                <div style={{
                    width: '200px',
                    margin: '25px 25px',
                    color: '#efeaea'
                }}><span style={{ fontWeight: 'bold' }}>Vertical</span> (Left / Right)</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '50%',
                    padding: '90px 0',
                    fontSize: '14px'
                }}>
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Option 1</span>
                            <span>Option 2</span>
                        </Tooltip>
                    </div>
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
                        <Tooltip
                            show={true}
                            arrow='leftCenter'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Option 1</span>
                            <span>Option 2</span>
                        </Tooltip>

                    </div>
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
                        <Tooltip
                            show={true}
                            arrow='leftBottom'
                            align='center'
                            textBoxWidth='auto'
                        >
                            <span>Option 1</span>
                            <span>Option 2</span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    // background: '#dddddd',
                    marginBottom: '50px'
                }}
                className='PurpleGradient'
            >
                <div style={{
                    width: '200px',
                    margin: '25px 25px',
                    color: '#efeaea'
                }}><span style={{ fontWeight: 'bold' }}>Horizontal</span> (Top / Bottom)</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '50%',
                    padding: '70px 0 130px 0',
                    fontSize: '14px'
                }}>
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
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
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
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
                    <div style={{ position: 'relative', height: '10px', width: '10px', background: '#2c0358' }}>
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