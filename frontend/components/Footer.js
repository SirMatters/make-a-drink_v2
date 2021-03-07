import styled from "styled-components"

const FooterStyles = styled.footer`
  background-color: red;
  border: 2px solid green;
`

export default function Footer() {
  return (
    <FooterStyles>
      <p>by Sir Matters</p>
    </FooterStyles>
  )
}