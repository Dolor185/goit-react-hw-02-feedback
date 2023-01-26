import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback } = this;
    const { countPositiveFeedbackPercentage } = this;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <Section>
          <ul>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onClick}
            />
          </ul>
        </Section>

        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}

export default App;
