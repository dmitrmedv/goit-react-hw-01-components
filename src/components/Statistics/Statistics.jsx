import { StatisticsSection, Title, StatList } from './Statistics.styles';
import { StatItem } from './StatItem';

export const Statistics = ({ title, data }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {data.map(({ id, label, percentage }) => {
          return <StatItem key={id} label={label} percentage={percentage} />;
        })}
      </StatList>
    </StatisticsSection>
  );
};
