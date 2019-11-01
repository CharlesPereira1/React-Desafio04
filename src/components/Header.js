import React, { Component } from 'React'

import profile1 from '../assets/profile1.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="content">
          <nav>
            <img src="https://i.imgur.com/KDIDiSE.png" />
          </nav>
          <div>
            <span>Meu perfil</span>
            <img src={profile1} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
