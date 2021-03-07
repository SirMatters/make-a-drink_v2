import { useQuery } from "@apollo/client"
import gql from "graphql-tag";
import Cocktail from "./Cocktail";

const ALL_COCKTAILS_QUERY = gql`
  query ALL_COCKTAILS_QUERY{
    allCocktails {
      id
      name
    }
  }
`

export default function Cocktails() {
  const {data, error, loading} = useQuery(ALL_COCKTAILS_QUERY);

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <p>cocktails</p>
      {data.allCocktails.map(c => <Cocktail key={c.id} cocktail={c}/>)}
    </div>
  )
}
