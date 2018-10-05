import React, { Component } from 'react';
import './TextBox.css';

class TextBox extends Component {
    state = {
        hoverIndex: null,
        firstSpanHeight: null,
        lastSpanHeight: null,
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
        const firstSpanHeight = this.spanHeights.span1.clientHeight;
        const heightArray = Object.keys(this.spanHeights).map(key => {
            return this.spanHeights[key].clientHeight
        })
        const lastSpanHeight = heightArray[heightArray.length - 1];
        const totHeight = heightArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue
            , 0);
        this.setState({ totHeight });
        this.setState({ firstSpanHeight });
        this.setState({ lastSpanHeight });
    }

    render() {
        // conditionally assigning static styling
        let containerStyle = 'tpHoverContainer';
        if (this.props.static)
            containerStyle = 'tpStaticContainer';

        this.spanHeights = {}

        let numberChildren = React.Children.count(this.props.children);
        let lastChildIndex = numberChildren - 1;
        // console.log('lastChildIndex', lastChildIndex);

        let adjChildren = React.Children.map(this.props.children, (child, index) => {
            let style = {
                color: this.props.Color || null,
                fontFamily: this.props.fontFamily || null,
                fontWeight: this.props.fontWeight || 'bold',
                backgroundColor: this.props.BackgroundColor || 'white',
                padding: this.props.Padding || '15px 20px',
                textAlign: this.props.TextAlign || 'left'
            };

            if (!this.props.static && this.state.hoverIndex === index) {
                style = {
                    ...style,
                    color: this.props.HoverColor || 'black',
                    backgroundColor: this.props.HoverBackground || '#93fff7'
                }
            }

            if (this.props.lineSeparated && lastChildIndex !== index) {
                style = {
                    ...style,
                    borderBottom: '1px solid #ececec'
                }
            }

            if (!this.props.static
                && this.state.hoverIndex === 0
                && (this.props.ArrowPosition === 'topCenter'
                    || this.props.ArrowPosition === 'topLeft'
                    || this.props.ArrowPosition === 'topRight'
                    || this.props.ArrowPosition === 'leftTop'
                    || this.props.ArrowPosition === 'rightTop'
                )) {
                this.props.hoverArrow();
            } else if (!this.props.static
                && this.state.hoverIndex === lastChildIndex
                && (this.props.ArrowPosition === 'bottomCenter'
                    || this.props.ArrowPosition === 'bottomLeft'
                    || this.props.ArrowPosition === 'bottomRight'
                    || this.props.ArrowPosition === 'leftBottom'
                    || this.props.ArrowPosition === 'rightBottom'
                )) {
                this.props.hoverArrow();
            } else {
                this.props.unHoverArrow();
            }

            let ref = null;

            // if (index === 1) ref = firstSpan => this.firstSpan = firstSpan;
            ref = span => this.spanHeights[`span${index + 1}`] = span;

            const childProps = {
                ...child.props,
                ref: ref,
                style: style,
                onMouseOver: () => this.setHoverIndex(index)
            };
            return React.cloneElement(child, childProps);
        });

        let left = '';
        let top = '';
        if (this.props.ArrowPosition === 'topLeft') {
            left = `calc(50% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            top = '8px';
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            }

        } else if (this.props.ArrowPosition === 'topCenter') {
            left = `calc(50% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            top = '8px';
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            }

        } else if (this.props.ArrowPosition === 'topRight') {
            left = `calc(50% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            top = '8px';
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            }

        } else if (this.props.ArrowPosition === 'bottomLeft') {
            left = `calc(50% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            top = `calc(-${this.state.totHeight}px + 11px)`;
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - ${this.props.TextBoxWidth || '150px'}/4 + ${this.props.moveRight})`;
            }

        } else if (this.props.ArrowPosition === 'bottomCenter') {
            left = `calc(50% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            top = `calc(-${this.state.totHeight}px + 11px)`;
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - ${this.props.TextBoxWidth || '150px'}/2 + ${this.props.moveRight}) + 5px`;
            }

        } else if (this.props.ArrowPosition === 'bottomRight') {
            left = `calc(50% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            top = `calc(-${this.state.totHeight}px + 11px)`;
            if (this.props.TooltipPosition === 'left') {
                left = `calc(0% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            } else if (this.props.TooltipPosition === 'right') {
                left = `calc(100% - (3*${this.props.TextBoxWidth || '150px'})/4 + ${this.props.moveRight})`;
            }

        } else if (this.props.ArrowPosition === 'leftTop') {
            left = '8px';
            top = `calc(-${this.state.firstSpanHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.firstSpanHeight}px/2)`;;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.firstSpanHeight}px/2 - 8px)`;
            }

        } else if (this.props.ArrowPosition === 'leftCenter') {
            left = '8px';
            top = `calc(-${this.state.totHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.totHeight}px/2)`;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.totHeight}px/2 - 8px)`;
            }

        } else if (this.props.ArrowPosition === 'leftBottom') {
            left = '8px';
            top = `calc(-${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2)`;;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2 - 8px)`;
            }

        } else if (this.props.ArrowPosition === 'rightTop') {
            left = '-8px';
            top = `calc(-${this.state.firstSpanHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.firstSpanHeight}px/2)`;;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.firstSpanHeight}px/2 - 8px)`;
            }

        } else if (this.props.ArrowPosition === 'rightCenter') {
            left = '-8px';
            top = `calc(-${this.state.totHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.totHeight}px/2)`;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.totHeight}px/2)`;
            }

        } else if (this.props.ArrowPosition === 'rightBottom') {
            left = '-8px';
            top = `calc(-${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2 + 8px)`;
            if (this.props.TooltipPosition === 'center') {
                top = `calc(50% - ${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2)`;;
            } else if (this.props.TooltipPosition === 'bottom') {
                top = `calc(100% - ${this.state.totHeight}px + ${this.state.lastSpanHeight}px/2 - 8px)`;
            }
        }

        let classes = ['tpTooltipShadow'];
        if (this.props.Pulse) classes.push('tpPulse');

        return (
            <>
                <div
                    className={classes.join(' ')}
                    style={{
                        backgroundColor: this.props.BackgroundColor || 'white',
                        width: this.props.TextBoxWidth || '150px',
                        height: `calc(${this.state.totHeight}px + ${this.props.lineSeparated ? numberChildren - 2 : -1}px)`,
                        borderRadius: this.props.borderRadius || '5px',
                        left: left,
                        top: top,
                        zIndex: this.props.zIndex || '100'
                    }} />
                <div
                    className={'tpTooltip'}
                    style={{
                        backgroundColor: this.props.BackgroundColor || 'white',
                        width: this.props.TextBoxWidth || '150px',
                        borderRadius: this.props.borderRadius || '5px',
                        left: left,
                        top: top,
                        zIndex: this.props.zIndex || '102'
                    }}>
                    <div className={containerStyle} style={{ borderRadius: this.props.borderRadius || '5px' }}>
                        {adjChildren}
                    </div>
                </div>
            </>
        );
    }
}

export default TextBox;