import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  border-radius: 15px;
  width: 300px;
  margin: 50px auto;
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.4);
`;

export const Description = styled.div`
  padding: 30px;
  border-radius: 15px 15px 0 0;
  background-color: #ffffff;
  border: 1px solid #e0e4ea;
  border-bottom: none;
  > p {
    text-align: center;
  }
`;

export const Avatar = styled.img`
  box-shadow: 0px 1px 8px 4px rgba(34, 60, 80, 0.2);
  border-radius: 100%;
  width: 150px;
  margin: 0 auto;
  display: block;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: #a5acb5;
`;
export const Location = styled.p`
  margin-bottom: 0;
  color: #a5acb5;
`;

export const Stats = styled.ul`
  display: flex;
  height: 100%;
  background-color: #f4f6f9;
  list-style: none;
  border-radius: 0 0 15px 15px;
  border: 1px solid #e0e4ea;
  padding: 0;
  margin: 0;
  > :not(:last-child) {
    border-right: 1px solid #e0e4ea;
  }
  > li {
    width: calc(100% / 3);
    display: flex;
    padding: 15px 0;
    flex-direction: column;
    align-items: center;
  }
`;

export const Label = styled.span`
  color: #a5acb5;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
