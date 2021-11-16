import {useState, useEffect} from "react";
import Section from "./compoments/Section/";
import Statistics from "./compoments/Statistics";
import FeedBackOptions from "./compoments/FeedBackOptions";
import Notification from "./compoments/Notification/";
import useFeedBackState from "./Hooks/UseFeedBackS";
function App(){
  const [good, setGood] = useFeedBackState('good')
  const [neutral, setNeutral] = useFeedBackState('neutral')
  const [bad, setBad] = useFeedBackState('bad')
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    const totalFeedBack = good+bad+neutral
    setTotal(totalFeedBack)
  },[good,bad,neutral])
  function onLeaveFeedback(feedback){
    switch(feedback){
      case'good':
      setGood(s=>s+1)
      break;
      case'neutral':
      setNeutral(s=>s+1)
      break;
      case'bad':
      setBad(s=>s+1)
      break;
      default:break;
    }
  }
  function countPositiveFeedbackPercentage (total){
        return (good / total) * 100;
      };
  return(

    <Section title={'PLEASE LEAVE FEEDBACK'}>
      <FeedBackOptions
            options={['good','neutral','bad']}
            onLeaveFeedback={onLeaveFeedback}
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
                ? Math.round(countPositiveFeedbackPercentage(total))
                : 0
            }
          />
        )}
    </Section>        
  )
  
}
export default App