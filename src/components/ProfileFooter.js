import React, { Component } from 'react';

export class ProfileFooter extends Component {
  render() {
    return (
      <div className='footerDiv'>
        <div className='footerNAv'>
          <div className='footerUl'>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                About
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Blog
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Press
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Jobs
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Help
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                API
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Privacy
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Terms
              </a>
            </div>
            {/* <li className='footerLi'>
              <a className='footerA' href='#'>
                {' '}
              </a>
            </li> */}
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Top Accounts
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Hashtags
              </a>
            </div>
            <div className='footerLi'>
              <a className='footerA' href='#'>
                Locations
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div
            style={{
              display: 'flex',
              color: 'rgba(var(--f52, 142, 142, 142), 1)',
              fontSize: '12px',
              flex: '0 0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: 'rgba(var(--f52, 142, 142, 142), 1)',
                fontSize: '12px',
              }}
            >
              <div>English</div>
              <select
                style={{
                  color: 'rgba(var(--f52, 142, 142, 142), 1)',
                  backgroundColor: 'rgba(var(--b3f, 250, 250, 250), 1)',
                  border: 'none',
                }}
                name=''
                id=''
              ></select>
            </div>
            <div style={{ marginLeft: '16px' }}>
              © 2021 Instagram from Facebook
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileFooter;
