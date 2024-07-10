import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default function Sidebar({ visible, onOverLayClick }) {
  

  const sidebarClasses = classnames('sidebar', {
    'sidebar--active': visible,
  })
  const sidebarContentClasses = classnames('sidebar_content', {
    'sidebar_content--active': visible,
  })

  return (
    <aside className='sidebar'>
      <div>
        <div className="sidebar_overlay" onClick={onOverLayClick} />
        <div className={sidebarContentClasses}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
    </aside>
    
  );
};