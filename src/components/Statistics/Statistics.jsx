import css from './Statistics.module.css';
import { StatisticList } from './StatisticList/StatisticList';
import data from 'data/data.json';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          <StatisticList stats={data} />
        </ul>
      </section>
    </>
  );
};
