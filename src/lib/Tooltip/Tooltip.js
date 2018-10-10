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
            moveDown,
            showTooltip
        } = this.props;

        const tooltip = {
            left: tpPos === 'left',
            right: tpPos === 'right',
            center: tpPos === 'center',
            bottom: tpPos === 'bottom',
            position: tpPos
        }

        const arrow = {
            topCenter: arPos === 'topCenter',
            topLeft: arPos === 'topLeft',
            topRight: arPos === 'topRight',
            bottomCenter: arPos === 'bottomCenter',
            bottomLeft: arPos === 'bottomLeft',
            bottomRight: arPos === 'bottomRight',
            leftCenter: arPos === 'leftCenter',
            leftTop: arPos === 'leftTop',
            leftBottom: arPos === 'leftBottom',
            rightCenter: arPos === 'rightCenter',
            rightTop: arPos === 'rightTop',
            rightBottom: arPos === 'rightBottom',
            position: arPos,
            get top() {
                return this.topCenter || this.topLeft || this.topRight;
            },
            get bottom() {
                return this.bottomCenter || this.bottomLeft || this.bottomRight;
            },
            get left() {
                return this.leftCenter || this.leftTop || this.leftBottom;
            },
            get right() {
                return this.rightCenter || this.rightTop || this.rightBottom;
            }
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

        let classes = ['tpContainer']
        let left = '0px';
        let top = '';
        let width = '100%';
        let height = '';

        if (arrow.top) {
            top = calcVpos('100%');
            classes.push('tpArrowTop')
        } else if (arrow.bottom) {
            classes.push('tpArrowBottom')
            top = calcVpos('-21px');
        } else if (arrow.left) {
            left = '100%';
            width = '';
            height = '100%';
            top = calcVpos('0px');
            classes.push('tpArrowLeft');
        } else if (arrow.right) {
            classes.push('tpArrowRight')
            left = `-${textBoxWidth}`;
            width = textBoxWidth;
            height = '100%';
            top = calcVpos('0px');
        }

        switch (tooltip.position) {
            case 'left':
                if (arrow.top || arrow.bottom) classes.push('tpArrowLeft');
                break;
            case 'right':
                if (arrow.top || arrow.bottom) classes.push('tpArrowRight');
                break;
            case 'center':
                if (arrow.left || arrow.right) classes.push('tpAlignCenter');
                break;
            case 'bottom':
                if (arrow.left || arrow.right) classes.push('tpAlignBottom');
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