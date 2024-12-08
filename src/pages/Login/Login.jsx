import React, { useContext } from 'react'
import { LoginContainer,FormContainer, StyledImg, Header ,StyledButton, StyledForm ,StyledInput} from './LoginStyle'
import Meal from "../../assets/meal.svg"
import { RecipeContext } from '../../Context/RecipeProvider'
const Login = () => {
  const {name,password,setPassword,setName}=useContext(RecipeContext)
  const  handleSubmit=()=>{
    localStorage.setItem("username",name);
    localStorage.setItem("password",password)
  }
  return (
    <LoginContainer>
      <FormContainer> 
        <StyledImg src={Meal}/>
       <Header> CLARUSWAY/RECIPE</Header>
      <StyledForm onSubmit={()=>handleSubmit()}>
        <StyledInput type="text" placeholder="username" onChange={(e)=>setName(e.target.value)} /> 
        <StyledInput type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/> 
        <StyledButton>Login</StyledButton>
      </StyledForm>


      </FormContainer>
    </LoginContainer>
  )
}

export default Login