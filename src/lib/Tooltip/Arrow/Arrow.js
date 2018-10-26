import React from 'react';
import './arrow.css';

const Arrow = ({
    moveDown,
    moveRight,
    moveLeft,
    moveUp,
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

    let marginLeft;
    let marginRight;

    if (arrow.side('top') || arrow.side('bottom')) {
        marginLeft = `${moveRight}px`;
        marginRight = `${moveLeft}px`;
    }

    return (
        <div
            className={'tpArrow'}
            style={{
                marginLeft,
                marginRight,
                backgroundColor,
                boxShadow,
                zIndex: zIndex + 1 || '101',
            }}
        />
    );
};

export default Arrow;