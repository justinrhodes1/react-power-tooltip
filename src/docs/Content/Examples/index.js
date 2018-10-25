import React, { Component } from 'react';
import Animation from './Animation';
import AnimationExample from './Animation/Example';
import AlertExample from './Types/Example';
import Types from './Types';
import Colors from './Colors';
import AlignPositions from './Positions/Align';
import ArrowVPos from './Positions/ArrowVPos';
import ArrowHPos from './Positions/ArrowHPos';

class Examples extends Component {


    render() {
        return (
            <>
                <h1>Examples</h1>
                <h2 id='types'>Tooltip Types</h2>
                <div className='FlexContainer greyBkgr'
                    style={{
                        padding: '25px 0 135px 0'
                    }}
                >
                    <Types />
                </div>
                <AlertExample />
                <h2 id='animations'>Animations</h2>
                <div className='FlexContainer greyBkgr'
                    style={{
                        padding: '80px 0'
                    }}
                >
                    <Animation />
                </div>
                {/* <AnimationExample /> */}
                <h2 id='colors'>Colors / Shapes</h2>
                <div className='FlexContainer greyBkgr colors'
                    style={{ padding: '30px 0 80px 0' }}>
                    <Colors />
                </div>
                <h2 id='positions'>Positions</h2>
                <h3>1) <strong>Arrow</strong> positions (via arrow prop)</h3>
                <div
                    className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '80px',
                        marginBottom: '50px'
                    }}
                >
                    <ArrowVPos />
                </div>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '140px'
                    }}
                >
                    <ArrowHPos />
                </div>
                <h3>2) <strong>Align</strong> tooltip positions (via align prop)</h3>
                <div className='FlexContainer'>
                    <AlignPositions />
                </div>
                <h3>3) Position adjustments (via moveDown / moveRight prop)</h3>
            </>
        );
    }
}

export default Examples;