import { Item, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(button => (
    <Item key={button}>
      <Button onClick={onLeaveFeedback} name={button}>
        {button}
      </Button>
    </Item>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
