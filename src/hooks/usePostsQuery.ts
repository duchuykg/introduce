import { useQuery } from "@tanstack/react-query"
import { queryKey } from "src/constants/queryKey"
import { TPost } from "src/types"

const usePostsQuery = () => { 
  const { data } = useQuery({
    queryKey: queryKey.posts(),
    initialData: [] as TPost[],
    enabled: false,
  }) 
  type CertificateOrder =
    | "GIẢI NHẤT"
    | "GIẢI ĐẶC BIỆT"
    | "GIẢI NHÌ"
    | "GIẢI BA"
    | "NONE"
    | "GIẢI KHUYẾN KHÍCH"
    | "HỌC SINH GIỎI";

  type LevelOrder =
    | "CẤP QUỐC GIA"
    | "CẤP TỈNH"
    | "CẤP THÀNH PHỐ"
    | "CẤP HUYỆN"
    | "CẤP TRƯỜNG";

  // Sắp xếp dữ liệu theo giấy chứng nhận và cấp độ
  const sortedData = data?.sort((a, b) => {
    const certificateOrder: { [key in CertificateOrder]: number } = {
      "GIẢI NHẤT": 0,
      "GIẢI ĐẶC BIỆT": 1,
      "GIẢI NHÌ": 2,
      "GIẢI BA": 3,
      "NONE": 4,
      "GIẢI KHUYẾN KHÍCH": 5,
      "HỌC SINH GIỎI": 6,
    };

    const levelOrder: { [key in LevelOrder]: number } = {
      "CẤP QUỐC GIA": 0,
      "CẤP TỈNH": 1,
      "CẤP THÀNH PHỐ": 2,
      "CẤP HUYỆN": 3,
      "CẤP TRƯỜNG": 4,
    };

    const certificateA = a.certificate as CertificateOrder;
    const certificateB = b.certificate as CertificateOrder;
    const levelA = a.level as LevelOrder;
    const levelB = b.level as LevelOrder;

    // So sánh giấy chứng nhận trước
    const certificateComparison = certificateOrder[certificateA] - certificateOrder[certificateB];
    if (certificateComparison !== 0) {
      return certificateComparison;
    }

    // Nếu giấy chứng nhận giống nhau, tiếp tục so sánh cấp độ
    return levelOrder[levelA] - levelOrder[levelB];
  });

  if (!sortedData) {
    throw new Error("Posts data is not found");
  }

  return sortedData;
  
}

export default usePostsQuery
