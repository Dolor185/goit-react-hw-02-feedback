import { List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <List>
      <Item>Good : {good}</Item>
      <Item>Neutral : {neutral}</Item>
      <Item>Bad : {bad}</Item>
      <Item>Total : {total}</Item>
      <Item>Positive feedback : {positivePercentage}%</Item>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
