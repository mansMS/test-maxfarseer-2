import React from 'react';
import './Profile.css';

const Profile = ({ id, email, userData, logout }) => {
  let userInfo = <p>Нет данных о пользователе</p>;
  if (userData) {
    let city = userData.city || '-';
    let languages = <p>-</p>;
    let socials = null;
    if (userData.languages) {
      languages = userData.languages.map((language, index) => <p key={index}>+{language}</p>);
    }
    if (userData.social) {
      socials = userData.social.map((social, index) =>
        <p key={index}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">+{social.label}</a>
        </p>
      );
    }
    userInfo = <>
      <p>Город: {city}</p>
      <p>Знание языков:</p>
      {languages}
      {socials}
    </>
  }

  return (
    <div className="Profile">
      <h1>Profile Page</h1>
      <p>Ваш ID: {id}. Ваш email: {email}</p>
      {userInfo}
      <button onClick={logout}>Выйти</button>
    </div>
  );
}

export default Profile;