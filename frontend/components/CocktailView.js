import { useQuery } from "@apollo/client"
import { gql } from "graphql-tag"
import styled from "styled-components"
import Head from 'next/head'
import StarRating from "./StarRating"

const CocktailViewStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .cocktail-section {
    width: 100%;
    max-width: 100%;
    min-height: 40rem;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    grid-template-rows: 4rem 2rem auto 1fr;
    grid-template-areas:
    "img name"
    "img rating"
    "img description"
    "img steps";
    grid-column-gap: 2rem;
  }

  .cocktail-image {
    grid-area: img;
    width: 100%;
    height: 100%;

    background-image: ${(props) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .cocktail-name {
    grid-area: name;
    align-self: start;
    margin: 0;
  }

  .cocktail-rating {
    grid-area: rating;
  }

  .cocktail-description {
    margin-top: 1rem;
    grid-area: description;
  }

  .cocktail-steps {
    margin-top: 1rem;
    grid-area: steps;

    ol {
      margin: 0;
      padding-top: 0;
      padding-left: 1.6rem;
    }
  }
`

export const SINGLE_COCKTAIL_QUERY = gql`
  query SINGLE_COCKTAIL_QUERY($id: ID!) {
    Cocktail(where: {id: $id}) {
      name
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

export default function CocktailView({ id }) {
  const { data, error, loading } = useQuery(SINGLE_COCKTAIL_QUERY, {variables: { id }});
  if (loading) return <p>Loadgng</p>
  if (error) return <p>Error</p>
  const { Cocktail } = data;
  return (
    <CocktailViewStyles img={Cocktail.photo?.image.publicUrlTransformed}>
      <Head>
        <titile>M-A-D | {Cocktail.name}</titile>
      </Head>
      <section className="cocktail-section">
        <div className="cocktail-image"></div>
        <h1 className="cocktail-name">{Cocktail.name}</h1>
        {/* TODO: provide rating info */}
        <div className="cocktail-rating"><StarRating/></div>
        <div className="cocktail-description">
          {Cocktail.description}
        </div>
        <div className="cocktail-steps">
          <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ol>
        </div>
      </section>
      <section className="comments-section">
        <h1>Comments</h1>
        {/* 
          TODO: add commenting
        */}
      </section>
    </CocktailViewStyles>
  )
}