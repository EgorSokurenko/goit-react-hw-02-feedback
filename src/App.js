import React from "react";
import { Component } from "react";
import Section from "./compoments/Section/";
import Statistics from "./compoments/Statistics";
import FeedBackOptions from "./compoments/FeedBackOptions";
import Notification from "./compoments/Notification/";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedBack = (feedback) => {
    this.setState({ [feedback]: this.state[feedback] + 1 });
  };
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = (total) => {
    return (this.state.good / total) * 100;
  };
  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedBack}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={
              total
                ? Math.round(this.countPositiveFeedbackPercentage(total))
                : 0
            }
          />
        )}
      </Section>
    );
  }
}

export default App;
