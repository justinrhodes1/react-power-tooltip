import React, { Component } from 'react';
import delayUnmount from './HOC/delayUnmount';
import TextBox from './TextBox/TextBox';
import Arrow from './Arrow/Arrow';

import './style.css';
import './animation.css';

class Tooltip extends Component {
    state = {
        hoverArrow: false
    }

    hoverArrow = (boolean) => {
        this.setState({ hoverArrow: boolean });
    }

    render() {
        this.props = {
            ...this.props,
            hoverBackground: this.props.hoverBackground || '#ececec',
            hoverColor: this.props.hoverColor || 'black',
            backgroundColor: this.props.backgroundColor || 'white',
            textBoxWidth: this.props.textBoxWidth || '150px',
            padding: this.props.padding || '15px 20px',
            borderRadius: this.props.borderRadius || '5px',
            moveDown: this.props.moveDown || '0px',
            moveRight: this.props.moveRight || '0px',
            moveLeft: this.props.moveLeft || '0px',
            moveUp: this.props.moveUp || '0px',
            position: this.props.position || 'right center',
            arrow: this.props.arrow || 'top'
        };

        this.props.lineSeparated = typeof (this.props.lineSeparated) == typeof (true)
            ? '1px solid #ececec' : this.props.lineSeparated;

        this.props.moveDown = Number(this.props.moveDown.slice(0, -2));
        this.props.moveRight = Number(this.props.moveRight.slice(0, -2));
        this.props.moveLeft = Number(this.props.moveLeft.slice(0, -2));
        this.props.moveUp = Number(this.props.moveUp.slice(0, -2));

        // if (!this.props.alert) console.error('Add an alert to your tooltip!');

        const {
            textAlign = 'left',
            fontFamily = 'inherit',
            fontWeight = 'bold',
            fontSize = 'inherit',
            color = 'inherit',
            animation = '',
            arrow,
            moveDown,
            moveRight,
            moveLeft,
            moveUp,
            show
        } = this.props;

        function isAlign(pos) {
            return this.align ?
                this.align === pos : this.position === pos;
        }

        function isSide(pos) {
            return this.side === pos;
        }

        this.props.position = {
            side: this.props.position.split(' ')[0],
            align: this.props.position.split(' ')[1],
            isAlign,
            isSide
        };

        this.props.arrow = {
            isAlign,
            position: arrow
        };

        const classes = ['tpContainer'];

        const arrange = (units, cssClass, left, right, height, width) => {
            tooltipStyle = { left, right, height, width, top: units };
            classes.push(cssClass);
        };

        let tooltipStyle = {};
        const { align } = this.props.position;
        const { position } = this.props;
        let bottom;

        // TODO: change logically wrong css classnames
        // const { side, align } = this.props.position;

        // switch (side) {
        //     case 'bottom':
        //         arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
        //         console.log('bottom')
        //         break;
        //     case 'top':
        //         arrange('', 'tpArrowBottom', '0px', '', '', '100%');
        //         bottom = '100%';
        //         break;
        //     case 'left':
        //         arrange('0px', 'tpArrowRight', '100%', '', '100%', '');
        //         break;
        //     case 'right':
        //         arrange('0px', 'tpArrowLeft', '', '100%', '100%', '');
        //         break;
        //     default:
        //         break;
        // }

        if (position.isSide('bottom')) {
            arrange('100%', 'tpArrowTop', '0px', '', '', '100%');
        } else if (position.isSide('top')) {
            arrange('', 'tpArrowBottom', '0px', '', '', '100%');
            bottom = '100%';
        } else if (position.isSide('right')) {
            arrange('0px', 'tpArrowLeft', '100%', '', '100%', '');
        } else {
            arrange('0px', 'tpArrowRight',
                '', '100%', '100%', '');
        }

        // TODO: exchange let with const declarations
        const onAxis = {
            y: position.isSide('top') || position.isSide('bottom'),
            x: position.isSide('left') || position.isSide('right')
        };

        let pushRight = moveRight;
        let pushDown = moveDown;
        let pushLeft = moveLeft;
        let pushUp = moveUp;

        switch (align) {
            case 'left':
                if (onAxis.y) classes.push('tpArrowLeft');
                break;
            case 'right':
                if (onAxis.y) classes.push('tpArrowRight');
                break;
            case 'center':
                if (onAxis.x) {
                    classes.push('tpAlignCenter');
                    pushDown = pushDown * 2;
                    pushUp = pushUp * 2;
                };
                if (onAxis.y) {
                    pushRight = pushRight * 2;
                    pushLeft = pushLeft * 2;
                }
                break;
            case 'bottom':
                if (onAxis.x) classes.push('tpAlignBottom');
                break;
            default:
                break;
        }

        let margin;

        if (moveDown < 0 && moveRight < 0) {
            pushDown = 0;
            pushRight = 0;
            margin = `${moveDown}px 0px 0px ${moveRight}px`;
        } else if (moveDown < 0) {
            pushDown = 0;
            margin = `${moveDown}px 0px 0px 0px`;
        } else if (moveRight < 0) {
            pushRight = 0;
            margin = `0px 0px 0px ${moveRight}px`;
        } else if (moveLeft < 0) {
            pushLeft = 0;
            margin = `0px ${moveLeft}px 0px 0px`;
        } else if (moveUp < 0) {
            pushUp = 0;
            margin = `0px 0px ${moveUp}px 0px`;
        }

        tooltipStyle = {
            ...tooltipStyle,
            color,
            bottom,
            fontSize,
            textAlign,
            fontFamily,
            fontWeight,
            padding: `${pushDown}px ${pushLeft}px ${pushUp}px ${pushRight}px`,
            margin
        };

        return (
            <div className={classes.join(' ')}
                style={tooltipStyle}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        animation: show ? `rct-${animation} 0.2s` : `rct-${animation}-out 0.15s`
                    }}
                >
                    <Arrow
                        {...this.props}
                        isHovered={this.state.hoverArrow}
                    />
                    <TextBox
                        {...this.props}
                        hoverArrow={this.hoverArrow}
                    />
                </div>
            </div>
        );
    }
}

export default delayUnmount(Tooltip);
