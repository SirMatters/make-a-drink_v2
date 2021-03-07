import Link from 'next/link'
import styled from 'styled-components'

const NavStyles = styled.nav`
  display: flex;
  justify-content: right;
`
export default function Nav() {
  return (
    <NavStyles>
      <Link href="#">New Cocktail</Link>
      <Link href="#">All Cocktails</Link>
    </NavStyles>
  )
}