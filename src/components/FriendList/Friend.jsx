import { Item, Status, Avatar, Name } from './FriendList.styles';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
