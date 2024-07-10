import React, { useState } from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Header from './Header';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {

  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header>
        
      </Header>
      <div className="icon">
          
        </div>
        <div> 
          <Sidebar>
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  // only apply styles on first level elements of the tree
                  if (level === 0)
                    return {
                      color: disabled ? '#f5d9ff' : '#d359ff',
                      backgroundColor: active ? '#eecef9' : undefined,
                    };
                },
              }}>
              <MenuItem component={<Link to="/" />}> Home </MenuItem>
              <MenuItem component={<Link to="/About" />}> About Me </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
