import styled from "@emotion/styled"
import Link from "next/link"
import useDropdown from "src/hooks/useDropdown"
import { LINK_TO_CLIENT, DATA_USER } from "src/constants"
import { useEffect, useState } from "react"
import { loginGithub } from "src/apis"

const NavBar: React.FC = () => {
  const handleReload = (e : any) => {
    if (e === "/post" || e === "/about" || e === "/profile" || e === "/") {
      window.location.href = `${e}`;
    }
  }
  const [userdata, setUserData] = useState(DATA_USER)
  const [isLogin, setIsLogin] = useState(false)
  const [utterancesParam, setUtterancesParam] = useState("");
  const logouts = [
    { id: 2, name: "Logout", to: "/" },
  ]
  const [dropdownLogout, logout, handleLogout] = useDropdown()
  const handleLogoutGithub = () => {
    setIsLogin(false)
    if (typeof localStorage !== "undefined" && localStorage.getItem("utterances-session")) {
      localStorage.clear();
    }
    window.location.href = "/";
  }

  const redirect_uri = "https://api.utteranc.es/authorize?redirect_uri=" + encodeURIComponent(LINK_TO_CLIENT);

  const links = [
    { id: 5, name: "📣 Submit Post", to: LINK_TO_CLIENT + "/submit" },
  ]
  const [dropdownRef, opened, handleOpen] = useDropdown()

  let utterancesParam1
  if (typeof localStorage !== "undefined" && localStorage.getItem("utterances-session")) {
    utterancesParam1 = localStorage.getItem("utterances-session")
  }
  if (typeof localStorage !== "undefined" && localStorage.getItem("user_data")) {
    const storedUserDataJSON = localStorage.getItem("user_data");
    if (storedUserDataJSON) {
      setUserData(JSON.parse(storedUserDataJSON));
    } 

  }
  const data = {
    "data": utterancesParam1
  }

  useEffect(() => {
    if ((isLogin && userdata.login !== "")) {
      setIsLogin(false)
      window.location.href = "/";
    }

    const fetchData = async () => {
      try {
        const dataUser = await loginGithub(data)

        setUserData(dataUser)
      } catch (error) {
        console.log(error);
      }
    };
    const urlParams = new URLSearchParams(window.location.search);
    const utterancesValue = urlParams.get("utterances");
    if (utterancesValue) {
      setUtterancesParam(utterancesValue);
      localStorage.setItem("utterances-session", utterancesValue);
      setIsLogin(true)
    }

    if (localStorage.getItem("utterances-session")) {
      setIsLogin(true)
      
    }
    
    fetchData();
  }, [isLogin])
  return (
    <StyledWrapper>
      <div className="wrapper">
        {isLogin && userdata.login !== "" ?
          <div className="more-button" ref={dropdownLogout} onClick={handleLogout} >
            <a>
              {userdata.login}
              
            </a>
          </div>
          
          :
          <div className="more-button">
            <a
              className="btn btn-primary"
              href={redirect_uri}
              target="_top"
            >
              Sign in with GitHub
            </a>
          </div>
        } 
        <Link className="more-button" href={"/about"}>Analyst</Link>
        {isLogin && userdata.login !== ""
        ? 
        <div>
          <Link onClick={() => handleReload("/profile")} href={"/profile"} className="more-button"> Profile</Link>
        </div>
        : <></>
        }
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
        </div>
      )}

      {logout && (
        <div className="content">
          {logouts.map((link, i) => (
            <div className="item" key={i}>
              <Link className="item" onClick={() => handleLogoutGithub()} href={link.to}>
                {link.name}
              </Link>
            </div>
          ))}
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
