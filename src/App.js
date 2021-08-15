import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐒": "Monkey",
  "🦊": "Fox",
  "🦄": "Unicorn",
  "🦒": "Giraffe",
  "🐘": "Elephant",
  "🐐": "Goat",
  "🐪": "Camel",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth"
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Into The Zoo</h1>

      <input
        placeholder={"Search for the animal given below."}
        onChange={inputEventHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>Click on the emojis to see their names</h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
