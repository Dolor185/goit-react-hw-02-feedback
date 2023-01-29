import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <h2>{message}</h2>;
}

Notification.propTypes = {
  messge: PropTypes.string.isRequired,
};
