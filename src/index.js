import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserProfile from './components/social-profile/social-profile';
import user from './path/user.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <UserProfile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
  </div>
);
