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
            arrow: arrowPos,
            tooltip: tooltipPos,
            moveDown
        } = this.props;

        const arrow = {
            topCenter: arrowPos === 'topCenter',
            topLeft: arrowPos === 'topLeft',
            topRight: arrowPos === 'topRight',
            bottomCenter: arrowPos === 'bottomCenter',
            bottomLeft: arrowPos === 'bottomLeft',
            bottomRight: arrowPos === 'bottomRight',
            leftCenter: arrowPos === 'leftCenter',
            leftTop: arrowPos === 'leftTop',
            leftBottom: arrowPos === 'leftBottom',
            rightCenter: arrowPos === 'rightCenter',
            rightTop: arrowPos === 'rightTop',
            rightBottom: arrowPos === 'rightBottom',
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

        const tooltip = {
            left: tooltipPos === 'left',
            right: tooltipPos === 'right',
            center: tooltipPos === 'center',
            bottom: tooltipPos === 'bottom'
        }

        this.props = {
            ...this.props,
            hoverBackground,
            hoverColor,
            backgroundColor,
            arrow,
            arrowPos,
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
            top = moveDown ?
                `calc(100% + ${moveDown})` : '100%';
            classes.push('tpArrowTop')
            if (tooltip.left) {
                classes.push('tpArrowLeft')
            } else if (tooltip.right) {
                classes.push('tpArrowRight')
            }
        } else if (arrow.bottom) {
            classes.push('tpArrowBottom')
            top = moveDown ?
                `calc(-21px + ${moveDown})` : '-21px';
            if (tooltip.left) {
                classes.push('tpArrowLeft')
            } else if (tooltip.right) {
                classes.push('tpArrowRight')
            }
        } else if (arrow.left) {
            left = '100%';
            width = '';
            height = '100%';
            top = moveDown ?
                `calc(0px + ${moveDown})` : '0px';
            if (tooltip.center) {
                classes.push('tpTooltipCenter');
            } else if (tooltip.bottom) {
                classes.push('tpTooltipBottom');
            }
            classes.push('tpArrowLeft');
        } else if (arrow.right) {
            classes.push('tpArrowRight')
            left = `-${textBoxWidth}`;
            width = textBoxWidth;
            height = '100%';
            top = moveDown ?
                `calc(0px + ${moveDown})` : '0px';
            if (tooltip.center) {
                classes.push('tpTooltipCenter')
            } else if (tooltip.bottom) {
                classes.push('tpTooltipBottom')
            }
        }

        return (
            <CSSTransition
                in={this.props.showTooltip}
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