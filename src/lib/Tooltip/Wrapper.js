import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Tooltip from './Component/Component';
import './Wrapper.css';

const TransitionWrapper = props => {
    return  <Tooltip {...props} />;
};

export default TransitionWrapper;