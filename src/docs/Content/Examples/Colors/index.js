import React from 'react';
import Tooltip from '../../../../lib';

const Colors = () => {
    return (
        <>
            <div className='greyBkgr' style={{ paddingBottom: '35px' }}>
                <div className='row'>
                    <div>
                        <p>Default</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                arrow='leftTop'
                                align='center'
                            >
                                <span>Our Technology</span>
                                <span>Our Story</span>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <p>Custom Hover</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                arrow='leftTop'
                                align='center'
                                hoverBackground='#3b0586'
                                hoverColor='white'
                            >
                                <span>Our Technology</span>
                                <span>Our Story</span>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <p>Custom Background</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                arrow='leftTop'
                                align='center'
                                color='white'
                                backgroundColor='#181818'
                            >
                                <span>Our Technology</span>
                                <span>Our Story</span>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div>
                        <p>Custom text align</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                textAlign='right'
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
                        <p>Custom Corners</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                borderRadius='0px'
                                arrow='leftTop'
                                align='center'
                            >
                                <span>Our Technology</span>
                                <span>Our Story</span>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <p>Flat (no shadows)</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                arrow='leftTop'
                                align='center'
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
            </div>
        </>
    );
};

export default Colors;