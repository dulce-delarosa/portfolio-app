import React, { Component } from 'react';

class MainNav extends Component {
  render() {
    return (
			<nav className="main-nav">
		    {/*<a className="main-nav__item" href="/">Portfolio</a>
		    <a className="main-nav__item" href="/about">About</a>*/}
		    <a className="main-nav__item" href="/contact">Contact</a>
			</nav>
    );
  }
}

export default MainNav;
