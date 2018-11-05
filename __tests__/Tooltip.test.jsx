import React from 'react';
import { shallow, mount } from 'enzyme';

import Tooltip from '../src/lib/Tooltip';
import ArrowComp from '../src/lib/Tooltip/Arrow';
import TextBoxComp from '../src/lib/Tooltip/TextBox';

// Helper functions

const numClassesOf = (el) => {
  return el.prop('className').split(' ').length;
};

const setPropsAndgetRctContainer = (wrapper, str) => {
  wrapper.setProps({ position: str });
  return wrapper.find('.rct-container');
};


// TEST SETUP
let wrapper;
let span;
let arrow;
let shadowContainer;

const singleTooltip = (
  <Tooltip show>
    <span>Option 1</span>
  </Tooltip>
);

const hiddenTooltip = (
  <Tooltip show={false}>
    <span>Option 1</span>
  </Tooltip>
);

const multipleTooltip = (
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
  fontWeight: 'bold',
  arwShadow: '0 0 0 1px rgba(0,0,0,.18)'
};

const props = {
  backgroundColor: 'grey',
  color: 'blue',
  padding: '50px 60px',
  textAlign: 'center',
  fontWeight: 'normal',
  borderRadius: '0px',
  lineSeparated: '2px solid #dddddd'
};

// TODO: shallow render components & test individually
// to avoid side-effects

describe('SHALLOW component testing', () => {
  describe('DEFAULT SINGLE', () => {
    beforeEach(() => {
      // adapted to render components wrapped in HOC
      wrapper = shallow(singleTooltip).first().shallow();
    });
    it('renders arrow', () => {
      expect(wrapper.find(ArrowComp).length).toEqual(1);
    });
    it('renders textBox', () => {
      expect(wrapper.find(TextBoxComp).length).toEqual(1);
    });
  });

  describe('DEFAULT MULTIPLE', () => {
    beforeEach(() => {
      // adapted to render components wrapped in HOC
      wrapper = shallow(multipleTooltip).first().shallow();
    });
    it('renders arrow', () => {
      expect(wrapper.find(ArrowComp).length).toEqual(1);
    });
    it('renders textBox', () => {
      expect(wrapper.find(TextBoxComp).length).toEqual(1);
    });
  });
});

