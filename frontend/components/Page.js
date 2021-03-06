import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import Header from './Header'
const GlobalStyles = createGlobalStyle`
  html {
      --red: #ff1234;
      --black: #393939;
      --gray: #3A3A3A;
      --lightGray: #e1e1e1;
      --offWhite: #ededed;
      --max-width: 1000px;
      --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
      box-sizing: border-box;
      font-size: 62.5%;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2
    }

    a{ 
      text-decoration: none;
      color: var(--black);

      &:hover {
        text-decoration: underline;
      }
    }
    
    button {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export default function Page({children}) {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <InnerStyles>{children}</InnerStyles>
      {/* <Footer/> */}
    </div>
  )
}