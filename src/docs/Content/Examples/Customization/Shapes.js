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
                            align='center'
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
                            align='center'
                            textAlign='right'
                            fontWeight='normal'
                            lineSeparated
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Border radius</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='leftTop'
                            align='center'
                            borderRadius='0px'
                            lineSeparated
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