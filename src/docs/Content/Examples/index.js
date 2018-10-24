import React, { Component } from 'react';
import Animation from './Animation';
import Alert from './Types/Alert';
import Static from './Types/Static';
import Default from './Types/Default';
import Colors from './Colors';
import AlignPositions from './Positions/Align';
import ArrowPositions from './Positions/Arrow';

class Examples extends Component {


    render() {
        return (
            <>
                <h1>Examples</h1>
                <h2 id='types'>Tooltip Types</h2>
                <div style={{ width: '95%', margin: 'auto' }}>
                    <h3>1) <strong>Hover</strong> tooltips (hover enabled) (default)</h3>
                    <Default />
                    <h3>2) <strong>Static</strong> tooltips (hover disabled) (via static prop)</h3>
                    <Static />
                    <h3>3) <strong>Alert</strong> tooltips (via alert prop)</h3>
                    <Alert />
                </div>
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
                <div className='FlexContainer'>
                </div>

            </>
        );
    }
}

export default Examples;