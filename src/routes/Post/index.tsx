import React, { useState } from "react"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"
import TitleInput from "./TitleInput"
import TagInput from "./TagInput"
import CategoryInput from "./CategoryInput"
import CertificateInput from "./CertificateInput"

import LevelInput from "./LevelInput"
import SummaryInput from "./SummaryInput"
import ImageInput from "./ImageInput"
import { postPost } from "src/apis"

const Post: React.FC = () => {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [category, setCategory] = useState([])
  const [level, setLevel] = useState("")
  const [certificate, setCertificate] = useState("")
  const [summary, setSummary] = useState("")
  const [thumbnail, setThumbnail] = useState("")

  const [isPost, setIsPost] = useState(false) 

  const handleChange = (e : any) => {
    const selectedCategory = e.target.value.split(","); // Chuyển đổi chuỗi thành mảng string bằng cách tách chuỗi theo dấu phẩy
    setCategory(selectedCategory); // Gán giá trị mảng string cho category
  };
  
  const handlePost = async () => {
    setIsPost(true)
    let slug = await postPost(title, tags, category, level, certificate, summary, thumbnail)
    // window.location.href = `/${slug}`
    window.location.href = `/post`

  }

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="top">
          <Emoji>📝</Emoji>
        </div>
        <div className="text">POST ACHIEVMENT</div>
        <div className="form">
        
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CategoryInput value={category} onChange={handleChange} />
          <TagInput value={tags} onChange={(e) => setTags(e.target.value)} />
          <CertificateInput value={certificate} onChange={(e) => setCertificate(e.target.value)} />
          <LevelInput value={level} onChange={(e) => setLevel(e.target.value)} />
           <SummaryInput
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
           <ImageInput
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
         
          <div className="form-submit">
            {isPost || (
              <button
                className="btn-submit"
                onClick={handlePost} // Use handleRegister function for onClick event
                disabled={isPost} // Disable button when registering
              >
                Post
              </button>
            )}
            {isPost && (
              <p className="btn-submit1">Please wait a moment</p>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Post

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
  }
`
