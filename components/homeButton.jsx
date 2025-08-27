import React from 'react';
import Link from 'next/link';

const HomeButton = () => (
  <Link href="/" className="home-button" to="/">
    <img alt="Home icon" src="/images/resources/basic_home.svg" />
  </Link>
);

export default HomeButton
