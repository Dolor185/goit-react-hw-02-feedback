import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import { Container, List } from './App.styled';

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
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return percentage.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback } = this;
    const { countPositiveFeedbackPercentage } = this;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <List>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onClick}
            />
          </List>
        </Section>

        {this.countTotalFeedback() ? (
          <Section title={'Statistics'}>
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
      </Container>
    );
  }
}

export default App;
