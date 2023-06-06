import style from './Social-profile.module.css'
import PropTypes from "prop-types";

const UserProfile = ({username,tag,location,avatar,stats:{followers,likes, views}})=>{

    return <div className={style.profile}>
    <div className={style.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={style.avatar}
      />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
  
    <ul className={style.stats}>
      <li className={style.stats_item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li className={style.stats_item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li className={style.stats_item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
}

UserProfile.propTypes= {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar:PropTypes.string,
  stats:PropTypes.objectOf(PropTypes.number),
}

export default UserProfile;