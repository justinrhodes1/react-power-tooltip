import React from 'react';
import { shallow, mount } from 'enzyme';

import Tooltip from '../lib/Tooltip';
import Arrow from '../lib/Tooltip/Arrow';
import TextBox from '../lib/Tooltip/TextBox';

let wrapper;

const defaultSingleTooltip = (
  <Tooltip show>
    <span>Option 1</span>
  </Tooltip>
);

const defaultMultipleTooltip = (
  <Tooltip show>
    <span>Option 1</span>
    <span>Option 2</span>
    <span>Option 3</span>
  </Tooltip>
);

const defaultSettings = {
  backgroundColor: 'white',
  hoverBackground: '#ececec',
  color: 'black',
  hoverColor: 'black',
  padding: '15px 20px',
  textAlign: 'left',
  fontWeight: 'bold'
};

const props = {
  backgroundColor: 'grey',
  color: 'blue',
  padding: '50px 60px',
  textAlign: 'center',
  fontWeight: 'normal'
};

const customSingleTooltip = (
  <Tooltip show {...props}>
    <span>Option 1</span>
  </Tooltip>
);

describe('SHALLOW component testing', () => {
  describe('DEFAULT SINGLE', () => {
    beforeEach(() => {
      // adapted to render components wrapped in HOC
      wrapper = shallow(defaultSingleTooltip).first().shallow();
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
      // adapted to render components wrapped in HOC
      wrapper = shallow(defaultMultipleTooltip).first().shallow();
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
    });
    // it('renders correct default textBox style', () => {
    // });
    it('renders correct span style', () => {
      const { backgroundColor, padding } = defaultSettings;
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('padding', padding);
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('backgroundColor', backgroundColor);
    });
    it('renders correct span hover style', () => {
      const { hoverBackground, hoverColor } = defaultSettings;
      wrapper.find('span').simulate('mouseover');
      // ensure component updates before tests
      wrapper.update();
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('backgroundColor', hoverBackground);
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('color', hoverColor);
    });
    it('renders correct arrow hover style when span hovered', () => {
      const { hoverBackground } = defaultSettings;
      wrapper.find('span').simulate('mouseover');
      // ensure component updates before tests
      wrapper.update();
      expect(wrapper.find('.rct-arrow').prop('style'))
        .toHaveProperty('backgroundColor', hoverBackground);
    });
    it('renders correct arrow style when textbox unhovered', () => {
      const { backgroundColor } = defaultSettings;
      wrapper.find('span').simulate('mouseover');
      // ensure component updates before tests
      wrapper.update();
      wrapper.find('.rct-textbox').simulate('mouseleave');
      // ensure component updates before tests
      wrapper.update();
      expect(wrapper.find('.rct-arrow').prop('style'))
        .toHaveProperty('backgroundColor', backgroundColor);
    });
    // it('renders correct arrow style', () => {
    //     expect(wrapper.find('rct-arrow')).toHaveStyle('top', '0px');
    // })
  });
  describe('DEFAULT MULTIPLE', () => {
    beforeEach(() => {
      wrapper = mount(defaultMultipleTooltip);
    });
    it('renders correct amount of spans', () => {
      expect(wrapper.find('span').length).toEqual(3);
    });
  });
  describe('CUSTOM SINGLE', () => {
    beforeEach(() => {
      wrapper = mount(customSingleTooltip);
    });
    it('renders correct custom span style', () => {
      const { backgroundColor, padding } = props;
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('padding', padding);
      expect(wrapper.find('span').prop('style'))
        .toHaveProperty('backgroundColor', backgroundColor);
    });
  });
});
