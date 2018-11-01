import React, { Component } from 'react';
import Animation from './Animation';
import Types from './Types';
import Alert from './Types/Alert';
import Colors from './Customization/Colors';
import Shapes from './Customization/Shapes';
import AlignPositions from './Positions/Align';
import ArrowVPos from './Positions/ArrowVPos';
import ArrowHPos from './Positions/ArrowHPos';
import AdjustmentInner from './Positions/AdjPosIn';
import AdjustmentOuter from './Positions/AdjPosOut';
import ShowCode from '../../ShowCode/ShowCode';
import {
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
    codeMoveLeft
} from '../CodeExamples/CodeExamples';

class Examples extends Component {
    render() {
        return (
            <>
                <h1>Examples</h1>
                <h2 id='types'>Types of tooltips</h2>
                <div className='FlexContainer greyBkgr'
                    style={{
                        padding: '25px 0 135px 0'
                    }}
                >
                    <Types />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeStatic}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeAlert}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeStaticAlert}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <Alert />
                <h2 id='animations'>Animations</h2>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '60px'
                    }}
                >
                    <Animation />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeFade}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeFadeUpDown}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeBounce}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <h2 id='customization'>Customization</h2>
                <div className='FlexContainer greyBkgr colors'
                    style={{
                        paddingBottom: '80px'
                    }}>
                    <Shapes />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeDefault}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeFont}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeCorners}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <div className='FlexContainer greyBkgr colors'
                    style={{
                        paddingBottom: '80px',
                        marginTop: '30px'
                    }}>
                    <Colors />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeHover}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeBackground}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeFlat}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <h2 id='positions'>Positions</h2>
                <h3>1) <strong>Arrow positions</strong> relative to textbox (via arrow prop)</h3>
                <div
                    className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '80px'
                    }}
                >
                    <ArrowVPos />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeBottom}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeCenterV}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeTop}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '140px',
                        marginTop: '30px'
                    }}
                >
                    <ArrowHPos />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeLeft}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeCenterH}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeRight}
                                </code>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <h3>2) <strong>Tooltip positions</strong> relative to target element (via position prop)</h3>
                <p>The position prop positions the tooltip relative to target element. It consists of a string with
                    two positions:
                </p>
                <ol style={{ listStyleType: 'disc', lineHeight: '1.5' }}>
                    <li><strong>First </strong>position: determins<strong> on which side </strong>
                        of the target element to position the tooltip. </li>
                    <li><strong>Second </strong>position: determins<strong> how to align </strong>
                        the tooltip on that side.</li>
                </ol>
                <pre>
                    <code className='language-jsx'>
                        {codeAlign}
                    </code>
                </pre>
                <div className='FlexContainer greyBkgr'
                    style={{
                        padding: '50px'
                    }}
                >
                    <span> <AlignPositions /></span>
                </div>
                <h3>3) <strong>Adjusting</strong> positions (via move props)</h3>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '50px'
                    }}
                >
                    <AdjustmentInner />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeMoveUpNeg}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeMoveLeftNeg}
                                </code>
                            </pre>
                            <pre>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '140px',
                        marginTop: '30px'
                    }}
                >
                    <AdjustmentOuter />
                </div>
                <ShowCode>
                    <div className='codeRow'>
                        <div>
                            <pre>
                                <code className='language-jsx'>
                                    {codeMoveUp}
                                </code>
                            </pre>
                            <pre>
                                <code className='language-jsx'>
                                    {codeMoveLeft}
                                </code>
                            </pre>
                            <pre>
                            </pre>
                        </div>
                    </div>
                </ShowCode>
            </>
        );
    }
}

export default Examples;
