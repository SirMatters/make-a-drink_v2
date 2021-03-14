import EditCocktail from "../../../components/EditCocktail";

export default function editCocktail({query: {id}}) {
  return(
      <EditCocktail id={id}/>
  )
}