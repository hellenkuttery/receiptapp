import React, { createContext, useState } from 'react'

export const RecipeContext=createContext()

const RecipeProvider = ({children}) => {

    // Login için gerekli usernam ve password localstoragedan getirme

    const [name,setName]=useState(localStorage.getItem("username") || "")
    const [password,setPassword]=useState(localStorage.getItem("password") || "")
  return (
    <RecipeContext.Provider value={{name,password,setName,setPassword}}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider