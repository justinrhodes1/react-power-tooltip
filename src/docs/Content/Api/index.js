import React from 'react';

const Api = () => {
    return (
        <>
            <h1>API Overview</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Props</th>
                        <th>Type</th>
                        <th>Options</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>show</td>
                        <td>boolean</td>
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
                        <td>string</td>
                        <td>default: 'fade'</td>
                        <td>Mount/Unmount anmation</td>
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
                        <td>string: rgb colors | false</td>
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
                        <td>string: px | false</td>
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
                        <td>string</td>
                        <td>default: '100' (100-103)</td>
                        <td>Z-index of tooltip. The tooltip will occupy indices n + 3</td>
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
                        <td>boolean: false | true</td>
                        <td>default: false</td>
                        <td>Enable line separation between options</td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>align</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Api;