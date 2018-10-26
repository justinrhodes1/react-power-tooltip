import React from 'react';
import Tooltip from '../../../../lib';

const Adjustment = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Vertical / Horizontal</strong></h3>
            <div className='row'>
                <div className='hPlaceHolder'>
                    <Tooltip
                        show={true}
                        arrow='topCenter'
                        align='center'
                        textBoxWidth='auto'
                        moveDown='100px'
                    >
                        <span>Longer Option 1</span>
                        <span>Longer Option 2</span>
                    </Tooltip>
                </div>
            </div>
            {/* <div className='row'>
                <div className='hPlaceHolder'>
                    <Tooltip
                        show={true}
                        arrow='topRight'
                        align='center'
                        textBoxWidth='auto'
                        moveDown='50px'
                    >
                        <span>Longer Option 1</span>
                        <span>Longer Option 2</span>
                    </Tooltip>
                </div>
            </div> */}
        </>
    );
};

export default Adjustment;