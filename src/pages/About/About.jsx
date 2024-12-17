import React from 'react'
import { AboutContainer,InfoContainer,StyledImage ,HeaderContainer} from './AboutStyle'
import coding from "../../assets/coding.svg"

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={coding}/>
      <HeaderContainer>
        <h1>About Software Developer</h1>
      </HeaderContainer>
      <InfoContainer>
      <h2>Hi, I'am Hellen Kuttery</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
            Java, Hibernate, SpringBoot, AWS Services.
          </h4>
          <h2>
            <a href="mailto:helen@clarusway.com">Send email</a> :
            helen@clarusway.com
          </h2>
          {/* whatsapp://tel:3216541234 */}
      </InfoContainer>
    </AboutContainer>
  )
}

export default About