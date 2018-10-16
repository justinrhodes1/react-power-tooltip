import React from 'react';
import Tooltip from "../../../lib";
import '../styles.css';

const section3 = () => {
    return (
        <>
            <h2 id='behaviour'>Behaviour</h2>
            <h2 id='colors'>Colors / Shapes</h2>
            <div className='flexContainer themes'>
                <div className='row'>
                    <div>
                        <p>Default Colors</p>
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
                        <p>Text align</p>
                        <div className='invisibleDiv'>
                            <Tooltip
                                show={true}
                                animation='tpFade'
                                textAlign='right'
                                arrow='leftTop'
                                align='center'
                            >
                                <span>Our Technology</span>
                                <span>Our Story</span>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <p>Custom corners</p>
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

export default section3;