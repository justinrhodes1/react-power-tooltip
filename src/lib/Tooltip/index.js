import React, { Component } from 'react';

import TextBox from './TextBox/TextBox';
import Arrow from './Arrow/Arrow';
// import delayUnmounting from './HOC/old/delayUnmount';
import delayUnmount from './HOC/delayUnmount';

import './style.css';
import './animation.css';

class Tooltip extends Component {
    state = {
        hoverArrow: false
    }

    hoverArrow = (boolean) => {
        this.setState({ hoverArrow: boolean })
    }

    render() {

        this.props = {
            ...this.props,
            hoverBackground: this.props.hoverBackground || '#ececec',
            hoverColor: this.props.hoverColor || 'black',
            backgroundColor: this.props.backgroundColor || 'white',
            textBoxWidth: this.props.textBoxWidth || '150px',
            // textBoxWidth: this.props.textBoxWidth || 'auto',
            padding: this.props.padding || '15px 20px',
            borderRadius: this.props.borderRadius || '5px',
            moveDown: this.props.moveDown || '0px'
        }

        const {
            textAlign = 'left',
            fontFamily = 'inherit',
            fontWeight = 'bold',
            fontSize = 'inherit',
            color = 'inherit',
            animation = '',
            arrow: position,
            align,
            moveDown,
            textBoxWidth,
            show
        } = this.props;

        function is(pos1, pos2, pos3) {
            return this.position === pos1
                || this.position === pos2
                || this.position === pos3;
        }

        function side(pos) {
            if (pos === 'left' || pos === 'right')
                return this.is(`${pos}Center`, `${pos}Top`, `${pos}Bottom`);
            return this.is(`${pos}Center`, `${pos}Left`, `${pos}Right`);
        }

        this.props.align = {
            is,
            position: align
        }

        this.props.arrow = {
            is,
            side,
            position
        };

        const calcVpos = (units) => {
            return moveDown ? `calc(${units} + ${moveDown})` : `${units}`;
        }

        const arrange = (units, cssClass, left, right, height, width) => {
            tooltipStyle = { left, right, height, width, top: calcVpos(units) };
            classes.push(cssClass)
        }

        let classes = ['tpContainer'];

        let tooltipStyle = {};
        let { arrow, align: algn } = this.props;

        if (arrow.side('top')) {
            arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
        } else if (arrow.side('bottom')) {
            arrange('-21px', 'tpArrowBottom', '0px', '', '', '100%');
        } else if (arrow.side('left')) {
            arrange('0px', 'tpArrowLeft', '100%', '', '100%', '');
        } else {
            arrange('0px', 'tpArrowRight',
                '', '100%', '100%', '');
        }

        let onAxis = {
            y: arrow.side('top') || arrow.side('bottom'),
            x: arrow.side('left') || arrow.side('right')
        }

        switch (algn.position) {
            case 'left':
                if (onAxis.y) classes.push('tpArrowLeft');
                break;
            case 'right':
                if (onAxis.y) classes.push('tpArrowRight');
                break;
            case 'center':
                if (onAxis.x) classes.push('tpAlignCenter');
                break;
            case 'bottom':
                if (onAxis.x) classes.push('tpAlignBottom');
                break;
            default:
                break;
        }

        tooltipStyle = {
            ...tooltipStyle,
            color,
            fontSize,
            textAlign,
            fontFamily,
            fontWeight,
            animation: show ? `rct-${animation} 0.4s` : `rct-${animation}-out 0.4s`,
        }

        return (
            <div className={classes.join(' ')}
                style={tooltipStyle}>
                <Arrow
                    {...this.props}
                    isHovered={this.state.hoverArrow}
                />
                <TextBox
                    {...this.props}
                    hoverArrow={this.hoverArrow}
                />
            </div>
        );
    }
}

export default delayUnmount(Tooltip);