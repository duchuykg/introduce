import React, { useState } from "react"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"
import TitleInput from "./TitleInput"
import TagInput from "./TagInput"
import CategoryInput from "./CategoryInput"
import CertificateInput from "./CertificateInput"
import axios from 'axios';
import LevelInput from "./LevelInput"
import SummaryInput from "./SummaryInput"
import ImageInput from "./ImageInput"
import { postPost } from "src/apis"
import Image from "next/image"

const Post: React.FC = () => {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [category, setCategory] = useState([])
  const [level, setLevel] = useState("")
  const [certificate, setCertificate] = useState("")
  const [summary, setSummary] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [isPost, setIsPost] = useState(false) 
  const [file, setFile] = useState("")
  const [res, setRes] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  const options_TAG = [{ value: "", label: "LỚP ..." }];

  for (let i = 1; i <= 12; i++) {
    const option = {
      value: `LỚP ${i}`,
      label: `LỚP ${i}`,
    };

    options_TAG.push(option);
  }
  const options_CER = [
    { value: "", label: "GIẢI ..."},
    { value: "GIẢI ĐẶC BIỆT", label: "GIẢI ĐẶC BIỆT" },
    { value: "GIẢI NHẤT", label: "GIẢI NHẤT" },
    { value: "GIẢI NHÌ", label: "GIẢI NHÌ" },
    { value: "GIẢI BA", label: "GIẢI BA" },
    { value: "GIẢI KHUYẾN KHÍCH", label: "GIẢI KHUYẾN KHÍCH" },
    { value: "HỌC SINH GIỎI", label: "HỌC SINH GIỎI" },
    { value: "NONE", label: "NONE" },
  ];

  const options_LEVEL = [
    { value: "", label: "CẤP ..."},
    { value: "CẤP TRƯỜNG", label: "CẤP TRƯỜNG" },
    { value: "CẤP HUYỆN", label: "CẤP HUYỆN" },
    { value: "CẤP THÀNH PHỐ", label: "CẤP THÀNH PHỐ" },
    { value: "CẤP TỈNH", label: "CẤP TỈNH" },
    { value: "CẤP QUỐC GIA", label: "CẤP QUỐC GIA" },
    { value: "NONE", label: "NONE" },
  ];
  
  

  const handleTagChange = (selectedTag : any) => {
    setTags(selectedTag);
  };
  const handleCerChange = (selectedCer : any) => {
    setCertificate(selectedCer);
  };
  const handleLevelChange = (selectedCer : any) => {
    setLevel(selectedCer);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);

      const data = new FormData();
      console.log(file)
      if (file) {
        data.append("my_file", file);
      }
      console.log(data)
      const res = await axios.post("http://localhost:4000/upload", data);
      setThumbnail(res.data.url)
      
    } catch (error : any) {
      alert(error.message);
    }  finally {
      setLoading(false);
    }
  };

  const handleChange = (e : any) => {
    const selectedCategory = e.target.value.split(","); // Chuyển đổi chuỗi thành mảng string bằng cách tách chuỗi theo dấu phẩy
    setCategory(selectedCategory); // Gán giá trị mảng string cho category
  };
  
  const handlePost = async () => {
    handleUpload
    setIsPost(true)
    let slug = await postPost(title, tags, category, level, certificate, summary, thumbnail)
    window.location.href = `/${slug}`
  }

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="top">
          <Emoji>📝</Emoji>
        </div>
        <div className="text">POST ACHIEVMENT</div>
        <div className="form">
          <ImageInput
            /> 
            <div style={{ display: 'flex' }}>
              <input
                id="file" type="file"
                onChange={(e : any) =>
                  setFile(e.target.files[0])
                }
                multiple={false}
              />

              <div className="form-submit" style={{ marginLeft: 'auto' }} >
                <button
                  className="btn-submit1"
                  onClick={handleUpload} // Use handleRegister function for onClick event
                >
                  {loading ? "Uploading ..." : "Upload"}
                </button>
              
              </div>
              
            </div>
            {
              thumbnail ? 
                <Image
                src={thumbnail}
                alt={title}
                width={600} 
                height={400} 
              />
              : <></>
            }
          
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CategoryInput value={category} onChange={handleChange} />
          <TagInput value={tags} onChange={handleTagChange} options={options_TAG}/>
          <CertificateInput value={certificate} onChange={handleCerChange} options={options_CER}/>
          <LevelInput value={level} onChange={handleLevelChange} options={options_LEVEL} />
           <SummaryInput
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
           
          <code>
            {Object.keys(res).length > 0
              ? Object.keys(res).map((key) => (
                  <p className="output-item" key={key}>
                    <span>{key}:</span>
                    <span>
                      {typeof res[key] === "object" ? "object" : res[key]}
                    </span>
                  </p>
                ))
              : null}
          </code>
          
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
