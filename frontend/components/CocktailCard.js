import Link from "next/link"
import styled from "styled-components"
import StarRating from "./StarRating"

const CocktailCardStyles = styled.div`
  border: 2px solid red;
  width: 25rem;
  height: 35rem;
`

export default function CocktailCard({cocktail}){
  return (
    <CocktailCardStyles>
      <div className="image-section">
        <img src={cocktail.photo?.publicUrlTransformed} alt={cocktail.photo?.altText}/>
      </div>
      <div className="data-section">
        <p>{cocktail.name}</p>
      </div>
      <Link href={`/cocktails/${cocktail.id}`}>to cocktail page</Link>
      <StarRating/>
    </CocktailCardStyles>
  )
}