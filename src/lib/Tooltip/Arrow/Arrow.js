import React from 'react';
import './Arrow.css';

const Arrow = ({
    moveDown,
    moveRight,
    isHovered,
    hoverBackground,
    backgroundColor,
    flat,
    arrow,
    textBoxWidth }) => {

    let left = '';
    backgroundColor = isHovered ?
        hoverBackground : backgroundColor;

    let boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

    if (arrow.top || arrow.bottom) {
        left = moveRight ?
            `calc(50% + ${moveRight})` : `50%`;
    } else if (arrow.right) {
        left = textBoxWidth;
    }

    return (
        <div
            className={'tpArrow'}
            style={{ top: moveDown, left, backgroundColor, boxShadow }}
        />
    );
};

export default Arrow;