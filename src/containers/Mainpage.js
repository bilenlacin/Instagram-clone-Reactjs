import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Suggestions from '../components/Suggestions';
import Endnav from '../components/Endnav';
import {
  fetchPosts,
  fetchStory,
  fetcSuggestions,
  fetchProfile,
  insertPostComment,
  increasePostLike,
  decreasePostLike,
} from '../action-creators';

class Mainpage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  displayPosts = () => {
    const { posts } = this.props;
    const { profile } = this.props;
    if (typeof posts === 'undefined') {
      return;
    }
    return posts.map((post) => {
      return (
        <Post
          post={post}
          profile={profile}
          insertPostComment={this.props.insertPostComment}
          decreasePostLike={this.props.decreasePostLike}
          increasePostLike={this.props.increasePostLike}
        />
      );
    });
  };
  render() {
    const { stories } = this.props;
    const { suggestions } = this.props;
    const { profile } = this.props;
    return (
      <div className='main-container'>
        <div className='mainContainer'>
          <div className='albumContainer'>
            <div className='album'>
              <Stories stories={stories} fetchStory={this.props.fetchStory} />
              {this.displayPosts()}
            </div>
          </div>
          <Suggestions
            suggestions={suggestions}
            fetcSuggestions={this.props.fetcSuggestions}
            profile={profile}
            fetchProfile={this.props.fetchProfile}
          />
          <Endnav />
          <div className='aboutInsta'>
            <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { posts } = state.postReducer;
  const { stories } = state.storyReducer;
  const { suggestions } = state.suggestionReducer;
  const { profile } = state.profileReducer;
  return { posts, stories, suggestions, profile };
};

export default withRouter(
  connect(mapStateToProps, {
    fetchPosts: fetchPosts,
    fetchStory: fetchStory,
    fetcSuggestions: fetcSuggestions,
    fetchProfile: fetchProfile,
    insertPostComment: insertPostComment,
    increasePostLike: increasePostLike,
    decreasePostLike: decreasePostLike,
  })(Mainpage)
);
