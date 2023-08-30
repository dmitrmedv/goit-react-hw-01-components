import PropTypes from 'prop-types';
import css from './StatisticList.module.css';
import { getRandomHexColor } from 'utils/utils';
import { setWidth } from 'utils/utils';

export const StatisticList = ({ stats }) => {
  return stats.map(statisticItem => {
    return (
      <li
        className={css.item}
        key={statisticItem.id}
        style={{
          backgroundColor: getRandomHexColor(),
          width: `${setWidth(stats)}%`,
        }}
      >
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
