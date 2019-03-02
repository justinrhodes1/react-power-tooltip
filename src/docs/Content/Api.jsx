import React from 'react';

const Api = () => {
  return (
    <>
      <h1>API Overview</h1>
      <div className="tableContainer">
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
              <td>string: fade | bounce</td>
              <td>&#39;fade&#39;</td>
              <td>
                Mount/Unmount anmation. For custom animations see examples for more
                <a href="#custom-animations" style={{ color: 'purple', fontSize: '15px' }}> info</a>
                .
              </td>
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
              <td>string: css border property</td>
              <td>&#39;1px solid #ececec&#39;</td>
              <td>Specifies line separation between options (optional).</td>
            </tr>
            <tr>
              <td>arrowAlign</td>
              <td>string: &#39;start&#39; | &#39;center&#39; | &#39;end&#39;</td>
              <td>&#39;start&#39;</td>
              <td>
                Vertical or horizontal aligning along the left/right or
                top/bottom textbox side respectively. See
                <a href="#arrow-align" style={{ color: 'purple', fontSize: '15px' }}> examples </a>
                for more information.
              </td>
            </tr>
            <tr>
              <td>position</td>
              <td>
                <p style={{ marginTop: '0' }}>
                  string: &#39;position1 position2&#39;
                </p>
              </td>
              <td>&#39;right center&#39;</td>
              <td>
                Positions tooltip relative to target. See
                <a href="#tooltip-positions" style={{ color: 'purple', fontSize: '15px' }}> examples </a>
                for more information.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Api;
