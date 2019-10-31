import React, { Component } from 'React'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_cicle</i>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
