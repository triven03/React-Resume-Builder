import React, { Component } from 'react';
import LeftContent3 from './LeftContent3';
import RightContent3 from './RightContent3';
import Temp3 from './temp3';
// import '../styles/Resume.scss';
import '../styles/Resume3.scss';

class Resume4 extends Component {
  render() {
    return (
      <div className='resume' id='resume'>
        {/* <LeftContent3 data={this.props.data} color={this.props.color} /> */}
        {/* <RightContent3 data={this.props.data} color={this.props.color} /> */}
        <Temp3 data={this.props.data} color={this.props.color} />
      </div>
    );
  }
}

export default Resume4;
