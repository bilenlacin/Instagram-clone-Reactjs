import React, { Component } from 'react';
import Comments from './Comments';
import PostMessageArea from './PostMessageArea';
import Carousel from 'nuka-carousel';
import Video from './Video';

export class Post extends Component {
  displayPostImage = () => {
    const { post } = this.props;

    return post.postImage.map((src) => {
      if (src.includes('.jp')) {
        return <img className='postPıtcure' src={src} alt='' />;
      } else {
        return <Video src={src} />;
      }
    });
  };
  liking = () => {
    const { post } = this.props;
    const liked = post.liked;
    if (liked !== true) {
      this.increaseLike(liked);
    } else {
      this.decreaseLike(liked);
    }
  };
  increaseLike = (liked) => {
    const { post } = this.props;
    const postId = post.id;
    const counter = post.like + 1;
    liked = true;
    this.props.increasePostLike(postId, counter, liked);
  };

  decreaseLike = (liked) => {
    const { post } = this.props;
    const postId = post.id;
    const counter = post.like - 1;
    liked = false;
    this.props.decreasePostLike(postId, counter, liked);
  };

  render() {
    const { post } = this.props;
    const { profile } = this.props;
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    };
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    };
    return (
      <div className='post'>
        <div className='postHeader'>
          <div className='userImage'>
            <canvas
              className='userCanvasBorder'
              height='53'
              width='53'
            ></canvas>
            <img
              src={post.instaUserImage}
              alt=''
              height='34px'
              width='34px'
              className='instaUserImage'
            />
          </div>
          <div className='userName'>{post.instaUserName}</div>
          <div
            className='moreIcon                                                                                                              '
            style={{ height: '24px' }}
          >
            <svg
              aria-label='More options'
              className='_8-yf5 '
              fill='#262626'
              height={16}
              role='img'
              viewBox='0 0 48 48'
              width={16}
            >
              <circle
                clipRule='evenodd'
                cx={8}
                cy={24}
                fillRule='evenodd'
                r='4.5'
              />
              <circle
                clipRule='evenodd'
                cx={24}
                cy={24}
                fillRule='evenodd'
                r='4.5'
              />
              <circle
                clipRule='evenodd'
                cx={40}
                cy={24}
                fillRule='evenodd'
                r='4.5'
              />
            </svg>
          </div>
        </div>
        <div className='postImages'>
          {' '}
          <div className='postImage'>
            <Carousel
              defaultControlsConfig={{
                nextButtonText: '>',
                prevButtonText: '<',
                prevButtonStyle: {
                  borderRadius: '50%',
                  height: '30px',
                  marginTop: '10px',
                  padding: '0',
                  width: '30px',
                  color: 'rgba(var(--i1d,38,38,38),1)',
                  backgroundColor: 'white',
                  marginLeft: '10px',
                },
                nextButtonStyle: {
                  borderRadius: '50%',
                  height: '30px',
                  marginTop: '10px',
                  padding: '0',
                  width: '30px',
                  color: 'rgba(var(--i1d,38,38,38),1)',
                  backgroundColor: 'white',
                  marginRight: '10px',
                },
              }}
            >
              {this.displayPostImage()}
            </Carousel>
          </div>
        </div>
        <div className='postIcons'>
          <div className='postCommentIcons'>
            <button className='iconButton'>
              {post.liked !== true ? (
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
              )}
            </button>
            <button className='iconButton'>
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
            <button className='iconButton'>
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
          <div className='postSignIcon'>
            <button className='iconButton'>
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
        <div className='postLike'>
          <div className='likeValue'>
            <a className='likeVal' href='#'>
              <span>{post.like}</span> likes
            </a>
          </div>
        </div>
        <Comments post={post} />
        <div className='postTime'>
          <time>10 HOURS AGO</time>
        </div>
        <PostMessageArea
          post={post}
          profile={profile}
          insertPostComment={this.props.insertPostComment}
        />
      </div>
    );
  }
}

export default Post;
