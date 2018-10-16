import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Tooltip from '../lib/Tooltip/Tooltip/Tooltip';
import Arrow from '../lib/Tooltip/Arrow/Arrow';
import TextBox from '../lib/Tooltip/TextBox/TextBox';

let wrapped;
const defaultSingleTooltip = (
    <Tooltip show={true}>
        <span>Option 1</span>
    </Tooltip>
);

const defaultMultipleTooltip = (
    <Tooltip show={true}>
        <span>Option 1</span>
        <span>Option 2</span>
        <span>Option 3</span>
    </Tooltip>
);

describe('SHALLOW component testing', () => {
    describe('DEFAULT SINGLE', () => {
        beforeEach(() => {
            wrapped = shallow(defaultSingleTooltip);
        });
        it('renders arrow', () => {
            console.log(wrapped);
            expect(wrapped.find(Arrow).length).toEqual(1);
        });
        it('renders textBox', () => {
            expect(wrapped.find(TextBox).length).toEqual(1);
        });
    });

    describe('DEFAULT MULTIPLE', () => {
        beforeEach(() => {
            wrapped = shallow(defaultMultipleTooltip);
        });
        it('renders arrow', () => {
            expect(wrapped.find(Arrow).length).toEqual(1);
        });
        it('renders textBox', () => {
            expect(wrapped.find(TextBox).length).toEqual(1);
        });
    });
});


describe('DEEP component testing', () => {
    beforeEach(() => {
        wrapped = mount(defaultSingleTooltip);
    });
    it('new test', () => {
    })
});



