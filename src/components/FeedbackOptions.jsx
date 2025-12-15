const buttonColors = {
  good: "#4CAF50",     
  neutral: "#FFC107",  
  bad: "#F44336",     
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        style={{
          margin: "5px",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: buttonColors[option],
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
