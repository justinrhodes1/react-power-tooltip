import React from 'react';
import './Arrow.css';

const Arrow = props => {
    let left = '';
    let top = props.moveDown || '0px';
    let backgroundColor = props.isHovered ?
        props.HoverBackground || '#ececec' :
        props.BackgroundColor || 'white';

    let boxShadow = props.flat ? null : '0 0 0 1px rgba(0,0,0,.18)';

    if (
        props.ArrowPosition === 'topLeft'
        || props.ArrowPosition === 'topCenter'
        || props.ArrowPosition === 'topRight'
        || props.ArrowPosition === 'bottomLeft'
        || props.ArrowPosition === 'bottomCenter'
        || props.ArrowPosition === 'bottomRight'
    ) {
        left = props.moveRight ?
            `calc(50% + ${props.moveRight})` : `50%`;
    } else if (
        props.ArrowPosition === 'rightTop'
        || props.ArrowPosition === 'rightCenter'
        || props.ArrowPosition === 'rightBottom'
    ) {
        left = props.TextBoxWidth || '150px';
    }

    return (
        <div
            className={'tpArrow'}
            style={{ top, left, backgroundColor, boxShadow }}
        />
    );
};

export default Arrow;