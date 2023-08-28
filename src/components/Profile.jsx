import PropTypes from 'prop-types';
import { Stats } from './Stats';

export const Profile = ({
  data: { username, location, tag, stats, avatar },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <Stats stats={stats} />
      </ul>
    </div>
  );
};

Profile.prototype = {
  username: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.object,
  avatar: PropTypes.string,
};
