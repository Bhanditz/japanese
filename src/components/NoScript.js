import React from 'react';
import _map from 'lodash.map';

class NoScript extends React.Component {
  render() {
    const self = this;
    const data = self.props.data;

    var stylesheets = [
      '<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjp.css">',
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans">',
      '<link rel="stylesheet" href="css/notosansmono.css" async>'
    ];

    // Determine fallback stylesheets
    // This is done in the same way as in `app.js`
    _map(Object.keys(data.fonts), function(index) {
      var font = data.fonts[index];
      if (font.load !== false) {
        stylesheets.push('<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/' + index + '.css" async>')
      }
    });

    // https://git.io/vPtBU
    return (
      <noscript dangerouslySetInnerHTML={{
        __html: stylesheets.join('')
      }} />
    );
  }
}

NoScript.defaultProps = {
  data: {}
};

export default NoScript;
