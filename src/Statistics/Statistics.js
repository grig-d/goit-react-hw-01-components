import styles from './Statistics.module.scss';
import PropTypes from 'prop-types';

function getRandomColor() {
  let charCollection = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += charCollection[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

    <ul
      className={styles.statList}
    >
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
