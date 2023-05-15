import styled from '@emotion/styled';

export const Friends = styled.ul`
  padding: 0;
  list-style: none;
  width: 300px;
  margin: 0 auto 50px auto;
`;

export const Item = styled.li`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.4);
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isOnline }) => (isOnline ? `#66AB5A` : `#EC5E59`)};
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 1px 4px 2px rgba(34, 60, 80, 0.2);
  margin-left: 10px;
`;

export const Name = styled.p`
  margin: 0 0 0 20px;
  font-size: 24px;
  font-weight: bold;
`;
