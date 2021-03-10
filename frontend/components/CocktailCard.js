import Link from "next/link"
import styled from "styled-components"
import StarRating from "./StarRating"

const CocktailCardStyles = styled.div`
  width: 25rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  box-shadow: 10px 10px 8px #888888;

  .image-section {
    height: 100%;
    width: 100%;
    position: relative;

    .cocktail-image {
      background-image: ${(props) => `url(${props.img})`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 28rem;
    }

    .cocktail-rating {
      position: absolute;
      color: red;
      top: 25rem;
      left: 18.5rem;
    }
  }
  .data-section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
  }
`

export default function CocktailCard({cocktail}) {
  return (
    <CocktailCardStyles 
      img={cocktail.photo?.image.publicUrlTransformed}
      alt={cocktail.photo?.altText}
    >
      <div className="image-section">
        <div className="cocktail-image"></div>
        <div className="cocktail-rating">5.0 (496)</div>
      </div>
      <div className="data-section">
        <Link href={`cocktails/${cocktail.id}`}>{cocktail.name}</Link>
      </div>
    </CocktailCardStyles>
  )
}