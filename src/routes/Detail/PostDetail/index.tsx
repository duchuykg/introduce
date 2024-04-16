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
import { ColumnChart } from "src/components/ColumnChart"
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
  const CATEGORYS1 = [
    "TOÁN",
    "VẬT LÝ",
    "VĂN",
    "CHỮ ĐẸP",
    "CỜ VUA",
    "ANH",
    "TIN HỌC",
    "GDCD",
    "TOÀN DIỆN"
  ]

  const CATEGORYS2 = [
    "TOÁN",
    "VẬT LÝ",
    "VĂN",
    "CHỮ ĐẸP",
    "CỜ VUA",
    "TIẾNG ANH",
    "TIN HỌC",
    "GIÁO DỤC CÔNG DÂN",
    "TOÀN DIỆN"
  ]

  const CLASS = [
    "MẪU GIÁO",
    "LỚP 1",
    "LỚP 2",
    "LỚP 3",
    "LỚP 4",
    "LỚP 5",
    "LỚP 6",
    "LỚP 7",
    "LỚP 8",
    "LỚP 9",
    "LỚP 10",
    "LỚP 11",
    "LỚP 12"
  ];

  const LEVEL = [
    "CẤP TRƯỜNG",
    "CẤP HUYỆN",
    "CẤP THÀNH PHỐ",
    "CẤP TỈNH",
    "CẤP QUỐC GIA",
  ];

  const CER = [
    "GIẢI ĐẶC BIỆT",
    "GIẢI NHẤT",
    "GIẢI NHÌ",
    "GIẢI BA",
    "GIẢI KHUYẾN KHÍCH",
    "HỌC SINH GIỎI",
    "CHÁU NGOAN BÁC HỒ",
    "NONE"
  ];

  const CER1 = [
    "ĐẶC BIỆT",
    "GIẢI NHẤT",
    "GIẢI NHÌ",
    "GIẢI BA",
    "KK",
    "HSG",
    "CHÁU NGOAN BÁC HỒ",
    "NONE"
  ];
  
  const categoryCounts: { [key: string]: number } = {};
  const classCounts: { [key: string]: number } = {};
  const levelCounts: { [key: string]: number } = {};
  const cerCounts: { [key: string]: number } = {};

  datas.forEach((item : any) => {
    const category = item.category;
    const classc = item.tags;
    const level = item.level;
    const cer = item.certificate;

    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }

    if (classCounts[classc]) {
      classCounts[classc]++;
    } else {
      classCounts[classc] = 1;
    }

    if (levelCounts[level]) {
      levelCounts[level]++;
    } else {
      levelCounts[level] = 1;
    }

    if (cerCounts[cer]) {
      cerCounts[cer]++;
    } else {
      cerCounts[cer] = 1;
    }
  })
  categoryCounts["TIẾNG ANH"] = 1;
  const CATEGORYS2COUNT = CATEGORYS2.map((category) => categoryCounts[category] || 0);
  const CLASSCOUNT = CLASS.map((tag) => classCounts[tag] || 0);
  const LEVELCOUNT = LEVEL.map((level) => levelCounts[level] || 0);
  const CERCOUNT = CER.map((cer) => cerCounts[cer] || 0);


  
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
        {data.slug === "about" ? 
        <div>
        <ColumnChart name = "THỐNG KÊ SỐ LƯỢNG GIẤY KHEN THEO MÔN HỌC" columnNames={CATEGORYS1} values={CATEGORYS2COUNT}/> 
        <ColumnChart name = "THỐNG KÊ SỐ LƯỢNG GIẤY KHEN THEO LỚP" columnNames={CLASS} values={CLASSCOUNT}/> 
        <ColumnChart name = "THỐNG KÊ SỐ LƯỢNG GIẤY KHEN THEO GIẢI" columnNames={LEVEL} values={LEVELCOUNT}/> 
        <ColumnChart name = "THỐNG KÊ SỐ LƯỢNG THÀNH TỰU THEO CẤP" columnNames={CER1} values={CERCOUNT}/> 



        </div>
        : 
        <></>}
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
