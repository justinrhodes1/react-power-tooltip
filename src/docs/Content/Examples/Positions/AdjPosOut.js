import React from 'react';
import Tooltip from '../../../../lib';

const AdjustmentOuter = () => {
    return (
        <>
            <h3 style={{ width: '95%', marginBottom: '0' }}><strong>Outer positions</strong></h3>
            <div
                style={{
                    cursor: 'pointer',
                    border: '2px solid #4b4b4b',
                    background: 'rgba(137, 27, 211, 0.4)',
                    width: '150px',
                    height: '100px',
                    position: 'relative',
                    marginTop: '80px',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px'
                }}>
                <h3>Target element</h3>
                <Tooltip
                    show={true}
                    arrow='center'
                    position='left center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveLeft='40px'
                    hoverBackground='#3b0586'
                    hoverColor='white'
                >
                    <span>moveLeft<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='center'
                    position='bottom center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveDown='40px'
                    hoverBackground='#3b0586'
                    hoverColor='white'
                >
                    <span>moveDown<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='center'
                    position='right center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveRight='40px'
                    hoverBackground='#3b0586'
                    hoverColor='white'
                >
                    <span>moveRight<br />40px</span>
                </Tooltip>
                <Tooltip
                    show={true}
                    arrow='center'
                    position='top center'
                    textBoxWidth='auto'
                    textAlign='center'
                    textBoxWidth='120px'
                    moveUp='40px'
                    hoverBackground='#3b0586'
                    hoverColor='white'
                >
                    <span>moveUp<br />40px</span>
                </Tooltip>
            </div>
        </>
    );
};

export default AdjustmentOuter;