import React from 'react';
import Tooltip from '../../../../lib';

const Colors = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Colors</strong></h3>
            <div className='row'>
                <div>
                    <p>Hover / line colors</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='top'
                            position='right center'
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            lineSeparated='1px solid purple'
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Background colors</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='top'
                            position='right center'
                            color='white'
                            backgroundColor='#181818'
                        >
                            <span>Our Technology</span>
                            <span>Our Story</span>
                        </Tooltip>
                    </div>
                </div>
                <div>
                    <p>Flat (no shadows)</p>
                    <div className='vPlaceHolder'>
                        <Tooltip
                            show={true}
                            arrow='top'
                            position='right center'
                            color='white'
                            backgroundColor='#444444'
                            hoverBackground='#3b0586'
                            hoverColor='white'
                            flat
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