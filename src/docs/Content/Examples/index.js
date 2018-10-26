import React, { Component } from 'react';
import Animation from './Animation';
import AnimationExample from './Animation/Example';
import AlertExample from './Types/Example';
import Types from './Types';
import Colors from './Customization/Colors';
import Shapes from './Customization/Shapes';
import AlignPositions from './Positions/Align';
import ArrowVPos from './Positions/ArrowVPos';
import ArrowHPos from './Positions/ArrowHPos';
import Adjustment from './Positions/Adjustment';

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
                <AlertExample />
                <h2 id='animations'>Animations</h2>
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '60px'
                    }}
                >
                    <Animation />
                </div>
                {/* <AnimationExample /> */}
                <h2 id='customization'>Customization</h2>
                <div className='FlexContainer greyBkgr colors'
                    style={{
                        paddingBottom: '80px',
                        marginBottom: '50px'
                    }}>
                    <Shapes />
                </div>
                <div className='FlexContainer greyBkgr colors'
                    style={{
                        paddingBottom: '80px',
                        marginBottom: '50px'
                    }}>
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
                <div className='FlexContainer greyBkgr'
                    style={{
                        paddingBottom: '140px'
                    }}
                >
                    <Adjustment />
                </div>
            </>
        );
    }
}

export default Examples;