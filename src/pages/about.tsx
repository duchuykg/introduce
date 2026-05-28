import { dehydrate } from "@tanstack/react-query"
import { GetStaticProps } from "next"
import { CONFIG } from "site.config"
import { getPosts } from "src/apis"
import MetaConfig from "src/components/MetaConfig"
import { queryKey } from "src/constants/queryKey"
import { queryClient } from "src/libs/react-query"
import { filterPosts } from "src/libs/utils/notion"
import Detail from "src/routes/Detail"
import { NextPageWithLayout } from "src/types"

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()
  const feedPosts = filterPosts(posts)

  await queryClient.prefetchQuery(queryKey.posts(), () => feedPosts)
  await queryClient.prefetchQuery(queryKey.post("about"), () => ({
    date: { start_date: "2022-06-09" },
    _id: "about",
    type: ["Page"],
    slug: "about",
    tags: [""],
    category: [],
    summary: "Achievement statistics",
    level: "",
    title: "Analyst",
    status: ["Public"],
    createdTime: "Sat Sep 02 2023 07:57:04 GMT+0700 (Indochina Time)",
    fullWidth: false,
    thumbnail: "",
    certificate: "",
    author: [],
    recordMap: "",
  }))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  }
}

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaConfig
        title="Analyst"
        description="Achievement statistics"
        type="Page"
        url={`${CONFIG.link}/about`}
      />
      <Detail />
    </>
  )
}

export default AboutPage
