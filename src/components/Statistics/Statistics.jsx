import PropTypes from 'prop-types';
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

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
