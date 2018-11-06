# React-custom-tooltip

![Travis (.org)](https://img.shields.io/travis/justin-rhodes/react-custom-tooltip.svg)
![Coveralls github branch](https://img.shields.io/coveralls/github/justin-rhodes/react-custom-tooltip/master.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-custom-tooltip.svg)

<img width="250px" src="https://media.giphy.com/media/Rd6sPjQFVHOSwe9rbW/giphy.gif" />

A **powerful** and **elegant** alternative for all your tooltips and menu needs.

- **Different Types** - For every use context: Choose between _Hoverable_, _Static_ &amp; _Alert_ tooltips.
- **Fully Customizable** - Easily change default settings via props
- **Reliable Positioning** - Align your tooltip to your
target element with ease
- **Advanced Customization** - Add your own animations and styles via separate CSS files

## DEMO

Check out the [documentation &amp; demo pages](https://justin-rhodes.github.io/react-custom-tooltip/) to to see all use cases.

## Installation

### NPM

```bash
npm install react-custom-tooltip
```

### CSS

Import the CSS as a separate file.
```markdown
<link rel="stylesheet" href="unpkg.com/react-custom-tooltip/style.css" />
```
## Usage
```jsx
import React, { Component } from "react";
import Tooltip from "react-custom-tooltip";

class Example extends Component {
    state = {
        show: false
    }

    showTooltip = bool => {
        this.setState({ show: bool })
    }
    render() {
        return (
            <div 
                style={{ position: 'relative' }}
                mouseOver={() => this.showTooltip(true)} 
                mouseLeave={() => this.showTooltip(false)}
            >
                <Tooltip show={this.state.show}>
                    <span>Option 1</span>
                    <span>Option 2</span>
                </Tooltip>
            </div>
        );
    }
}
export default Example;
```
## API

| Props           | Types / Options                                           | Default             | Description                                                             |
| --------------- | --------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------- |
| show            | bool: false, true                                         | false               | Mount tooltip if true.                                                  |
| fontFamily      | string: font family                                       | 'inherit'           | Font family of text                                                     |
| fontSize        | string: px                                                | 'inherit'           | Font size of text                                                       |
| fontWeight      | string                                                    | 'bold'              | Font weight of text                                                     |
| color           | string                                                    | 'inherit'           | Font color of text                                                      |
| animation       | string: fade _or_  fadeUpDown _or_ bounce                 | 'fade'              | Mount/Unmount anmation. Custom animations: See advanced usage examples. |
| delayUnmount    | number                                                    | 150                 | Delay component unmounting to allow for animations                      |
| hoverBackground | string: hex colors                                        | '#ececec'           | Background color on hover                                               |
| hoverColor      | string: hex colors                                        | '#000000'           | Font color on hover                                                     |
| backgroundColor | string: hex colors                                        | '#ffffff'           | Background color                                                        |
| alert           | string: rgb colors                                        | false               | Pulse animation                                                         |
| textBoxWidth    | string: px _or_ auto                                      | '150px'             | Width of the text box                                                   |
| padding         | string: px                                                | '15px 20px'         | Padding of text                                                         |
| borderRadius    | string: px                                                | '5px'               | Radius of corners                                                       |
| zIndex          | string: number                                            | '100'               | Z-index of tooltip                                                      |
| moveDown        | string: px                                                | '0px'               | Downward position adjustment                                            |
| moveRight       | string: px                                                | '0px'               | Right position adjustment                                               |
| static          | boolean: false _or_ true                                  | false               | Disable hover animations                                                |
| flat            | boolean: false _or_ true                                  | false               | Disable shadows                                                         |
| lineSeparated   | boolean: false _or_ true _or_ string: css border property | '1px solid #ececec' | Enable &mp; specify line separation between options                     |
| arrow           | string: horizontal _or_ vertical alignment; _Vertical alignment_ (along left/right textbox side): 'top' _or_ 'center' _or_ 'bottom'; _Horizontal alignment_ (along top/bottom textbox side): 'left' _or_ 'center' _or_ 'right' |'top'	| Positions arrow relative to textbox |
|align|	string: 'position1 position2'; _position 1 (target side)_: 'top' _or_ 'bottom' _or_ 'right' _or_ 'left'; _position 2 (alignment)_: 'left' _or_ 'center' _or_ 'right' _or_ 'top' _or_ 'bottom' |'right center'|	Positions tooltip relative to target element|



## Development

You're welcome to contribute to react-switch.

To set up the project:

1.  Fork and clone the repository
2.  `$ npm install`
3.  `$ npm run dev`

The demo page will then be served on http://localhost:8000/ in watch mode, meaning you don't have refresh the page to see your changes.

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://github.com/justin-rhodes.png" width="120">
        <br />
        <a href="https://github.com/justin-rhodes">Justin Rhodes<a/>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT