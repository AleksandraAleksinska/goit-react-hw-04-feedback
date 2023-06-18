import { Fragment } from "react";
import { useState } from "react";
import React from 'react';
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import options from "data/ButtonOptions";
import Section from "./Section/Section";

const App = () => {

  const [state, setState] = useState ( {
    good: 0,
    neutral: 0,
    bad: 0
  })

  const clickHandler = (type) => {
    setState(
      prevState => ({
        ...prevState, [type]: prevState[type] + 1
      }),
    );
   }

  const countTotalFeedback = () => state.good + state.neutral + state.bad;

  const countPositiveFeedbackPercentage = () => Math.round(state.good / (countTotalFeedback()) * 100);

 

  return (
    <Fragment>
         <Section title='Please leave feedback'>

           <FeedbackOptions 
             options = {options}
             onLeaveFeedback = {clickHandler}
           />
        
           <Statistics 
             good = {state.good}
             neutral = {state.neutral}
             bad = {state.bad}
             total = {countTotalFeedback()}
             positivePercentage = {countPositiveFeedbackPercentage()}
           />

         </Section>
       </Fragment> 
  )
}

export default App;