describe('DEEP component testing', () => {
  afterEach(() => {
    wrapper.unmount();
  });
  describe('SINGLE TOOLTIP', () => {
    beforeEach(() => {
      wrapper = mount(singleTooltip);
      span = wrapper.find('span');
      arrow = wrapper.find('.rct-arrow');
    });

    it('renders no tooltip if show prop = false', () => {
      expect(mount(hiddenTooltip)
        .children().length).toEqual(0);
    });

    it('renders span', () => {
      expect(span.length).toEqual(1);
    });

    it('renders correct span style', () => {
      const { backgroundColor, padding } = defaultSettings;
      expect(span).toHaveStyle('padding', padding);
      expect(span).toHaveStyle('backgroundColor', backgroundColor);
    });

    it('renders correct custom span style', () => {
      wrapper.setProps(props);
      span = wrapper.find('span');
      const { backgroundColor, padding } = props;
      expect(span).toHaveStyle('padding', padding);
      expect(span).toHaveStyle('backgroundColor', backgroundColor);
    });

    it('renders correct arrow style', () => {
      const { backgroundColor, arwShadow } = defaultSettings;
      expect(arrow).toHaveStyle('backgroundColor', backgroundColor);
      expect(arrow).toHaveStyle('boxShadow', arwShadow);
    });

    it('renders correct hover styles', () => {
      const { hoverBackground, hoverColor } = defaultSettings;
      // component updates before tests
      span.simulate('mouseover');
      wrapper.update();
      const updatedSpan = wrapper.find('span');
      expect(updatedSpan).toHaveStyle('backgroundColor', hoverBackground);
      expect(updatedSpan).toHaveStyle('color', hoverColor);
      const updatedArrow = wrapper.find('.rct-arrow');
      expect(updatedArrow).toHaveStyle('backgroundColor', hoverBackground);
      expect(updatedSpan.parent().hasClass('rct-hover')).toEqual(true);
    });

    it('renders correct arrow style when textbox unhovered', () => {
      const { backgroundColor } = defaultSettings;
      // component updates before tests
      span.simulate('mouseover');
      wrapper.update();
      wrapper.find('.rct-textbox').simulate('mouseleave');
      wrapper.update();
      const updatedArrow = wrapper.find('.rct-arrow');
      expect(updatedArrow).toHaveStyle('backgroundColor', backgroundColor);
    });

    it('renders as static (no hover effects) if static prop = true', () => {
      const { backgroundColor } = defaultSettings;
      wrapper.setProps({ static: true });
      // hover & component updates before tests
      span.simulate('mouseover');
      wrapper.update();
      const updatedSpan = wrapper.find('span');
      expect(updatedSpan).toHaveStyle('backgroundColor', backgroundColor);
      expect(updatedSpan.parent().hasClass('rct-hover')).toEqual(false);
    });

    it('renders no shadows if flat prop = true', () => {
      wrapper.setProps({ flat: true });
      arrow = wrapper.find('.rct-arrow');
      expect(arrow).toHaveStyle('boxShadow', null);
      shadowContainer = wrapper.find('.rct-shadow-container');
      expect(shadowContainer.hasClass('rct-no-shadow')).toEqual(true);
    });

    it('renders correct tooltip position: right top', () => {
      wrapper.setProps({ position: 'right top' });
      const rctContainer = wrapper.find('.rct-container');
      expect(rctContainer.hasClass('rct-right')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(2);
    });

    it('renders correct tooltip position: right center', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'right center');
      expect(rctContainer.hasClass('rct-right rct-align-center')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: right bottom', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'right bottom');
      expect(rctContainer.hasClass('rct-right rct-align-bottom')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: left top', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'left top');
      expect(rctContainer.hasClass('rct-left')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(2);
    });

    it('renders correct tooltip position: left center', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'left center');
      expect(rctContainer.hasClass('rct-left rct-align-center')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: left bottom', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'left bottom');
      expect(rctContainer.hasClass('rct-left rct-align-bottom')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: top left', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'top left');
      expect(rctContainer.hasClass('rct-top rct-align-left')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: top center', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'top center');
      expect(rctContainer.hasClass('rct-top')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(2);
    });

    it('renders correct tooltip position: top right', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'top right');
      expect(rctContainer.hasClass('rct-top rct-align-right')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: bottom left', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'bottom left');
      expect(rctContainer.hasClass('rct-bottom rct-align-left')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct tooltip position: bottom center', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'bottom center');
      expect(rctContainer.hasClass('rct-bottom')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(2);
    });

    it('renders correct tooltip position: bottom right', () => {
      const rctContainer = setPropsAndgetRctContainer(wrapper, 'bottom right');
      expect(rctContainer.hasClass('rct-bottom rct-align-right')).toEqual(true);
      expect(numClassesOf(rctContainer)).toEqual(3);
    });

    it('renders correct horizontal arrow position: left', () => {
      wrapper.setProps({ arrow: 'left', position: 'bottom center' });
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      expect(rctTxtbxContainer).toHaveStyle('left', 'calc(50% - 40px)');
    });

    it('renders correct horizontal arrow position: center', () => {
      wrapper.setProps({ arrow: 'center', position: 'bottom center' });
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      expect(rctTxtbxContainer).toHaveStyle('left', '');
    });

    it('renders correct horizontal arrow position: right', () => {
      wrapper.setProps({ arrow: 'right', position: 'bottom center' });
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      expect(rctTxtbxContainer).toHaveStyle('right', 'calc(50% - 40px)');
    });
  });

  describe('MULTIPLE OPTION TOOLTIP', () => {
    beforeEach(() => {
      wrapper = mount(multipleTooltip);
      span = wrapper.find('span');
    });

    it('renders correct amount of spans', () => {
      expect(span.length).toEqual(3);
    });
  });
});
