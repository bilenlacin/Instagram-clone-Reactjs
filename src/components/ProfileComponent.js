import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import MediaComp from './MediaComp';
import '../containers/Profile.css';
import ProfileFooter from './ProfileFooter';

export class ProfileComponent extends Component {
  render() {
    const { prof } = this.props;
    return (
      <div className='profileComponents'>
        <div className='profileComponent'>
          <ProfileHeader />
          <MediaComp
            prof={prof}
            fetchProfile={this.props.fetchProfile}
            displayModal={this.props.displayModal}
          />
          <ProfileFooter />
        </div>
      </div>
    );
  }
}

export default ProfileComponent;
