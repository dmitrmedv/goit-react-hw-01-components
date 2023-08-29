import PropTypes from 'prop-types';
import css from './StatisticList.module.css';

export const StatisticList = ({ stats }) => {
  return stats.map(statisticItem => {
    return (
      <li className={css.item} key={statisticItem.id}>
        <span className={css.label}>{statisticItem.label}</span>
        <span className={css.percentage}>{statisticItem.percentage}%</span>
      </li>
    );
  });
};

StatisticList.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
