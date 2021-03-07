import { useQuery } from "@apollo/client"
import gql from "graphql-tag";
import CocktailCard from "./CocktailCard";
import styled from 'styled-components'

const ALL_COCKTAILS_QUERY = gql`
  query ALL_COCKTAILS_QUERY {
    allCocktails {
      id
      name
      description
      author {
        id
        name
      }
      ingredients {
        id
        name
      }
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }

`
const AllCocktailsStyles = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default function Cocktails() {
  const {data, error, loading} = useQuery(ALL_COCKTAILS_QUERY);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>
  return (
    <AllCocktailsStyles>
      <div className="card-container">
        {data.allCocktails.map(c => <CocktailCard key={c.id} cocktail={c}/>)}
      </div>
    </AllCocktailsStyles>
  )
}
