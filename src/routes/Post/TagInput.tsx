import styled from "@emotion/styled"
import React, { InputHTMLAttributes, ReactNode } from "react"
import { Emoji } from "src/components/Emoji"

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }


const TagInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <div className="top-input">
        <Emoji>💼</Emoji> Tag
      </div>
      <textarea
        className="mid"
        rows={1}
        placeholder="Fill your tag ..."
        {...props}
      ></textarea>
    </StyledWrapper>
  )
}

export default TagInput

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
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`
