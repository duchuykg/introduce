import { CONFIG } from "site.config"
import MetaConfig from "src/components/MetaConfig"
import Profile from "src/routes/Profile"
import { NextPageWithLayout } from "src/types"

const ProfileRoutePage: NextPageWithLayout = () => {
  return (
    <>
      <MetaConfig
        title="Profile"
        description="User profile"
        type="Page"
        url={`${CONFIG.link}/profile`}
      />
      <Profile />
    </>
  )
}

export default ProfileRoutePage
