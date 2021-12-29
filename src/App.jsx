import React, { Component } from "react";
// import { FeedbackStatistics } from './Feedback/FeedbackStatistics'

export class App extends Component { 
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  handelClick = (key) => {
    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  }

  countTotalFeedback(obj){
  const values = Object.values(obj); 
  let totalRating = 0;

  for (const value of values) {
  totalRating += value;
    }
    return totalRating
  }

  countPositiveFeedbackPercentage() {
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    return <div>
    <h1>Please leave feedback</h1>
      <button type="button" onClick={()=>this.handelClick('good')}>Good</button>
      <button type="button" onClick={()=>this.handelClick('neutral')}>Neutral</button>
      <button type="button" onClick={()=>this.handelClick('bad')}>Bad</button>
    <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>Total: {this.countTotalFeedback(this.state)}<span>{this.totalRating }</span></p>
      <p>Positive feedback: <span></span></p>
  </div>
  }
}