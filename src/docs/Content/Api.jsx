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
            <td>false</td>
            <td>Mount tooltip if true</td>
          </tr>
          <tr>
            <td>fontFamily</td>
            <td>string: fontFamily</td>
            <td>&#39;inherit&#39;</td>
            <td>Font family of text</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>string: px</td>
            <td>&#39;inherit&#39;</td>
            <td>Font size of text</td>
          </tr>
          <tr>
            <td>fontWeight</td>
            <td>string</td>
            <td>&#39;bold&#39;</td>
            <td>Font weight of text</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>&#39;inherit&#39;</td>
            <td>Font color of text</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>string: fade | fadeDown | fadeUpDown | bounce</td>
            <td>&#39;fade&#39;</td>
            <td>
              Mount/Unmount anmation.
              <br />
              Custom animations: See advanced usage examples.
            </td>
          </tr>
          <tr>
            <td>delayUnmount</td>
            <td>number</td>
            <td>400</td>
            <td>Delay component unmounting to allow for animations</td>
          </tr>
          <tr>
            <td>hoverBackground</td>
            <td>string: hex colors</td>
            <td>&#39;#ececec&#39;</td>
            <td>Background color on hover</td>
          </tr>
          <tr>
            <td>hoverColor</td>
            <td>string: hex colors</td>
            <td>&#39;#000000&#39;</td>
            <td>Font color on hover</td>
          </tr>
          <tr>
            <td>backgroundColor</td>
            <td>string: hex colors</td>
            <td>&#39;#ffffff&#39;</td>
            <td>Background color</td>
          </tr>
          <tr>
            <td>alert</td>
            <td>string: rgb colors</td>
            <td>false</td>
            <td>Pulse animation</td>
          </tr>
          <tr>
            <td>textBoxWidth</td>
            <td>string: px | auto</td>
            <td>&#39;150px&#39;</td>
            <td>Width of the text box</td>
          </tr>
          <tr>
            <td>padding</td>
            <td>string: px</td>
            <td>&#39;15px 20px&#39;</td>
            <td>Padding of text</td>
          </tr>
          <tr>
            <td>borderRadius</td>
            <td>string: px</td>
            <td>&#39;5px&#39;</td>
            <td>Radius of corners</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>string: number</td>
            <td>&#39;100&#39;</td>
            <td>Z-index of tooltip.</td>
          </tr>
          <tr>
            <td>moveDown</td>
            <td>string: px</td>
            <td>&#39;0px&#39;</td>
            <td>Downward position adjustment</td>
          </tr>
          <tr>
            <td>moveRight</td>
            <td>string: px</td>
            <td>&#39;0px&#39;</td>
            <td>Right position adjustment</td>
          </tr>
          <tr>
            <td>static</td>
            <td>boolean: false | true</td>
            <td>false</td>
            <td>Disable hover animations</td>
          </tr>
          <tr>
            <td>flat</td>
            <td>boolean: false | true</td>
            <td>false</td>
            <td>Disable shadows</td>
          </tr>
          <tr>
            <td>lineSeparated</td>
            <td>boolean: false | string: css border property true</td>
            <td>&#39;1px solid #ececec&#39;</td>
            <td>Enable &mp; specify line separation between options</td>
          </tr>
          <tr>
            <td>arrow</td>
            <td>
              string: &#39;top&#39; | &#39;center&#39; | &#39;bottom&#39;
              | &#39;left&#39; | &#39;right&#39;
            </td>
            <td>na</td>
            <td>Positions arrow relative to textbox</td>
          </tr>
          <tr>
            <td>align</td>
            <td>
              string: &#39;top left&#39; | &#39;top center&#39; | &#39;top right&#39; |
              &#39;bottom left&#39; | &#39;bottom center&#39; | &#39; bottom right&#39; |
              &#39;left top&#39; | &#39;left center&#39; | &#39; left bottom&#39; |
              &#39;right top&#39; | &#39;right center&#39; | &#39; right bottom&#39;
            </td>
            <td>na</td>
            <td>Positions tooltip relative to target element</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Api;
