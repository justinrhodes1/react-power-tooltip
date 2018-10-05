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
        let classes = ['tpContainer']
        let left = '0px';
        let top = '';
        let width = '100%';
        let height = '';
        if (
            this.props.ArrowPosition === 'topLeft'
            || this.props.ArrowPosition === 'topCenter'
            || this.props.ArrowPosition === 'topRight'
        ) {
            top = this.props.moveDown ?
                `calc(100% + ${this.props.moveDown})` : '100%';
            classes.push('tpArrowTop')
            if (this.props.TooltipPosition === 'left') {
                classes.push('tpArrowLeft')
            } else if (this.props.TooltipPosition === 'right') {
                classes.push('tpArrowRight')
            }
        } else if (
            this.props.ArrowPosition === 'bottomLeft'
            || this.props.ArrowPosition === 'bottomCenter'
            || this.props.ArrowPosition === 'bottomRight'
        ) {
            classes.push('tpArrowBottom')
            top = this.props.moveDown ?
                `calc(-21px + ${this.props.moveDown})` : '-21px';
            if (this.props.TooltipPosition === 'left') {
                classes.push('tpArrowLeft')
            } else if (this.props.TooltipPosition === 'right') {
                classes.push('tpArrowRight')
            }
        } else if (
            this.props.ArrowPosition === 'leftTop'
            || this.props.ArrowPosition === 'leftCenter'
            || this.props.ArrowPosition === 'leftBottom') {
            left = '100%';
            width = '';
            height = '100%';
            top = this.props.moveDown ?
                `calc(0px + ${this.props.moveDown})` : '0px';
            if (this.props.TooltipPosition === 'center') {
                classes.push('tpTooltipCenter');
            } else if (this.props.TooltipPosition === 'bottom') {
                classes.push('tpTooltipBottom');
            }
            classes.push('tpArrowLeft');
        } else if (
            this.props.ArrowPosition === 'rightTop'
            || this.props.ArrowPosition === 'rightCenter'
            || this.props.ArrowPosition === 'rightBottom'
        ) {
            classes.push('tpArrowRight')
            left = -this.props.TextBoxWidth || '-150px';
            width = this.props.TextBoxWidth || '150px';
            height = '100%';
            top = this.props.moveDown ?
                `calc(0px + ${this.props.moveDown})` : '0px';
            if (this.props.TooltipPosition === 'center') {
                classes.push('tpTooltipCenter')
            } else if (this.props.TooltipPosition === 'bottom') {
                classes.push('tpTooltipBottom')
            }
        }

        return (
            <CSSTransition
                in={this.props.showTooltip}
                timeout={300}
                classNames={this.props.Animation}
                unmountOnExit
            >
                <div className={classes.join(' ')}
                    style={{
                        top,
                        left,
                        width,
                        height,
                        fontSize: this.props.fontSize,
                        textAlign: this.props.textAlign,
                        fontFamily: this.props.fontFamily
                    }}>
                    <Arrow {...this.props} isHovered={this.state.hoverArrow} />
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