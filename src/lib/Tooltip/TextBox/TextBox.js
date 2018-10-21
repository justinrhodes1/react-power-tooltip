import React, { Component } from 'react';
import './textBox.css';

class TextBox extends Component {
    state = {
        hoverIndex: null,
        firstH: null,
        lastH: null,
        totH: null
    }

    //Set & unset hover state
    onSpanHover = (index, lastIndex) => {
        this.setState({ hoverIndex: index });
        const { static: tpStatic, arrow, hoverArrow } = this.props;
        if (!tpStatic
            && ((index === 0
                && (arrow.side('top') || arrow.is('leftTop') || arrow.is('rightTop')))
                || (index === lastIndex
                    && (arrow.side('bottom') || arrow.is('leftBottom') || arrow.is('rightBottom'))))) {
            return hoverArrow(true);
        }
        return hoverArrow(false);
    }

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
            align,
            static: tpStatic,
            textBoxWidth: width,
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
        } = this.state

        const calcHPos = (perc, divider, adjMove, multiFactor) => {
            return `calc(${perc}% - (${multiFactor || 1}*${width})/${divider} + ${moveRight} + ${adjMove || 0}px)`
        }

        const calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
            return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`
        }

        const calcPerc = (center, left, right) => {
            return align.is('center') ? center : align.is('left') ? left : right;
        }

        const calcTopPos = (elHeight, totHeight) => {
            if (align.is('center')) {
                return calcVPos(50, elHeight, 2, null, totHeight);
            } else if (align.is('bottom')) {
                return calcVPos(100, elHeight, 2, -12, totHeight);
            }
            return calcVPos(0, elHeight, 2, 12, totHeight);
        }

        const numberChildren = React.Children.count(children);
        const lastIndex = numberChildren - 1;
        this.spanHeights = {}

        let adjChildren = React.Children.map(children, (child, index) => {
            let style = {
                backgroundColor,
                padding
            };
            if (!tpStatic && hoverIndex === index) {
                style = {
                    ...style,
                    color: hoverColor,
                    backgroundColor: hoverBackground
                }
            }
            if (lineSeparated && lastIndex !== index) {
                style = {
                    ...style,
                    borderBottom: '1px solid #ececec'
                }
            }

            let ref = null;
            ref = span => this.spanHeights[`span${index + 1}`] = span;

            const childProps = {
                ...child.props,
                ref,
                style,
                onMouseOver: () => this.onSpanHover(index, lastIndex)
            };
            return React.cloneElement(child, childProps);
        });

        let left = '8px';
        let right = '';
        let top = '8px';
        let perc = calcPerc(50, 0, 100); //center, left, right

        switch (arrow.position) {
            case 'topLeft':
                left = '';
                if (align.is('right')) right = 'calc(0% - 30px)';
                if (align.is('center')) right = 'calc(50% - 40px)';
                if (align.is('left')) right = 'calc(100% - 50px)';
                break;
            case 'topCenter':
                left = '';
                break;
            case 'topRight':
                if (align.is('left')) left = 'calc(0% - 30px)';
                if (align.is('center')) left = 'calc(50% - 40px)';
                if (align.is('right')) left = 'calc(100% - 50px)';
                break;
            case 'bottomLeft':
                top = calcVPos(0, totH, 1, 11);
                left = '';
                if (align.is('right')) right = 'calc(0% - 30px)';
                if (align.is('center')) right = 'calc(50% - 40px)';
                if (align.is('left')) right = 'calc(100% - 50px)';
                break;
            case 'bottomCenter':
                top = calcVPos(0, totH, 1, 11);
                left = '';
                break;
            case 'bottomRight':
                top = calcVPos(0, totH, 1, 11)
                if (align.is('left')) left = 'calc(0% - 30px)';
                if (align.is('center')) left = 'calc(50% - 40px)';
                if (align.is('right')) left = 'calc(100% - 50px)';
                break;
            case 'leftTop':
                top = calcTopPos(firstH, null);
                break;
            case 'leftCenter':
                top = calcTopPos(totH, null);
                break;
            case 'leftBottom':
                top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
                break;
            case 'rightTop':
                left = '';
                right = '8px';
                top = calcTopPos(firstH, null);
                break;
            case 'rightCenter':
                left = '';
                right = '8px';
                top = calcTopPos(totH, null);
                break;
            case 'rightBottom':
                left = '';
                right = '8px';
                top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
                break;
            default:
                left = '';
                top = '';
                break;
        }

        const boxStyle = {
            left,
            right,
            top,
            width,
            borderRadius
        }

        const showShadow = flat ? 'tpNoShadow' : 'tpShadow';
        const alertStyle = alert ? 'rct-alert' : null;
        const rgb = alert || 'rgb(248, 109, 109)';
        const boxShadow = alert ?
            `0 0 0 ${rgb.slice(0, rgb.length - 1)}, 0.4)` : null;

        return (
            <div
                className={`wrapper ${alertStyle}`}
                style={{
                    ...boxStyle,
                    position: 'absolute',
                    boxShadow
                }}
            >
                <div
                    className={`tpShadowDiv ${showShadow}`}
                    style={{
                        zIndex: zIndex || '100',
                        borderRadius
                    }} />
                <div
                    className={`tpTextBox`}
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