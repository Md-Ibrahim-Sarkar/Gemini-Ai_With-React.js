import { createContext } from 'react'
import runChat from '../Config/gimini'

export const Context = createContext()

const ContextProvider = ({children}) => {
 

  const onSent = async (prompt) => {
      await runChat(prompt)
    }

  onSent("who is ibrahim sarkar in bangladesh?")
  const contextValue = {
         
  }



  return (
  <Context.Provider  value = { contextValue } >
    {children}
  </Context.Provider>
  )


}

export default ContextProvider;