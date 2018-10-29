import React from 'react';
import Tooltip from '../../../../lib';

const VerticalArrow = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Vertical</strong></h3>
            <div className='row' >
                <div>
                    <p>Arrow position: <strong>bottom</strong></p>
                    <div className='vPlaceHolder' style={{ marginTop: '70px' }}>
                        <Tooltip
                            show={true}
                            arrow='leftBottom'
                            position='center'
                            textBoxWidth='auto'
                            lineSeparated
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Arrow position: <strong>center</strong></p>
                    <div className='vPlaceHolder' style={{ marginTop: '70px' }}>
                        <Tooltip
                            show={true}
                            arrow='leftCenter'
                            position='center'
                            textBoxWidth='auto'
                            lineSeparated
                        >
                            <span>Longer Option 1</span>
                            <span>Longer Option 2</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Arrow position: <strong>top</strong></p>
                    <div className='vPlaceHolder' style={{ marginTop: '70px' }}>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            position='center'
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

export default VerticalArrow;