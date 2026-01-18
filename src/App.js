import React, { useState, useRef } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        break;
    }


    setMessage("Відгук прийнято!");

    if (messageRef.current) {
      messageRef.current.style.backgroundColor = "lightgreen";
      messageRef.current.style.padding = "10px";
      messageRef.current.style.borderRadius = "5px";
      messageRef.current.style.fontWeight = "bold";
      messageRef.current.style.transition = "all 0.3s ease-in-out";
      messageRef.current.style.transform = "scale(1.2)";
      setTimeout(() => {
        if (messageRef.current) messageRef.current.style.transform = "scale(1)";
      }, 300);
    }

    setTimeout(() => setMessage(""), 2000); // зникає через 2 сек
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback}
          />
          {message && <p ref={messageRef}>{message}</p>}
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
};

export default App;
