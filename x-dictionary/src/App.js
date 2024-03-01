import React, { useState } from "react";

const App = () => {
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    {
      word: "Component",
      meaning: "A reusable building block in React.",
    },
    {
      word: "State",
      meaning: "An object that stores data for a component.",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleInputChange = () => {
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === inputText.toLowerCase()
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1> Dictionary App </h1>{" "}
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Search for a word"
      />
      <button onClick={handleInputChange}> Search </button>{" "}
      <h2> Definition: </h2> <p> {meaning} </p>{" "}
    </div>
  );
};

export default App;
