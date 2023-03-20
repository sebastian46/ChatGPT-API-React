import { useState } from "react";
import React from "react";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";
import Translation from "./components/Translation";
import './App.css';

function App() {  
  const [result, setResult] = useState("");
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");

  const configuration = new Configuration({
    organization: process.env.REACT_APP_OPENAI_ORG_ID,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const selectOption = (option) => {
    setOption(option);
  };

  const generateResponse = async () => {
    let object = { ...option, prompt: input };
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation generateResponse={generateResponse} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
