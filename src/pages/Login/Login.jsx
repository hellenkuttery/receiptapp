import React, { useContext } from 'react'
import { LoginContainer,FormContainer, StyledImg, Header ,StyledButton, StyledForm ,StyledInput} from './LoginStyle'
import Meal from "../../assets/meal.svg"
import { RecipeContext } from '../../Context/RecipeProvider'
import { useNavigate } from 'react-router-dom'
const Login = () => {

/* ----------------------------- Context consume ---------------------------- */
  const {name,password,setPassword,setName}=useContext(RecipeContext)
/* ------------------------------ Nagivate için ----------------------------- */
const navigate=useNavigate()
/* ------------------------------ handleSubmit ------------------------------ */
  const  handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("username",name)
    localStorage.setItem("password",password)
    navigate("/home")
  }
  /* -------------------------------------------------------------------------- */
  return (
    <LoginContainer>
      <FormContainer> 
        <StyledImg src={Meal}/>
       <Header> CLARUSWAY/RECIPE</Header>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="text" placeholder="username" onChange={(e)=>setName(e.target.value)} /> 
        <StyledInput type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> 
        <StyledButton>Login</StyledButton>
      </StyledForm>


      </FormContainer>
    </LoginContainer>
  )
}

export default Login