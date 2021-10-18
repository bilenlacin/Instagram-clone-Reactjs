import React, { Component } from 'react';

export class Sugprofile extends Component {
  render() {
    const { profil } = this.props;
    return (
      <div className='suguserInfo'>
        <div className='sugUserImage'>
          <a href='#'>
            <img
              src={profil.profileUserImage}
              alt=''
              className='sugUserAvatar'
              height='56px'
              width='56px'
            />
          </a>
        </div>
        <div className='sugUserName'>{profil.profileUserName} </div>
        <button className='switch'>Switch</button>
      </div>
    );
  }
}

export default Sugprofile;
