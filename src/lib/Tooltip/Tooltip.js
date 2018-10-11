import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import TextBox from './TextBox/TextBox';
import Arrow from './Arrow/Arrow';

import './Tooltip.css'

class Tooltip extends Component {
    state = {
        hoverArrow: false
    }

    hoverArrow = () => {
        if (!this.state.hoverArrow) this.setState({ hoverArrow: true })
    }

    unHoverArrow = () => {
        if (this.state.hoverArrow) this.setState({ hoverArrow: false })
    }

    render() {

        const {
            textBoxWidth = '150px',
            animation = 'tpFade',
            borderRadius = '5px',
            backgroundColor = 'white',
            hoverBackground = '#ececec',
            hoverColor = 'black',
            padding = '15px 20px',
            textAlign = 'left',
            fontFamily = 'inherit',
            fontWeight = 'bold',
            fontSize = 'inherit',
            color = 'inherit',
            arrow: arPos,
            tooltip: tpPos,
            moveDown = '0px',
            showTooltip
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

        const tooltip = {
            is,
            position: tpPos
        }

        const arrow = {
            is,
            side,
            position: arPos
        };

        const calcVpos = (units) => {
            return moveDown ? `calc(${units} + ${moveDown})` : `${units}`;
        }

        this.props = {
            ...this.props,
            hoverBackground,
            hoverColor,
            backgroundColor,
            arrow,
            textBoxWidth,
            padding,
            textAlign,
            fontFamily,
            fontWeight,
            borderRadius,
            tooltip,
            color
        }

        let classes = ['tpContainer'];
        let top = '';
        let left = '0px';
        let height = '';
        let width = '100%';

        if (arrow.side('top')) {
            top = calcVpos('100%');
            classes.push('tpArrowTop')
        } else if (arrow.side('bottom')) {
            classes.push('tpArrowBottom')
            top = calcVpos('-21px');
        } else if (arrow.side('left')) {
            left = '100%';
            width = '';
            height = '100%';
            top = calcVpos('0px');
            classes.push('tpArrowLeft');
        } else {
            left = `-${textBoxWidth}`;
            width = textBoxWidth;
            height = '100%';
            top = calcVpos('0px');
            classes.push('tpArrowRight')
        }

        switch (tooltip.position) {
            case 'left':
                if (arrow.side('top') || arrow.side('bottom'))
                    classes.push('tpArrowLeft');
                break;
            case 'right':
                if (arrow.side('top') || arrow.side('bottom'))
                    classes.push('tpArrowRight');
                break;
            case 'center':
                if (arrow.side('left') || arrow.side('right'))
                    classes.push('tpAlignCenter');
                break;
            case 'bottom':
                if (arrow.side('left') || arrow.side('right'))
                    classes.push('tpAlignBottom');
                break;
            default:
                break;
        }

        return (
            <CSSTransition
                in={showTooltip}
                timeout={300}
                classNames={animation}
                unmountOnExit
            >
                <div className={classes.join(' ')}
                    style={{
                        top,
                        left,
                        width,
                        height,
                        color,
                        fontSize,
                        textAlign,
                        fontFamily,
                        fontWeight
                    }}>
                    <Arrow
                        {...this.props}
                        isHovered={this.state.hoverArrow}
                    />
                    <TextBox
                        {...this.props}
                        hoverArrow={() => this.hoverArrow()}
                        unHoverArrow={() => this.unHoverArrow()}
                    />
                </div>
            </CSSTransition>
        );
    }
}

export default Tooltip;