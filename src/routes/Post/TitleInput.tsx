import styled from "@emotion/styled"
import React, { InputHTMLAttributes, ReactNode } from "react"
import { Emoji } from "src/components/Emoji"

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

const TitleInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <div className="top-input">
        <Emoji>🕵️‍♂️</Emoji> Title 
      </div>
      <input
        className="mid"
        type="text"
        placeholder="Fill your title ..."
        {...props}
      />
    </StyledWrapper>
  )
}

export default TitleInput

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  > .top-input {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
    font-size: 1rem; 
  }
  > .mid {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`
