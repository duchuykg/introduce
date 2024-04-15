import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"
import { LINK_TO_SUBMIT } from "src/constants"

const usePostQuery = () => {
  const router = useRouter()
  const { slug } = router.query

  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })
  if (slug === LINK_TO_SUBMIT) {
    const datafordirect = {
      date: { start_date: '2024-04-13T17:58:29.311Z' },
      _id: '',
      type: [ ],
      slug: 'submit',
      tags: [ '' ],
      category: [],
      summary: '',
      level: '',
      title: '',
      status: [],
      createdTime: '2024-04-13T17:58:29.311Z',
      fullWidth: false,
      thumbnail: '',
      certificate: '',
      author: [],
      recordMap: ""
    } 
    return datafordirect;
  } 
  else if (data?.recordMap === "") return undefined
  return data
}

export default usePostQuery
