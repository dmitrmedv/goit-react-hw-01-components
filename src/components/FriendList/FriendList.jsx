import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Friends } from './FriendList.styles';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
        );
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
