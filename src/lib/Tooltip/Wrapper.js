import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Tooltip from './Layout/Layout';
import './Wrapper.css';

const TransitionWrapper = ({ show, animation = 'tpFade', ...rest }) => {
    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames={animation}
            unmountOnExit
        >
            <Tooltip {...rest} />
        </CSSTransition>
    );
};

export default TransitionWrapper;