import style from './friends.module.css'
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

FriendList.propTypes={
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,
  id: PropTypes.number.isRequired
}

export default FriendList;
