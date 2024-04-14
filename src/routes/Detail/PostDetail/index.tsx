import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"
import Category from "src/components/Category"
import styled from "@emotion/styled"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'

import usePostsQuery from "src/hooks/usePostsQuery"


type Props = {}

const PostDetail: React.FC<Props> = () => {
  const datas = usePostsQuery()
  const data = usePostQuery()
  if (!data) return null
  
  const category = (data.category && data.category?.[0]) || undefined
  const number = datas.length;
  let countBelow24Months = 0;
  let countAbove24Months = 0;
    
  datas.forEach((item : any) => {
    const experience = parseInt(item.experience);
    if (experience <= 24) {
      countBelow24Months++;
    } else {
      countAbove24Months++;
    }
  });
  
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  let countNewApplicants = 0;
  datas.forEach((item : any) => {
    const createdTime = new Date(item.createdTime);
    createdTime.setHours(0, 0, 0, 0); 

    if (createdTime.getTime() === today.getTime()) {
      countNewApplicants++;
    }
  });

//     const text = `
// - Nhu cầu tìm việc: ${number} ứng viên
// - Số lượng intern/fresher (dưới 2 năm kinh nghiệm): ${countBelow24Months} ứng viên 
// - Số lượng trên 2 năm kinh nghiệm: ${countAbove24Months} ứng viên
// - Số lượng CV mới hôm nay: ${countNewApplicants} CV

// ` + data.recordMap

  //#####################################################

  return (
    <StyledWrapper>
      <article className="markdown">
        {category && (
          <div css={{ marginBottom: "0.5rem" }}>
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        <div>
            <ReactMarkdown>
            
          {data.recordMap}
          </ReactMarkdown>
           
        </div>
        {data.type[0] === "Post" && (
          <>
            <Footer />
            <CommentBox data={data}/>
          </>
        )}
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`
