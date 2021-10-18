import React, { Component } from 'react';

export class PostMessageArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commenterMessage: '',
    };
  }
  handlePostareaChanged = (event) => {
    this.setState({ commenterMessage: event.target.value });
  };

  sendPostMessage = () => {
    const commenterMessage = this.state;
    const { profile } = this.props;
    const post = this.props;
    const postId = post.post.id;
    const comments = post.post.comments;
    const commentQuantity = post.post.commentQuantity + 1;
    var comment = {
      commenter: profile[0].profileUserName,
      commentMsg: commenterMessage.commenterMessage,
    };
    this.props.insertPostComment(comment, postId, comments, commentQuantity);
    this.setState({ commenterMessage: '' });
  };
  render() {
    return (
      <div className='postMessageArea'>
        <div className='message'>
          <button className='emojiButton'>
            <svg
              aria-label='Emoji'
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
          <div className='textareaDiv'>
            <textarea
              name='postArea'
              id='postArea'
              placeholder='Add a comment...'
              onChange={this.handlePostareaChanged}
              value={this.state.commenterMessage}
            ></textarea>
          </div>
          <button
            class='postButton'
            type='submit'
            onClick={() => {
              this.sendPostMessage();
            }}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

export default PostMessageArea;
