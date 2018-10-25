import React, { Component } from 'react';
import Animation from './Animation';
import AlertExample from './Types/Example';
import Types from './Types';
import Colors from './Colors';
import AlignPositions from './Positions/Align';
import ArrowPositions from './Positions/Arrow';

class Examples extends Component {


    render() {
        return (
            <>
                <h1>Examples</h1>
                <h2 id='types'>Tooltip Types</h2>
                <div className='greyBkgr' style={{ display: 'flex', justifyContent: 'center', padding: '25px 0 135px 0' }}>
                    <Types />
                </div>
                <AlertExample />
                <h2 id='animations'>Animations</h2>
                <div className='FlexContainer'>
                    <Animation />
                </div>
                <h2 id='colors'>Colors / Shapes</h2>
                <div className='flexContainer themes'>
                    <Colors />
                </div>
                <h2 id='positions'>Positions</h2>
                <h3>1) Arrow positions (via arrow prop)</h3>
                <div className='FlexContainer'>
                    <ArrowPositions />
                </div>
                <h3>2) Tooltip align positions (via align prop)</h3>
                <div className='FlexContainer'>
                    <AlignPositions />
                </div>
                <h3>3) Position adjustments (via moveDown / moveRight prop)</h3>
            </>
        );
    }
}

export default Examples;