import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isClientAuthorized }) => {
  return (
    <div className="Navbar">
      <NavLink to="/" activeClassName="active" exact>Главная</NavLink>
      <NavLink to="/news">Новости</NavLink>
      {
        isClientAuthorized ? (
          <NavLink to="/profile">Профиль</NavLink>
        ) : (
            <NavLink to="/login">Авторизоваться</NavLink>
          )
      }
    </div>
  );
}

export default Navbar;
