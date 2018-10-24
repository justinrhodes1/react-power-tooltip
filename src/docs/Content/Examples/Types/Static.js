import React from 'react';
import Tooltip from '../../../../lib';

const Static = () => {
    return (
        <div className='invisibleDiv' style={{ margin: '30px 0 50px 0' }}>
            <Tooltip
                show={true}
                textboxWidth='100px'
                arrow='leftTop'
                align='center'
                static
            >
                <span>Some static text which provides some additional information.</span>
            </Tooltip>
        </div>
    );
};

export default Static;