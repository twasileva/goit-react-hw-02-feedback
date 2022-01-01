import React from "react"

export const FeedbackOptions = ({good, neutral, bad, onLeaveFeedback}) => {
  return <div>
      <button type="button" onClick={()=>onLeaveFeedback('good')}>Good</button>
      <button type="button" 
      onClick={()=>onLeaveFeedback('neutral')}>Neutral</button>
      <button type="button" onClick={()=>onLeaveFeedback('bad')}>Bad</button>
    </div>

}