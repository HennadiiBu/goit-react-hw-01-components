import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserProfile from './components/social-profile/social-profile';
import Statistics from 'components/statistics/statistics';
import FriendList from 'components/friends/friends';
import TransactionHistory from 'components/transactions/transactionsHistory';

import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json';
import transactions from './path/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <UserProfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </div>
);

