const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(elem => {
        return (
          <li key={elem.id} className="item">
            <span className="status"></span>
            <img className="avatar" src={elem.avatar} alt="User avatar" width="48" />
            <p className="name">{elem.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
