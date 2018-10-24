import React from 'react';
import Tooltip from '../../../../lib';

const DefaultStatic = () => {
    return (
        <div className='row' style={{ width: '40%', justifyContent: 'space-between', marginBottom: '50px' }}>
            <div className='invisibleDiv'>
                <Tooltip
                    show={true}
                    textboxWidth='100px'
                    arrow='leftTop'
                    align='center'
                    textboxWidth='auto'
                >
                    <span>Hover (Default)</span>
                    <span>Multiple Options</span>
                </Tooltip>
            </div>
            <div className='invisibleDiv'>
                <Tooltip
                    show={true}
                    textboxWidth='100px'
                    arrow='leftTop'
                    align='center'
                >
                    <span>Single Hover</span>
                </Tooltip>
            </div>
        </div>
    );
};

export default DefaultStatic;