import React from 'react';

const Api = () => {
    return (
        <>
            <h1>API Overview</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Props</th>
                        <th>Type / Options</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>boolean: false | true</td>
                        <td>default: false</td>
                        <td>Mount tooltip if true</td>
                    </tr>
                    <tr>
                        <td>fontFamily</td>
                        <td>string: fontFamily</td>
                        <td>default: 'inherit'</td>
                        <td>Font family of text</td>
                    </tr>
                    <tr>
                        <td>fontSize</td>
                        <td>string: px</td>
                        <td>default: 'inherit'</td>
                        <td>Font size of text</td>
                    </tr>
                    <tr>
                        <td>fontWeight</td>
                        <td>string</td>
                        <td>default: 'bold'</td>
                        <td>Font weight of text</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>string</td>
                        <td>default: 'inherit'</td>
                        <td>Font color of text</td>
                    </tr>
                    <tr>
                        <td>animation</td>
                        <td>string: fade | fadeDown | fadeUpDown | bounce</td>
                        <td>default: 'fade'</td>
                        <td>Mount/Unmount anmation. <br />Custom animations: See advanced usage examples.</td>
                    </tr>
                    <tr>
                        <td>delayUnmount</td>
                        <td>number</td>
                        <td>default: 400</td>
                        <td>Delay component unmounting to allow for animations</td>
                    </tr>
                    <tr>
                        <td>hoverBackground</td>
                        <td>string: hex colors</td>
                        <td>default: '#ececec'</td>
                        <td>Background color on hover</td>
                    </tr>
                    <tr>
                        <td>hoverColor</td>
                        <td>string: hex colors</td>
                        <td>default: '#000000'</td>
                        <td>Font color on hover</td>
                    </tr>
                    <tr>
                        <td>backgroundColor</td>
                        <td>string: hex colors</td>
                        <td>default: '#ffffff'</td>
                        <td>Background color</td>
                    </tr>
                    <tr>
                        <td>alert</td>
                        <td>string: rgb colors</td>
                        <td>default: false</td>
                        <td>Pulse animation</td>
                    </tr>
                    <tr>
                        <td>textBoxWidth</td>
                        <td>string: px | auto</td>
                        <td>default: '150px'</td>
                        <td>Width of the text box</td>
                    </tr>
                    <tr>
                        <td>padding</td>
                        <td>string: px</td>
                        <td>default: '15px 20px'</td>
                        <td>Padding of text</td>
                    </tr>
                    <tr>
                        <td>borderRadius</td>
                        <td>string: px</td>
                        <td>default: '5px'</td>
                        <td>Radius of corners</td>
                    </tr>
                    <tr>
                        <td>zIndex</td>
                        <td>string: number</td>
                        <td>default: '100'</td>
                        <td>Z-index of tooltip.</td>
                    </tr>
                    <tr>
                        <td>moveDown</td>
                        <td>string: px</td>
                        <td>default: '0px'</td>
                        <td>Downward position adjustment</td>
                    </tr>
                    <tr>
                        <td>moveRight</td>
                        <td>string: px</td>
                        <td>default: '0px'</td>
                        <td>Right position adjustment</td>
                    </tr>
                    <tr>
                        <td>static</td>
                        <td>boolean: false | true</td>
                        <td>default: false</td>
                        <td>Disable hover animations</td>
                    </tr>
                    <tr>
                        <td>flat</td>
                        <td>boolean: false | true</td>
                        <td>default: false</td>
                        <td>Disable shadows</td>
                    </tr>
                    <tr>
                        <td>lineSeparated</td>
                        <td>boolean: false | string: css border property true</td>
                        <td>default: '1px solid #ececec'</td>
                        <td>Enable & specify line separation between options</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>string: 'top' | 'center' | 'bottom' | 'left' | 'right'</td>
                        <td>default: na</td>
                        <td>Positions arrow relative to textbox</td>
                    </tr>
                    <tr>
                        <td>align</td>
                        <td>string: 'top left' | 'top center' | 'top right' |
                        'bottom left' | 'bottom center' | ' bottom right' |
                         'left top' | 'left center' | ' left bottom' |
                         'right top' | 'right center' | ' right bottom'</td>
                        <td>default: na</td>
                        <td>Positions tooltip relative to target element</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Api;