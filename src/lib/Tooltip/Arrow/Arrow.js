import React from 'react';
import './Arrow.css';

const Arrow = ({
    moveDown,
    moveRight,
    isHovered,
    hoverBackground,
    backgroundColor: bkgCol,
    flat,
    arrow,
    TextBoxWidth }) => {

    let left = '';
    let top = moveDown || '0px';
    let backgroundColor = isHovered ?
        hoverBackground : bkgCol;

    let boxShadow = flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

    if (arrow.top || arrow.bottom) {
        left = moveRight ?
            `calc(50% + ${moveRight})` : `50%`;
    } else if (arrow.right) {
        left = TextBoxWidth;
    }

    return (
        <div
            className={'tpArrow'}
            style={{ top, left, backgroundColor, boxShadow }}
        />
    );
};

export default Arrow;