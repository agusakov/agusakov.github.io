import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

export default function Header() {
  const [isMenuActive, activeMenu] = useState(false)

  return (
    <>
      <header className="App-header">
      <h1><Link to="/">Alena Gusakov</Link></h1>
        Academic, Software Engineer
      </header>
    </>
  );
}

