import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "dark" ? "light" : "dark")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      <Emoji>{scheme === "dark" ? "🌙" : "☀️"}</Emoji>
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
