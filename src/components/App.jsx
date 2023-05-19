import { Fragment } from "react";
import { Component } from "react";

// export const App = () => {
//   return (
//   <Fragment>
//     <div>
//     </div>
//   </Fragment>
//   );
// };

class App extends Component {

  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => Math.round(this.state.good / (this.countTotalFeedback()) * 100);
  
  

  render () {
    return (
      <Fragment>
        <section>Please leave feedback </section>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total:{this.countTotalFeedback()}</span>
        <span>Positive feedback: {this.countPositiveFeedbackPercentage()} %</span>
      </Fragment> 
      
    )
  }
}

export default App;