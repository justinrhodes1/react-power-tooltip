import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
    state = {
        hoverIndex: null,
        firstSpanH: null,
        lastSpanH: null,
        totHeight: null
    }

    //Set & unset hover state
    setHoverIndex = index => {
        this.setState({ hoverIndex: index });
    }
    unSetHoverIndex = () => {
        this.setState({ hoverIndex: null });
    }

    componentDidMount() {
        const firstSpanH = this.spanHeights.span1.clientHeight;
        const heightArray = Object.keys(this.spanHeights).map(key => {
            return this.spanHeights[key].clientHeight
        })
        const lastSpanH = heightArray[heightArray.length - 1];
        const totHeight = heightArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue
            , 0);
        this.setState({ totHeight, firstSpanH, lastSpanH });
    }

    render() {

        const {
            arrow,
            tooltip,
            static: tpStatic,
            textAlign,
            textBoxWidth: width,
            moveRight,
            lineSeparated,
            backgroundColor,
            color,
            padding,
            borderRadius,
            hoverBackground,
            hoverColor,
            pulse,
            flat,
            children
        } = this.props;

        const {
            hoverIndex,
            totHeight,
            firstSpanH,
            lastSpanH
        } = this.state

        let spanStyle = {
            color,
            backgroundColor,
            padding,
            textAlign
        }

        let calcHPos = (perc, divider, adjMove, multiFactor) => {
            return `calc(${perc}% - (${multiFactor || 1}*${width})/${divider} + ${moveRight} + ${adjMove || 0}px)`
        }

        let calcVPos = (perc, elHeight, divider, adjMove, totHeight) => {
            return `calc(${perc}% - ${totHeight || 0}px - ${elHeight}px/${divider} + ${adjMove || 0}px)`
        }

        let calcPerc = (center, left, right) => {
            return tooltip.center ? center : tooltip.left ? left : right;
        }

        const numberChildren = React.Children.count(children);
        const lastChildIndex = numberChildren - 1;
        this.spanHeights = {}

        let adjChildren = React.Children.map(children, (child, index) => {
            let style = { ...spanStyle };
            if (!tpStatic && hoverIndex === index) {
                style = {
                    ...style,
                    color: hoverColor,
                    backgroundColor: hoverBackground
                }
            }
            if (lineSeparated && lastChildIndex !== index) {
                style = {
                    ...style,
                    borderBottom: '1px solid #ececec'
                }
            }
            if (!tpStatic
                && hoverIndex === 0
                && (arrow.top
                    || arrow.leftTop
                    || arrow.rightTop
                )) {
                this.props.hoverArrow();
            } else if (!tpStatic
                && hoverIndex === lastChildIndex
                && (arrow.bottom
                    || arrow.leftBottom
                    || arrow.rightBottom
                )) {
                this.props.hoverArrow();
            } else {
                this.props.unHoverArrow();
            }

            let ref = null;
            ref = span => this.spanHeights[`span${index + 1}`] = span;

            const childProps = {
                ...child.props,
                ref,
                style,
                onMouseOver: () => this.setHoverIndex(index)
            };
            return React.cloneElement(child, childProps);
        });

        let left = '8px';
        let top = '8px';
        let perc = calcPerc(50, 0, 100);

        switch (arrow.position) {
            case 'topLeft':
                left = calcHPos(perc, 4);
                break;
            case 'topCenter':
                left = calcHPos(perc, 2, 5);
                break;
            case 'topRight':
                left = calc(perc, 4, null, 3);
                break;
            case 'bottomLeft':
                top = calcVPos(0, totHeight, 1, 11);
                left = calcHPos(perc, 4);
                break;
            case 'bottomCenter':
                top = calcVPos(0, totHeight, 1, 11)
                left = calcHPos(perc, 2, 5);
                break;
            case 'bottomRight':
                top = calcVPos(0, totHeight, 1, 11)
                left = calcHPos(perc, 4, null, 3);
                break;
            case 'leftTop':
                top = calcVPos(0, firstSpanH, 2, 8);
                if (tooltip.center) {
                    top = calcVPos(50, firstSpanH, 2);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, firstSpanH, 2, -8);
                }
                break;
            case 'leftCenter':
                top = calcVPos(0, totHeight, 2, 8);
                if (tooltip.center) {
                    top = calcVPos(50, totHeight, 2);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, totHeight, 2, -8);
                }
                break;
            case 'leftBottom':
                top = calcVPos(0, -lastSpanH, 2, 12, totHeight);
                if (tooltip.center) {
                    top = calcVPos(50, -lastSpanH, 2, null, totHeight);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, -lastSpanH, 2, -8, totHeight);
                }
                break;
            case 'rightTop':
                left = '-8px';
                top = calcVPos(0, firstSpanH, 2, 8);
                if (tooltip.center) {
                    top = calcVPos(50, firstSpanH, 2);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, firstSpanH, 2, -8);
                }
                break;
            case 'rightCenter':
                left = '-8px';
                top = calcVPos(0, totHeight, 2, 8);
                if (tooltip.center) {
                    top = calcVPos(50, totHeight, 2);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, totHeight, 2);
                }
                break;
            case 'rightBottom':
                left = '-8px';
                top = calcVPos(0, -lastSpanH, 2, 8, totHeight);
                if (tooltip.center) {
                    top = calcVPos(50, -lastSpanH, 2, null, totHeight);
                } else if (tooltip.bottom) {
                    top = calcVPos(100, -lastSpanH, 2, -8, totHeight);
                }
                break;
            default:
                left = '';
                top = '';
                break;
        }

        let theme = flat ? 'tpNoShadow' : 'tpShadow';

        let classes = [theme];
        if (pulse) classes.push('tpPulse');

        let boxStyle = {
            left,
            top,
            width,
            borderRadius,
            backgroundColor
        }

        return (
            <>
                <div
                    className={classes.join(' ')}
                    style={{
                        ...boxStyle,
                        zIndex: this.props.zIndex || '100',
                        height: `calc(${totHeight}px + ${lineSeparated ? numberChildren - 2 : -1}px)`
                    }} />
                <div
                    className={'tpTooltip'}
                    style={{
                        ...boxStyle,
                        zIndex: this.props.zIndex + 2 || '102',
                    }}>
                    <div
                        className={!tpStatic ? 'tpHover' : null}
                        style={{
                            borderRadius,
                            overflow: 'hidden',
                        }}>
                        {adjChildren}
                    </div>
                </div>
            </>
        );
    }
}

export default TextBox;