import React from 'react';
import Tooltip from '../../../../lib';

const Arrow = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Horizontal</strong></h3>
            <div className='row'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Arrow position: <strong>left</strong></p>
                    <div className='hPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='right'
                            position='bottom center'
                            textBoxWidth='auto'
                            lineSeparated
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Arrow position: <strong>center</strong></p>
                    <div className='hPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='center'
                            position='bottom center'
                            textBoxWidth='auto'
                            lineSeparated
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>Arrow position: <strong>right</strong></p>
                    <div className='hPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='left'
                            position='bottom center'
                            textBoxWidth='auto'
                            lineSeparated
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