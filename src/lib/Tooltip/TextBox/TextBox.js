import React, { Component } from 'react';
import './textBox.css';

class TextBox extends Component {
    state = {
        hoverIndex: null,
        firstH: null,
        lastH: null,
        totH: null
    }

    unsetHover = () => {
        this.setState({ hoverIndex: null });
        this.props.hoverArrow(false);
    }

    //Set & unset hover state
    //TODO: exchange with below
    onSpanHover = (index, lastIndex, numChildren) => {
        this.setState({ hoverIndex: index });
        const { static: rctStatic, arrow, position, hoverArrow } = this.props;
        if (!rctStatic
            && ((index === 0
                && (position.isSide('bottom') || arrow.isAlign('top')))
                || (index === lastIndex
                    && (position.isSide('top') || arrow.isAlign('bottom')))
                || numChildren === 1)) {
            return hoverArrow(true);
        }
        return hoverArrow(false);
    }

    // onSpanHover = (index, lastIndex, numChildren) => {
    //     this.setState({ hoverIndex: index });
    //     const { static: tpStatic, arrow, hoverArrow } = this.props;
    //     if (!tpStatic
    //         && ((index === 0
    //             && (arrow.side('top') || arrow.is('leftTop') || arrow.is('rightTop')))
    //             || (index === lastIndex
    //                 && (arrow.side('bottom') || arrow.is('leftBottom') || arrow.is('rightBottom')))
    //             || numChildren === 1)) {
    //         return hoverArrow(true);
    //     }
    //     return hoverArrow(false);
    // }

    componentDidMount() {
        const heights = Object.keys(this.spanHeights).map(key => {
            return this.spanHeights[key].clientHeight
        })
        const firstH = heights[0];
        const lastH = heights[heights.length - 1];
        const totH = heights.reduce(
            (accumulator, currentValue) => accumulator + currentValue
            , 0);
        this.setState({ totH, firstH, lastH });
    }

