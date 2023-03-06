import React from "react";
import { useState } from "react";
import "./App.css";

import FlashCard from "./components/FlashCard";
function App() {
  const [count, setCount] = useState(1);
  const buyDoubleStuffed = () => {
    if ((count = 11)) {
      setCount(1);
    }
  };
  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "Cats are part of what animal family?",
      answer: "Felidae family",
    },
    {
      id: 2,
      question: "Cats only eat meat",
      answer: "True",
    },
    {
      id: 3,
      question: "A group of cats is called a?",
      answer: "Clowder",
    },
    {
      id: 4,
      question: "Baby cats may be called?",
      answer: "Kittens",
    },
    {
      id: 5,
      question: "Male cats are normally called?",
      answer: "Tom/Tom cat",
    },
    {
      id: 6,
      question: "Female cats are normally called?",
      answer: "Queens",
    },
    {
      id: 7,
      question:
        "The correct word for a female cat that is pregnant or nursing kittens is?",
      answer: "Queen",
    },
    {
      id: 8,
      question: "A cats gestation period is?",
      answer: "63-65 days",
    },
    {
      id: 9,
      question: "Cats hate getting wet.",
      answer: "True",
    },
    {
      id: 10,
      question: "How much can a cat live?",
      answer: "12-18 years",
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h2>The Ultimate Cat Quiz</h2>
        <p>How much do you know about cats?</p>
        <p>Test your cat knowledge here!</p>
        <p>Number of cards: 10</p>
      </div>
      <div className="body">
        <div className="flashcardsList">
          {flashcards
            .filter((flashcard) => flashcard.id === count)
            .map((flashcard) => (
              <FlashCard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
      </div>
      <button className="next" onClick={() => setCount(count + 1)}>
        →
      </button>
    </div>
  );
}
export default App;
