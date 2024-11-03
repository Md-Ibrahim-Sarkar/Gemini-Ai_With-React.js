/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import runChat from '../Config/gemini'

export const Context = createContext()

const ContextProvider = ({ children }) => {

  // done
  const [input, setInput] = useState("");

  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("")

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord)
    }, 75 * index);
  }

  const newChat = () => {
    setLoading(false)
    setShowResult(false)
  }
  const onSent = async (prompt) => {
    setInput('')
    setResultData('');
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt)
    } else {
      setPrevPrompts(prev => [...prev, input])
      setRecentPrompt(input)
      response = await runChat(input)
    }
    let responseArray = response.split('**');
    let newResponse = '';

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponseTwo = newResponse.split('*').join('</br>');
    let newResponseArray = newResponseTwo.split(' ');

    let wordsProcessed = 0;
    const totalWords = newResponseArray.length;

    const checkIfDone = () => {
      wordsProcessed += 1;
      if (wordsProcessed === totalWords) {
        setLoading(false);
        setInput('');
      }
    };

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ", checkIfDone);
    }

    setLoading(false);
  }


  const contextValue = {

    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat


  }



  return (
    <Context.Provider value={contextValue} >
      {children}
    </Context.Provider>
  )


}

export default ContextProvider;