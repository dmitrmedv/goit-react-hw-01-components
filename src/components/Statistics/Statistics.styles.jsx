import data from '../Data/data.json';
import styled from '@emotion/styled';

function width(data) {
  return 100 / data.length;
}

function getRandomHexColor() {
  const rgb = [];
  for (let index = 0; index < 3; index++) {
    let color = Math.floor(Math.random() * 200);
    rgb.push(color);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

export const StatisticsSection = styled.section`
  width: 400px;
  margin: 0 auto 50px auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.4);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #696e73;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  color: #ffffff;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  width: ${width(data)}%;
  align-items: center;
  background-color: ${getRandomHexColor};
  &:first-of-type {
    border-radius: 0 0 0 5px;
  }
  &:last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 25px;
`;
