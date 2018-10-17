import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Tooltip from '../lib/Tooltip/Tooltip/Tooltip';
import Arrow from '../lib/Tooltip/Arrow/Arrow';
import TextBox from '../lib/Tooltip/TextBox/TextBox';

// import styled from 'styled-components';
// import 'jest-styled-components';

let wrapper;
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

const settings = {
    backgroundColor: 'white',
    color: 'black',
    padding: '15px 20px'
}

describe('SHALLOW component testing', () => {
    describe('DEFAULT SINGLE', () => {
        beforeEach(() => {
            wrapper = shallow(defaultSingleTooltip);
            // console.log('shallow', wrapper);
        });
        it('renders arrow', () => {
            expect(wrapper.find(Arrow).length).toEqual(1);
        });
        it('renders textBox', () => {
            expect(wrapper.find(TextBox).length).toEqual(1);
        });
    });

    describe('DEFAULT MULTIPLE', () => {
        beforeEach(() => {
            wrapper = shallow(defaultMultipleTooltip);
        });
        it('renders arrow', () => {
            expect(wrapper.find(Arrow).length).toEqual(1);
        });
        it('renders textBox', () => {
            expect(wrapper.find(TextBox).length).toEqual(1);
        });
    });
});


describe('DEEP component testing', () => {
    afterEach(() => {
        wrapper.unmount();
    });
    describe('DEFAULT SINGLE', () => {
        beforeEach(() => {
            wrapper = mount(defaultSingleTooltip);
        });
        it('renders span', () => {
            expect(wrapper.find('span').length).toEqual(1);
        })
        it('renders correct span style', () => {
            const { backgroundColor, padding } = settings;
            expect(wrapper.find('span').prop('style'))
                .toHaveProperty('padding', padding)
            expect(wrapper.find('span').prop('style'))
                .toHaveProperty('backgroundColor', backgroundColor);
        })
        it('renders correct arrow style', () => {
            expect(wrapper.find('tpArrow')).toHaveStyle('top', '0px');
        })
    });

    describe('DEFAULT MULTIPLE', () => {
        beforeEach(() => {
            wrapper = mount(defaultMultipleTooltip);
        });
        it('renders all spans', () => {
            expect(wrapper.find('span').length).toEqual(3);
        })
    });

});



