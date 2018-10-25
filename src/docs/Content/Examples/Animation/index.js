import React from 'react';

import Animations1 from './Animations1';
import Animations2 from './Animations2';
import Animations3 from './Animations3';

const Animation = () => {
    return (
        <div className='row' style={{ width: '80%', justifyContent: 'space-around' }}>
            <Animations1 />
            <Animations2 />
            <Animations3 />
        </div>
    );
};

export default Animation;