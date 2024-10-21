/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import runChat from '../Config/gimini'

export const Context = createContext()

const ContextProvider = ({children}) => {
 

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData,setResultData] = useState("")


  const onSent = async (prompt) => {
      await runChat(input)
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
    setInput



  }



  return (
  <Context.Provider  value = { contextValue } >
    {children}
  </Context.Provider>
  )


}

export default ContextProvider;