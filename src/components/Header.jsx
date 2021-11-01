import React from 'react';
import '../css/Header.css';
import {Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <a href="/">PriTors</a>
          </div>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
              <Tab label="Fotos" component={Link} to="/Gallery" />
              <Tab label="Certificados" component={Link} to="/Certificates" />
              <Tab label="Contato" component={Link} to="/Contact" />
            </Tabs>
        </div>
      </div>
    </header>
  )
}
