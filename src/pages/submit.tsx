import { CONFIG } from "site.config"
import MetaConfig from "src/components/MetaConfig"
import Post from "src/routes/Post"
import { NextPageWithLayout } from "src/types"

const SubmitPage: NextPageWithLayout = () => {
  return (
    <>
      <MetaConfig
        title="Submit Post"
        description="Submit achievement"
        type="Page"
        url={`${CONFIG.link}/submit`}
      />
      <Post />
    </>
  )
}

export default SubmitPage
