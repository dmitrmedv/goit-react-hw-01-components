import { Profile } from 'Profile/Profile';
import user from 'data/user.json';

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      avatar={user.avatar}
    ></Profile>
  );
};
