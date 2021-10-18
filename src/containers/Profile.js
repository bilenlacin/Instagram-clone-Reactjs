import React, { Component } from 'react';
import { connectAdvanced } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';
import Navbar from './Navbar';
import './Profile.css';
import { fetchProfile } from '../action-creators';
import MediaModal from '../components/MediaModal';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      media: '',
    };
  }
  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  displayModal = (media) => {
    // const { media } = this.props;
    // const { prof } = this.props;
    // const mediaIndex = prof.profileMedia.indexOf(media);
    // console.log(mediaIndex);
    // media={media} mediaIndex={mediaIndex}
    this.setState({ media: media });
    this.openModal();
  };
  hideModal = () => {
    this.closeModal();
  };

  forwardProfile = () => {
    const profileName = this.props.match.params.profile;
    const { profile } = this.props;
    return profile.map((prof) => {
      if (prof.profileUserName === profileName) {
        return (
          <ProfileComponent
            prof={prof}
            fetchProfile={this.props.fetchProfile}
            displayModal={this.displayModal}
          />
        );
      }
    });
  };
  render() {
    return (
      <div>
        {this.state.modal && (
          <MediaModal media={this.state.media} hideModal={this.hideModal} />
        )}
        {this.forwardProfile()}
        <Navbar />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { posts } = state.postReducer;
  const { profile } = state.profileReducer;
  return { profile, posts };
};

export default withRouter(
  connect(mapStateToProps, { fetchProfile: fetchProfile })(Profile)
);
