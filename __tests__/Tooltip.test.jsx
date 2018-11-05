import React from 'react';
import { shallow, mount } from 'enzyme';

import Tooltip from '../src/lib/Tooltip';
import ArrowComp from '../src/lib/Tooltip/Arrow';
import TextBoxComp from '../src/lib/Tooltip/TextBox';


// TEST SETUP
let wrapper;
let span;
let arrow;
let shadowContainer;

const defaultSingleTooltip = (
  <Tooltip show>
    <span>Option 1</span>
  </Tooltip>
);

const singleNoShowTooltip = (
  <Tooltip>
    <span>Option 1</span>
  </Tooltip>
);

// Tooltip Position Mocks

const posRightTop = (
  <Tooltip
    show
    position="right top"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posRightCenter = (
  <Tooltip
    show
    position="right center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posRightBottom = (
  <Tooltip
    show
    position="right bottom"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posLeftTop = (
  <Tooltip
    show
    position="left top"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posLeftCenter = (
  <Tooltip
    show
    position="left center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posLeftBottom = (
  <Tooltip
    show
    position="left bottom"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posTopLeft = (
  <Tooltip
    show
    position="top left"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posTopCenter = (
  <Tooltip
    show
    position="top center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posTopRight = (
  <Tooltip
    show
    position="top right"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posBottomLeft = (
  <Tooltip
    show
    position="bottom left"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posBottomCenter = (
  <Tooltip
    show
    position="bottom center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posBottomRight = (
  <Tooltip
    show
    position="bottom right"
  >
    <span>Option 1</span>
  </Tooltip>
);

// Arrow Position Mocks

// const posArrowTop = (
//   <Tooltip
//     show
//     arrow="top"
//   >
//     <span>Option 1</span>
//     <span>Option 2</span>
//     <span>Option 3</span>
//   </Tooltip>
// );

// const posArrowCenter = (
//   <Tooltip
//     show
//     arrow="center"
//   >
//     <span>Option 1</span>
//     <span>Option 2</span>
//     <span>Option 3</span>
//   </Tooltip>
// );

// const posArrowBottom = (
//   <Tooltip
//     show
//     arrow="bottom"
//   >
//     <span>Option 1</span>
//     <span>Option 2</span>
//     <span>Option 3</span>
//   </Tooltip>
// );

const posArrowLeft = (
  <Tooltip
    show
    arrow="left"
    position="bottom center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posArrowHorCenter = (
  <Tooltip
    show
    arrow="center"
    position="bottom center"
  >
    <span>Option 1</span>
  </Tooltip>
);

const posArrowRight = (
  <Tooltip
    show
    arrow="right"
    position="bottom center"
  >
    <span>Option 1</span>
  </Tooltip>
);

// Tooltip Type Mocks

const staticSingleTooltip = (
  <Tooltip show static>
    <span>Option 1</span>
  </Tooltip>
);

const flatSingleTooltip = (
  <Tooltip show flat>
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

const customSingleTooltip = (
  <Tooltip show {...props}>
    <span>Option 1</span>
  </Tooltip>
);

// TEST RUNS
describe('SHALLOW component testing', () => {
  describe('DEFAULT SINGLE', () => {
    beforeEach(() => {
      // adapted to render components wrapped in HOC
      wrapper = shallow(defaultSingleTooltip).first().shallow();
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
      wrapper = shallow(defaultMultipleTooltip).first().shallow();
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
  describe('DEFAULT SINGLE', () => {
    beforeEach(() => {
      wrapper = mount(defaultSingleTooltip);
      span = wrapper.find('span');
      arrow = wrapper.find('.rct-arrow');
    });

    it('renders no tooltip if show prop = false', () => {
      expect(mount(singleNoShowTooltip).children().length).toEqual(0);
    });

    it('renders span', () => {
      expect(span.length).toEqual(1);
    });

    it('renders correct span style', () => {
      const { backgroundColor, padding } = defaultSettings;
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
    it('renders correct tooltip position: right top', () => {
      wrapper = mount(posRightTop);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-right')).toEqual(true);
      expect(rctContainerClasses).toEqual(2);
    });
    it('renders correct tooltip position: right center', () => {
      wrapper = mount(posRightCenter);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-right rct-align-center')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: right bottom', () => {
      wrapper = mount(posRightBottom);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-right rct-align-bottom')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: left top', () => {
      wrapper = mount(posLeftTop);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-left')).toEqual(true);
      expect(rctContainerClasses).toEqual(2);
    });
    it('renders correct tooltip position: left center', () => {
      wrapper = mount(posLeftCenter);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-left rct-align-center')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: left bottom', () => {
      wrapper = mount(posLeftBottom);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-left rct-align-bottom')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: top left', () => {
      wrapper = mount(posTopLeft);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-top rct-align-left')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: top center', () => {
      wrapper = mount(posTopCenter);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-top')).toEqual(true);
      expect(rctContainerClasses).toEqual(2);
    });
    it('renders correct tooltip position: top right', () => {
      wrapper = mount(posTopRight);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-top rct-align-right')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: bottom left', () => {
      wrapper = mount(posBottomLeft);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-bottom rct-align-left')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });
    it('renders correct tooltip position: bottom center', () => {
      wrapper = mount(posBottomCenter);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-bottom')).toEqual(true);
      expect(rctContainerClasses).toEqual(2);
    });
    it('renders correct tooltip position: bottom right', () => {
      wrapper = mount(posBottomRight);
      const rctContainer = wrapper.find('.rct-container');
      const rctContainerClasses = rctContainer.prop('className').split(' ').length;
      expect(rctContainer.hasClass('rct-bottom rct-align-right')).toEqual(true);
      expect(rctContainerClasses).toEqual(3);
    });

    // it('renders correct vertical arrow position: top', () => {
    //   wrapper = mount(posArrowTop);
    //   const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
    //   // TODO: refactor this test
    //   expect(rctTxtbxContainer).toHaveStyle('top', 'calc(50% - 0px - 0px/2 + 0px)');
    // });
    // it('renders correct vertical arrow position: center', () => {
    //   wrapper = mount(posArrowCenter);
    //   const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
    //   // TODO: refactor this test
    //   expect(rctTxtbxContainer).toHaveStyle('top', 'calc(50% - 0px/2)');
    // });
    // it('renders correct vertical arrow position: bottom', () => {
    //   wrapper = mount(posArrowBottom);
    //   const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
    //   // TODO: refactor this test
    //   expect(rctTxtbxContainer).toHaveStyle('top', 'calc(50% - 0px - 0px/2 + 0px)');
    // });
    it('renders correct horizontal arrow position: left', () => {
      wrapper = mount(posArrowLeft);
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      // TODO: refactor this test
      expect(rctTxtbxContainer).toHaveStyle('left', 'calc(50% - 40px)');
    });
    it('renders correct horizontal arrow position: center', () => {
      wrapper = mount(posArrowHorCenter);
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      // TODO: refactor this test
      expect(rctTxtbxContainer).toHaveStyle('left', '');
    });
    it('renders correct horizontal arrow position: right', () => {
      wrapper = mount(posArrowRight);
      const rctTxtbxContainer = wrapper.find('.rct-textbox-container');
      // TODO: refactor this test
      expect(rctTxtbxContainer).toHaveStyle('right', 'calc(50% - 40px)');
    });
  });

  describe('DEFAULT SINGLE STATIC', () => {
    beforeEach(() => {
      wrapper = mount(staticSingleTooltip);
      span = wrapper.find('span');
    });

    it('renders as static (no hover effects)', () => {
      const { backgroundColor } = defaultSettings;
      // hover & component updates before tests
      span.simulate('mouseover');
      wrapper.update();
      const updatedSpan = wrapper.find('span');
      expect(updatedSpan).toHaveStyle('backgroundColor', backgroundColor);
      expect(updatedSpan.parent().hasClass('rct-hover')).toEqual(false);
    });
  });

  describe('DEFAULT SINGLE FLAT', () => {
    beforeEach(() => {
      wrapper = mount(flatSingleTooltip);
      arrow = wrapper.find('.rct-arrow');
      shadowContainer = wrapper.find('.rct-shadow-container');
    });

    it('renders no shadows', () => {
      // hover & component updates before tests
      expect(arrow).toHaveStyle('boxShadow', null);
      expect(shadowContainer.hasClass('rct-no-shadow')).toEqual(true);
    });
  });

  describe('DEFAULT MULTIPLE', () => {
    beforeEach(() => {
      wrapper = mount(defaultMultipleTooltip);
      span = wrapper.find('span');
    });

    it('renders correct amount of spans', () => {
      expect(span.length).toEqual(3);
    });
  });
  describe('CUSTOM SINGLE', () => {
    beforeEach(() => {
      wrapper = mount(customSingleTooltip);
      span = wrapper.find('span');
    });

    it('renders correct custom span style', () => {
      const { backgroundColor, padding } = props;
      expect(span).toHaveStyle('padding', padding);
      expect(span).toHaveStyle('backgroundColor', backgroundColor);
    });
  });
});
