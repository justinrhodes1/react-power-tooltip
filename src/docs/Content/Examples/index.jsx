import React, { Component } from 'react';
import Animation from './Animation';
import Types from './Types/Types';
import Alert from './Types/Alert';
import Colors from './Customization/Colors';
import Shapes from './Customization/Shapes';
import AlignPositions from './Positions/Align';
import ArrowVPos from './Positions/ArrowVPos';
import ArrowHPos from './Positions/ArrowHPos';
import AdjustmentInner from './Positions/AdjPosIn';
import AdjustmentOuter from './Positions/AdjPosOut';
import ToggleCode from '../ToggleCode';
import {
  codeStatic,
  codeAlert,
  codeHoverable,
  codeFade,
  codeSlideUpDown,
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
  codeMoveLeft
} from '../CodeSnippets';

class Examples extends Component {
  render() {
    return (
      <>
        <h1>Examples</h1>
        <h2 id="types">Types of tooltips</h2>
        <div
          className="flexContainer greyBkgr"
          style={{
            padding: '25px 0 135px 0'
          }}
        >
          <Types />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeHoverable}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeStatic}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeAlert}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <Alert />
        <h2 id="animations">Animations</h2>
        <p style={{ lineHeight: '1.7' }}>
          <strong>Note: </strong>
          The slideUpDown animation is
          <i> not </i>
          included in this library. Check out the
          <a href="#custom-animations" style={{ fontSize: 'inherit', color: 'purple' }}> advanced section </a>
          for more info on how to add your own custom animations to this library.
        </p>
        <div
          className="flexContainer greyBkgr"
          style={{
            paddingBottom: '60px'
          }}
        >
          <Animation />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeFade}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeSlideUpDown}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeBounce}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <h2 id="customization">Customization</h2>
        <div
          className="flexContainer greyBkgr colors"
          style={{
            paddingBottom: '80px'
          }}
        >
          <Shapes />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeDefault}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeFont}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeCorners}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <div
          className="flexContainer greyBkgr colors"
          style={{
            paddingBottom: '80px',
            marginTop: '30px'
          }}
        >
          <Colors />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeHover}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeBackground}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeFlat}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <h2 id="positions">Positions</h2>
        <h3 id="arrow-align" style={{ lineHeight: '1.7', marginBottom: '10px' }}>
          1)
          <strong> Arrow align </strong>
          relative to textbox (via arrowAlign prop)
          <p style={{ lineHeight: '1.7', marginTop: '10px', fontSize: 'inherit' }}>
            The arrowAlign prop aligns the arrow
            <strong> relative to the textbox side</strong>
            :
          </p>
          <ol style={{ listStyleType: 'disc', margin: '10px' }}>
            <li style={{ cursor: 'default' }}>
              arrowAlign:
              <strong> start </strong>
              = Aligns the arrow on the textbox side either on the top or left depending on the
              tooltip position.
            </li>
            <li style={{ cursor: 'default' }}>
              arrowAlign:
              <strong> center </strong>
              = Aligns the arrow central on the textbox side.
            </li>
            <li style={{ cursor: 'default' }}>
              arrowAlign:
              <strong> end </strong>
              = Aligns the arrow on the textbox side either on the bottom or right depending on the
              tooltip position.
            </li>
          </ol>
          <strong>Note: </strong>
          This prop does NOT determine the textbox side on which the
          arrow is placed (done implicitly via the position prop).
        </h3>
        <div
          className="flexContainer greyBkgr"
          style={{
            paddingBottom: '50px'
          }}
        >
          <ArrowVPos />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeTop}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeCenterV}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeBottom}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <div
          className="flexContainer greyBkgr outer-hpos-container"
        >
          <ArrowHPos />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeLeft}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeCenterH}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeRight}
                </code>
              </pre>
            </div>
          </div>
        </ToggleCode>
        <h3 id="tooltip-positions" style={{ marginBottom: '0' }}>
          2)
          <strong> Tooltip positions </strong>
          relative to target element (via position prop)
        </h3>
        <h3 style={{ lineHeight: '1.7', marginTop: '0' }}>
          The position prop positions the tooltip
          <strong> relative to target element. </strong>
          It consists of a string with two positions:
          <ol style={{ listStyleType: 'disc', lineHeight: '1.7' }}>
            <li style={{ cursor: 'default' }}>
              <strong>First position: </strong>
              determins
              <strong> on which side </strong>
              of the target element to position the tooltip.
            </li>
            <li style={{ cursor: 'default' }}>
              <strong>Second position: </strong>
              determins
              <strong> how to align </strong>
              the tooltip on that side.
            </li>
          </ol>
          <strong>Note: </strong>
          The position prop implicitly determines on which textbox side the arrow will
          appear. To position the arrow relative to that textbox side use the arrowAlign prop.
        </h3>
        <pre>
          <code className="language-jsx">
            {codeAlign}
          </code>
        </pre>
        <div
          className="flexContainer greyBkgr tpPositionsContainer"
          style={{
            padding: '50px',
            overflow: 'scroll',
            overflowY: 'hidden'
          }}
        >
          <div className="tpPositions">
            <AlignPositions />
          </div>
        </div>
        <h3>
          3)
          <strong> Adjusting </strong>
          positions (via move props)
        </h3>
        <div
          className="flexContainer greyBkgr adjInnerContainer"
          style={{
            paddingBottom: '50px',
            overflow: 'scroll',
            overflowY: 'hidden'
          }}
        >
          <AdjustmentInner />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeMoveUpNeg}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeMoveLeftNeg}
                </code>
              </pre>
              <pre />
            </div>
          </div>
        </ToggleCode>
        <h3 style={{ lineHeight: '1.5' }}>
          Positive move prop values extend the hoverable area from the target
          to the tooltip element. This allows the selection of tooltip options
          when the target is hovered.
        </h3>
        <div
          className="flexContainer greyBkgr adjOuterContainer"
          style={{
            paddingBottom: '140px',
            overflow: 'scroll',
            overflowY: 'hidden'
          }}
        >
          <AdjustmentOuter />
        </div>
        <ToggleCode>
          <div className="codeRow">
            <div>
              <pre>
                <code className="language-jsx">
                  {codeMoveUp}
                </code>
              </pre>
              <pre>
                <code className="language-jsx">
                  {codeMoveLeft}
                </code>
              </pre>
              <pre />
            </div>
          </div>
        </ToggleCode>
      </>
    );
  }
}

export default Examples;
