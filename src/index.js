import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserProfile from './components/Social-profile/Social-profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/Friends';
import TransactionHistory from './components/Transactions/TransactionsHistory';

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

