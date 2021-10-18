import React, { Component } from 'react';

export class ProfileHeader extends Component {
  render() {
    return (
      <div className='profileDetails'>
        <div className='profileImage'>
          <canvas className='profileCanvas' height='209' width='209'></canvas>
          <img
            src='./icons/nasa.png'
            alt=''
            className='profileImg'
            height='115px'
          />
        </div>
        <div className='profileAbout'>
          <div className='profilInfos'>
            <div className='profileNav'>
              <h2 className='profileName'>nasa</h2>
              <img
                src='./icons/bluetick.jpg'
                alt=''
                className='verifyingImage'
                height='19px'
              />
              <div className='btn-group bgroup'>
                <button className='messageButton'>Message</button>
                <button className='followButton'>
                  <div className='followButtonDiv'>
                    <img src='./icons/personf.png' alt='' height='18px' />
                    <img src='./icons/checked.png' alt='' height='10px' />
                  </div>
                </button>
                <button className='suggestionButton'>
                  <svg
                    aria-label='Down Chevron Icon'
                    className='sugIcon'
                    fill='#262626'
                    height='12'
                    role='img'
                    viewBox='0 0 48 48'
                    width='12'
                  >
                    <path d='M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z'></path>
                  </svg>
                </button>
              </div>
              <button className='mor-button'>
                <svg
                  aria-label='Options'
                  className='moreIcon'
                  fill='#262626'
                  height='24'
                  role='img'
                  viewBox='0 0 48 48'
                  width='24'
                >
                  <circle
                    clip-rule='evenodd'
                    cx='8'
                    cy='24'
                    fill-rule='evenodd'
                    r='4.5'
                  ></circle>
                  <circle
                    clip-rule='evenodd'
                    cx='24'
                    cy='24'
                    fill-rule='evenodd'
                    r='4.5'
                  ></circle>
                  <circle
                    clip-rule='evenodd'
                    cx='40'
                    cy='24'
                    fill-rule='evenodd'
                    r='4.5'
                  ></circle>
                </svg>
              </button>
            </div>
          </div>
          <div className='profileNumbers'>
            <span className='profileSpans'>
              <span className='spanNumbers'>3,254 </span>posts
            </span>
            <span className='profileSpans'>
              <span className='spanNumbers'>69.4m</span> followers
            </span>
            <span className='profileSpans'>
              <span className='spanNumbers'>73 </span> following
            </span>
          </div>
          <div className='aboutgroup'>
            <div style={{ fontWeight: '600' }}>NASA</div>
            <div>🚀 🌎 Exploring the universe and our home planet.</div>
            <a href='www.nasa.gov' className='webLink'>
              www.nasa.gov
            </a>
            <div className='followDetails'>
              Followed by{' '}
              <span style={{ fontWeight: '500', color: 'black' }}>
                {' '}
                insider,teslamotors
              </span>{' '}
              +7 more
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
