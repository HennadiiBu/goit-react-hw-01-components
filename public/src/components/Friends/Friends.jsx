import style from './Friends.module.css'
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(elem => {
        return (
          <li key={elem.id} className={style.item}>
            <span className={style.status} style={{backgroundColor:elem.isOnline?"green":"red"}}></span>
            <img className={style.avatar} src={elem.avatar} alt="User avatar" width="48" />
            <p className={style.name}>{elem.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
