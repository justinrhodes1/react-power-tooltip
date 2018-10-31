import React from 'react';

import Animations1 from './Animations1';
import Animations2 from './Animations2';
import Animations3 from './Animations3';

const Animation = () => {
    return (
        <>
            <h3 style={{ width: '95%', margin: '15px 0' }}><strong>Hover effects</strong></h3>
            <div className='row' style={{ width: '80%', justifyContent: 'space-around' }}>
                <Animations3 />
                <Animations1 />
                <Animations2 />
            </div>
        </>
    );
};

export default Animation;