    render() {

        const {
            arrow,
            position,
            static: tpStatic,
            textBoxWidth: width,
            moveDown,
            moveLeft,
            moveUp,
            moveRight,
            lineSeparated,
            backgroundColor,
            padding,
            borderRadius,
            hoverBackground,
            hoverColor,
            alert,
            zIndex,
            flat,
            children
        } = this.props;

        const {
            hoverIndex,
            totH,
            firstH,
            lastH
        } = this.state;

        //TODO: align.is('top/bottom/center/left/right') 
        // arrow.position 
        const calcHPos = (left, center, right) => {
            return position.isAlign('center') ? center : position.isAlign('left') ? left : right;
        }
        const calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
            return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`
        }
        const calcTopPos = (elHeight, totHeight) => {
            if (position.align === 'center') {
                console.log('align center')
                return calcVPos(50, elHeight, 2, null, totHeight);
            } else if (position.align === 'bottom') {
                return calcVPos(100, elHeight, 2, -12, totHeight);
            }
            console.log('ALIGN TOP')
            return calcVPos(0, elHeight, 2, 12, totHeight);
        }


        // const calcHPos = (left, center, right) => {
        //     return position.is('center') ? center : position.is('left') ? left : right;
        // }

        // const calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
        //     return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`
        // }

        // const calcTopPos = (elHeight, totHeight) => {
        //     if (position.is('center')) {
        //         return calcVPos(50, elHeight, 2, null, totHeight);
        //     } else if (position.is('bottom')) {
        //         return calcVPos(100, elHeight, 2, -12, totHeight);
        //     }
        //     return calcVPos(0, elHeight, 2, 12, totHeight);
        // }

        const numberChildren = React.Children.count(children);
        const lastIndex = numberChildren - 1;
        this.spanHeights = {}

        let adjChildren = React.Children.map(children, (child, index) => {
            let style = {
                backgroundColor,
                padding
            };
            if (width === 'auto') style.whiteSpace = 'nowrap';
            if (!tpStatic && hoverIndex === index) {
                style.color = hoverColor;
                style.backgroundColor = hoverBackground;
            }
            if (lineSeparated && lastIndex !== index) {
                style.borderBottom = lineSeparated
            }

            let ref = null;
            ref = span => this.spanHeights[`span${index + 1}`] = span;

            const childProps = {
                ...child.props,
                ref,
                style,
                onMouseOver: () => this.onSpanHover(index, lastIndex, numberChildren)
            };
            return React.cloneElement(child, childProps);
        });

        let left = '';
        let right = '';
        let top = '8px';
        //Align: left, center, right
        let hLeftPos =
            calcHPos('100% - 50px', '50% - 40px', '0% - 30px');
        let hRightPos =
            calcHPos('0% - 30px', '50% - 40px', '100% - 50px');


        //TODO: use below
        if (arrow.isAlign('center') && (position.isSide('top') || position.isSide('bottom'))) {
            arrow.position = 'hCenter';
        } else if (arrow.isAlign('center')) {
            arrow.position = 'vCenter';
        }

        switch (arrow.position) {
            case 'left':
                right = `calc(${hLeftPos})`;
                break;
            case 'right':
                left = `calc(${hRightPos})`;
                break;
            case 'top':
                top = calcTopPos(firstH, null);
                break;
            case 'bottom':
                top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
                break;
            case 'vCenter':
                top = `calc(0% - ${totH}px/2 + 11px)`
                if (position.align === 'center') top = `calc(50% - ${totH}px/2)`
                if (position.align === 'bottom') top = `calc(100% - ${totH}px/2 - 11px)`
                console.log('VCENTER')
                break;
            case 'hCenter':
                break;
            default:
                break;
        }

        switch (position.side) {
            case 'bottom':
                break;
            case 'top':
                top = calcVPos(0, totH, 1, 11);
                break;
            case 'left':
                right = '8px';
                break;
            case 'right':
                left = '8px';
                break;
        }



        // switch (arrow.position) {
        //     case 'topLeft':
        //         right = `calc(${hLeftPos})`;
        //         break;
        //     // case 'topCenter':
        //     //     break;
        //     case 'topRight':
        //         left = `calc(${hRightPos})`;
        //         break;
        //     case 'bottomLeft':
        //         top = calcVPos(0, totH, 1, 11);
        //         right = `calc(${hLeftPos})`;
        //         break;
        //     case 'bottomCenter':
        //         top = calcVPos(0, totH, 1, 11);
        //         break;
        //     case 'bottomRight':
        //         top = calcVPos(0, totH, 1, 11);
        //         left = `calc(${hRightPos})`;
        //         break;
        //     case 'leftTop':
        //         top = calcTopPos(firstH, null);
        //         left = '8px';
        //         break;
        //     case 'leftCenter':
        //         top = calcTopPos(totH, null);
        //         left = '8px';
        //         break;
        //     case 'leftBottom':
        //         top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
        //         left = '8px';
        //         break;
        //     case 'rightTop':
        //         right = '8px';
        //         top = calcTopPos(firstH, null);
        //         break;
        //     case 'rightCenter':
        //         right = '8px';
        //         top = calcTopPos(totH, null);
        //         break;
        //     case 'rightBottom':
        //         right = '8px';
        //         top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
        //         break;
        //     default:
        //         left = '';
        //         top = '8px';
        //         break;
        // }

        let textBoxWidth = width;

        if (textBoxWidth !== 'auto') {
            textBoxWidth = Number(width.slice(0, -2));
            if (moveLeft > 0) textBoxWidth += moveLeft;
            if (moveRight > 0) textBoxWidth += moveRight;
        }


        const boxStyle = {
            left,
            right,
            top,
            width: textBoxWidth,
            borderRadius
        }

        const showShadow = flat ? 'tpNoShadow' : 'tpShadow';
        const alertStyle = alert ? 'rct-alert' : null;
        const rgb = alert || 'rgb(248, 109, 109)';
        const boxShadow = alert ?
            `0 0 0 ${rgb.slice(0, rgb.length - 1)}, 0.4)` : null;
        const noNeg = number => number > 0 ? number : 0;

        return (
            <div
                className={`wrapper ${alertStyle}`}
                style={{
                    ...boxStyle,
                    position: 'absolute',
                    boxShadow,
                    padding: `${moveDown}px ${moveLeft}px ${moveUp}px ${moveRight}px`
                }}
            >
                <div
                    className={`tpShadowDiv ${showShadow}`}
                    style={{
                        zIndex: zIndex || '100',
                        borderRadius,
                        height: `calc(100% - ${noNeg(moveDown) + noNeg(moveUp)}px)`,
                        width: `calc(100% - ${noNeg(moveLeft) + noNeg(moveRight)}px)`
                    }} />
                <div
                    className={`tpTextBox`}
                    onMouseLeave={this.unsetHover}
                    style={{
                        zIndex: zIndex + 2 || '102',
                        backgroundColor,
                        borderRadius
                    }}>
                    <div
                        className={!tpStatic ? 'tpHover' : null}
                        style={{
                            borderRadius,
                            overflow: 'hidden'
                        }}>
                        {adjChildren}
                    </div>
                </div>
            </div>
        );
    }
}

export default TextBox;