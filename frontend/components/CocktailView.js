import styled from "styled-components"

const CocktailViewStyles = styled.div``

export default function CocktailView({ id }) {
  return (
    <CocktailViewStyles>
      {id}
    </CocktailViewStyles>
  )
}