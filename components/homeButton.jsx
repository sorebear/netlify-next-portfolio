import React from 'react';
import Link from 'next/link';
// import home from '../images/resources/basic_home.svg';

export default () => (
  <Link href="/" className="home-button" to="/">
    <img alt="Home icon" src="/images/resources/basic_home.svg" />
  </Link>
);
