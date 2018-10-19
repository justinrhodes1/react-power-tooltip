import React from 'react';
import './arrow.css';

const Arrow = ({
    moveDown,
    moveRight,
    isHovered,
    hoverBackground,
    backgroundColor,
    flat,
    zIndex,
    arrow }) => {

    let left = '';
    backgroundColor = isHovered ?
        hoverBackground : backgroundColor;

    let boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

    if (arrow.side('top') || arrow.side('bottom')) {
        left = moveRight ?
            `calc(50% + ${moveRight})` : `50%`;
    }

    return (
        <div
            className={'tpArrow'}
            style={{
                top: moveDown,
                left,
                backgroundColor,
                boxShadow,
                zIndex: zIndex + 1 || '101',
            }}
        />
    );
};

export default Arrow;