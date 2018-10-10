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
            ArrowPosition: arrowPos,
            TooltipPosition: tooltipPos,
            static: tpStatic,
            borderRadius: tpRadius,
            fontFamily,
            fontWeight,
            textAlign,
            TextBoxWidth,
            moveRight,
            lineSeparated,
            BackgroundColor,
            Color,
            Padding,
            HoverBackground,
            HoverColor,
            Pulse,
            flat,
            children
        } = this.props;

        const {
            hoverIndex,
            totHeight,
            firstSpanH,
            lastSpanH
        } = this.state

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
            rightBottom: arrowPos === 'rightBottom'
        };

        const tooltip = {
            left: tooltipPos === 'left',
            right: tooltipPos === 'right',
            center: tooltipPos === 'center',
            bottom: tooltipPos === 'bottom'
        }

        let spanStyle = {
            color: Color || 'inherit',
            backgroundColor: BackgroundColor || 'white',
            fontFamily: fontFamily || 'inherit',
            fontWeight: fontWeight || 'bold',
            padding: Padding || '15px 20px',
            textAlign: textAlign || 'left'
        }

        const backgroundColor = BackgroundColor || 'white';
        const width = TextBoxWidth || '150px';
        const borderRadius = tpRadius || '5px';

        let calcHPos = (perc, divider, adjMove, multiFactor) => {
            return `calc(${perc}% - (${multiFactor || 1}*${width})/${divider} + ${moveRight} + ${adjMove || 0}px)`
        }

        let calcVPos = (perc, elementHeight, divider, adjMove, totHeight) => {
            return `calc(${perc}% - ${totHeight || 0}px - ${elementHeight}px/${divider} + ${adjMove || 0}px)`
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
                    color: HoverColor || 'black',
                    backgroundColor: HoverBackground || '#ececec'
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
                && (arrow.topCenter
                    || arrow.topLeft
                    || arrow.topRight
                    || arrow.leftTop
                    || arrow.rightTop
                )) {
                this.props.hoverArrow();
            } else if (!tpStatic
                && hoverIndex === lastChildIndex
                && (arrow.bottomCenter
                    || arrow.bottomLeft
                    || arrow.bottomRight
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

        // if (arrow.topLeft) {
        //     top = '8px';
        //     left = calcHPos(perc, 4);
        // } else if (arrow.topCenter) {
        //     top = '8px';
        //     left = calcHPos(perc, 2, 5);
        // } else if (arrow.topRight) {
        //     top = '8px';
        //     left = calc(perc, 4, null, 3);
        // } else if (arrow.bottomLeft) {
        //     top = calcVPos(0, totHeight, 1, 11);
        //     // top = `calc(0% - ${totHeight}px + 11px)`;
        //     left = calcHPos(perc, 4);
        // } else if (arrow.bottomCenter) {
        //     top = calcVPos(0, totHeight, 1, 11)
        //     // top = `calc(0% - ${totHeight}px + 11px)`;
        //     left = calcHPos(perc, 2, 5);
        // } else if (arrow.bottomRight) {
        //     top = calcVPos(0, totHeight, 1, 11)
        //     // top = `calc(0% - ${totHeight}px + 11px)`;
        //     left = calcHPos(perc, 4, null, 3);
        // } else if (arrow.leftTop) {
        //     left = '8px';
        //     top = calcVPos(0, firstSpanH, 2, 8);
        //     // top = `calc(0% - ${firstSpanH}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         top = calcVPos(50, firstSpanH, 2);
        //         // top = `calc(50% - ${firstSpanH}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, firstSpanH, 2, -8);
        //         // top = `calc(100% - ${firstSpanH}px/2 - 8px)`;
        //     }

        // } else if (arrow.leftCenter) {
        //     left = '8px';
        //     // top = calcVPos(0, totHeight, 2, 8);
        //     top = `calc(0% - ${totHeight}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         // top = calcVPos(50, totHeight, 2);
        //         top = `calc(50% - ${totHeight}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = `calc(100% - ${totHeight}px/2 - 8px)`;
        //         // top = calcVPos(100, totHeight, 2, -8);
        //     }

        // } else if (arrow.leftBottom) {
        //     left = '8px';
        //     top = `calc(0% - ${totHeight}px + ${lastSpanH}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         top = `calc(50% - ${totHeight}px + ${lastSpanH}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = `calc(100% - ${totHeight}px + ${lastSpanH}px/2 - 8px)`;
        //     }

        // } else if (arrow.rightTop) {
        //     left = '-8px';
        //     top = `calc(0% - ${firstSpanH}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         top = `calc(50% - ${firstSpanH}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = `calc(100% - ${firstSpanH}px/2 - 8px)`;
        //     }

        // } else if (arrow.rightCenter) {
        //     left = '-8px';
        //     top = `calc(0% - ${totHeight}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         top = `calc(50% - ${totHeight}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = `calc(100% - ${totHeight}px/2)`;
        //     }

        // } else if (arrow.rightBottom) {
        //     left = '-8px';
        //     top = `calc(0% - ${totHeight}px + ${lastSpanH}px/2 + 8px)`;
        //     if (tooltip.center) {
        //         top = `calc(50% - ${totHeight}px + ${lastSpanH}px/2)`;
        //     } else if (tooltip.bottom) {
        //         top = `calc(100% - ${totHeight}px + ${lastSpanH}px/2 - 8px)`;
        //     }
        // }

        // let { center, bottom } = tooltip;


        switch (arrowPos) {
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



        let theme = flat ? 'tpTooltipNoShadow' : 'tpTooltipShadow';

        let classes = [theme];
        if (Pulse) classes.push('tpPulse');

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