import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"
import local from "next/font/local"
import axios from "axios"
import { LINK_TO_SERVER, DATA_USER } from "src/constants"
import Image from "next/image"
import ProfilePage from "./ProfilePage"

const Profile: React.FC = () => {
  const [userdata, setUserData] = useState(DATA_USER)

  let utterancesParam
  if (typeof localStorage !== "undefined" && localStorage.getItem("utterances-session")) {
    utterancesParam = localStorage.getItem("utterances-session")
  }
  const data = {
    "data": utterancesParam
  }

  

  useEffect(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("user_data")) {
        const storedUserDataJSON = localStorage.getItem("user_data");
        if (storedUserDataJSON) {
           setUserData(JSON.parse(storedUserDataJSON));
        
        } 
    
      }
  }, [userdata.login]);  
  
  return (
    <StyledWrapper>
      <div className="wrapper">
            <ProfilePage userdata={userdata}/>
      </div>
    </StyledWrapper>
  )
}

export default Profile

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    .top {
      display: flex;
      align-items: center;
      font-size: 3.75rem;
      line-height: 1;
      > div {
        margin: 0.5rem;
      }
    }
    .text {
      font-size: 1.875rem;
      line-height: 2.25rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
    .form {
      width: 90%; 
      color: ${({ theme }) => theme.colors.gray11};

      @media (min-width: 768px) { 
        width: 70%;
    }
    .form-submit {
      text-align: center;
    }
    .btn-submit {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.blue4};
      font-size: 1rem; /* adjust this value to your preference */
    }
    .btn-submit1 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.green4};
      font-size: 1rem; /* adjust this value to your preference */
    }
    .wrapper {
      display: flex;
      padding-top: 5rem;
      padding-bottom: 5rem;
      flex-direction: column;
      gap: 2.5rem;
      align-items: center;
      > .top {
        display: flex;
        align-items: center;
        font-size: 3.75rem;
        line-height: 1;
      }
      > .text {
        font-size: 1.875rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
  }
`