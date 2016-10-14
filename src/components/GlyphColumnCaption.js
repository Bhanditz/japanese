import React from 'react';

class GlyphColumnCaption extends React.Component {
  render() {
    const self = this;

    return (
      <h3 className={ 'h6 sm-h5 md-h4 lg-h3 font-weight-400 white font-family-base select-none ' + self.props.className }>{ self.props.children }</h3>
    );
  }
}

GlyphColumnCaption.defaultProps = {
  className: ''
};

export default GlyphColumnCaption;
