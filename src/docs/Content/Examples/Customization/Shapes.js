import React from 'react';
import Tooltip from '../../../../lib';

const Colors = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Shapes / Fonts</strong></h3>
            <div className='row'>
                <div>
                    <p>Default</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            position='center'
                            lineSeparated
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Text align / fonts</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            position='center'
                            textposition='right'
                            fontWeight='normal'
                            lineSeparated
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Corners / lines</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            position='center'
                            borderRadius='0px'
                            lineSeparated='3px solid #ececec'
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Colors;