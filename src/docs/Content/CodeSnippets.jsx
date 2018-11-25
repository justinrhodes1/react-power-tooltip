const codeInstallNpm = '$ npm install react-power-tooltip --save';
const codeInstallCss = '<link rel="stylesheet" href="unpkg.com/react-power-tooltip/style.css" />';
const codeBasicComp = `class Example extends Component {
    state = {
        show: false
    }

    showTooltip = bool => {
        this.setState({ show: bool })
    }

    render() {
        return (
            {/* Target element position needs to be RELATIVE */}
            <div 
                style={{ position: 'relative' }}
                mouseOver={() => this.showTooltip(true)} 
                mouseLeave={() => this.showTooltip(false)}>
                
                {/* ADD TOOLTIP HERE */}

            </div>
        );
    }
}
export default Example;`;

const codeBasicTp = `{/* Add options/text via span elements */}
<Tooltip show={this.state.show}>
    <span>Some text</span>
</Tooltip>`;

const codeStatic = `{/* Static */}
<Tooltip
    show={true}
    static>
    <span>Some text</span>
</Tooltip>`;

const codeAlert = `{/* Alert */}
<Tooltip
    show={true}
    alert="rgb(255, 0, 0)">
    <span>Some text</span>
</Tooltip>`;

const codeStaticAlert = `{/* Static & Alert */}
<Tooltip
    show={true}
    alert="rgb(255, 0, 0)"
    static>
    <span>Some text</span>
</Tooltip>`;

const codeFade = `{/* Fade */}
<Tooltip
    show={true}
    animation="fade">
    <span>Some text</span>
</Tooltip>`;

const codeFadeUpDown = `{/* FadeUpDown */}
<Tooltip
    show={true}
    animation="fadeUpDown">
    <span>Some text</span>
</Tooltip>`;

const codeBounce = `{/* Bounce */}
<Tooltip
    show={true}
    animation="bounce">
    <span>Some text</span>
</Tooltip>`;

const codeAlign = `{/* Positions tooltip central on the left side of the target element */}
<Tooltip
    show={true}
    position="left center"
>
    <span>Some text</span>
</Tooltip>`;

const codeDefault = `{/* Default */}
<Tooltip 
    show={true}
>
    <span>Some text</span>
</Tooltip>`;

const codeFont = `{/* Text & Font */}
<Tooltip 
    show={true}
    textAlign="center"
    fontWeight="normal"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeCorners = `{/* Corners & Lines */}
<Tooltip 
    show={true}
    borderRadius="0px"
    lineSeparated="3px solid #ececec"
>
    <span>Some text</span>
</Tooltip>`;

const codeHover = `{/* Hover color */}
<Tooltip 
    show={true}
    hoverColor="white"
    hoverBackground="#3b0586"
    lineSeparated="1px solid purple"
>
    <span>Some text</span>
</Tooltip>`;

const codeBackground = `{/* Hover color */}
<Tooltip 
    show={true}
    color="white"
    background="#181818"
>
    <span>Some text</span>
</Tooltip>`;

const codeFlat = `{/* Hover color */}
<Tooltip 
    show={true}
    color="white"
    hoverBackground="#3b0586"
    background="#444444"
    flat
>
    <span>Some text</span>
</Tooltip>`;

const codeTop = `{/* Arrow top */}
<Tooltip 
    show={true}
    arrowAlign="start"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeCenterV = `{/* Arrow center */}
<Tooltip 
    show={true}
    arrowAlign="center"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeBottom = `{/* Arrow bottom */}
<Tooltip 
    show={true}
    arrowAlign="end"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeLeft = `{/* Arrow left */}
<Tooltip 
    show={true}
    arrowAlign="start"
    position="bottom center"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeRight = `{/* Arrow right */}
<Tooltip 
    show={true}
    arrowAlign="end"
    position="bottom center"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeCenterH = `{/* Arrow center */}
<Tooltip 
    show={true}
    arrowAlign="center"
    position="bottom center"
    lineSeparated
>
    <span>Some text</span>
</Tooltip>`;

const codeMoveUpNeg = `{/* Move down into target */}
<Tooltip 
    show={true}
    arrowAlign="center"
    position="bottom center"
    moveUp="-130px"
>
    <span>Some text</span>
</Tooltip>`;

const codeMoveLeftNeg = `{/* Move right into target */}
<Tooltip 
    show={true}
    arrowAlign="center"
    position="right center"
    moveLeft="-200px"
>
    <span>Some text</span>
</Tooltip>`;

const codeMoveUp = `{/* Move up out of target */}
<Tooltip 
    show={true}
    arrowAlign="center"
    position="bottom center"
    moveUp="40px"
>
    <span>Some text</span>
</Tooltip>`;

const codeMoveLeft = `{/* Move left out of target */}
<Tooltip 
    show={true}
    arrowAlign="center"
    position="right center"
    moveLeft="40px"
>
    <span>Some text</span>
</Tooltip>`;

export {
  codeStatic,
  codeAlert,
  codeStaticAlert,
  codeFade,
  codeFadeUpDown,
  codeBounce,
  codeAlign,
  codeDefault,
  codeFont,
  codeCorners,
  codeHover,
  codeBackground,
  codeFlat,
  codeTop,
  codeCenterV,
  codeBottom,
  codeLeft,
  codeCenterH,
  codeRight,
  codeMoveUpNeg,
  codeMoveLeftNeg,
  codeMoveUp,
  codeMoveLeft,
  codeInstallCss,
  codeInstallNpm,
  codeBasicComp,
  codeBasicTp
};
