import { Item, Label, Percentage } from './Statistics.styles';

export const StatItem = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};
