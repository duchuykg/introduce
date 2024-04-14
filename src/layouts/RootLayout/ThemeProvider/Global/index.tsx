import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: ${theme.colors.gray2};
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }

        .markdown h1 {
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 800;
          }
          
          .markdown h2 {
          font-size: 1.8rem;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          }
          
          .markdown h3 {
          font-size: 1.6rem;
          margin-top: 1rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
          }
          
          .markdown h4 {
          font-size: 1.4rem;
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
          font-weight: 500;
          }
          
          .markdown h5 {
          font-size: 1.2rem;
          margin-top: 0.6rem;
          margin-bottom: 0.6rem;
          font-weight: 400;
          }
          
          .markdown h6 {
          font-size: 1rem;
          margin-top: 0.4rem;
          margin-bottom: 0.4rem;
          font-weight: 300;
          }

        .markdown a {
          color: #0366d6;
          text-decoration: none;
        }

        .markdown a:hover {
          text-decoration: underline;
        }

        .markdown pre {
          background-color: #f6f8fa;
          padding: 1rem;
          border-radius: 0.25rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          overflow: auto;
        }

        .markdown code {
          font-size: 0.9rem;
        }

        .markdown ul,
        .markdown ol {
          padding-left: 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .markdown blockquote {
          margin: 1rem 0;
          padding: 0.5rem 1rem;
          border-left: 0.25rem solid #dfe2e5;
          color: #6a737d;
          background-color: #f6f8fa;
        }

        .markdown p code {
          background-color: #f6f8fa;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9rem;
        }
      `}
    />
  )
}
