import style from './Statistics.module.css'
import {getRandomHexColor} from 'utils/random-color';
import PropTypes from "prop-types";

const Statistics = ({ title = '', stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.stat_list}>
        {stats.map(elem => {
          return (
            <li key={elem.id} className={style.item} style={{backgroundColor:getRandomHexColor()}}>
              <span className={style.label}>{elem.label}</span>
              <span className={style.percentage}>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};



export default Statistics;
