import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class Suggestion extends Component {
  profilPageDisplay = () => {
    const { suggestion } = this.props;
    const profile = suggestion.sugName;
    this.props.history.push(profile);
  };
  render() {
    const { suggestion } = this.props;
    return (
      <div className='suggestionUser'>
        <div className='suggestionUserImage'>
          <div className='sugUserButton' role='button'>
            <canvas className='sugImageCanvas' height={53} width={53} />

            <img
              alt=''
              className='sugImage'
              src={suggestion.sugImage}
              style={{ width: '35px', height: '35px', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className='suggestionUserDetail'>
          <a onClick={this.profilPageDisplay} className='suggestionUserName'>
            {suggestion.sugName}
          </a>
          <div className='recomendedBy'>Instagram Official Account</div>
        </div>
        <button className='follow'>Follow</button>
      </div>
    );
  }
}

export default withRouter(Suggestion);
