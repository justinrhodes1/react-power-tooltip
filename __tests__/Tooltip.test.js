import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from '../lib';
import Arrow from '../lib/Tooltip/Arrow/Arrow';
import TextBox from '../lib/Tooltip/TextBox/TextBox';

let wrapped;
let defaultTooltip;

beforeEach(() => {
    defaultTooltip = (
        <Tooltip show={true}>
            <span>Option</span>
        </Tooltip>
    );
    wrapped = shallow(defaultTooltip);
});


it('tooltip (default) renders arrow', () => {
    expect(wrapped.find(Arrow).length).toEqual(1);
});

it('tooltip (default) renders textBox', () => {
    expect(wrapped.find(TextBox).length).toEqual(1);
});

