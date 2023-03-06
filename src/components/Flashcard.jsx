import React, { useState } from "react";

const Flashcard = ({ flashcards }) => {
  const [answer, setAnswer] = useState(false);
  return (
    <div className="card" onClick={() => setAnswer(!answer)}>
      {answer ? (
        <div className="back">
          <h2> {flashcards.answer}</h2>
        </div>
      ) : (
        <div className="front">
          <h3>{flashcards.question}</h3>
        </div>
      )}
    </div>
  );
};
export default Flashcard;
