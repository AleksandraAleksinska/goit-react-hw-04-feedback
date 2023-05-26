import { Fragment } from "react";
import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import options from "data/ButtonOptions";
import Section from "./Section/Section";

export default class App extends Component {

 state = {
      good: 0,
      neutral: 0,
      bad: 0
 }
  
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  
  countPositiveFeedbackPercentage = () => Math.round(this.state.good / (this.countTotalFeedback()) * 100);
  
  
  clickHandler = (type) => {
    this.setState(
      prevState => ({
        [type]: prevState[type] + 1
      }),
    );
  
  }   

  render () {

    return (
      <Fragment>
        <Section title='Please leave feedback'>

        <FeedbackOptions 
          options = {options}
          onLeaveFeedback = {this.clickHandler}
        />
        
        <Statistics 
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}
        />

        </Section>
      </Fragment> 
      
    )
  }
}

