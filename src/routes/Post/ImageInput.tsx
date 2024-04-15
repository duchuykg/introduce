  import styled from "@emotion/styled"
  import React, { InputHTMLAttributes, ReactNode, useState } from "react"
  import { Emoji } from "src/components/Emoji"

  interface Props extends InputHTMLAttributes<HTMLInputElement> { }

  const ImageInput: React.FC<Props> = ({ ...props }) => {
    const [file, setFile] = useState("")

    return (      
        <StyledWrapper>
          <div className="top-input">
            <Emoji>🕵️‍♂️</Emoji> HÌNH ẢNH
          </div>
          {/* <input
            id="file" type="file"
            onChange={(e : any) => setFile(e.target.files[0])}
            multiple={false}
            {...props}
          /> */}

        </StyledWrapper>
    )
  }

  export default ImageInput

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
    > .btn-green {
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
    > code {
      display: block;
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 1rem;
      overflow-x: auto;
    }
    > .output-item {
      margin-bottom: 0.5rem;
    }
    > .output-item > span:first-of-type {
      font-weight: bold;
    }
    
  `
