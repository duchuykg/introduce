import styled from "@emotion/styled"
import Link from "next/link"
import useDropdown from "src/hooks/useDropdown"
import { LINK_TO_CLIENT } from "src/constants"

const NavBar: React.FC = () => {
  const links = [
    // { id: 2, name: "📝 Register", to: LINK_TO_CLIENT + "/register" },
    // { id: 3, name: "✉️ Receive CV", to: LINK_TO_CLIENT + "/receive" },
    // { id: 4, name: "📰 New Feed", to: LINK_TO_CLIENT + "/post" },
    { id: 5, name: "📣 Submit Post", to: LINK_TO_CLIENT + "/submit" },
  ]
  const [dropdownRef, opened, handleOpen] = useDropdown()

  return (
    <StyledWrapper>
      <div className="wrapper">
        {/* <Link href={"/submit"}> 📝 </Link> */}
        <Link href={"/about"}>ANALYST</Link>
        {/* <div ref={dropdownRef} onClick={handleOpen} className="more-button">
          More
        </div> */}
      </div>

      {opened && (
        <div className="content">
          {links.map((link, i) => (
            <div className="item" key={i}>
              <Link className="item" href={link.to}>
                {link.name}
              </Link>
            </div>
          ))}
          {/* <div className="item" key={6}>
            <a
              className="btn btn-primary"
              href="https://api.utteranc.es/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F2ceda70a5ecb5f688e71"
              target="_top"
            >
              Sign in with GitHub
            </a>
          </div> */}
        </div>
      )}
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-direction: row;
  > .wrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray11};
  }
  .more-button {
    margin-left: 0.5rem;
  }
  > .content {
    position: absolute;
    z-index: 40;
    padding: 0.25rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray10};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  > .item {
    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    white-space: nowrap;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.gray4};
    }
  }
  .icon {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
