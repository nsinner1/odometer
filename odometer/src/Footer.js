import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3> {this.props.trademark} Team</h3>
      <p>This is my Footer</p>
      </>
    )
  }
}

export default Footer;