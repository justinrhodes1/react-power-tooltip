import React from 'react';
import './Arrow.css';

const Arrow = props => {
    let left = '';
    let top = props.moveDown || '0px';
    let backgroundColor = props.isHovered ?
        props.HoverBackground || '#93fff7' :
        props.BackgroundColor || 'white';
    let border = props.isHovered ?
        `1px solid ${props.HoverBackground || '#93fff7'}` :
        '1px solid #b3b3b3';

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
            style={{ top, left, backgroundColor, border }}
        />
    );
};

export default Arrow;