import React, { Component } from 'react';

export class Endnav extends Component {
  render() {
    return (
      <div className='endNAv'>
        <nav className='aboutInstNav'>
          <ul className='navUl'>
            <li className='navLi'>
              <a className='navA' href='#'>
                About
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Help
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Press
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                API
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Jobs
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Privacy
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Terms
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Locations
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                {' '}
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Top Accounts
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Hashtags
              </a>
            </li>
            <li className='navLi'>
              <a className='navA' href='#'>
                Language
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Endnav;
