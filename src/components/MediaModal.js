import React from 'react';
import './MediaModal.css';
import Comments from './Comments';
import Video from './Video';

export default function MediaModal({ hideModal, media }) {
  const displayPostImage = ({ media }) => {
    if (
      media.includes('.jpg') ||
      media.includes('.png') ||
      media.includes('.jpeg')
    ) {
      return <img className='modal-image' src={media} alt='' />;
    } else {
      return <Video src={media} />;
    }
  };
  return (
    <div className='modal-container'>
      <div className='closed-modal' onClick={hideModal}>
        <button className='close-button'>
          <svg
            aria-label='Close'
            class='_8-yf5 '
            fill='#ffffff'
            height='24'
            role='img'
            viewBox='0 0 48 48'
            width='24'
          >
            <path
              clip-rule='evenodd'
              d='M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z'
              fill-rule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
      <div className='modal-section'>
        <div className='modal-contento'>
          <div className='modal-image-container'>
            <div className='image-div'>{displayPostImage({ media })}</div>
          </div>
          <div className='modal-comment-container'>
            <div className='profile-header'>
              <div className='profile-image-div'>
                <img
                  src='/icons/nasa.png'
                  height='32px'
                  alt=''
                  className='profile-image'
                />
              </div>
              <span className='profile-name'>nasa</span>
              <img
                src='./icons/bluetick.jpg'
                alt=''
                className='follow-tick'
                height='14px'
              />
              <span className='dot'>•</span>
              <span className='following'>Following</span>
              <button className='more-button'>
                <svg
                  aria-label='More options'
                  class='_8-yf5 '
                  fill='#262626'
                  height='16'
                  role='img'
                  viewBox='0 0 48 48'
                  width='16'
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
            <div className='comments-container'>
              <div className='modal-comment-container'>
                <div className='modal-comment-header'>
                  <div className='profile-image-div'>
                    <img
                      src='/icons/nasa.png'
                      height='32px'
                      alt=''
                      className='profile-image'
                    />
                  </div>
                  <span className='profile-name'>nasa</span>
                  <img
                    src='./icons/bluetick.jpg'
                    alt=''
                    className='follow-tick'
                    height='14px'
                  />
                  <div className='profile-owner-comment'>
                    <span className='comment-header'>Cue the lights! 🤩</span>
                  </div>
                </div>
                <p className='comment'>
                  Colorful blue lights dance across the Earth’s atmosphere in a
                  rare sight captured by @EuropeanSpaceAgency’s @Thom_Astro
                  aboard the International Space Station. Incoming energy and
                  particles from the sun interacting with Earth’s magnetic field
                  causing bursts of light and color across the magnetosphere. In
                  a glowing aurora, we see billions of these individual
                  collisions of energy lighting up the sky – a breathtaking
                  phenomenon that can also be observed from space. The colors of
                  an aurora can vary depending on which gas is excited and how
                  much energy is being exchanged, and in this case, nitrogen
                  produces the beautiful blue light display. Credit: ESA
                </p>
              </div>
            </div>
            <div className='post-icons'>
              <div className='post-comment-icons'>
                <button className='icon-button'>
                  <svg
                    aria-label='Like'
                    class='_8-yf5 '
                    fill='#262626'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                    onClick={() => this.liking()}
                  >
                    <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                  {/* {post.liked !== true ? (

                ) : (
                  <svg
                    aria-label='Unlike'
                    class='_8-yf5 '
                    fill='#ed4956'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                    onClick={() => this.liking()}
                  >
                    <path d='M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                )} */}
                </button>
                <button className='icon-button'>
                  <svg
                    aria-label='Comment'
                    class='_8-yf5 '
                    fill='#262626'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path
                      clip-rule='evenodd'
                      d='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z'
                      fill-rule='evenodd'
                    ></path>
                  </svg>
                </button>
                <button className='icon-button'>
                  {' '}
                  <svg
                    aria-label='Share Post'
                    class='_8-yf5 '
                    fill='#262626'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                  </svg>
                </button>
              </div>
              <div className='post-sign-icon'>
                <button className='icon-button'>
                  <svg
                    aria-label='Save'
                    class='_8-yf5 '
                    // fill='#8e8e8e'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path d='M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z'></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='post-like'>
              <div className='like-value'>
                <a className='like-val' href='#'>
                  <span>500.222</span> likes
                </a>
              </div>
            </div>
            <div className='post-time'>
              <time>10 HOURS AGO</time>
            </div>
            <div className='post-message-container'>
              <div className='messaging-container'>
                <button className='emoji-container'>
                  <svg
                    aria-label='emoji-button'
                    class='emojiSvg '
                    fill='#262626'
                    height='24'
                    role='img'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path d='M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z'></path>
                    <path d='M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z'></path>
                  </svg>
                </button>
                <div className='textarea-container'>
                  <textarea
                    className='post-area'
                    id='post-area'
                    placeholder='Add a comment...'
                    // onChange={this.handlePostareaChanged}
                    // value={this.state.commenterMessage}
                  ></textarea>
                </div>
                <button
                  class='post-button'
                  type='submit'
                  // onClick={() => {
                  //   this.sendPostMessage();
                  // }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
