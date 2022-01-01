import React from "react"

export const Statistics = ({good,neutral,bad, total,positivePercentage }) => {
  return <div>
    <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: <span>{neutral}</span></p>
      <p>Bad: <span>{bad}</span></p>
      <p>Total:<span>{total}</span></p>
      <p>Positive feedback: <span> {total>0?`${positivePercentage}%`: 0}</span></p>
    
  </div>
}