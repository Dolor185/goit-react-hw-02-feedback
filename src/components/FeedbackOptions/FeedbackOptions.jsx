export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(button => (
    <li key={button}>
      <button onClick={onLeaveFeedback} name={button}>
        {button}
      </button>
    </li>
  ));
}
