import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
    state = {
        hoverIndex: null,
        firstH: null,
        lastH: null,
        totH: null
    }

    //Set & unset hover state
    setHoverIndex = index => {
        this.setState({ hoverIndex: index });
    }
    unSetHoverIndex = () => {
        this.setState({ hoverIndex: null });
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
            pulse,
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
        const lastChildIndex = numberChildren - 1;
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
            if (lineSeparated && lastChildIndex !== index) {
                style = {
                    ...style,
                    borderBottom: '1px solid #ececec'
                }
            }
            if (!tpStatic
                && hoverIndex === 0
                && (arrow.side('top') || arrow.is('leftTop') || arrow.is('rightTop'))) {
                this.props.hoverArrow();
            } else if (!tpStatic
                && hoverIndex === lastChildIndex
                && (arrow.side('bottom') || arrow.is('leftBottom') || arrow.is('rightBottom'))) {
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
                top = calcVPos(0, totH, 1, 11);
                left = calcHPos(perc, 4);
                break;
            case 'bottomCenter':
                top = calcVPos(0, totH, 1, 11)
                left = calcHPos(perc, 2, 5);
                break;
            case 'bottomRight':
                top = calcVPos(0, totH, 1, 11)
                left = calcHPos(perc, 4, null, 3);
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
                left = '-8px';
                top = calcTopPos(firstH, null);
                break;
            case 'rightCenter':
                left = '-8px';
                top = calcTopPos(totH, null);
                break;
            case 'rightBottom':
                left = '-8px';
                top = calcTopPos(lineSeparated ? -lastH + 1 : -lastH, totH);
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
            borderRadius
        }

        return (
            <>
                <div
                    className={classes.join(' ')}
                    style={{
                        ...boxStyle,
                        zIndex: zIndex || '100',
                        height: `calc(${totH}px - 1px)`
                    }} />
                <div
                    className={'tpTextBox'}
                    style={{
                        ...boxStyle,
                        zIndex: zIndex + 2 || '102',
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
            </>
        );
    }
}

export default TextBox;