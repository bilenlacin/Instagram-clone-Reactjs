import React, { Component } from 'react';
import Suggestion from './Suggestion';
import Sugprofile from './Sugprofile';

export class Suggestions extends Component {
  componentDidMount() {
    this.props.fetcSuggestions();
    this.props.fetchProfile();
  }

  displaySuggestions = () => {
    const { suggestions } = this.props;
    if (typeof suggestions === 'undefined') {
      return;
    }
    return suggestions.map((suggestion) => {
      return <Suggestion suggestion={suggestion} />;
    });
  };

  displayProfile = () => {
    const { profile } = this.props;
    return profile.map((profil) => {
      if (profil.profileUserName === 'bilenlacin') {
        return <Sugprofile profil={profil} />;
      }
    });
  };
  render() {
    return (
      <div className='sugContainer'>
        {this.displayProfile()}
        <div className='suggestionHeader'>
          <div className='suggestionText'>Suggestions For You</div>
          <button className='seeAll'>See All</button>
        </div>
        <div className='suggestionUserDiv'>{this.displaySuggestions()}</div>
      </div>
    );
  }
}

export default Suggestions;
