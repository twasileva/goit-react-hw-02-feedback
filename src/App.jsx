import React, { Component } from "react";
import { Section } from './Feedback/Section'
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Statistics } from './Feedback/Statistics'
import {Notification} from './Feedback/Notification'

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
  

  render(){
    const { good, neutral, bad } = this.state;

    const totalRating = ()=>{
      const values = Object.values(this.state); 
      let total = 0;

      for (const value of values) {
      total += value;
        }
        return total
    }

    const total = totalRating()
    
    const countPositiveFeedback = (good) => {
      let positive = Math.ceil(good * 100 / total)
      return positive;
    }

    const countPositiveFeedbackPercentage=countPositiveFeedback(good)
   

    return <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handelClick}/>
        {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage}/> : <Notification message="There is no feedback"/>}
      </Section>
  </div>
  }
}