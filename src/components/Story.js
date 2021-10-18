import React, { Component } from 'react';

export class Story extends Component {
  render() {
    const { story } = this.props;
    return (
      <li className='storyli'>
        <canvas className='canvasBorder'></canvas>
        <img
          src={story.storyImage}
          alt=''
          className='stroyimage'
          height='59px'
          width='59px'
        />
        <div className='storyUser'>{story.userName}</div>
      </li>
    );
  }
}

export default Story;
