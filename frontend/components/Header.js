import styled from "styled-components";
import Nav from "./Nav";
import Search from "./Search";
import UserBar from "./UserBar";

const HeaderStyles = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export default function Header() {
  return (
  <HeaderStyles>
    <p>LOGO</p>
    <Search/>
    <Nav/>
    <UserBar/>
  </HeaderStyles>
  )
}